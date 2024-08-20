import { FeatureFlags } from '@/shared/types/featureFlags';

// фичи не меняются в ходе сессии
let featureFlags: FeatureFlags;

export function setFeatureFlag(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(featureFlag: keyof FeatureFlags) {
    return featureFlags[featureFlag];
}
