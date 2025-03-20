'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [202],
    {
        4872: (s, e, r) => {
            r.r(e), r.d(e, { default: () => R })
            var n = r(5893),
                t = r(4184),
                i = r.n(t),
                c = r(4607),
                x = r(8826),
                a = r(3388),
                l = r(3743),
                u = r(9984),
                o = r(7294),
                f = r(8240),
                d = r(9053),
                j = r(966),
                p = r(775),
                h = r(4155),
                v = r(3002),
                b = r(7842)
            var g = r(1209),
                m = r(4102),
                k = r(9708),
                w = r(684)
            const R = function (s) {
                var e = s.className,
                    r = (0, l.T)(),
                    t = (0, j.C)(d.is).userId,
                    R = (0, j.C)(u.GN),
                    C = (0, p.X)(),
                    E = (0, o.useRef)()
                return (
                    (0, b.M)({
                        triggerRef: E,
                        wrapperRef: null,
                        callback: function () {
                            R && r((0, v.b)({ author: t }))
                        },
                    }),
                    (0, o.useEffect)(
                        function () {
                            t && r((0, v.b)({ author: t }))
                        },
                        [t]
                    ),
                    (0, n.jsx)(g.z, {
                        feature: 'isAppRedesigned',
                        on: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(c.h, {}),
                                (0, n.jsxs)(m.Z, {
                                    sx: { display: 'flex', pb: { xs: '56px', sm: '56px' } },
                                    children: [
                                        (0, n.jsx)(a.K, {}),
                                        (0, n.jsxs)(k.Z, {
                                            spacing: 2,
                                            width: '100%',
                                            sx: {
                                                maxWidth: { xl: '892px', lg: '892px', md: '892px' },
                                            },
                                            children: [
                                                (0, n.jsx)(d.mt, {}),
                                                (0, n.jsx)(f._, {}),
                                                (0, n.jsx)(u.iz, {}),
                                                (0, n.jsx)(h.E, {}),
                                                (0, n.jsx)('div', { ref: E }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(w.$, {}),
                            ],
                        }),
                        off: (0, n.jsxs)('div', {
                            'data-testid': 'profile',
                            children: [
                                (0, n.jsx)(c.h, {}),
                                (0, n.jsxs)(x.Z, {
                                    className: C ? 'odxoOm1C' : '',
                                    children: [
                                        (0, n.jsx)(a.K, {}),
                                        (0, n.jsxs)('section', {
                                            className: i()('dk2HsB3r', {}, [e]),
                                            children: [
                                                (0, n.jsx)(d.mt, {}),
                                                (0, n.jsx)(f._, {}),
                                                (0, n.jsx)(u.iz, {}),
                                                (0, n.jsx)(h.E, {}),
                                                (0, n.jsx)('div', { ref: E }),
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
        7842: (s, e, r) => {
            r.d(e, { M: () => t })
            var n = r(7294)
            function t(s) {
                var e = s.callback,
                    r = s.triggerRef,
                    t = s.wrapperRef
                ;(0, n.useEffect)(
                    function () {
                        var s = null
                        if (e) {
                            var n = { root: t ? t.current : null, rootMargin: '10px', threshold: 1 }
                            ;(s = new IntersectionObserver(function (s) {
                                s[0].isIntersecting && e()
                            }, n)),
                                s.observe(r.current)
                        }
                        return function () {
                            s && r.current && s.unobserve(r.current)
                        }
                    },
                    [r, t, e]
                )
            }
        },
    },
])
