'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [247],
    {
        1347: (e, s, r) => {
            r.r(s), r.d(s, { default: () => b })
            var n = r(5893),
                i = r(4607),
                t = r(8826),
                c = r(3388),
                f = r(8985)
            var a = r(775),
                l = r(3743),
                x = r(966),
                u = r(9053),
                d = r(7520),
                o = r(7294),
                p = r(7842),
                j = r(1209),
                h = r(4102),
                v = r(3906),
                g = r(684)
            const b = function (e) {
                e.className
                var s = (0, a.X)(),
                    r = (0, l.T)(),
                    b = (0, x.C)(u.is),
                    k = (0, x.C)(f.EL),
                    m = (0, o.useRef)()
                return (
                    (0, p.M)({
                        triggerRef: m,
                        wrapperRef: null,
                        callback: function () {
                            k && b.friends && r((0, d.a)({ friendList: b.friends }))
                        },
                    }),
                    (0, o.useEffect)(
                        function () {
                            b.friends && r((0, d.a)({ friendList: b.friends }))
                        },
                        [b.friends]
                    ),
                    (0, n.jsx)(j.z, {
                        feature: 'isAppRedesigned',
                        on: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(i.h, {}),
                                (0, n.jsxs)(h.Z, {
                                    sx: { display: 'flex', pb: { xs: '72px', sm: '72px' } },
                                    children: [
                                        (0, n.jsx)(c.K, {}),
                                        (0, n.jsxs)(v.Z, {
                                            width: '100%',
                                            sx: {
                                                maxWidth: { xl: '892px', lg: '892px', md: '892px' },
                                            },
                                            children: [
                                                (0, n.jsx)(f.Sq, {}),
                                                (0, n.jsx)('div', { ref: m }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(g.$, { activeBtn: 1 }),
                            ],
                        }),
                        off: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(i.h, {}),
                                (0, n.jsxs)(t.Z, {
                                    className: s ? 'npByqif7' : '',
                                    children: [
                                        (0, n.jsx)(c.K, {}),
                                        (0, n.jsxs)('section', {
                                            className: 'ulWQT0AD',
                                            children: [
                                                (0, n.jsx)(f.Sq, {}),
                                                (0, n.jsx)('div', { ref: m }),
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
            r.d(s, { M: () => i })
            var n = r(7294)
            function i(e) {
                var s = e.callback,
                    r = e.triggerRef,
                    i = e.wrapperRef
                ;(0, n.useEffect)(
                    function () {
                        var e = null
                        if (s) {
                            var n = { root: i ? i.current : null, rootMargin: '10px', threshold: 1 }
                            ;(e = new IntersectionObserver(function (e) {
                                e[0].isIntersecting && s()
                            }, n)),
                                e.observe(r.current)
                        }
                        return function () {
                            e && r.current && e.unobserve(r.current)
                        }
                    },
                    [r, i, s]
                )
            }
        },
    },
])
