'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [202],
    {
        4872: (s, e, r) => {
            r.r(e), r.d(e, { default: () => R })
            var n = r(5893),
                t = r(8240),
                i = r(4155),
                c = r(9053),
                x = r(9984),
                a = r(3002),
                l = r(1209),
                u = r(3743),
                o = r(966),
                f = r(7842),
                d = r(775),
                j = r(8826),
                p = r(4607),
                h = r(684),
                v = r(3388),
                b = r(4102),
                g = r(9708),
                m = r(4184),
                k = r.n(m),
                w = r(7294)
            const R = function (s) {
                var e = s.className,
                    r = (0, u.T)(),
                    m = (0, o.C)(c.is).userId,
                    R = (0, o.C)(x.GN),
                    C = (0, d.X)(),
                    E = (0, w.useRef)()
                return (
                    (0, f.M)({
                        triggerRef: E,
                        wrapperRef: null,
                        callback: function () {
                            R && r((0, a.b)({ author: m }))
                        },
                    }),
                    (0, w.useEffect)(
                        function () {
                            m && r((0, a.b)({ author: m }))
                        },
                        [m]
                    ),
                    (0, n.jsx)(l.z, {
                        feature: 'isAppRedesigned',
                        on: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.h, {}),
                                (0, n.jsxs)(b.Z, {
                                    sx: { display: 'flex', pb: { xs: '56px', sm: '56px' } },
                                    children: [
                                        (0, n.jsx)(v.K, {}),
                                        (0, n.jsxs)(g.Z, {
                                            spacing: 2,
                                            width: '100%',
                                            sx: {
                                                maxWidth: { xl: '892px', lg: '892px', md: '892px' },
                                            },
                                            children: [
                                                (0, n.jsx)(c.mt, {}),
                                                (0, n.jsx)(t._, {}),
                                                (0, n.jsx)(x.iz, {}),
                                                (0, n.jsx)(i.E, {}),
                                                (0, n.jsx)('div', { ref: E }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(h.$, {}),
                            ],
                        }),
                        off: (0, n.jsxs)('div', {
                            'data-testid': 'profile',
                            children: [
                                (0, n.jsx)(p.h, {}),
                                (0, n.jsxs)(j.Z, {
                                    className: C ? 'odxoOm1C' : '',
                                    children: [
                                        (0, n.jsx)(v.K, {}),
                                        (0, n.jsxs)('section', {
                                            className: k()('dk2HsB3r', {}, [e]),
                                            children: [
                                                (0, n.jsx)(c.mt, {}),
                                                (0, n.jsx)(t._, {}),
                                                (0, n.jsx)(x.iz, {}),
                                                (0, n.jsx)(i.E, {}),
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
