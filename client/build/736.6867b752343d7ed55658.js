'use strict'
;(self.webpackChunksocialnetwork = self.webpackChunksocialnetwork || []).push([
    [736],
    {
        7957: (o, t, e) => {
            var r = e(4836)
            t.Z = void 0
            var a = r(e(4938)),
                i = e(5893)
            t.Z = (0, a.default)(
                (0, i.jsx)('path', {
                    d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
                }),
                'Edit'
            )
        },
        4913: (o, t, e) => {
            var r = e(4836)
            t.Z = void 0
            var a = r(e(4938)),
                i = e(5893)
            t.Z = (0, a.default)(
                (0, i.jsx)('path', {
                    d: 'M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zM7 7h5v2H7zm10 10H7v-2h10zm0-4H7v-2h10zm-2-4V5l4 4z',
                }),
                'Feed'
            )
        },
        3540: (o, t, e) => {
            var r = e(4836)
            t.Z = void 0
            var a = r(e(4938)),
                i = e(5893)
            t.Z = (0, a.default)(
                (0, i.jsx)('path', {
                    d: 'm17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z',
                }),
                'Logout'
            )
        },
        2428: (o, t, e) => {
            var r = e(4836)
            t.Z = void 0
            var a = r(e(4938)),
                i = e(5893)
            t.Z = (0, a.default)(
                [
                    (0, i.jsx)(
                        'path',
                        {
                            fillRule: 'evenodd',
                            d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87',
                        },
                        '0'
                    ),
                    (0, i.jsx)('circle', { cx: '9', cy: '8', r: '4', fillRule: 'evenodd' }, '1'),
                    (0, i.jsx)(
                        'path',
                        {
                            fillRule: 'evenodd',
                            d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
                        },
                        '2'
                    ),
                ],
                'PeopleAlt'
            )
        },
        5398: (o, t, e) => {
            var r = e(4836)
            t.Z = void 0
            var a = r(e(4938)),
                i = e(5893)
            t.Z = (0, a.default)(
                (0, i.jsx)('path', {
                    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
                }),
                'Person'
            )
        },
        3720: (o, t, e) => {
            e.d(t, { Z: () => Z })
            var r = e(3366),
                a = e(7462),
                i = e(7294),
                n = e(512),
                l = e(4780),
                d = e(948),
                s = e(8628),
                c = e(8216),
                p = e(4680),
                u = e(1588),
                v = e(4867)
            function h(o) {
                return (0, v.ZP)('MuiAppBar', o)
            }
            ;(0, u.Z)('MuiAppBar', [
                'root',
                'positionFixed',
                'positionAbsolute',
                'positionSticky',
                'positionStatic',
                'positionRelative',
                'colorDefault',
                'colorPrimary',
                'colorSecondary',
                'colorInherit',
                'colorTransparent',
                'colorError',
                'colorInfo',
                'colorSuccess',
                'colorWarning',
            ])
            var b = e(5893)
            const m = ['className', 'color', 'enableColorOnDark', 'position'],
                g = (o, t) => (o ? `${null == o ? void 0 : o.replace(')', '')}, ${t})` : t),
                f = (0, d.ZP)(p.Z, {
                    name: 'MuiAppBar',
                    slot: 'Root',
                    overridesResolver: (o, t) => {
                        const { ownerState: e } = o
                        return [
                            t.root,
                            t[`position${(0, c.Z)(e.position)}`],
                            t[`color${(0, c.Z)(e.color)}`],
                        ]
                    },
                })(({ theme: o, ownerState: t }) => {
                    const e = 'light' === o.palette.mode ? o.palette.grey[100] : o.palette.grey[900]
                    return (0, a.Z)(
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            boxSizing: 'border-box',
                            flexShrink: 0,
                        },
                        'fixed' === t.position && {
                            position: 'fixed',
                            zIndex: (o.vars || o).zIndex.appBar,
                            top: 0,
                            left: 'auto',
                            right: 0,
                            '@media print': { position: 'absolute' },
                        },
                        'absolute' === t.position && {
                            position: 'absolute',
                            zIndex: (o.vars || o).zIndex.appBar,
                            top: 0,
                            left: 'auto',
                            right: 0,
                        },
                        'sticky' === t.position && {
                            position: 'sticky',
                            zIndex: (o.vars || o).zIndex.appBar,
                            top: 0,
                            left: 'auto',
                            right: 0,
                        },
                        'static' === t.position && { position: 'static' },
                        'relative' === t.position && { position: 'relative' },
                        !o.vars &&
                            (0, a.Z)(
                                {},
                                'default' === t.color && {
                                    backgroundColor: e,
                                    color: o.palette.getContrastText(e),
                                },
                                t.color &&
                                    'default' !== t.color &&
                                    'inherit' !== t.color &&
                                    'transparent' !== t.color && {
                                        backgroundColor: o.palette[t.color].main,
                                        color: o.palette[t.color].contrastText,
                                    },
                                'inherit' === t.color && { color: 'inherit' },
                                'dark' === o.palette.mode &&
                                    !t.enableColorOnDark && { backgroundColor: null, color: null },
                                'transparent' === t.color &&
                                    (0, a.Z)(
                                        { backgroundColor: 'transparent', color: 'inherit' },
                                        'dark' === o.palette.mode && { backgroundImage: 'none' }
                                    )
                            ),
                        o.vars &&
                            (0, a.Z)(
                                {},
                                'default' === t.color && {
                                    '--AppBar-background': t.enableColorOnDark
                                        ? o.vars.palette.AppBar.defaultBg
                                        : g(
                                              o.vars.palette.AppBar.darkBg,
                                              o.vars.palette.AppBar.defaultBg
                                          ),
                                    '--AppBar-color': t.enableColorOnDark
                                        ? o.vars.palette.text.primary
                                        : g(
                                              o.vars.palette.AppBar.darkColor,
                                              o.vars.palette.text.primary
                                          ),
                                },
                                t.color &&
                                    !t.color.match(/^(default|inherit|transparent)$/) && {
                                        '--AppBar-background': t.enableColorOnDark
                                            ? o.vars.palette[t.color].main
                                            : g(
                                                  o.vars.palette.AppBar.darkBg,
                                                  o.vars.palette[t.color].main
                                              ),
                                        '--AppBar-color': t.enableColorOnDark
                                            ? o.vars.palette[t.color].contrastText
                                            : g(
                                                  o.vars.palette.AppBar.darkColor,
                                                  o.vars.palette[t.color].contrastText
                                              ),
                                    },
                                !['inherit', 'transparent'].includes(t.color) && {
                                    backgroundColor: 'var(--AppBar-background)',
                                },
                                {
                                    color:
                                        'inherit' === t.color ? 'inherit' : 'var(--AppBar-color)',
                                },
                                'transparent' === t.color && {
                                    backgroundImage: 'none',
                                    backgroundColor: 'transparent',
                                    color: 'inherit',
                                }
                            )
                    )
                }),
                Z = i.forwardRef(function (o, t) {
                    const e = (0, s.i)({ props: o, name: 'MuiAppBar' }),
                        {
                            className: i,
                            color: d = 'primary',
                            enableColorOnDark: p = !1,
                            position: u = 'fixed',
                        } = e,
                        v = (0, r.Z)(e, m),
                        g = (0, a.Z)({}, e, { color: d, position: u, enableColorOnDark: p }),
                        Z = ((o) => {
                            const { color: t, position: e, classes: r } = o,
                                a = {
                                    root: ['root', `color${(0, c.Z)(t)}`, `position${(0, c.Z)(e)}`],
                                }
                            return (0, l.Z)(a, h, r)
                        })(g)
                    return (0, b.jsx)(
                        f,
                        (0, a.Z)(
                            {
                                square: !0,
                                component: 'header',
                                ownerState: g,
                                elevation: 4,
                                className: (0, n.Z)(Z.root, i, 'fixed' === u && 'mui-fixed'),
                                ref: t,
                            },
                            v
                        )
                    )
                })
        },
        2004: (o, t, e) => {
            e.d(t, { Z: () => Z })
            var r = e(3366),
                a = e(7462),
                i = e(7294),
                n = e(512),
                l = e(4780),
                d = e(948),
                s = e(8628),
                c = e(6905),
                p = e(1588),
                u = e(4867)
            function v(o) {
                return (0, u.ZP)('MuiBottomNavigationAction', o)
            }
            const h = (0, p.Z)('MuiBottomNavigationAction', [
                'root',
                'iconOnly',
                'selected',
                'label',
            ])
            var b = e(5893)
            const m = [
                    'className',
                    'icon',
                    'label',
                    'onChange',
                    'onClick',
                    'selected',
                    'showLabel',
                    'value',
                ],
                g = (0, d.ZP)(c.Z, {
                    name: 'MuiBottomNavigationAction',
                    slot: 'Root',
                    overridesResolver: (o, t) => {
                        const { ownerState: e } = o
                        return [t.root, !e.showLabel && !e.selected && t.iconOnly]
                    },
                })(({ theme: o, ownerState: t }) =>
                    (0, a.Z)(
                        {
                            transition: o.transitions.create(['color', 'padding-top'], {
                                duration: o.transitions.duration.short,
                            }),
                            padding: '0px 12px',
                            minWidth: 80,
                            maxWidth: 168,
                            color: (o.vars || o).palette.text.secondary,
                            flexDirection: 'column',
                            flex: '1',
                        },
                        !t.showLabel && !t.selected && { paddingTop: 14 },
                        !t.showLabel && !t.selected && !t.label && { paddingTop: 0 },
                        { [`&.${h.selected}`]: { color: (o.vars || o).palette.primary.main } }
                    )
                ),
                f = (0, d.ZP)('span', {
                    name: 'MuiBottomNavigationAction',
                    slot: 'Label',
                    overridesResolver: (o, t) => t.label,
                })(({ theme: o, ownerState: t }) =>
                    (0, a.Z)(
                        {
                            fontFamily: o.typography.fontFamily,
                            fontSize: o.typography.pxToRem(12),
                            opacity: 1,
                            transition: 'font-size 0.2s, opacity 0.2s',
                            transitionDelay: '0.1s',
                        },
                        !t.showLabel && !t.selected && { opacity: 0, transitionDelay: '0s' },
                        { [`&.${h.selected}`]: { fontSize: o.typography.pxToRem(14) } }
                    )
                ),
                Z = i.forwardRef(function (o, t) {
                    const e = (0, s.i)({ props: o, name: 'MuiBottomNavigationAction' }),
                        { className: i, icon: d, label: c, onChange: p, onClick: u, value: h } = e,
                        Z = (0, r.Z)(e, m),
                        x = e,
                        B = ((o) => {
                            const { classes: t, showLabel: e, selected: r } = o,
                                a = {
                                    root: ['root', !e && !r && 'iconOnly', r && 'selected'],
                                    label: ['label', !e && !r && 'iconOnly', r && 'selected'],
                                }
                            return (0, l.Z)(a, v, t)
                        })(x)
                    return (0, b.jsxs)(
                        g,
                        (0, a.Z)(
                            {
                                ref: t,
                                className: (0, n.Z)(B.root, i),
                                focusRipple: !0,
                                onClick: (o) => {
                                    p && p(o, h), u && u(o)
                                },
                                ownerState: x,
                            },
                            Z,
                            {
                                children: [
                                    d,
                                    (0, b.jsx)(f, {
                                        className: B.label,
                                        ownerState: x,
                                        children: c,
                                    }),
                                ],
                            }
                        )
                    )
                })
        },
        4172: (o, t, e) => {
            e.d(t, { Z: () => m })
            var r = e(7462),
                a = e(3366),
                i = e(7294),
                n = (e(6607), e(512)),
                l = e(4780),
                d = e(948),
                s = e(8628),
                c = e(1588),
                p = e(4867)
            function u(o) {
                return (0, p.ZP)('MuiBottomNavigation', o)
            }
            ;(0, c.Z)('MuiBottomNavigation', ['root'])
            var v = e(5893)
            const h = ['children', 'className', 'component', 'onChange', 'showLabels', 'value'],
                b = (0, d.ZP)('div', {
                    name: 'MuiBottomNavigation',
                    slot: 'Root',
                    overridesResolver: (o, t) => t.root,
                })(({ theme: o }) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    height: 56,
                    backgroundColor: (o.vars || o).palette.background.paper,
                })),
                m = i.forwardRef(function (o, t) {
                    const e = (0, s.i)({ props: o, name: 'MuiBottomNavigation' }),
                        {
                            children: d,
                            className: c,
                            component: p = 'div',
                            onChange: m,
                            showLabels: g = !1,
                            value: f,
                        } = e,
                        Z = (0, a.Z)(e, h),
                        x = (0, r.Z)({}, e, { component: p, showLabels: g }),
                        B = ((o) => {
                            const { classes: t } = o
                            return (0, l.Z)({ root: ['root'] }, u, t)
                        })(x)
                    return (0, v.jsx)(
                        b,
                        (0, r.Z)(
                            { as: p, className: (0, n.Z)(B.root, c), ref: t, ownerState: x },
                            Z,
                            {
                                children: i.Children.map(d, (o, t) => {
                                    if (!i.isValidElement(o)) return null
                                    const e = void 0 === o.props.value ? t : o.props.value
                                    return i.cloneElement(o, {
                                        selected: e === f,
                                        showLabel:
                                            void 0 !== o.props.showLabel ? o.props.showLabel : g,
                                        value: e,
                                        onChange: m,
                                    })
                                }),
                            }
                        )
                    )
                })
        },
        2681: (o, t, e) => {
            e.d(t, { Z: () => B })
            var r = e(3366),
                a = e(7462),
                i = e(7294),
                n = e(512),
                l = e(4780),
                d = e(2101),
                s = e(8216),
                c = e(948),
                p = e(8628),
                u = e(1588),
                v = e(4867)
            function h(o) {
                return (0, v.ZP)('MuiButtonGroup', o)
            }
            const b = (0, u.Z)('MuiButtonGroup', [
                'root',
                'contained',
                'outlined',
                'text',
                'disableElevation',
                'disabled',
                'firstButton',
                'fullWidth',
                'vertical',
                'grouped',
                'groupedHorizontal',
                'groupedVertical',
                'groupedText',
                'groupedTextHorizontal',
                'groupedTextVertical',
                'groupedTextPrimary',
                'groupedTextSecondary',
                'groupedOutlined',
                'groupedOutlinedHorizontal',
                'groupedOutlinedVertical',
                'groupedOutlinedPrimary',
                'groupedOutlinedSecondary',
                'groupedContained',
                'groupedContainedHorizontal',
                'groupedContainedVertical',
                'groupedContainedPrimary',
                'groupedContainedSecondary',
                'lastButton',
                'middleButton',
            ])
            var m = e(8363),
                g = e(3326),
                f = e(5893)
            const Z = [
                    'children',
                    'className',
                    'color',
                    'component',
                    'disabled',
                    'disableElevation',
                    'disableFocusRipple',
                    'disableRipple',
                    'fullWidth',
                    'orientation',
                    'size',
                    'variant',
                ],
                x = (0, c.ZP)('div', {
                    name: 'MuiButtonGroup',
                    slot: 'Root',
                    overridesResolver: (o, t) => {
                        const { ownerState: e } = o
                        return [
                            { [`& .${b.grouped}`]: t.grouped },
                            { [`& .${b.grouped}`]: t[`grouped${(0, s.Z)(e.orientation)}`] },
                            { [`& .${b.grouped}`]: t[`grouped${(0, s.Z)(e.variant)}`] },
                            {
                                [`& .${b.grouped}`]:
                                    t[`grouped${(0, s.Z)(e.variant)}${(0, s.Z)(e.orientation)}`],
                            },
                            {
                                [`& .${b.grouped}`]:
                                    t[`grouped${(0, s.Z)(e.variant)}${(0, s.Z)(e.color)}`],
                            },
                            { [`& .${b.firstButton}`]: t.firstButton },
                            { [`& .${b.lastButton}`]: t.lastButton },
                            { [`& .${b.middleButton}`]: t.middleButton },
                            t.root,
                            t[e.variant],
                            !0 === e.disableElevation && t.disableElevation,
                            e.fullWidth && t.fullWidth,
                            'vertical' === e.orientation && t.vertical,
                        ]
                    },
                })(({ theme: o, ownerState: t }) =>
                    (0, a.Z)(
                        { display: 'inline-flex', borderRadius: (o.vars || o).shape.borderRadius },
                        'contained' === t.variant && { boxShadow: (o.vars || o).shadows[2] },
                        t.disableElevation && { boxShadow: 'none' },
                        t.fullWidth && { width: '100%' },
                        'vertical' === t.orientation && { flexDirection: 'column' },
                        {
                            [`& .${b.grouped}`]: (0, a.Z)(
                                {
                                    minWidth: 40,
                                    '&:hover': (0, a.Z)(
                                        {},
                                        'contained' === t.variant && { boxShadow: 'none' }
                                    ),
                                },
                                'contained' === t.variant && { boxShadow: 'none' }
                            ),
                            [`& .${b.firstButton},& .${b.middleButton}`]: (0, a.Z)(
                                {},
                                'horizontal' === t.orientation && {
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                },
                                'vertical' === t.orientation && {
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 0,
                                },
                                'text' === t.variant &&
                                    'horizontal' === t.orientation && {
                                        borderRight: o.vars
                                            ? `1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`
                                            : '1px solid ' +
                                              ('light' === o.palette.mode
                                                  ? 'rgba(0, 0, 0, 0.23)'
                                                  : 'rgba(255, 255, 255, 0.23)'),
                                        [`&.${b.disabled}`]: {
                                            borderRight: `1px solid ${
                                                (o.vars || o).palette.action.disabled
                                            }`,
                                        },
                                    },
                                'text' === t.variant &&
                                    'vertical' === t.orientation && {
                                        borderBottom: o.vars
                                            ? `1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`
                                            : '1px solid ' +
                                              ('light' === o.palette.mode
                                                  ? 'rgba(0, 0, 0, 0.23)'
                                                  : 'rgba(255, 255, 255, 0.23)'),
                                        [`&.${b.disabled}`]: {
                                            borderBottom: `1px solid ${
                                                (o.vars || o).palette.action.disabled
                                            }`,
                                        },
                                    },
                                'text' === t.variant &&
                                    'inherit' !== t.color && {
                                        borderColor: o.vars
                                            ? `rgba(${o.vars.palette[t.color].mainChannel} / 0.5)`
                                            : (0, d.Fq)(o.palette[t.color].main, 0.5),
                                    },
                                'outlined' === t.variant &&
                                    'horizontal' === t.orientation && {
                                        borderRightColor: 'transparent',
                                    },
                                'outlined' === t.variant &&
                                    'vertical' === t.orientation && {
                                        borderBottomColor: 'transparent',
                                    },
                                'contained' === t.variant &&
                                    'horizontal' === t.orientation && {
                                        borderRight: `1px solid ${(o.vars || o).palette.grey[400]}`,
                                        [`&.${b.disabled}`]: {
                                            borderRight: `1px solid ${
                                                (o.vars || o).palette.action.disabled
                                            }`,
                                        },
                                    },
                                'contained' === t.variant &&
                                    'vertical' === t.orientation && {
                                        borderBottom: `1px solid ${
                                            (o.vars || o).palette.grey[400]
                                        }`,
                                        [`&.${b.disabled}`]: {
                                            borderBottom: `1px solid ${
                                                (o.vars || o).palette.action.disabled
                                            }`,
                                        },
                                    },
                                'contained' === t.variant &&
                                    'inherit' !== t.color && {
                                        borderColor: (o.vars || o).palette[t.color].dark,
                                    },
                                {
                                    '&:hover': (0, a.Z)(
                                        {},
                                        'outlined' === t.variant &&
                                            'horizontal' === t.orientation && {
                                                borderRightColor: 'currentColor',
                                            },
                                        'outlined' === t.variant &&
                                            'vertical' === t.orientation && {
                                                borderBottomColor: 'currentColor',
                                            }
                                    ),
                                }
                            ),
                            [`& .${b.lastButton},& .${b.middleButton}`]: (0, a.Z)(
                                {},
                                'horizontal' === t.orientation && {
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                },
                                'vertical' === t.orientation && {
                                    borderTopRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                },
                                'outlined' === t.variant &&
                                    'horizontal' === t.orientation && { marginLeft: -1 },
                                'outlined' === t.variant &&
                                    'vertical' === t.orientation && { marginTop: -1 }
                            ),
                        }
                    )
                ),
                B = i.forwardRef(function (o, t) {
                    const e = (0, p.i)({ props: o, name: 'MuiButtonGroup' }),
                        {
                            children: d,
                            className: c,
                            color: u = 'primary',
                            component: v = 'div',
                            disabled: b = !1,
                            disableElevation: B = !1,
                            disableFocusRipple: C = !1,
                            disableRipple: R = !1,
                            fullWidth: $ = !1,
                            orientation: y = 'horizontal',
                            size: k = 'medium',
                            variant: w = 'outlined',
                        } = e,
                        z = (0, r.Z)(e, Z),
                        S = (0, a.Z)({}, e, {
                            color: u,
                            component: v,
                            disabled: b,
                            disableElevation: B,
                            disableFocusRipple: C,
                            disableRipple: R,
                            fullWidth: $,
                            orientation: y,
                            size: k,
                            variant: w,
                        }),
                        M = ((o) => {
                            const {
                                    classes: t,
                                    color: e,
                                    disabled: r,
                                    disableElevation: a,
                                    fullWidth: i,
                                    orientation: n,
                                    variant: d,
                                } = o,
                                c = {
                                    root: [
                                        'root',
                                        d,
                                        'vertical' === n && 'vertical',
                                        i && 'fullWidth',
                                        a && 'disableElevation',
                                    ],
                                    grouped: [
                                        'grouped',
                                        `grouped${(0, s.Z)(n)}`,
                                        `grouped${(0, s.Z)(d)}`,
                                        `grouped${(0, s.Z)(d)}${(0, s.Z)(n)}`,
                                        `grouped${(0, s.Z)(d)}${(0, s.Z)(e)}`,
                                        r && 'disabled',
                                    ],
                                    firstButton: ['firstButton'],
                                    lastButton: ['lastButton'],
                                    middleButton: ['middleButton'],
                                }
                            return (0, l.Z)(c, h, t)
                        })(S),
                        A = i.useMemo(
                            () => ({
                                className: M.grouped,
                                color: u,
                                disabled: b,
                                disableElevation: B,
                                disableFocusRipple: C,
                                disableRipple: R,
                                fullWidth: $,
                                size: k,
                                variant: w,
                            }),
                            [u, b, B, C, R, $, k, w, M.grouped]
                        ),
                        N = (function (o) {
                            return i.Children.toArray(o).filter((o) => i.isValidElement(o))
                        })(d),
                        L = N.length,
                        T = (o) => {
                            const t = 0 === o,
                                e = o === L - 1
                            return t && e
                                ? ''
                                : t
                                ? M.firstButton
                                : e
                                ? M.lastButton
                                : M.middleButton
                        }
                    return (0, f.jsx)(
                        x,
                        (0, a.Z)(
                            {
                                as: v,
                                role: 'group',
                                className: (0, n.Z)(M.root, c),
                                ref: t,
                                ownerState: S,
                            },
                            z,
                            {
                                children: (0, f.jsx)(m.Z.Provider, {
                                    value: A,
                                    children: N.map((o, t) =>
                                        (0, f.jsx)(g.Z.Provider, { value: T(t), children: o }, t)
                                    ),
                                }),
                            }
                        )
                    )
                })
        },
    },
])
