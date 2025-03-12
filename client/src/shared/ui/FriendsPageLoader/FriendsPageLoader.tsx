import { Paper, Skeleton, Stack } from '@mui/material'

export function FriendsPageLoader() {
    const renderSkeletons = () => {
        const skeletons = []
        const skeletonsCount = 10
        for (let i = 0; i < skeletonsCount; i++) {
            skeletons.push(
                <Paper
                    sx={{
                        padding: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    elevation={1}
                >
                    <Stack alignItems={'flex-start'} spacing={2}>
                        <Skeleton variant="circular" width={160} height={160} />
                        <Stack direction={'row'} spacing={1}>
                            <Skeleton variant="text" width={100} height={30} />
                            <Skeleton variant="text" width={100} height={30} />
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={200} height={20} />
                        <Skeleton variant="text" width={200} height={20} />
                        <Skeleton variant="text" width={200} height={20} />
                        <Skeleton variant="text" width={200} height={20} />
                        <Skeleton variant="text" width={200} height={20} />
                        <Stack spacing={2}>
                            <Skeleton variant="rounded" width={200} height={40} />
                            <Skeleton variant="rounded" width={200} height={40} />
                        </Stack>
                    </Stack>
                </Paper>
            )
        }
        return skeletons
    }

    return (
        <Stack spacing={2} sx={{ maxWidth: '892px', width: '100%' }}>
            {renderSkeletons()}
        </Stack>
    )
}
