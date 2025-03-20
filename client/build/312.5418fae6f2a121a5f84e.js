'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [312],
    {
        1023: (e, s, n) => {
            var r = n(4836)
            s.Z = void 0
            var t = r(n(4938)),
                a = n(5893)
            s.Z = (0, t.default)(
                (0, a.jsx)('path', {
                    d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',
                }),
                'ArrowBack'
            )
        },
        1215: (e, s, n) => {
            n.r(s), n.d(s, { ConversationPage: () => me, default: () => xe })
            var r = n(5893),
                t = n(4607),
                a = n(8826),
                o = n(9250),
                i = n(7294),
                l = n(1110),
                c = n(966),
                u = n(9053),
                d = n(1072),
                f = n(4184),
                m = n.n(f),
                x = n(7484),
                h = n.n(x),
                v = n(4524),
                g = n(5914),
                j = n(1209),
                p = n(6649)
            var Z = function (e) {
                    var s = e.className,
                        n = e.message,
                        t = e.removeMessage,
                        a = e.scrollRef,
                        o = (0, i.useState)(null),
                        l = o[0],
                        f = o[1],
                        x = (0, d.$G)('pages'),
                        j = x.t,
                        Z = x.i18n,
                        I = (0, c.C)(u.is)
                    return (
                        (0, i.useEffect)(function () {
                            ;(0, g.E)(n.author)
                                .then(function (e) {
                                    e && f(e)
                                })
                                .catch(console.log)
                        }, []),
                        (0, r.jsxs)('div', {
                            className: m()('nnreC0Ce', {}, [s]),
                            ref: a,
                            children: [
                                (0, r.jsx)(v.q, {
                                    avatarPath: null == l ? void 0 : l.avatarPath,
                                    size: 'MS',
                                    className: 'ZLfsPD0W',
                                }),
                                (0, r.jsxs)('span', {
                                    className: 'a51i72xo',
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: 'K80eAdox',
                                            children: [
                                                (0, r.jsx)('div', {
                                                    children: (0, r.jsx)('div', {
                                                        className: 'pB5VK8Cw',
                                                        children:
                                                            h()(n.createdAt)
                                                                .locale(Z.language)
                                                                .toNow(!0) + j(' назад'),
                                                    }),
                                                }),
                                                (0, r.jsx)('div', {
                                                    children:
                                                        (null == I ? void 0 : I.userId) ===
                                                            n.author &&
                                                        (0, r.jsx)(p.Z, {
                                                            className: 'zZJuNYts',
                                                            onClick: function () {
                                                                return t(n.messageId)
                                                            },
                                                        }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)('div', {
                                            className: 'R4IQok_6',
                                            children: n.textOrPathToFile,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    )
                },
                I = n(9708),
                w = n(2658),
                N = n(8148),
                M = n(6867),
                b = n(2206),
                y = n(2440),
                C = n(576),
                k = n(8619),
                E = n(9334),
                O = n(7976),
                R = function (e) {
                    e.className
                    var s = e.messageId,
                        n = e.removeMessage,
                        t = (0, i.useState)(null),
                        a = t[0],
                        o = t[1],
                        l = (0, d.$G)('pages').t,
                        c = Boolean(a)
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.Z, {
                                'aria-label': 'settings',
                                onClick: function (e) {
                                    o(e.currentTarget)
                                },
                                children: (0, r.jsx)(O.Z, {}),
                            }),
                            (0, r.jsx)(b.ZP, {
                                open: c,
                                anchorEl: a,
                                onClose: function () {
                                    o(null)
                                },
                                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                                transformOrigin: { vertical: 'top', horizontal: 'right' },
                                children: (0, r.jsx)(y.Z, {
                                    children: (0, r.jsx)(C.ZP, {
                                        disablePadding: !0,
                                        onClick: function () {
                                            return n(s)
                                        },
                                        children: (0, r.jsx)(k.Z, {
                                            children: (0, r.jsx)(E.Z, {
                                                primary: l('Удалить сообщение'),
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    })
                },
                P = function (e) {
                    e.className
                    var s = e.message,
                        n = e.removeMessage,
                        t = e.scrollRef,
                        a = (0, i.useState)(null),
                        o = a[0],
                        l = a[1],
                        f = (0, d.$G)('pages'),
                        m = f.t,
                        x = f.i18n,
                        p = (0, c.C)(u.is)
                    return (
                        (0, i.useEffect)(function () {
                            ;(0, g.E)(s.author)
                                .then(function (e) {
                                    e && l(e)
                                })
                                .catch(console.log)
                        }, []),
                        (0, r.jsx)(j.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsxs)(I.Z, {
                                direction: 'row',
                                spacing: 2,
                                sx: { width: '100%', p: '8px 0' },
                                children: [
                                    (0, r.jsx)(v.q, {
                                        avatarPath: null == o ? void 0 : o.avatarPath,
                                        size: '40px',
                                        firstName: null == o ? void 0 : o.firstName,
                                    }),
                                    (0, r.jsxs)(I.Z, {
                                        spacing: 1,
                                        width: '100%',
                                        children: [
                                            (0, r.jsxs)(I.Z, {
                                                direction: 'row',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                children: [
                                                    (0, r.jsxs)(I.Z, {
                                                        direction: 'row',
                                                        spacing: 1,
                                                        children: [
                                                            (0, r.jsx)(w.Z, {
                                                                color: 'text.primary',
                                                                children:
                                                                    null == o
                                                                        ? void 0
                                                                        : o.firstName,
                                                            }),
                                                            (0, r.jsx)(w.Z, {
                                                                color: 'text.secondary',
                                                                children:
                                                                    h()(s.createdAt)
                                                                        .locale(x.language)
                                                                        .toNow(!0) + m(' назад'),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == p ? void 0 : p.userId) === s.author &&
                                                        (0, r.jsx)(R, {
                                                            removeMessage: n,
                                                            messageId: s.messageId,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(w.Z, {
                                                dangerouslySetInnerHTML: (0, N.p)(
                                                    s.textOrPathToFile || ''
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            off: (0, r.jsx)(Z, { message: s, removeMessage: n, scrollRef: t }),
                        })
                    )
                },
                z = n(7842)
            var S = n(2643),
                T = n(3906),
                G = function (e) {
                    var s = e.className,
                        n = e.messages,
                        t = e.removeMessage,
                        a = e.loadMore,
                        o = e.hasMore,
                        l = n[n.length - 1],
                        c = (0, i.useRef)(),
                        u = (0, i.useRef)(),
                        d = (0, i.useRef)()
                    return (
                        (0, z.M)({
                            triggerRef: u,
                            wrapperRef: d,
                            callback: function () {
                                if (o) {
                                    var e = d.current.scrollHeight
                                    a(), (d.current.scrollTop = d.current.scrollHeight - e)
                                }
                            },
                        }),
                        (0, i.useEffect)(
                            function () {
                                d.current && (d.current.scrollTop = d.current.scrollHeight)
                            },
                            [null == l ? void 0 : l.messageId]
                        ),
                        (0, i.useLayoutEffect)(
                            function () {
                                var e
                                null === (e = c.current) || void 0 === e || e.scrollIntoView()
                            },
                            [n]
                        ),
                        (0, r.jsx)(j.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsx)(S.Z, {
                                sx: { height: '100%', overflowY: 'auto' },
                                ref: d,
                                children: (0, r.jsxs)(T.Z, {
                                    children: [
                                        (0, r.jsx)('div', { ref: u }),
                                        n.length > 0 &&
                                            n.map(function (e, s) {
                                                return s === n.length - (n.length - 20)
                                                    ? (0, r.jsx)(
                                                          P,
                                                          {
                                                              scrollRef: c,
                                                              message: e,
                                                              removeMessage: t,
                                                          },
                                                          e.messageId
                                                      )
                                                    : (0, r.jsx)(
                                                          P,
                                                          { message: e, removeMessage: t },
                                                          e.messageId
                                                      )
                                            }),
                                    ],
                                }),
                            }),
                            off: (0, r.jsxs)('div', {
                                className: m()('OQwk6ecB', {}, [s]),
                                ref: d,
                                children: [
                                    (0, r.jsx)('div', { ref: u }),
                                    n.length > 0 &&
                                        n.map(function (e, s) {
                                            return s === n.length - (n.length - 20)
                                                ? (0, r.jsx)(
                                                      P,
                                                      {
                                                          scrollRef: c,
                                                          message: e,
                                                          removeMessage: t,
                                                      },
                                                      e.messageId
                                                  )
                                                : (0, r.jsx)(
                                                      P,
                                                      { message: e, removeMessage: t },
                                                      e.messageId
                                                  )
                                        }),
                                ],
                            }),
                        })
                    )
                },
                A = n(3416),
                $ = n(775),
                F = n(6925),
                L = n(9033)
            var B,
                K = (0, i.memo)(function (e) {
                    var s = e.className,
                        n = e.sendMessage,
                        t = e.roomId,
                        a = (0, d.$G)('pages').t,
                        o = (0, i.useState)(''),
                        l = o[0],
                        f = o[1],
                        x = (0, $.X)(),
                        h = (0, c.C)(u.is),
                        v = function () {
                            if (l) {
                                var e = {
                                    messageId: (0, A.x0)(),
                                    messageType: 'text',
                                    textOrPathToFile: l,
                                    roomId: t,
                                    author: h.userId,
                                }
                                n(e), f('')
                            }
                        },
                        g = (0, i.useCallback)(
                            function (e) {
                                'Enter' === e.key && v()
                            },
                            [l]
                        )
                    return (
                        (0, i.useEffect)(
                            function () {
                                return (
                                    document.body.addEventListener('keydown', g),
                                    function () {
                                        document.body.removeEventListener('keydown', g)
                                    }
                                )
                            },
                            [g]
                        ),
                        (0, r.jsxs)('div', {
                            className: m()('P5qloDWp', {}, [s]),
                            children: [
                                (0, r.jsx)(F.I, {
                                    placeholder: a('Напишите сообщение...'),
                                    className: 's7O8GuKu',
                                    value: l,
                                    onChange: f,
                                    onBlur: function () {
                                        x && (document.documentElement.scrollTop = 0)
                                    },
                                }),
                                (0, r.jsx)(L.Z, { className: 'F8xd7aod', onClick: v }),
                            ],
                        })
                    )
                }),
                U = n(4659),
                q = n(6307),
                H = (0, i.memo)(function (e) {
                    e.className
                    var s = e.sendMessage,
                        n = e.roomId,
                        t = (0, d.$G)('pages').t,
                        a = (0, i.useState)(''),
                        o = a[0],
                        l = a[1],
                        f = (0, $.X)(),
                        m = (0, c.C)(u.is),
                        x = function () {
                            if (o.trim()) {
                                var e = {
                                    messageId: (0, A.x0)(),
                                    messageType: 'text',
                                    textOrPathToFile: o,
                                    roomId: n,
                                    author: m.userId,
                                }
                                s(e), l('')
                            }
                        },
                        h = (0, i.useCallback)(
                            function (e) {
                                'Enter' !== e.key || e.shiftKey || x()
                            },
                            [o]
                        )
                    return (
                        (0, i.useEffect)(
                            function () {
                                return (
                                    document.body.addEventListener('keydown', h),
                                    function () {
                                        document.body.removeEventListener('keydown', h)
                                    }
                                )
                            },
                            [h]
                        ),
                        (0, r.jsx)(j.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsx)(S.Z, {
                                children: (0, r.jsxs)(I.Z, {
                                    direction: 'row',
                                    alignItems: 'center',
                                    spacing: 2,
                                    children: [
                                        (0, r.jsx)(U.Z, {
                                            fullWidth: !0,
                                            placeholder: t('Напишите сообщение...'),
                                            variant: 'outlined',
                                            multiline: !0,
                                            maxRows: 4,
                                            value: o,
                                            onChange: function (e) {
                                                return l(e.target.value)
                                            },
                                            onBlur: function () {
                                                f && (document.documentElement.scrollTop = 0)
                                            },
                                        }),
                                        (0, r.jsx)(M.Z, {
                                            onClick: x,
                                            children: (0, r.jsx)(q.Z, {}),
                                        }),
                                    ],
                                }),
                            }),
                            off: (0, r.jsx)(K, { roomId: n, sendMessage: s }),
                        })
                    )
                }),
                D = n(9655)
            function W() {
                return (
                    (W = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var s = 1; s < arguments.length; s++) {
                                  var n = arguments[s]
                                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                              }
                              return e
                          }),
                    W.apply(null, arguments)
                )
            }
            const X = function (e) {
                return i.createElement(
                    'svg',
                    W(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: 24,
                            height: 24,
                            fill: '#fff',
                            viewBox: '0 0 256 256',
                        },
                        e
                    ),
                    B ||
                        (B = i.createElement('path', {
                            d: 'M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z',
                        }))
                )
            }
            var _ = (0, i.memo)(function (e) {
                    var s = e.className,
                        n = e.roomId,
                        t = (0, i.useState)(null),
                        a = t[0],
                        o = t[1],
                        l = (0, d.$G)('pages').t,
                        f = (0, c.C)(u.is)
                    return (
                        (0, i.useEffect)(
                            function () {
                                if (f.conversations) {
                                    var e = f.conversations.find(function (e) {
                                        return e.roomId === n
                                    })
                                    if (e) {
                                        var s = e.friendId
                                        ;(0, g.E)(s)
                                            .then(function (e) {
                                                e && o(e)
                                            })
                                            .catch(console.log)
                                    }
                                }
                            },
                            [f.conversations]
                        ),
                        (0, r.jsxs)('div', {
                            className: m()('YPfD95ta', {}, [s]),
                            children: [
                                (0, r.jsxs)(D.rU, {
                                    to: '/messenger',
                                    className: 'R_b62QSU',
                                    children: [
                                        (0, r.jsx)(X, { className: 'lqKpvScb' }),
                                        ' ',
                                        l('Назад'),
                                    ],
                                }),
                                null == a ? void 0 : a.firstName,
                                ' ',
                                null == a ? void 0 : a.lastName,
                                (0, r.jsx)(v.q, {
                                    avatarPath: null == a ? void 0 : a.avatarPath,
                                    size: 'M',
                                    isOnline: null == a ? void 0 : a.isOnline,
                                    click: !0,
                                    userId: null == a ? void 0 : a.userId,
                                }),
                            ],
                        })
                    )
                }),
                J = n(8515),
                Q = n(3743),
                V = function (e) {
                    e.className
                    var s = (0, i.useState)(null),
                        n = s[0],
                        t = s[1],
                        a = (0, d.$G)('pages').t,
                        o = ((0, Q.T)(), Boolean(n))
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.Z, {
                                'aria-label': 'settings',
                                onClick: function (e) {
                                    t(e.currentTarget)
                                },
                                children: (0, r.jsx)(O.Z, {}),
                            }),
                            (0, r.jsx)(b.ZP, {
                                open: o,
                                anchorEl: n,
                                onClose: function () {
                                    t(null)
                                },
                                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                                transformOrigin: { vertical: 'top', horizontal: 'right' },
                                children: (0, r.jsx)(y.Z, {
                                    children: (0, r.jsx)(k.Z, {
                                        children: (0, r.jsx)(E.Z, { primary: a('Удалить диалог') }),
                                    }),
                                }),
                            }),
                        ],
                    })
                },
                Y = n(1023),
                ee = n(4543),
                se = n(3486),
                ne = function () {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var s, n = 1, r = arguments.length; n < r; n++)
                                    for (var t in (s = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                                return e
                            }),
                        ne.apply(this, arguments)
                    )
                },
                re = (0, i.forwardRef)(function (e, s) {
                    return (0, r.jsx)(D.rU, ne({ ref: s }, e, { role: void 0 }))
                }),
                te = (0, i.memo)(function (e) {
                    e.className
                    var s = e.roomId,
                        n = (0, i.useState)(null),
                        t = n[0],
                        a = n[1],
                        o = (0, d.$G)('pages').t,
                        l = (0, c.C)(u.is)
                    return (
                        (0, i.useEffect)(
                            function () {
                                if (l.conversations) {
                                    var e = l.conversations.find(function (e) {
                                        return e.roomId === s
                                    })
                                    if (e) {
                                        var n = e.friendId
                                        ;(0, g.E)(n)
                                            .then(function (e) {
                                                e && a(e)
                                            })
                                            .catch(console.log)
                                    }
                                }
                            },
                            [l.conversations]
                        ),
                        (0, r.jsx)(j.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsxs)(I.Z, {
                                direction: 'row',
                                alignItems: 'center',
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        component: re,
                                        to: '/messenger',
                                        sx: { ml: '8px' },
                                        children: (0, r.jsx)(Y.Z, {}),
                                    }),
                                    (0, r.jsx)(J.Z, {
                                        sx: { width: '100%' },
                                        avatar: (0, r.jsx)(v.q, {
                                            avatarPath: null == t ? void 0 : t.avatarPath,
                                            firstName: null == t ? void 0 : t.firstName,
                                            isOnline: null == t ? void 0 : t.isOnline,
                                            size: '60px',
                                        }),
                                        action: (0, r.jsx)(V, {}),
                                        title: ''
                                            .concat(null == t ? void 0 : t.firstName, ' ')
                                            .concat(null == t ? void 0 : t.lastName),
                                        subheader: (null == t ? void 0 : t.isOnline)
                                            ? (0, r.jsx)(w.Z, {
                                                  color: se.Z[500],
                                                  children: o('В сети'),
                                              })
                                            : 'Был(а) в сети '.concat(
                                                  h()(null == t ? void 0 : t.lastSeenOnline)
                                                      .locale(ee.Z.language)
                                                      .toNow(!0) + o(' назад')
                                              ),
                                    }),
                                ],
                            }),
                            off: (0, r.jsx)(_, { roomId: s }),
                        })
                    )
                }),
                ae = n(6765)
            var oe = function (e) {
                    e.className
                    var s = (0, o.s0)(),
                        n = (0, d.$G)().t,
                        t = (0, c.C)(u.is).conversations,
                        a = (0, o.UO)().roomId
                    if (
                        ((0, i.useEffect)(
                            function () {
                                t &&
                                    (t.find(function (e) {
                                        return e.roomId === a
                                    }) ||
                                        s('*', { replace: !0 }))
                            },
                            [t]
                        ),
                        !a)
                    )
                        return (0, r.jsx)('div', { children: n('Такого диалога не существует') })
                    var f = (0, l.Z)(a),
                        m = f.messages,
                        x = f.sendMessage,
                        h = f.removeMessage,
                        v = f.loadMore,
                        g = f.hasMore
                    return (0, r.jsx)('div', {
                        className: 'ru5J1mGF',
                        children: (0, r.jsxs)(ae.O, {
                            className: 'ukbtCJ9i',
                            children: [
                                (0, r.jsx)(te, { roomId: a }),
                                (0, r.jsx)(G, {
                                    messages: m,
                                    hasMore: g,
                                    removeMessage: h,
                                    loadMore: v,
                                }),
                                (0, r.jsx)(H, { roomId: a, sendMessage: x }),
                            ],
                        }),
                    })
                },
                ie = n(5295),
                le = n(7720),
                ce = function (e) {
                    e.className
                    var s = (0, o.s0)(),
                        n = (0, d.$G)().t,
                        t = (0, c.C)(u.is).conversations,
                        a = (0, o.UO)().roomId
                    if (
                        ((0, i.useEffect)(
                            function () {
                                t &&
                                    (t.find(function (e) {
                                        return e.roomId === a
                                    }) ||
                                        s('*', { replace: !0 }))
                            },
                            [t]
                        ),
                        !a)
                    )
                        return (0, r.jsx)('div', { children: n('Такого диалога не существует') })
                    var f = (0, l.Z)(a),
                        m = f.messages,
                        x = f.sendMessage,
                        h = f.removeMessage,
                        v = f.loadMore,
                        g = f.hasMore
                    return (0, r.jsx)(j.z, {
                        feature: 'isAppRedesigned',
                        on: (0, r.jsxs)(ie.Z, {
                            sx: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            },
                            children: [
                                (0, r.jsx)(te, { roomId: a }),
                                (0, r.jsx)(le.Z, {}),
                                (0, r.jsx)(G, {
                                    messages: m,
                                    hasMore: g,
                                    removeMessage: h,
                                    loadMore: v,
                                }),
                                (0, r.jsx)(le.Z, {}),
                                (0, r.jsx)(H, { roomId: a, sendMessage: x }),
                            ],
                        }),
                        off: (0, r.jsx)(oe, {}),
                    })
                }
            var ue = n(3388),
                de = n(4102),
                fe = n(684),
                me = function (e) {
                    e.className
                    var s = (0, $.X)()
                    return (0, r.jsx)(j.z, {
                        feature: 'isAppRedesigned',
                        on: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(t.h, {}),
                                (0, r.jsxs)(de.Z, {
                                    sx: {
                                        display: 'flex',
                                        pb: { xs: '56px', sm: '56px', md: '0' },
                                        height: 'calc(100dvh - 88px)',
                                    },
                                    children: [
                                        (0, r.jsx)(ue.K, {}),
                                        (0, r.jsx)(T.Z, {
                                            width: '100%',
                                            sx: {
                                                maxWidth: { xl: '892px', lg: '892px', md: '892px' },
                                            },
                                            children: (0, r.jsx)(ce, {}),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(fe.$, { activeBtn: 2 }),
                            ],
                        }),
                        off: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(t.h, {}),
                                (0, r.jsxs)(a.Z, {
                                    className: s ? '_awlvnuX' : '',
                                    children: [!s && (0, r.jsx)(ue.K, {}), (0, r.jsx)(ce, {})],
                                }),
                            ],
                        }),
                    })
                }
            const xe = me
        },
        7842: (e, s, n) => {
            n.d(s, { M: () => t })
            var r = n(7294)
            function t(e) {
                var s = e.callback,
                    n = e.triggerRef,
                    t = e.wrapperRef
                ;(0, r.useEffect)(
                    function () {
                        var e = null
                        if (s) {
                            var r = { root: t ? t.current : null, rootMargin: '10px', threshold: 1 }
                            ;(e = new IntersectionObserver(function (e) {
                                e[0].isIntersecting && s()
                            }, r)),
                                e.observe(n.current)
                        }
                        return function () {
                            e && n.current && e.unobserve(n.current)
                        }
                    },
                    [n, t, s]
                )
            }
        },
        3416: (e, s, n) => {
            n.d(s, { x0: () => r })
            let r = (e = 21) =>
                crypto
                    .getRandomValues(new Uint8Array(e))
                    .reduce(
                        (e, s) =>
                            e +
                            ((s &= 63) < 36
                                ? s.toString(36)
                                : s < 62
                                ? (s - 26).toString(36).toUpperCase()
                                : s > 62
                                ? '-'
                                : '_'),
                        ''
                    )
        },
    },
])
