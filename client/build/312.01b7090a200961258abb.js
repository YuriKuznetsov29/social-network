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
                t = n(1209),
                a = n(7842),
                o = n(2643),
                i = n(3906),
                l = n(4184),
                c = n.n(l),
                u = n(7294),
                d = n(5895),
                f = n(8148),
                m = n(9053),
                x = n(5914),
                h = n(966),
                v = n(9708),
                g = n(2658),
                j = n(7484),
                p = n.n(j),
                Z = n(1072),
                I = n(6649)
            var w = function (e) {
                    var s = e.className,
                        n = e.message,
                        t = e.removeMessage,
                        a = e.scrollRef,
                        o = (0, u.useState)(null),
                        i = o[0],
                        l = o[1],
                        f = (0, Z.$G)('pages'),
                        v = f.t,
                        g = f.i18n,
                        j = (0, h.C)(m.is)
                    return (
                        (0, u.useEffect)(function () {
                            ;(0, x.E)(n.author)
                                .then(function (e) {
                                    e && l(e)
                                })
                                .catch(console.log)
                        }, []),
                        (0, r.jsxs)('div', {
                            className: c()('nnreC0Ce', {}, [s]),
                            ref: a,
                            children: [
                                (0, r.jsx)(d.q, {
                                    avatarPath: null == i ? void 0 : i.avatarPath,
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
                                                            p()(n.createdAt)
                                                                .locale(g.language)
                                                                .toNow(!0) + v(' назад'),
                                                    }),
                                                }),
                                                (0, r.jsx)('div', {
                                                    children:
                                                        (null == j ? void 0 : j.userId) ===
                                                            n.author &&
                                                        (0, r.jsx)(I.Z, {
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
                N = n(7976),
                M = n(6867),
                b = n(2206),
                y = n(2440),
                C = n(576),
                k = n(8619),
                E = n(9334),
                O = function (e) {
                    e.className
                    var s = e.messageId,
                        n = e.removeMessage,
                        t = (0, u.useState)(null),
                        a = t[0],
                        o = t[1],
                        i = (0, Z.$G)('pages').t,
                        l = Boolean(a)
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.Z, {
                                'aria-label': 'settings',
                                onClick: function (e) {
                                    o(e.currentTarget)
                                },
                                children: (0, r.jsx)(N.Z, {}),
                            }),
                            (0, r.jsx)(b.ZP, {
                                open: l,
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
                                                primary: i('Удалить сообщение'),
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    })
                },
                R = function (e) {
                    e.className
                    var s = e.message,
                        n = e.removeMessage,
                        a = e.scrollRef,
                        o = (0, u.useState)(null),
                        i = o[0],
                        l = o[1],
                        c = (0, Z.$G)('pages'),
                        j = c.t,
                        I = c.i18n,
                        N = (0, h.C)(m.is)
                    return (
                        (0, u.useEffect)(function () {
                            ;(0, x.E)(s.author)
                                .then(function (e) {
                                    e && l(e)
                                })
                                .catch(console.log)
                        }, []),
                        (0, r.jsx)(t.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsxs)(v.Z, {
                                direction: 'row',
                                spacing: 2,
                                sx: { width: '100%', p: '8px 0' },
                                children: [
                                    (0, r.jsx)(d.q, {
                                        avatarPath: null == i ? void 0 : i.avatarPath,
                                        size: '40px',
                                        firstName: null == i ? void 0 : i.firstName,
                                    }),
                                    (0, r.jsxs)(v.Z, {
                                        spacing: 1,
                                        width: '100%',
                                        children: [
                                            (0, r.jsxs)(v.Z, {
                                                direction: 'row',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                children: [
                                                    (0, r.jsxs)(v.Z, {
                                                        direction: 'row',
                                                        spacing: 1,
                                                        children: [
                                                            (0, r.jsx)(g.Z, {
                                                                color: 'text.primary',
                                                                children:
                                                                    null == i
                                                                        ? void 0
                                                                        : i.firstName,
                                                            }),
                                                            (0, r.jsx)(g.Z, {
                                                                color: 'text.secondary',
                                                                children:
                                                                    p()(s.createdAt)
                                                                        .locale(I.language)
                                                                        .toNow(!0) + j(' назад'),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == N ? void 0 : N.userId) === s.author &&
                                                        (0, r.jsx)(O, {
                                                            removeMessage: n,
                                                            messageId: s.messageId,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(g.Z, {
                                                dangerouslySetInnerHTML: (0, f.p)(
                                                    s.textOrPathToFile || ''
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            off: (0, r.jsx)(w, { message: s, removeMessage: n, scrollRef: a }),
                        })
                    )
                }
            var P,
                z = function (e) {
                    var s = e.className,
                        n = e.messages,
                        l = e.removeMessage,
                        d = e.loadMore,
                        f = e.hasMore,
                        m = n[n.length - 1],
                        x = (0, u.useRef)(),
                        h = (0, u.useRef)(),
                        v = (0, u.useRef)()
                    return (
                        (0, a.M)({
                            triggerRef: h,
                            wrapperRef: v,
                            callback: function () {
                                if (f) {
                                    var e = v.current.scrollHeight
                                    d(), (v.current.scrollTop = v.current.scrollHeight - e)
                                }
                            },
                        }),
                        (0, u.useEffect)(
                            function () {
                                v.current && (v.current.scrollTop = v.current.scrollHeight)
                            },
                            [null == m ? void 0 : m.messageId]
                        ),
                        (0, u.useLayoutEffect)(
                            function () {
                                var e
                                null === (e = x.current) || void 0 === e || e.scrollIntoView()
                            },
                            [n]
                        ),
                        (0, r.jsx)(t.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsx)(o.Z, {
                                sx: { height: '100%', overflowY: 'auto' },
                                ref: v,
                                children: (0, r.jsxs)(i.Z, {
                                    children: [
                                        (0, r.jsx)('div', { ref: h }),
                                        n.length > 0 &&
                                            n.map(function (e, s) {
                                                return s === n.length - (n.length - 20)
                                                    ? (0, r.jsx)(
                                                          R,
                                                          {
                                                              scrollRef: x,
                                                              message: e,
                                                              removeMessage: l,
                                                          },
                                                          e.messageId
                                                      )
                                                    : (0, r.jsx)(
                                                          R,
                                                          { message: e, removeMessage: l },
                                                          e.messageId
                                                      )
                                            }),
                                    ],
                                }),
                            }),
                            off: (0, r.jsxs)('div', {
                                className: c()('OQwk6ecB', {}, [s]),
                                ref: v,
                                children: [
                                    (0, r.jsx)('div', { ref: h }),
                                    n.length > 0 &&
                                        n.map(function (e, s) {
                                            return s === n.length - (n.length - 20)
                                                ? (0, r.jsx)(
                                                      R,
                                                      {
                                                          scrollRef: x,
                                                          message: e,
                                                          removeMessage: l,
                                                      },
                                                      e.messageId
                                                  )
                                                : (0, r.jsx)(
                                                      R,
                                                      { message: e, removeMessage: l },
                                                      e.messageId
                                                  )
                                        }),
                                ],
                            }),
                        })
                    )
                },
                S = n(1110),
                T = n(5295),
                G = n(7720),
                A = n(9250),
                $ = n(6765),
                F = n(4543),
                L = n(1023),
                B = n(8515),
                K = n(3486),
                U = n(9655)
            function q() {
                return (
                    (q = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var s = 1; s < arguments.length; s++) {
                                  var n = arguments[s]
                                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                              }
                              return e
                          }),
                    q.apply(null, arguments)
                )
            }
            const H = function (e) {
                return u.createElement(
                    'svg',
                    q(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: 24,
                            height: 24,
                            fill: '#fff',
                            viewBox: '0 0 256 256',
                        },
                        e
                    ),
                    P ||
                        (P = u.createElement('path', {
                            d: 'M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z',
                        }))
                )
            }
            var D = (0, u.memo)(function (e) {
                    var s = e.className,
                        n = e.roomId,
                        t = (0, u.useState)(null),
                        a = t[0],
                        o = t[1],
                        i = (0, Z.$G)('pages').t,
                        l = (0, h.C)(m.is)
                    return (
                        (0, u.useEffect)(
                            function () {
                                if (l.conversations) {
                                    var e = l.conversations.find(function (e) {
                                        return e.roomId === n
                                    })
                                    if (e) {
                                        var s = e.friendId
                                        ;(0, x.E)(s)
                                            .then(function (e) {
                                                e && o(e)
                                            })
                                            .catch(console.log)
                                    }
                                }
                            },
                            [l.conversations]
                        ),
                        (0, r.jsxs)('div', {
                            className: c()('YPfD95ta', {}, [s]),
                            children: [
                                (0, r.jsxs)(U.rU, {
                                    to: '/messenger',
                                    className: 'R_b62QSU',
                                    children: [
                                        (0, r.jsx)(H, { className: 'lqKpvScb' }),
                                        ' ',
                                        i('Назад'),
                                    ],
                                }),
                                null == a ? void 0 : a.firstName,
                                ' ',
                                null == a ? void 0 : a.lastName,
                                (0, r.jsx)(d.q, {
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
                W = n(3743),
                X = function (e) {
                    e.className
                    var s = (0, u.useState)(null),
                        n = s[0],
                        t = s[1],
                        a = (0, Z.$G)('pages').t,
                        o = ((0, W.T)(), Boolean(n))
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.Z, {
                                'aria-label': 'settings',
                                onClick: function (e) {
                                    t(e.currentTarget)
                                },
                                children: (0, r.jsx)(N.Z, {}),
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
                _ = function () {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var s, n = 1, r = arguments.length; n < r; n++)
                                    for (var t in (s = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                                return e
                            }),
                        _.apply(this, arguments)
                    )
                },
                J = (0, u.forwardRef)(function (e, s) {
                    return (0, r.jsx)(U.rU, _({ ref: s }, e, { role: void 0 }))
                }),
                Q = (0, u.memo)(function (e) {
                    e.className
                    var s = e.roomId,
                        n = (0, u.useState)(null),
                        a = n[0],
                        o = n[1],
                        i = (0, Z.$G)('pages').t,
                        l = (0, h.C)(m.is)
                    return (
                        (0, u.useEffect)(
                            function () {
                                if (l.conversations) {
                                    var e = l.conversations.find(function (e) {
                                        return e.roomId === s
                                    })
                                    if (e) {
                                        var n = e.friendId
                                        ;(0, x.E)(n)
                                            .then(function (e) {
                                                e && o(e)
                                            })
                                            .catch(console.log)
                                    }
                                }
                            },
                            [l.conversations]
                        ),
                        (0, r.jsx)(t.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsxs)(v.Z, {
                                direction: 'row',
                                alignItems: 'center',
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        component: J,
                                        to: '/messenger',
                                        sx: { ml: '8px' },
                                        children: (0, r.jsx)(L.Z, {}),
                                    }),
                                    (0, r.jsx)(B.Z, {
                                        sx: { width: '100%' },
                                        avatar: (0, r.jsx)(d.q, {
                                            avatarPath: null == a ? void 0 : a.avatarPath,
                                            firstName: null == a ? void 0 : a.firstName,
                                            isOnline: null == a ? void 0 : a.isOnline,
                                            size: '60px',
                                        }),
                                        action: (0, r.jsx)(X, {}),
                                        title: ''
                                            .concat(null == a ? void 0 : a.firstName, ' ')
                                            .concat(null == a ? void 0 : a.lastName),
                                        subheader: (null == a ? void 0 : a.isOnline)
                                            ? (0, r.jsx)(g.Z, {
                                                  color: K.Z[500],
                                                  children: i('В сети'),
                                              })
                                            : 'Был(а) в сети '.concat(
                                                  p()(null == a ? void 0 : a.lastSeenOnline)
                                                      .locale(F.Z.language)
                                                      .toNow(!0) + i(' назад')
                                              ),
                                    }),
                                ],
                            }),
                            off: (0, r.jsx)(D, { roomId: s }),
                        })
                    )
                }),
                V = n(775),
                Y = n(6307),
                ee = n(4659),
                se = n(3416),
                ne = n(9033),
                re = n(6925)
            var te = (0, u.memo)(function (e) {
                    var s = e.className,
                        n = e.sendMessage,
                        t = e.roomId,
                        a = (0, Z.$G)('pages').t,
                        o = (0, u.useState)(''),
                        i = o[0],
                        l = o[1],
                        d = (0, V.X)(),
                        f = (0, h.C)(m.is),
                        x = function () {
                            if (i) {
                                var e = {
                                    messageId: (0, se.x0)(),
                                    messageType: 'text',
                                    textOrPathToFile: i,
                                    roomId: t,
                                    author: f.userId,
                                }
                                n(e), l('')
                            }
                        },
                        v = (0, u.useCallback)(
                            function (e) {
                                'Enter' === e.key && x()
                            },
                            [i]
                        )
                    return (
                        (0, u.useEffect)(
                            function () {
                                return (
                                    document.body.addEventListener('keydown', v),
                                    function () {
                                        document.body.removeEventListener('keydown', v)
                                    }
                                )
                            },
                            [v]
                        ),
                        (0, r.jsxs)('div', {
                            className: c()('P5qloDWp', {}, [s]),
                            children: [
                                (0, r.jsx)(re.I, {
                                    placeholder: a('Напишите сообщение...'),
                                    className: 's7O8GuKu',
                                    value: i,
                                    onChange: l,
                                    onBlur: function () {
                                        d && (document.documentElement.scrollTop = 0)
                                    },
                                }),
                                (0, r.jsx)(ne.Z, { className: 'F8xd7aod', onClick: x }),
                            ],
                        })
                    )
                }),
                ae = (0, u.memo)(function (e) {
                    var s = e.sendMessage,
                        n = e.roomId,
                        a = (0, Z.$G)('pages').t,
                        i = (0, u.useState)(''),
                        l = i[0],
                        c = i[1],
                        d = (0, V.X)(),
                        f = (0, h.C)(m.is),
                        x = function () {
                            if (l.trim()) {
                                var e = {
                                    messageId: (0, se.x0)(),
                                    messageType: 'text',
                                    textOrPathToFile: l,
                                    roomId: n,
                                    author: f.userId,
                                }
                                s(e), c('')
                            }
                        },
                        g = (0, u.useCallback)(
                            function (e) {
                                'Enter' !== e.key || e.shiftKey || x()
                            },
                            [l]
                        )
                    return (
                        (0, u.useEffect)(
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
                        (0, r.jsx)(t.z, {
                            feature: 'isAppRedesigned',
                            on: (0, r.jsx)(o.Z, {
                                children: (0, r.jsxs)(v.Z, {
                                    direction: 'row',
                                    alignItems: 'center',
                                    spacing: 2,
                                    children: [
                                        (0, r.jsx)(ee.Z, {
                                            fullWidth: !0,
                                            placeholder: a('Напишите сообщение...'),
                                            variant: 'outlined',
                                            multiline: !0,
                                            maxRows: 4,
                                            value: l,
                                            onChange: function (e) {
                                                return c(e.target.value)
                                            },
                                            onBlur: function () {
                                                d && (document.documentElement.scrollTop = 0)
                                            },
                                        }),
                                        (0, r.jsx)(M.Z, {
                                            onClick: x,
                                            children: (0, r.jsx)(Y.Z, {}),
                                        }),
                                    ],
                                }),
                            }),
                            off: (0, r.jsx)(te, { roomId: n, sendMessage: s }),
                        })
                    )
                })
            var oe = function (e) {
                    e.className
                    var s = (0, A.s0)(),
                        n = (0, Z.$G)().t,
                        t = (0, h.C)(m.is).conversations,
                        a = (0, A.UO)().roomId
                    if (
                        ((0, u.useEffect)(
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
                    var o = (0, S.Z)(a),
                        i = o.messages,
                        l = o.sendMessage,
                        c = o.removeMessage,
                        d = o.loadMore,
                        f = o.hasMore
                    return (0, r.jsx)('div', {
                        className: 'ru5J1mGF',
                        children: (0, r.jsxs)($.O, {
                            className: 'ukbtCJ9i',
                            children: [
                                (0, r.jsx)(Q, { roomId: a }),
                                (0, r.jsx)(z, {
                                    messages: i,
                                    hasMore: f,
                                    removeMessage: c,
                                    loadMore: d,
                                }),
                                (0, r.jsx)(ae, { roomId: a, sendMessage: l }),
                            ],
                        }),
                    })
                },
                ie = function (e) {
                    e.className
                    var s = (0, A.s0)(),
                        n = (0, Z.$G)().t,
                        a = (0, h.C)(m.is).conversations,
                        o = (0, A.UO)().roomId
                    if (
                        ((0, u.useEffect)(
                            function () {
                                a &&
                                    (a.find(function (e) {
                                        return e.roomId === o
                                    }) ||
                                        s('*', { replace: !0 }))
                            },
                            [a]
                        ),
                        !o)
                    )
                        return (0, r.jsx)('div', { children: n('Такого диалога не существует') })
                    var i = (0, S.Z)(o),
                        l = i.messages,
                        c = i.sendMessage,
                        d = i.removeMessage,
                        f = i.loadMore,
                        x = i.hasMore
                    return (0, r.jsx)(t.z, {
                        feature: 'isAppRedesigned',
                        on: (0, r.jsxs)(T.Z, {
                            sx: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            },
                            children: [
                                (0, r.jsx)(Q, { roomId: o }),
                                (0, r.jsx)(G.Z, {}),
                                (0, r.jsx)(z, {
                                    messages: l,
                                    hasMore: x,
                                    removeMessage: d,
                                    loadMore: f,
                                }),
                                (0, r.jsx)(G.Z, {}),
                                (0, r.jsx)(ae, { roomId: o, sendMessage: c }),
                            ],
                        }),
                        off: (0, r.jsx)(oe, {}),
                    })
                },
                le = n(8826),
                ce = n(4607),
                ue = n(684),
                de = n(3388),
                fe = n(4102)
            var me = function (e) {
                e.className
                var s = (0, V.X)()
                return (0, r.jsx)(t.z, {
                    feature: 'isAppRedesigned',
                    on: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ce.h, {}),
                            (0, r.jsxs)(fe.Z, {
                                sx: {
                                    display: 'flex',
                                    pb: { xs: '56px', sm: '56px', md: '0' },
                                    height: 'calc(100dvh - 88px)',
                                },
                                children: [
                                    (0, r.jsx)(de.K, {}),
                                    (0, r.jsx)(i.Z, {
                                        width: '100%',
                                        sx: { maxWidth: { xl: '892px', lg: '892px', md: '892px' } },
                                        children: (0, r.jsx)(ie, {}),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ue.$, { activeBtn: 2 }),
                        ],
                    }),
                    off: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ce.h, {}),
                            (0, r.jsxs)(le.Z, {
                                className: s ? '_awlvnuX' : '',
                                children: [!s && (0, r.jsx)(de.K, {}), (0, r.jsx)(ie, {})],
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
