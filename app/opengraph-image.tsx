import { ImageResponse } from 'next/og';
import { SITE } from '../lib/site';

export const runtime = 'edge';
export const alt =`${SITE.name} - Senior Frontend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 28, color: '#22d3ee', marginBottom: 24 }}>Portfolio</div>
        <div style={{ fontSize: 84, fontWeight: 700 }}>{SITE.name}</div>
        <div style={{ fontSize: 44, color: '#22d3ee', marginTop: 16 }}>Senior Frontend Engineer</div>
        <div style={{ fontSize: 32, color: '#d1d5db', marginTop: 32 }}>
          React · Next.js · TypeScript · Redux Toolkit · TanStack Query
        </div>
      </div>
    ),
    size,
  );
}
