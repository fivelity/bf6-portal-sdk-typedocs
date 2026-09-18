// Barrel entry point for TypeDoc documentation generation.
// This file re-exports the local SDK helpers and the bf6-portal-utils
// npm package modules so TypeDoc can generate a single unified API reference.

// Local SDK helpers (sdk/index.ts)
export * from './index.js';

// bf6-portal-utils modules
export * as Benchmarker from 'bf6-portal-utils/benchmarker/index.ts';
export * as CallbackHandler from 'bf6-portal-utils/callback-handler/index.ts';
export * as Clocks from 'bf6-portal-utils/clocks/index.ts';
export * as Events from 'bf6-portal-utils/events/index.ts';
export { Logging } from 'bf6-portal-utils/logging/index.ts';
export * as MapDetector from 'bf6-portal-utils/map-detector/index.ts';
export * as ModExtensions from 'bf6-portal-utils/mod-extensions/index.ts';
export * as Timers from 'bf6-portal-utils/timers/index.ts';
export * as Vectors from 'bf6-portal-utils/vectors/index.ts';
export * as UI from 'bf6-portal-utils/ui/index.ts';
export * as SolidUI from 'bf6-portal-utils/solid-ui/index.ts';
export * as Sounds from 'bf6-portal-utils/sounds/index.ts';
export * as Raycast from 'bf6-portal-utils/raycast/index.ts';
export * as MultiClickDetector from 'bf6-portal-utils/multi-click-detector/index.ts';
export * as PortalGadget from 'bf6-portal-utils/portal-gadget/index.ts';
export * as PerformanceStats from 'bf6-portal-utils/performance-stats/index.ts';
export * as PlayerUndeployFixer from 'bf6-portal-utils/player-undeploy-fixer/index.ts';
export * as FFADropIns from 'bf6-portal-utils/ffa-drop-ins/index.ts';
export * as FFASpawnPoints from 'bf6-portal-utils/ffa-spawn-points/index.ts';
export * as ScavengerDrop from 'bf6-portal-utils/scavenger-drop/index.ts';
export * as Logger from 'bf6-portal-utils/logger/index.ts';
