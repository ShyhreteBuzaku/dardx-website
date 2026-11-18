# DARDX Systems website

Simple company site for DARDX Systems (UAVs, radars, sensing), inspired by the structure and visual language of [Brave1](https://brave1.gov.ua/en).

## Stack

- React + TypeScript
- Vite
- Fonts: [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch) (display) and [Sora](https://fonts.google.com/specimen/Sora) (body)

## Run locally

```bash
# Node 20 recommended
nvm use 20
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Notes

- Logo is at `public/logo.png`.
- Product imagery currently uses Unsplash placeholders — swap for your own assets when ready.
- Contact email: `bberisha@dardx.ai`.

## Hero video

The hero plays `public/videos/background_loop.mp4`, generated from `background_video.mp4`:
1280px, 30fps, no audio, with the last 1.5s crossfaded into the first 1.5s so the loop has no visible cut.
The page also plays it at 0.8× speed. After replacing the source, regenerate it from `public/videos`:

```bash
ffmpeg -y -i background_video.mp4 -filter_complex \
 "[0:v]fps=30,scale=1280:-2:flags=lanczos,format=yuv420p,split[a][b];[a]trim=1.5,setpts=PTS-STARTPTS[main];[b]trim=0:1.5,setpts=PTS-STARTPTS[head];[main][head]xfade=transition=fade:duration=1.5:offset=OFFSET[v]" \
 -map "[v]" -an -c:v libx264 -crf 26 -preset slow -movflags +faststart background_loop.mp4
```

`OFFSET` = source length − 3 (9 for the current 12s clip).
