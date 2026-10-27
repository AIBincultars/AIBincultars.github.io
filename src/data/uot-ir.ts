import listeningManifest from '../../public/projects/uot-ir/assets/listening_manifest.json';

export const metricColumns = [
  'Note_F1',
  'FTED',
  'Avg_StructCost',
  'BadConf_Rate',
  'PC_JSD',
  'Dur_JSD',
  'IOI_JSD',
  'Fam_Acc',
] as const;

type MetricColumn = (typeof metricColumns)[number];

interface MetricFile {
  method_name: string;
  task_type: string;
  sample_id: string;
  metrics: Partial<Record<MetricColumn, number | null>>;
}

export interface DemoTrack {
  method: string;
  label: string;
  imageUrl: string;
  midiUrl: string;
  audioUrl?: string;
  isExcerpt?: boolean;
  metricsUrl?: string;
  metrics?: MetricFile;
}

const methods = [
  { id: 'Input', label: 'Input' },
  { id: 'UOTIR', label: 'UOT-IR' },
  { id: 'UOTIR-Core', label: 'UOT-IR-Core' },
  { id: 'Vanilla-UOT', label: 'Vanilla-UOT' },
  { id: 'Direct', label: 'Direct' },
  { id: 'Random', label: 'Random' },
  { id: 'Greedy', label: 'Greedy' },
  { id: 'Skyline', label: 'Skyline' },
  { id: 'PCA', label: 'PCA' },
  { id: 'KMeans', label: 'KMeans' },
  { id: 'BMF', label: 'BMF-PC' },
  { id: 'NMF', label: 'NMF' },
];

// Astro reads these local files at build time; the page needs no data API.
const metricFiles = import.meta.glob<MetricFile>(
  '../../public/projects/uot-ir/assets/metric_file_*.json',
  { eager: true, import: 'default' },
);

const assetRoot = '/projects/uot-ir/assets/';
const pad = (value: number, width = 4) => String(value).padStart(width, '0');

export const demoCases = Array.from({ length: 6 }, (_, caseIndex) => {
  const id = `case_${pad(caseIndex + 1, 3)}`;
  const tracks: DemoTrack[] = methods.map((method, methodIndex) => {
    const assetIndex = pad(caseIndex * methods.length + methodIndex + 1);
    const track: DemoTrack = {
      method: method.id,
      label: method.label,
      imageUrl: `${assetRoot}image_${assetIndex}.png`,
      midiUrl: `${assetRoot}midi_${assetIndex}.mid`,
    };

    if (methodIndex > 0) {
      const filename = `metric_file_${pad(caseIndex * (methods.length - 1) + methodIndex)}.json`;
      const metrics = metricFiles[`../../public/projects/uot-ir/assets/${filename}`];
      if (!metrics || metrics.method_name !== method.id) {
        throw new Error(`Missing or mismatched UOT-IR demo metrics: ${id} / ${method.id}`);
      }
      track.metricsUrl = assetRoot + filename;
      track.metrics = metrics;
    }

    return track;
  });

  return { id, tracks, input: tracks[0]!, outputs: tracks.slice(1) };
});

export const listeningCases = listeningManifest.cases.map((entry) => ({
  ...entry,
  input: entry.tracks[0]!,
  output: entry.tracks[1]!,
}));

export const listeningManifestUrl = `${assetRoot}listening_manifest.json`;

export const demoAssets = [...listeningCases, ...demoCases].flatMap(({ id, tracks }) =>
  tracks.flatMap((track) => {
    const isInput = track.method === 'Input';
    const assets = [
      { url: track.midiUrl, type: 'midi', description: `${id} ${isInput ? 'input' : `${track.label} output`}` },
      { url: track.imageUrl, type: 'image', description: `${id} ${isInput ? 'input roll' : `${track.label} roll`}` },
    ];
    if (track.metricsUrl) {
      assets.push({ url: track.metricsUrl, type: 'metric', description: `${id} ${track.label} metrics file` });
    }
    if (track.audioUrl) {
      assets.push({ url: track.audioUrl, type: 'audio', description: `${id} ${track.label} audio preview` });
    }
    return assets.map((asset) => ({ ...asset, filename: asset.url.split('/').pop()! }));
  }),
);

export function formatMetric(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return '—';
  return value.toFixed(Math.abs(value) >= 1 ? 4 : 6);
}
