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
                        justifyContent: { xs: 'center', sm: 'space-between' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                    elevation={1}
                >
                    <Stack
                        alignItems={'flex-start'}
                        spacing={2}
                        sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}
                    >
                        <Skeleton variant="circular" width={160} height={160} />
                        <Stack direction={'row'} spacing={1}>
                            <Skeleton variant="text" width={100} height={30} />
                            <Skeleton variant="text" width={100} height={30} />
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={200} height={30} />
                        <Skeleton variant="text" width={200} height={30} />
                        <Skeleton variant="text" width={200} height={30} />
                        <Skeleton variant="text" width={200} height={30} />
                        <Skeleton variant="text" width={200} height={30} />
                        <Stack spacing={2}>
                            <Skeleton variant="rounded" width={200} height={35} />
                            <Skeleton variant="rounded" width={200} height={35} />
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
