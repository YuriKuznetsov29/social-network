import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/consts/localStorage'
import { FeatureFlags } from '@/shared/types/featureFlags'

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) !== null
            ? localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
            : true,
}
let featureFlags: FeatureFlags = {
    ...defaultFeatures,
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag]
}
