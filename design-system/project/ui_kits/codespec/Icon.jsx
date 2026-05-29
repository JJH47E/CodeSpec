// CodeSpec — Icon component. Inline duotone SVG, no network dependency.
// Production note: in the real Electron app prefer @phosphor-icons/react (duotone);
// this mirrors that look for portable previews.
const CS_ICONS = {
  "compass": { bg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/>", fg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5 11 11l-2.5 4.5L13 13z\" fill=\"currentColor\" stroke=\"none\"/>", sw: 1.7 },
  "pull-request": { bg: "<circle cx=\"6\" cy=\"6\" r=\"2.6\"/><circle cx=\"6\" cy=\"18\" r=\"2.6\"/><circle cx=\"18\" cy=\"18\" r=\"2.6\"/>", fg: "<circle cx=\"6\" cy=\"6\" r=\"2.6\"/><circle cx=\"6\" cy=\"18\" r=\"2.6\"/><circle cx=\"18\" cy=\"18\" r=\"2.6\"/><path d=\"M6 8.6v6.8\"/><path d=\"M18 15.4V11a4 4 0 0 0-4-4h-3.2\"/><path d=\"M13 4.8 10.2 7 13 9.2\"/>", sw: 1.7 },
  "check-circle": { bg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/>", fg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8.2 12.2 11 15l4.8-5.8\"/>", sw: 1.7 },
  "progress": { bg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/>", fg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 12 L12 3 A9 9 0 0 1 12 21 Z\" fill=\"currentColor\" stroke=\"none\"/>", sw: 1.7 },
  "archive": { bg: "<rect x=\"3.5\" y=\"4.5\" width=\"17\" height=\"4\" rx=\"1\"/><rect x=\"5\" y=\"8.5\" width=\"14\" height=\"11\" rx=\"1.5\"/>", fg: "<rect x=\"3.5\" y=\"4.5\" width=\"17\" height=\"4\" rx=\"1\"/><path d=\"M5 8.5h14v9.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18z\"/><path d=\"M10 12h4\"/>", sw: 1.7 },
  "cpu": { bg: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/>", fg: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><rect x=\"9.5\" y=\"9.5\" width=\"5\" height=\"5\" rx=\"1\"/><path d=\"M9 6V3.5M15 6V3.5M9 20.5V18M15 20.5V18M6 9H3.5M6 15H3.5M20.5 9H18M20.5 15H18\"/>", sw: 1.7 },
  "trash": { bg: "<path d=\"M6.5 8h11l-1 11.5a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8z\"/>", fg: "<path d=\"M4 6h16\"/><path d=\"M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6\"/><path d=\"M6.5 6 7.5 19.5A2 2 0 0 0 9.5 21.3h5A2 2 0 0 0 16.5 19.5L17.5 6\"/><path d=\"M10 10.5v6.5M14 10.5v6.5\"/>", sw: 1.7 },
  "caret-down": { bg: "", fg: "<path d=\"M6 9.5 12 15l6-5.5\"/>", sw: 1.9 },
  "check": { bg: "", fg: "<path d=\"M5 12.5 10 17.5 19 7\"/>", sw: 2.4 },
  "terminal": { bg: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/>", fg: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7.5 10 10.5 12.5 7.5 15\"/><path d=\"M12.5 15h4\"/>", sw: 1.7 },
  "pencil": { bg: "<path d=\"M5 19l1-4L16 5l3 3L9 18z\"/>", fg: "<path d=\"M14 5.5 18.5 10\"/><path d=\"M5 19l1-4L16 5a1.4 1.4 0 0 1 2 0l1 1a1.4 1.4 0 0 1 0 2L9 18z\"/>", sw: 1.7 },
  "warning": { bg: "<path d=\"M12 3.5 22 20H2z\"/>", fg: "<path d=\"M12 4 21 19.5a1 1 0 0 1-.9 1.5H3.9A1 1 0 0 1 3 19.5z\"/><path d=\"M12 9.5v4.5\"/><path d=\"M12 17h.01\"/>", sw: 1.7 },
  "x-circle": { bg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/>", fg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9 9l6 6M15 9l-6 6\"/>", sw: 1.7 },
  "git-branch": { bg: "<circle cx=\"6\" cy=\"6\" r=\"2.6\"/><circle cx=\"6\" cy=\"18\" r=\"2.6\"/><circle cx=\"18\" cy=\"7\" r=\"2.6\"/>", fg: "<circle cx=\"6\" cy=\"6\" r=\"2.6\"/><circle cx=\"6\" cy=\"18\" r=\"2.6\"/><circle cx=\"18\" cy=\"7\" r=\"2.6\"/><path d=\"M6 8.6v6.8\"/><path d=\"M18 9.6c0 4-3.6 4.4-6 5.4\"/>", sw: 1.7 },
  "chat": { bg: "<path d=\"M4 11a7.5 7.5 0 1 1 3.4 6.3L4 18.5z\"/>", fg: "<path d=\"M4 11a7.5 7.5 0 1 1 3.4 6.3L4 18.5l1.2-3.3A7.4 7.4 0 0 1 4 11z\"/><path d=\"M9 10h6M9 13h4\"/>", sw: 1.7 },
  "sliders": { bg: "<circle cx=\"14\" cy=\"8\" r=\"2.4\"/><circle cx=\"10\" cy=\"16\" r=\"2.4\"/>", fg: "<path d=\"M5 8h6.6M16.4 8H19\"/><path d=\"M5 16h2.6M12.4 16H19\"/><circle cx=\"14\" cy=\"8\" r=\"2.4\"/><circle cx=\"10\" cy=\"16\" r=\"2.4\"/>", sw: 1.7 },
  "sparkle": { bg: "<path d=\"M12 3.5l1.7 5.8L19.5 11l-5.8 1.7L12 18.5l-1.7-5.8L4.5 11l5.8-1.7z\"/>", fg: "<path d=\"M12 4l1.6 5.4L19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6z\"/>", sw: 1.7 },
  "file-text": { bg: "<path d=\"M6 3h8l5 5v13H6z\"/>", fg: "<path d=\"M6 3h7.5L19 8.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z\"/><path d=\"M13.5 3v5h5\"/><path d=\"M8.5 13.5h7M8.5 16.5h7\"/>", sw: 1.7 },
  "magnifier": { bg: "<circle cx=\"11\" cy=\"11\" r=\"6\"/>", fg: "<circle cx=\"11\" cy=\"11\" r=\"6\"/><path d=\"M15.5 15.5 20 20\"/>", sw: 1.7 },
  "plus": { bg: "", fg: "<path d=\"M12 5v14M5 12h14\"/>", sw: 2.1 }
};

function Icon({ name, size = 16, style, className }) {
  const ic = CS_ICONS[name];
  if (!ic) return null;
  const inner =
    (ic.bg ? '<g fill="currentColor" stroke="none" opacity="0.2">' + ic.bg + '</g>' : '') +
    '<g fill="none" stroke="currentColor" stroke-width="' + ic.sw +
    '" stroke-linecap="round" stroke-linejoin="round">' + ic.fg + '</g>';
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
         className={className}
         style={{ display: 'block', flex: 'none', ...style }}
         dangerouslySetInnerHTML={{ __html: inner }} />
  );
}

const ICON_NAMES = Object.keys(CS_ICONS);
Object.assign(window, { Icon, CS_ICONS, ICON_NAMES });
