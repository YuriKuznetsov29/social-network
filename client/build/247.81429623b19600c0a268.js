'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [247],
    {
        1347: (e, s, r) => {
            r.r(s), r.d(s, { default: () => w })
            var n = r(5893),
                t = r(8985),
                i = r(7520),
                a = r(9053),
                c = r(1209),
                f = r(3743),
                l = r(966),
                d = r(7842),
                x = r(775),
                u = r(8826),
                o = r(4607),
                p = r(684),
                j = r(3388),
                h = r(4102),
                g = r(3906),
                v = r(7294)
            const w = function (e) {
                e.className
                var s = (0, x.X)(),
                    r = (0, f.T)(),
                    w = (0, l.C)(a.is),
                    b = (0, l.C)(t.EL),
                    k = (0, v.useRef)()
                return (
                    (0, d.M)({
                        triggerRef: k,
                        wrapperRef: null,
                        callback: function () {
                            b && w.friends && r((0, i.a)({ friendList: w.friends }))
                        },
                    }),
                    (0, v.useEffect)(
                        function () {
                            w.friends && r((0, i.a)({ friendList: w.friends }))
                        },
                        [w.friends]
                    ),
                    (0, n.jsx)(c.z, {
                        feature: 'isAppRedesigned',
                        on: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(o.h, {}),
                                (0, n.jsxs)(h.Z, {
                                    'data-testid': 'news-page',
                                    sx: { display: 'flex', pb: { xs: '72px', sm: '72px' } },
                                    children: [
                                        (0, n.jsx)(j.K, {}),
                                        (0, n.jsxs)(g.Z, {
                                            width: '100%',
                                            sx: {
                                                maxWidth: { xl: '892px', lg: '892px', md: '892px' },
                                            },
                                            children: [
                                                (0, n.jsx)(t.Sq, {}),
                                                (0, n.jsx)('div', { ref: k }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(p.$, { activeBtn: 1 }),
                            ],
                        }),
                        off: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(o.h, {}),
                                (0, n.jsxs)(u.Z, {
                                    className: s ? 'npByqif7' : '',
                                    children: [
                                        (0, n.jsx)(j.K, {}),
                                        (0, n.jsxs)('section', {
                                            'data-testid': 'news-page',
                                            className: 'ulWQT0AD',
                                            children: [
                                                (0, n.jsx)(t.Sq, {}),
                                                (0, n.jsx)('div', { ref: k }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                )
            }
        },
        7842: (e, s, r) => {
            r.d(s, { M: () => t })
            var n = r(7294)
            function t(e) {
                var s = e.callback,
                    r = e.triggerRef,
                    t = e.wrapperRef
                ;(0, n.useEffect)(
                    function () {
                        var e = null
                        if (s) {
                            var n = { root: t ? t.current : null, rootMargin: '10px', threshold: 1 }
                            ;(e = new IntersectionObserver(function (e) {
                                e[0].isIntersecting && s()
                            }, n)),
                                e.observe(r.current)
                        }
                        return function () {
                            e && r.current && e.unobserve(r.current)
                        }
                    },
                    [r, t, s]
                )
            }
        },
    },
])
