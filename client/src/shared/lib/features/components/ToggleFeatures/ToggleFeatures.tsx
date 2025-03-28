import { FeatureFlags } from '@/shared/types/featureFlags'
import { ReactElement } from 'react'

import { getFeatureFlag } from '../../lib/setGetFeatures'

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}

export const ToggleFeatures = ({ feature, on, off }: ToggleFeaturesProps) => {
    if (getFeatureFlag(feature)) {
        return on
    }

    return off
}
