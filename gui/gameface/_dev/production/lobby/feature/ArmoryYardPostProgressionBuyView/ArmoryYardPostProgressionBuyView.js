/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ './src/components/Box/Box.tsx':
            /*!************************************!*\
  !*** ./src/components/Box/Box.tsx ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ defaultMarginMap: () => /* binding */ defaultMarginMap,
                    /* harmony export */ defaultMargins: () => /* binding */ defaultMargins,
                    /* harmony export */ standardMargins: () => /* binding */ standardMargins,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! global-styles/variables/spacing */ './src/global-styles/variables/spacing.js',
                    );
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/hocs/adaptive/adaptive */ './src/lib/hocs/adaptive/adaptive.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var _Box_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./Box.css */ './src/components/Box/Box.css',
                );
                const _excluded = [
                    'className',
                    'width',
                    'height',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'column',
                    'row',
                    'flexDirection',
                    'flexStart',
                    'center',
                    'flexEnd',
                    'spaceBetween',
                    'spaceAround',
                    'justifyContent',
                    'alignItems',
                    'alignSelf',
                    'wrap',
                    'flexWrap',
                    'grow',
                    'shrink',
                    'flex',
                    'style',
                    'children',
                ];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                /* eslint-disable react/no-multi-comp */

                const standardMargins = Object.keys(
                    global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1___default(),
                );
                const defaultXlMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__XL,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__XL,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__XL,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__XL,
                };
                const defaultLgMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__LG,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__LG,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__LG,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__LG,
                };
                const defaultMdpMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__MDp,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__MDp,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__MDp,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__MDp,
                };
                const defaultMdMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__MD,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__MD,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__MD,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__MD,
                };
                const defaultSmpMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__SMp,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__SMp,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__SMp,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__SMp,
                };
                const defaultSmMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__SM,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__SM,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__SM,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__SM,
                };
                const defaultXsMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__XS,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__XS,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__XS,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__XS,
                };
                const defaultMarginMap = {
                    XL: defaultXlMargins,
                    LG: defaultLgMargins,
                    MDp: defaultMdpMargins,
                    MD: defaultMdMargins,
                    SMp: defaultSmpMargins,
                    SM: defaultSmMargins,
                    XS: defaultXsMargins,
                };
                const defaultMargins = Object.keys(defaultMarginMap);
                const marginKeyList = ['mt', 'mr', 'mb', 'ml'];

                const getMarginClassNames = (marginMap) => {
                    return marginKeyList.reduce((classNames, key) => {
                        const value = marginMap[key];

                        if (!value || typeof value === 'number') {
                            return classNames;
                        }

                        return classNames.concat(defaultMarginMap[value === true ? 'MD' : value][key]);
                    }, []);
                };

                const marginKeyPropertyMap = {
                    mt: 'marginTop',
                    mr: 'marginRight',
                    mb: 'marginBottom',
                    ml: 'marginLeft',
                };

                const getMarginStyle = (marginMap) => {
                    return marginKeyList.reduce((style, key) => {
                        const value = marginMap[key];

                        if (typeof value === 'number') {
                            const property = marginKeyPropertyMap[key];
                            style[property] = value + 'rem';
                        }

                        return style;
                    }, {});
                };

                /**
                 * This component generates a div with applied layout.
                 *
                 * @param {Object} BoxProps - Object containing the following:
                 *   @param {string} [className] - Additional class(es) to be added to the component.
                 *   @param {CSSProperties['width']} [width] - Width of the box. Supports standard CSS units, numeric values are transformed to rem.
                 *   @param {CSSProperties['height']} [height] - Height of the box. Supports standard CSS units, numeric values are transformed to rem.
                 *   @param {SpacingType} [m] - Margin value to be applied to all sides of the box. Supports XL, LG, MDp, MD, SMp, SM, XS, true for MD margin, numeric values are transformed to rem.
                 *   @param {SpacingType} [mt=m] - Margin value to be applied to the top of the box.
                 *   @param {SpacingType} [mr=m] - Margin value to be applied to the right of the box.
                 *   @param {SpacingType} [mb=m] - Margin value to be applied to the bottom of the box.
                 *   @param {SpacingType} [ml=m] - Margin value to be applied to the left of the box.
                 *   @param {boolean} [column] - Specifies whether the flex container should be displayed as a column.
                 *   @param {boolean} [row] - Specifies whether the flex container should be displayed as a row.
                 *   @param {CSSProperties["flexDirection"]} [flexDirection] - Specifies the direction of the flex container.
                 *   @param {boolean} [flexStart] - Specifies whether the flex items should be aligned to the start of the container.
                 *   @param {boolean} [center] - Specifies whether the flex items should be centered within the container.
                 *   @param {boolean} [flexEnd] - Specifies whether the flex items should be aligned to the end of the container.
                 *   @param {boolean} [spaceBetween] - Specifies whether the flex items should be evenly spaced with space between them.
                 *   @param {boolean} [spaceAround] - Specifies whether the flex items should be evenly spaced with space around them.
                 *   @param {CSSProperties["justifyContent"]} [justifyContent] - Specifies how the flex items should be aligned along the main axis.
                 *   @param {CSSProperties["alignItems"]} [alignItems] - Specifies how the flex items should be aligned along the cross axis.
                 *   @param {CSSProperties["alignSelf"]} [alignSelf] - Specifies how a flex item should align itself along the cross axis.
                 *   @param {boolean} [wrap] - Specifies whether the flex items should wrap if they exceed the container's width.
                 *   @param {CSSProperties["flexWrap"]} [flexWrap] - Specifies whether the flex items should wrap if they exceed the container's width.
                 *   @param {boolean} [grow] - Specifies the flex grow factor of the flex item.
                 *   @param {boolean} [shrink] - Specifies the flex shrink factor of the flex item.
                 *   @param {CSSProperties["flex"]} [flex] - Specifies the flex grow, flex shrink, and flex basis of the flex item.
                 *   @param {CSSProperties} [style] - Custom styles to be applied to the component.
                 *   @param {ReactNode} [children] - Child components to be rendered within the component.
                 *   @param {Object} [...restProps] - Additional HTML div properties.
                 * @return {JSX.Element} A box element.
                 */
                const Box = (_ref) => {
                    let className = _ref.className,
                        width = _ref.width,
                        height = _ref.height,
                        m = _ref.m,
                        _ref$mt = _ref.mt,
                        mt = _ref$mt === void 0 ? m : _ref$mt,
                        _ref$mr = _ref.mr,
                        mr = _ref$mr === void 0 ? m : _ref$mr,
                        _ref$mb = _ref.mb,
                        mb = _ref$mb === void 0 ? m : _ref$mb,
                        _ref$ml = _ref.ml,
                        ml = _ref$ml === void 0 ? m : _ref$ml,
                        column = _ref.column,
                        row = _ref.row,
                        _ref$flexDirection = _ref.flexDirection,
                        flexDirection =
                            _ref$flexDirection === void 0
                                ? (column && 'column') || (row && 'row') || undefined
                                : _ref$flexDirection,
                        flexStart = _ref.flexStart,
                        center = _ref.center,
                        flexEnd = _ref.flexEnd,
                        spaceBetween = _ref.spaceBetween,
                        spaceAround = _ref.spaceAround,
                        _ref$justifyContent = _ref.justifyContent,
                        justifyContent =
                            _ref$justifyContent === void 0
                                ? (flexStart && 'flex-start') ||
                                  (center && 'center') ||
                                  (flexEnd && 'flex-end') ||
                                  (spaceBetween && 'space-between') ||
                                  (spaceAround && 'space-around') ||
                                  undefined
                                : _ref$justifyContent,
                        _ref$alignItems = _ref.alignItems,
                        alignItems =
                            _ref$alignItems === void 0
                                ? (flexStart && 'flex-start') ||
                                  (center && 'center') ||
                                  (flexEnd && 'flex-end') ||
                                  undefined
                                : _ref$alignItems,
                        alignSelf = _ref.alignSelf,
                        wrap = _ref.wrap,
                        _ref$flexWrap = _ref.flexWrap,
                        flexWrap = _ref$flexWrap === void 0 ? (wrap && 'wrap') || undefined : _ref$flexWrap,
                        grow = _ref.grow,
                        shrink = _ref.shrink,
                        _ref$flex = _ref.flex,
                        flex =
                            _ref$flex === void 0
                                ? grow || shrink
                                    ? `${grow ? 1 : 0} ${shrink ? 1 : 0} auto`
                                    : undefined
                                : _ref$flex,
                        style = _ref.style,
                        children = _ref.children,
                        restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
                            const marginMap = {
                                mt,
                                mr,
                                mb,
                                ml,
                            };
                            const computedClassNames = getMarginClassNames(marginMap);
                            const marginStyle = getMarginStyle(marginMap);
                            return {
                                computedStyle: Object.assign({}, style, marginStyle, {
                                    width: width !== undefined && typeof width === 'number' ? width + 'rem' : width,
                                    height:
                                        height !== undefined && typeof height === 'number' ? height + 'rem' : height,
                                    flex,
                                    alignSelf,
                                    display: flexDirection || alignItems ? 'flex' : undefined,
                                    flexDirection,
                                    flexWrap,
                                    justifyContent,
                                    alignItems,
                                }),
                                computedClassNames,
                            };
                        }, [
                            width,
                            height,
                            mt,
                            mr,
                            mb,
                            ml,
                            style,
                            flex,
                            alignSelf,
                            flexDirection,
                            flexWrap,
                            justifyContent,
                            alignItems,
                        ]),
                        computedStyle = _useMemo.computedStyle,
                        computedClassNames = _useMemo.computedClassNames;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
                        'div',
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].base,
                                    ...computedClassNames,
                                    className,
                                ),
                                style: computedStyle,
                            },
                            restProps,
                        ),
                        children,
                    );
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
                lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_2__['default'])(Box);

                /***/
            },

        /***/ './src/components/Button/CButton.tsx':
            /*!*******************************************!*\
  !*** ./src/components/Button/CButton.tsx ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ButtonSize: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ButtonSize,
                    /* harmony export */ ButtonType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType,
                    /* harmony export */ CButton: () => /* binding */ CButton,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _CButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./CButton.css */ './src/components/Button/CButton.css',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./types */ './src/components/Button/types.ts',
                );

                const Button = ({
                    children,
                    size,
                    isFocused,
                    type,
                    disabled,
                    mixClass,
                    soundHover,
                    soundClick,
                    onMouseEnter,
                    onMouseMove,
                    onMouseDown,
                    onMouseUp,
                    onMouseLeave,
                    onClick,
                }) => {
                    const button = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(isFocused),
                        buttonFocus = _useState[0],
                        setButtonFocus = _useState[1];

                    const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        isHighlightActive = _useState2[0],
                        setHighlightActive = _useState2[1];

                    const _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        isFirstHovered = _useState3[0],
                        setFirstHovered = _useState3[1];

                    const setFocusOnButton = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        if (disabled) {
                            return;
                        }

                        if (button.current) {
                            button.current.focus();
                            setButtonFocus(true);
                        }
                    }, [disabled]);
                    const handleMouseDownOutside = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (event) => {
                            if (buttonFocus && button.current !== null && !button.current.contains(event.target)) {
                                setButtonFocus(false);
                            }
                        },
                        [buttonFocus],
                    );
                    const handleClick = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onClick) {
                                onClick(e);
                            }
                        },
                        [disabled, onClick],
                    );
                    const handleMouseEnter = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (soundHover !== null) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(soundHover);
                            }

                            if (onMouseEnter) {
                                onMouseEnter(e);
                            }

                            setFirstHovered(true);
                        },
                        [disabled, soundHover, onMouseEnter],
                    );
                    const handleMouseMove = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (onMouseMove) {
                                onMouseMove(e);
                            }
                        },
                        [onMouseMove],
                    );
                    const handleMouseUp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onMouseUp) {
                                onMouseUp(e);
                            }

                            setHighlightActive(false);
                        },
                        [disabled, onMouseUp],
                    );
                    const handleMouseDown = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (soundClick !== null) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(soundClick);
                            }

                            if (onMouseDown) {
                                onMouseDown(e);
                            }

                            if (isFocused) {
                                setFocusOnButton();
                            }

                            setHighlightActive(true);
                        },
                        [disabled, soundClick, onMouseDown, setFocusOnButton, isFocused],
                    );
                    const handleMouseLeave = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onMouseLeave) {
                                onMouseLeave(e);
                            }

                            setHighlightActive(false);
                        },
                        [disabled, onMouseLeave],
                    );
                    const classBase = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${type}`],
                        {
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__disabled]: disabled,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${size}`]]: size,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__focus]: buttonFocus,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__highlightActive]:
                                isHighlightActive,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__firstHover]: isFirstHovered,
                        },
                        mixClass,
                    );
                    const classState = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].state,
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].state__default,
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        document.addEventListener('mousedown', handleMouseDownOutside);
                        return () => {
                            document.removeEventListener('mousedown', handleMouseDownOutside);
                        };
                    }, [handleMouseDownOutside]);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        setButtonFocus(isFocused);
                    }, [isFocused]);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        {
                            ref: button,
                            className: classBase,
                            onMouseEnter: handleMouseEnter,
                            onMouseMove: handleMouseMove,
                            onMouseUp: handleMouseUp,
                            onMouseDown: handleMouseDown,
                            onMouseLeave: handleMouseLeave,
                            onClick: handleClick,
                        },
                        type !== _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType.ghost &&
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                react__WEBPACK_IMPORTED_MODULE_2___default().Fragment,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                    className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].back,
                                }),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                    className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].texture,
                                }),
                            ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'span',
                            {
                                className: classState,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateDisabled,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateHighlightHover,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateHighlightActive,
                            }),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'span',
                            {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].content,
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            children,
                        ),
                    );
                };

                Button.defaultProps = {
                    type: _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType.primary,
                    isFocused: false,
                    soundHover: 'highlight',
                    soundClick: 'play',
                };
                const CButton = (0, react__WEBPACK_IMPORTED_MODULE_2__.memo)(Button);

                /***/
            },

        /***/ './src/components/Button/types.ts':
            /*!****************************************!*\
  !*** ./src/components/Button/types.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ButtonSize: () => /* binding */ ButtonSize,
                    /* harmony export */ ButtonType: () => /* binding */ ButtonType,
                    /* harmony export */
                });
                let ButtonType;

                (function (ButtonType) {
                    ButtonType['main'] = 'main';
                    ButtonType['primary'] = 'primary';
                    ButtonType['primaryGreen'] = 'primaryGreen';
                    ButtonType['primaryRed'] = 'primaryRed';
                    ButtonType['secondary'] = 'secondary';
                    ButtonType['ghost'] = 'ghost';
                })(ButtonType || (ButtonType = {}));

                let ButtonSize;

                (function (ButtonSize) {
                    ButtonSize['extraSmall'] = 'extraSmall';
                    ButtonSize['small'] = 'small';
                    ButtonSize['medium'] = 'medium';
                })(ButtonSize || (ButtonSize = {}));

                /***/
            },

        /***/ './src/components/Currency/Currency.tsx':
            /*!**********************************************!*\
  !*** ./src/components/Currency/Currency.tsx ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Currency: () => /* binding */ Currency,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./types */ './src/components/Currency/types.ts',
                );
                /* harmony import */ var components_FormatNumber_FormatNumber__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! components/FormatNumber/FormatNumber */ './src/components/FormatNumber/FormatNumber.tsx',
                    );
                /* harmony import */ var _Currency_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./Currency.css */ './src/components/Currency/Currency.css',
                );

                const CurrencyComponent = ({
                    isDiscount,
                    isInteractiveDiscount,
                    size,
                    type,
                    isEnough,
                    value,
                    discountValue,
                    showPlus,
                    stockBackgroundName = _types__WEBPACK_IMPORTED_MODULE_2__.StockBackgroundName.Red,
                }) => {
                    const valueClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].value,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`value__${type}`],
                        !isEnough && _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].value__notEnough,
                    );
                    const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].icon,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`icon__${type}-${size}`],
                    );
                    const discountClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock,
                        discountValue && _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock__indent,
                        isInteractiveDiscount &&
                            _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock__interactive,
                    );
                    const plus = showPlus && value > 0 && '+';
                    const baseClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].base,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`base__${size}`],
                    );
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                            className: baseClasses,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'span',
                            {
                                className: valueClasses,
                            },
                            plus,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                components_FormatNumber_FormatNumber__WEBPACK_IMPORTED_MODULE_3__.FormatNumber,
                                {
                                    value: value,
                                    format:
                                        type === _types__WEBPACK_IMPORTED_MODULE_2__.CurrencyType.gold
                                            ? 'gold'
                                            : 'integral',
                                },
                            ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('span', {
                            className: iconClasses,
                        }),
                        isDiscount &&
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                'span',
                                {
                                    className: discountClasses,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('span', {
                                    className: _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stockBackground,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.library.${stockBackgroundName})`,
                                    },
                                }),
                                Boolean(discountValue) && discountValue,
                            ),
                    );
                };

                CurrencyComponent.defaultProps = {
                    isEnough: true,
                };
                const Currency = react__WEBPACK_IMPORTED_MODULE_1___default().memo(CurrencyComponent);

                /***/
            },

        /***/ './src/components/Currency/types.ts':
            /*!******************************************!*\
  !*** ./src/components/Currency/types.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ CurrencySize: () => /* binding */ CurrencySize,
                    /* harmony export */ CurrencyType: () => /* binding */ CurrencyType,
                    /* harmony export */ StockBackgroundName: () => /* binding */ StockBackgroundName,
                    /* harmony export */
                });
                let CurrencySize;

                (function (CurrencySize) {
                    CurrencySize['small'] = 'small';
                    CurrencySize['big'] = 'big';
                    CurrencySize['large'] = 'large';
                    CurrencySize['extraLarge'] = 'extraLarge';
                })(CurrencySize || (CurrencySize = {}));

                let CurrencyType;

                (function (CurrencyType) {
                    CurrencyType['credits'] = 'credits';
                    CurrencyType['gold'] = 'gold';
                    CurrencyType['crystal'] = 'crystal';
                    CurrencyType['xp'] = 'xp';
                    CurrencyType['freeXP'] = 'freeXP';
                    CurrencyType['equipCoin'] = 'equipCoin';
                })(CurrencyType || (CurrencyType = {}));

                let StockBackgroundName;

                (function (StockBackgroundName) {
                    StockBackgroundName['Red'] = 'RedActionBG';
                    StockBackgroundName['Blue'] = 'BlueActionBG';
                })(StockBackgroundName || (StockBackgroundName = {}));

                /***/
            },

        /***/ './src/components/FormatNumber/FormatNumber.tsx':
            /*!******************************************************!*\
  !*** ./src/components/FormatNumber/FormatNumber.tsx ***!
  \******************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ FormatNumber: () => /* binding */ FormatNumber,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );

                class FormatNumber extends react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent {
                    render() {
                        let format;

                        switch (this.props.format) {
                            case 'gold':
                                format = lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.NumberFormatType.GOLD;
                                break;

                            case 'integral':
                            default:
                                format = lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.NumberFormatType.INTEGRAL;
                                break;
                        }

                        const numberFormat =
                            lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.SystemLocale.getNumberFormat(
                                this.props.value,
                                format,
                            );

                        if (this.props.value !== undefined && numberFormat !== undefined) {
                            return numberFormat;
                        }

                        return null;
                    }
                }

                FormatNumber.defaultProps = {
                    format: 'integral',
                };

                /***/
            },

        /***/ './src/components/FormatText/FormatText.tsx':
            /*!**************************************************!*\
  !*** ./src/components/FormatText/FormatText.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ FormatText: () => /* binding */ FormatText,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/string-utils */ './src/lib/string-utils.ts',
                );
                /* harmony import */ var _FormatText_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./FormatText.css */ './src/components/FormatText/FormatText.css',
                );

                const FormatText = ({
                    binding,
                    text = '',
                    classMix,
                    alignment = lib_string_utils__WEBPACK_IMPORTED_MODULE_2__.Alignment.left,
                }) => {
                    if (text === null) {
                        console.error("FormatText was supplied with 'null'");
                        return null;
                    }

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        null,
                        text.split('\n').map((textLine, lineId) =>
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                                        _FormatText_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                                        classMix,
                                    ),
                                    key: `${textLine}-${lineId}`,
                                },
                                (0, lib_string_utils__WEBPACK_IMPORTED_MODULE_2__.formatString)(
                                    textLine,
                                    alignment,
                                    binding,
                                ).map((text, wordId) =>
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                        {
                                            key: `${wordId}-${text}`,
                                        },
                                        text,
                                    ),
                                ),
                            ),
                        ),
                    );
                };

                /***/
            },

        /***/ './src/components/MediaQuery/MediaContext.ts':
            /*!***************************************************!*\
  !*** ./src/components/MediaQuery/MediaContext.ts ***!
  \***************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaContext: () => /* binding */ MediaContext,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./static */ './src/components/MediaQuery/static.ts',
                );
                /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./utils */ './src/components/MediaQuery/utils.ts',
                );

                const _env$client$getSize = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.client.getSize('rem'),
                    initialWidth = _env$client$getSize.width,
                    initialHeight = _env$client$getSize.height;

                const initialValue = Object.assign(
                    {
                        width: initialWidth,
                        height: initialHeight,
                    },
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getSizes)(
                        initialWidth,
                        initialHeight,
                        _static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS,
                    ),
                );
                /**
                 * Use useMedia hook from 'lib/hooks/useMedia' directly in your react components
                 *
                 * Usage and tech doc: https://confluence.wargaming.net/pages/viewpage.action?pageId=1583255544
                 *
                 * @deprecated
                 */

                const MediaContext = (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialValue);

                /***/
            },

        /***/ './src/components/MediaQuery/MediaProvider.tsx':
            /*!*****************************************************!*\
  !*** ./src/components/MediaQuery/MediaProvider.tsx ***!
  \*****************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaProvider: () => /* binding */ MediaProvider,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_hooks_useCallOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/hooks/useCallOnce */ './src/lib/hooks/useCallOnce.ts',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );
                /* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./static */ './src/components/MediaQuery/static.ts',
                );
                /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./utils */ './src/components/MediaQuery/utils.ts',
                );
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );

                const Provider = ({ children }) => {
                    const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                    );

                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(context),
                        value = _useState[0],
                        setValue = _useState[1];

                    const handleResize = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((width, height) => {
                        const preparedWidth = lib_env__WEBPACK_IMPORTED_MODULE_5__.env.view.pxToRem(width);
                        const preparedHeight = lib_env__WEBPACK_IMPORTED_MODULE_5__.env.view.pxToRem(height);
                        setValue(
                            Object.assign(
                                {
                                    width: preparedWidth,
                                    height: preparedHeight,
                                },
                                (0, _utils__WEBPACK_IMPORTED_MODULE_4__.getSizes)(
                                    preparedWidth,
                                    preparedHeight,
                                    _static__WEBPACK_IMPORTED_MODULE_3__.BREAKPOINTS,
                                ),
                            ),
                        );
                    }, []);
                    (0, lib_hooks_useCallOnce__WEBPACK_IMPORTED_MODULE_1__['default'])(() => {
                        engine.on('clientResized', handleResize);
                    });
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        return () => engine.off('clientResized', handleResize);
                    }, [handleResize]);
                    const valueAsProp = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                        () => Object.assign({}, value),
                        [value],
                    );
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext.Provider,
                        {
                            value: valueAsProp,
                        },
                        children,
                    );
                };

                const MediaProvider = (0, react__WEBPACK_IMPORTED_MODULE_0__.memo)(Provider);

                /***/
            },

        /***/ './src/components/MediaQuery/MediaQuery.tsx':
            /*!**************************************************!*\
  !*** ./src/components/MediaQuery/MediaQuery.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaQuery: () => /* binding */ MediaQuery,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _getByHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./getByHeight */ './src/components/MediaQuery/getByHeight.tsx',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );
                const _excluded = ['children'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const defaultProps = {
                    extraLarge: false,
                    large: false,
                    medium: false,
                    small: false,
                    extraSmall: false,
                    extraLargeWidth: false,
                    largeWidth: false,
                    mediumWidth: false,
                    smallWidth: false,
                    extraSmallWidth: false,
                    extraLargeHeight: false,
                    largeHeight: false,
                    mediumHeight: false,
                    smallHeight: false,
                    extraSmallHeight: false,
                };

                const Media = (_ref) => {
                    let children = _ref.children,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                            _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                        ),
                        extraLarge = _useContext.extraLarge,
                        large = _useContext.large,
                        medium = _useContext.medium,
                        small = _useContext.small,
                        extraSmall = _useContext.extraSmall,
                        extraLargeWidth = _useContext.extraLargeWidth,
                        largeWidth = _useContext.largeWidth,
                        mediumWidth = _useContext.mediumWidth,
                        smallWidth = _useContext.smallWidth,
                        extraSmallWidth = _useContext.extraSmallWidth,
                        extraLargeHeight = _useContext.extraLargeHeight,
                        largeHeight = _useContext.largeHeight,
                        mediumHeight = _useContext.mediumHeight,
                        smallHeight = _useContext.smallHeight,
                        extraSmallHeight = _useContext.extraSmallHeight;

                    const breakpointProps = {
                        extraLarge: extraLargeHeight,
                        large: largeHeight,
                        medium: mediumHeight,
                        small: smallHeight,
                        extraSmall: extraSmallHeight,
                    };

                    if (rest.extraLarge || rest.large || rest.medium || rest.small || rest.extraSmall) {
                        if (rest.extraLarge && extraLarge) {
                            return children;
                        }

                        if (rest.large && large) {
                            return children;
                        }

                        if (rest.medium && medium) {
                            return children;
                        }

                        if (rest.small && small) {
                            return children;
                        }

                        if (rest.extraSmall && extraSmall) {
                            return children;
                        }
                    } else {
                        if (rest.extraLargeWidth && extraLargeWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.largeWidth && largeWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.mediumWidth && mediumWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.smallWidth && smallWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.extraSmallWidth && extraSmallWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (
                            !rest.extraLargeWidth &&
                            !rest.largeWidth &&
                            !rest.mediumWidth &&
                            !rest.smallWidth &&
                            !rest.extraSmallWidth
                        ) {
                            if (rest.extraLargeHeight && extraLargeHeight) {
                                return children;
                            }

                            if (rest.largeHeight && largeHeight) {
                                return children;
                            }

                            if (rest.mediumHeight && mediumHeight) {
                                return children;
                            }

                            if (rest.smallHeight && smallHeight) {
                                return children;
                            }

                            if (rest.extraSmallHeight && extraSmallHeight) {
                                return children;
                            }
                        }
                    }

                    return null;
                };

                Media.defaultProps = defaultProps;
                const MediaQuery = (0, react__WEBPACK_IMPORTED_MODULE_0__.memo)(Media);

                /***/
            },

        /***/ './src/components/MediaQuery/getByHeight.tsx':
            /*!***************************************************!*\
  !*** ./src/components/MediaQuery/getByHeight.tsx ***!
  \***************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getByHeight: () => /* binding */ getByHeight,
                    /* harmony export */
                });
                const getByHeight = (children, rest, breakpointProps) => {
                    if (
                        !rest.extraLargeHeight &&
                        !rest.largeHeight &&
                        !rest.mediumHeight &&
                        !rest.smallHeight &&
                        !rest.extraSmallHeight
                    ) {
                        return children;
                    }

                    if (rest.extraLargeHeight && breakpointProps.extraLarge) {
                        return children;
                    }

                    if (rest.largeHeight && breakpointProps.large) {
                        return children;
                    }

                    if (rest.mediumHeight && breakpointProps.medium) {
                        return children;
                    }

                    if (rest.smallHeight && breakpointProps.small) {
                        return children;
                    }

                    if (rest.extraSmallHeight && breakpointProps.extraSmall) {
                        return children;
                    }

                    return null;
                };

                /***/
            },

        /***/ './src/components/MediaQuery/index.ts':
            /*!********************************************!*\
  !*** ./src/components/MediaQuery/index.ts ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaContext: () =>
                        /* reexport safe */ _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                    /* harmony export */ MediaProvider: () =>
                        /* reexport safe */ _MediaProvider__WEBPACK_IMPORTED_MODULE_1__.MediaProvider,
                    /* harmony export */ MediaQuery: () =>
                        /* reexport safe */ _MediaQuery__WEBPACK_IMPORTED_MODULE_0__.MediaQuery,
                    /* harmony export */
                });
                /* harmony import */ var _MediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./MediaQuery */ './src/components/MediaQuery/MediaQuery.tsx',
                );
                /* harmony import */ var _MediaProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./MediaProvider */ './src/components/MediaQuery/MediaProvider.tsx',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );

                /***/
            },

        /***/ './src/components/MediaQuery/static.ts':
            /*!*********************************************!*\
  !*** ./src/components/MediaQuery/static.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BREAKPOINTS: () => /* binding */ BREAKPOINTS,
                    /* harmony export */
                });
                const BREAKPOINTS = {
                    extraLarge: {
                        weight: 4,
                        width: 2560,
                        height: 1440,
                    },
                    large: {
                        weight: 3,
                        width: 1920,
                        height: 1080,
                    },
                    medium: {
                        weight: 2,
                        width: 1600,
                        height: 900,
                    },
                    small: {
                        weight: 1,
                        width: 1366,
                        height: 768,
                    },
                    extraSmall: {
                        weight: 0,
                        width: 1024,
                        height: 768,
                    },
                };

                /***/
            },

        /***/ './src/components/MediaQuery/utils.ts':
            /*!********************************************!*\
  !*** ./src/components/MediaQuery/utils.ts ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Sizes: () => /* binding */ Sizes,
                    /* harmony export */ getSizes: () => /* binding */ getSizes,
                    /* harmony export */
                });
                function getWidthBPWeight(width, breakpoints) {
                    switch (true) {
                        case width >= breakpoints.extraLarge.width:
                            return breakpoints.extraLarge.weight;

                        case width >= breakpoints.large.width && width < breakpoints.extraLarge.width:
                            return breakpoints.large.weight;

                        case width >= breakpoints.medium.width && width < breakpoints.large.width:
                            return breakpoints.medium.weight;

                        case width >= breakpoints.small.width && width < breakpoints.medium.width:
                            return breakpoints.small.weight;

                        default:
                            return breakpoints.extraSmall.weight;
                    }
                }

                function getHeightBPWeight(height, breakpoints) {
                    switch (true) {
                        case height >= breakpoints.extraLarge.height:
                            return breakpoints.extraLarge.weight;

                        case height >= breakpoints.large.height && height < breakpoints.extraLarge.height:
                            return breakpoints.large.weight;

                        case height >= breakpoints.medium.height && height < breakpoints.large.height:
                            return breakpoints.medium.weight;

                        case height >= breakpoints.small.height && height < breakpoints.medium.height:
                            return breakpoints.small.weight;

                        default:
                            return breakpoints.extraSmall.weight;
                    }
                }

                var Sizes;

                (function (Sizes) {
                    Sizes['extraLarge'] = 'extraLarge';
                    Sizes['large'] = 'large';
                    Sizes['medium'] = 'medium';
                    Sizes['small'] = 'small';
                    Sizes['extraSmall'] = 'extraSmall';
                    Sizes['extraLargeWidth'] = 'extraLargeWidth';
                    Sizes['largeWidth'] = 'largeWidth';
                    Sizes['mediumWidth'] = 'mediumWidth';
                    Sizes['smallWidth'] = 'smallWidth';
                    Sizes['extraSmallWidth'] = 'extraSmallWidth';
                    Sizes['extraLargeHeight'] = 'extraLargeHeight';
                    Sizes['largeHeight'] = 'largeHeight';
                    Sizes['mediumHeight'] = 'mediumHeight';
                    Sizes['smallHeight'] = 'smallHeight';
                    Sizes['extraSmallHeight'] = 'extraSmallHeight';
                })(Sizes || (Sizes = {}));

                function getSizes(width, height, breakpoints) {
                    const widthBPWeight = getWidthBPWeight(width, breakpoints);
                    const heightBPWeight = getHeightBPWeight(height, breakpoints);
                    const weight = Math.min(widthBPWeight, heightBPWeight);
                    return {
                        extraLarge: weight === breakpoints.extraLarge.weight,
                        large: weight === breakpoints.large.weight,
                        medium: weight === breakpoints.medium.weight,
                        small: weight === breakpoints.small.weight,
                        extraSmall: weight === breakpoints.extraSmall.weight,
                        extraLargeWidth: widthBPWeight === breakpoints.extraLarge.weight,
                        largeWidth: widthBPWeight === breakpoints.large.weight,
                        mediumWidth: widthBPWeight === breakpoints.medium.weight,
                        smallWidth: widthBPWeight === breakpoints.small.weight,
                        extraSmallWidth: widthBPWeight === breakpoints.extraSmall.weight,
                        extraLargeHeight: heightBPWeight === breakpoints.extraLarge.weight,
                        largeHeight: heightBPWeight === breakpoints.large.weight,
                        mediumHeight: heightBPWeight === breakpoints.medium.weight,
                        smallHeight: heightBPWeight === breakpoints.small.weight,
                        extraSmallHeight: heightBPWeight === breakpoints.extraSmall.weight,
                    };
                }

                /***/
            },

        /***/ './src/components/NumericStepper/NumericStepper.tsx':
            /*!**********************************************************!*\
  !*** ./src/components/NumericStepper/NumericStepper.tsx ***!
  \**********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ NumericStepper: () => /* binding */ NumericStepper,
                    /* harmony export */
                });
                /* harmony import */ var lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/mouse-selection.js */ './src/lib/mouse-selection.js',
                );
                /* harmony import */ var lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var lib_number_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! lib/number-keycodes */ './src/lib/number-keycodes.ts',
                );
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./NumericStepper.css */ './src/components/NumericStepper/NumericStepper.css',
                );

                const SPEED = 50;
                const DELAY = 300;
                const VALIDATION_DELAY = 1000;
                const SOUND_HOVER = 'highlight';
                const SOUND_CLICK = 'play';

                const getStepperStyle = (width) =>
                    width
                        ? {
                              width: `${width}rem`,
                          }
                        : {};

                class NumericStepper extends react__WEBPACK_IMPORTED_MODULE_6___default().PureComponent {
                    constructor(...args) {
                        super(...args);
                        this.timer = null;
                        this.validationTimer = null;
                        this.numericalStepper = (0, react__WEBPACK_IMPORTED_MODULE_6__.createRef)();
                        this.input = (0, react__WEBPACK_IMPORTED_MODULE_6__.createRef)();
                        this.state = {
                            value: this.props.value,
                            isFocused: this.props.isFocused,
                            activeDecrement: false,
                            activeIncrement: false,
                        };

                        this.setFocusOnInput = () => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            if (this.input.current) {
                                this.input.current.focus();
                                this.setState({
                                    isFocused: true,
                                });
                            }
                        };

                        this.blurInput = () => {
                            if (this.input.current) {
                                this.input.current.blur();
                                this.setState({
                                    isFocused: false,
                                });
                            }
                        };

                        this.componentDidMount = () => {
                            if (this.state.isFocused) {
                                this.setFocusOnInput();
                                setTimeout(() => {
                                    const valueLen = this.formattedValue.length;
                                    this.input.current && this.input.current.setSelectionRange(valueLen, valueLen);
                                }, 0);
                            }

                            document.addEventListener('click', this.handleClickOutside);
                            document.addEventListener('mouseup', this.handleMouseUp);
                        };

                        this.componentWillUnmount = () => {
                            this.stop();
                            document.removeEventListener('click', this.handleClickOutside);
                            document.removeEventListener('mouseup', this.handleMouseUp);
                        };

                        this.formatValue = (value) => {
                            return this.props.currencyType
                                ? lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.SystemLocale.getNumberFormat(
                                      value,
                                      lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType.GOLD,
                                  )
                                : value.toString();
                        };

                        this.getValidValue = (value) => {
                            const boundedValue = Math.min(this.props.maximum, Math.max(this.props.minimum, value));
                            const stepSize = this.props.stepSize;
                            return Math.round(boundedValue / stepSize) * stepSize;
                        };

                        this.changeValue = (value) => {
                            if (value !== this.state.value) {
                                this.setState({
                                    value: value,
                                });
                                this.props.onChange(value);
                            }
                        };

                        this.setCursorPosition = (cursorStart, cursorEnd) => {
                            this.input.current && this.input.current.setSelectionRange(cursorStart, cursorEnd);
                            setTimeout(() => {
                                this.input.current && this.input.current.setSelectionRange(cursorStart, cursorEnd);
                            });
                        };

                        this.handleChange = () => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            this.updateInput();
                        };

                        this.updateInput = (keyCode = 0) => {
                            const isBackspaceKey =
                                keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.BACKSPACE;
                            const isDeleteKey = keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE;
                            const input = this.input.current;
                            const selectionStart = input.selectionStart || 0;
                            const selectionEnd = input.selectionEnd || 0;
                            let currentValue = input.value;
                            const currentCursorPosition = Math.max(selectionStart, selectionEnd);
                            const expectedCursorPosition = currentCursorPosition;

                            if (isDeleteKey) {
                                currentValue =
                                    currentValue.substring(0, currentCursorPosition) +
                                    currentValue.substring(currentCursorPosition + 1, currentValue.length);
                            }

                            if (isBackspaceKey && selectionStart === 1 && currentValue.length === 1) {
                                currentValue = '0';
                            }

                            const currentNum = Number(currentValue.trim().replace(/\D/g, ''));
                            const newValue = Number.isSafeInteger(currentNum) ? currentNum : Number.MAX_SAFE_INTEGER;
                            const formattedValue = this.props.currencyType
                                ? lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.SystemLocale.getNumberFormat(
                                      newValue,
                                      lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType.GOLD,
                                  )
                                : newValue.toString();
                            const isValueNumeric = !isNaN(Number(currentValue.replace('\u00A0', '')));
                            input.value = formattedValue;
                            const numRegex = new RegExp(/\d/g);
                            let updatedCursorPosition = 0;

                            for (let i = 0; i < expectedCursorPosition; i++) {
                                const currentInputChar = currentValue[i] || '';
                                const currentFormatChar = formattedValue[updatedCursorPosition] || '';

                                if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
                                    continue;
                                }

                                while (
                                    currentInputChar !== formattedValue[updatedCursorPosition] &&
                                    updatedCursorPosition < formattedValue.length
                                ) {
                                    updatedCursorPosition++;
                                }

                                updatedCursorPosition++;
                            }

                            if (currentValue === '') {
                                updatedCursorPosition = 1;
                            } else if (!isValueNumeric) {
                                updatedCursorPosition = currentValue.length;
                            }

                            this.input.current && this.input.current.setSelectionRange(0, 0);
                            this.setCursorPosition(updatedCursorPosition, updatedCursorPosition);
                            this.changeValue(newValue);
                            this.validationTimer && clearTimeout(this.validationTimer);
                            this.validationTimer = setTimeout(() => {
                                const checkedValue = this.getValidValue(newValue);

                                if (checkedValue !== newValue && this.state.isFocused) {
                                    this.changeValue(this.getValidValue(newValue));
                                    this.setCursorPosition(0, this.formatValue(newValue).length);
                                }
                            }, VALIDATION_DELAY);
                        };

                        this.handleDelete = (event) => {
                            const isBackspace =
                                event.keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.BACKSPACE;
                            const isDelete =
                                event.keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE;
                            const _ref = event.target,
                                selectionStart = _ref.selectionStart,
                                selectionEnd = _ref.selectionEnd,
                                value = _ref.value;
                            const isTextSelection = selectionStart !== selectionEnd;
                            const separatorRegExp = new RegExp(/\D/);
                            const expectedCursorPosition =
                                isBackspace && selectionStart ? selectionStart - 1 : selectionStart || 0;

                            if (isTextSelection) {
                                return;
                            }

                            let updatedCursorPosition = expectedCursorPosition;
                            const isDeleteSeparator = separatorRegExp.test(value[expectedCursorPosition]);

                            if (isDelete && isDeleteSeparator) {
                                while (
                                    separatorRegExp.test(value[updatedCursorPosition]) &&
                                    updatedCursorPosition < value.length
                                ) {
                                    updatedCursorPosition++;
                                }
                            }

                            if (isBackspace && isDeleteSeparator) {
                                while (
                                    separatorRegExp.test(value[updatedCursorPosition]) &&
                                    updatedCursorPosition > 0
                                ) {
                                    updatedCursorPosition--;
                                }
                            }

                            if (
                                updatedCursorPosition !== expectedCursorPosition ||
                                (isBackspace && isDeleteSeparator)
                            ) {
                                event.preventDefault();
                                updatedCursorPosition = updatedCursorPosition < 0 ? 0 : updatedCursorPosition;
                                this.setCursorPosition(updatedCursorPosition, updatedCursorPosition);
                                return;
                            }

                            if ((isBackspace && selectionStart === 1 && value.length === 1) || isDelete) {
                                event.preventDefault();
                                this.updateInput(event.keyCode);
                            }
                        };

                        this.handleClickOutside = (event) => {
                            const curElement = document.activeElement;

                            if (
                                this.state.isFocused &&
                                curElement !== this.input.current &&
                                this.numericalStepper.current !== null &&
                                !this.numericalStepper.current.contains(event.target)
                            ) {
                                this.setState({
                                    isFocused: false,
                                });
                            }
                        };

                        this.handleBlur = () => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            const validValue = this.getValidValue(this.state.value);

                            if (validValue !== this.state.value) {
                                this.changeValue(validValue);
                            }
                        };

                        this.handleWheel = (event) => {
                            if (this.props.isDisabled || !this.state.isFocused) {
                                return;
                            }

                            event.preventDefault();
                            const wheelingDown = event.deltaY < 0;

                            if (wheelingDown) {
                                this.decrement();
                            } else {
                                this.increment();
                            }
                        };

                        this.handleMouseUp = () => {
                            this.stop();
                            this.setState({
                                activeIncrement: false,
                                activeDecrement: false,
                            });
                        };

                        this.handleMouseLeave = () => {
                            this.stop();
                        };

                        this.incrementHandleMouseEnter = (event) => {
                            if (this.state.activeIncrement) {
                                this.incrementHandleMouseDown(event, true);
                            }

                            if (!this.buttonIncrementIsDisabled) {
                                this.playHoverSound();
                            }
                        };

                        this.decrementHandleMouseEnter = (event) => {
                            if (this.state.activeDecrement) {
                                this.decrementHandleMouseDown(event, true);
                            }

                            if (!this.buttonDecrementIsDisabled) {
                                this.playHoverSound();
                            }
                        };

                        this.handleKeyDown = (event) => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            if (
                                event.keyCode in lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES &&
                                event.keyCode !== lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.BACKSPACE &&
                                event.keyCode !== lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE
                            ) {
                                event.preventDefault();
                            }

                            switch (event.keyCode) {
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_UP:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.NUM_PLUS:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.PLUS:
                                    if (!this.state.activeIncrement) {
                                        this.setState({
                                            activeIncrement: true,
                                        });
                                    }

                                    this.increment();
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_DOWN:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.NUM_MINUS:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.MINUS:
                                    if (!this.state.activeDecrement) {
                                        this.setState({
                                            activeDecrement: true,
                                        });
                                    }

                                    this.decrement();
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.HOME:
                                    this.changeValue(this.props.minimum);
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.END:
                                    this.changeValue(this.props.maximum);
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ENTER:
                                    event.nativeEvent.stopImmediatePropagation();

                                    if (this.state.value >= this.props.maximum) {
                                        const valueLen = this.formatValue(this.props.maximum).length;
                                        this.changeValue(this.props.maximum);
                                        this.setCursorPosition(0, valueLen);
                                    }

                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.PAGE_UP:
                                    this.changeValue(this.props.maximum);
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.PAGE_DOWN:
                                    this.changeValue(this.props.minimum);
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.BACKSPACE:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE:
                                    this.handleDelete(event);
                                    break;
                            }

                            this.props.onKeyDown(event);
                        };

                        this.handleKeyUp = (event) => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            switch (event.keyCode) {
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_UP:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.NUM_PLUS:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.PLUS:
                                    this.setState({
                                        activeIncrement: false,
                                    });
                                    break;

                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_DOWN:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.NUM_MINUS:
                                case lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.MINUS:
                                    this.setState({
                                        activeDecrement: false,
                                    });
                                    break;
                            }
                        };

                        this.allowOnlyNumbers = (event) => {
                            const isNumber =
                                event.which in lib_number_keycodes__WEBPACK_IMPORTED_MODULE_3__.NUMBER_KEY_CODES;

                            if (!isNumber) {
                                event.preventDefault();
                            }
                        };

                        this.increment = () => {
                            const nextValue = Math.min(
                                this.getValidValue(this.state.value) + this.props.stepSize,
                                this.props.maximum,
                            );
                            this.changeValue(nextValue);
                        };

                        this.decrement = () => {
                            const nextValue = Math.max(
                                this.getValidValue(this.state.value) - this.props.stepSize,
                                this.props.minimum,
                            );
                            this.changeValue(nextValue);
                        };

                        this.incrementHandleMouseDown = (event, isRecursiveCall = false) => {
                            if (this.buttonIncrementIsDisabled) {
                                return;
                            }

                            event.persist();
                            event.preventDefault();
                            this.stop();
                            this.setFocusOnInput();

                            if (this.state.value < this.props.maximum) {
                                !isRecursiveCall && this.playClickSound();

                                if (event.button === 0 || isRecursiveCall) {
                                    this.increment();
                                    this.timer = setTimeout(
                                        () => {
                                            this.incrementHandleMouseDown(event, true);
                                        },
                                        isRecursiveCall ? SPEED : DELAY,
                                    );
                                    this.setState({
                                        activeIncrement: true,
                                    });
                                }
                            }
                        };

                        this.decrementHandleMouseDown = (event, isRecursiveCall = false) => {
                            if (this.buttonDecrementIsDisabled) {
                                return;
                            }

                            event.persist();
                            event.preventDefault();
                            this.stop();
                            this.setFocusOnInput();

                            if (this.state.value > this.props.minimum) {
                                !isRecursiveCall && this.playClickSound();

                                if (event.button === 0 || isRecursiveCall) {
                                    this.decrement();
                                    this.timer = setTimeout(
                                        () => {
                                            this.decrementHandleMouseDown(event, true);
                                        },
                                        isRecursiveCall ? SPEED : DELAY,
                                    );
                                    this.setState({
                                        activeDecrement: true,
                                    });
                                }
                            }
                        };

                        this.playHoverSound = () => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            (0, lib_sound__WEBPACK_IMPORTED_MODULE_4__.playSound)(SOUND_HOVER);
                        };

                        this.playClickSound = () => {
                            if (this.props.isDisabled) {
                                return;
                            }

                            (0, lib_sound__WEBPACK_IMPORTED_MODULE_4__.playSound)(SOUND_CLICK);
                        };

                        this.stop = () => {
                            this.timer && clearTimeout(this.timer);
                            this.timer = null;
                        };
                    }

                    componentDidUpdate(_, prevState) {
                        const _this$state = this.state,
                            value = _this$state.value,
                            isFocused = _this$state.isFocused;

                        if (value !== prevState.value && isFocused) {
                            const valueLen = this.formattedValue.length;
                            const startPosition = this.input.current && this.input.current.selectionStart;
                            const endPosition = this.input.current && this.input.current.selectionEnd;
                            const start = startPosition === endPosition ? valueLen : startPosition || 0;

                            if (startPosition === 0 && endPosition === valueLen) {
                                this.input.current && this.input.current.setSelectionRange(valueLen, valueLen);
                            } else {
                                this.input.current && this.input.current.setSelectionRange(start, valueLen);
                            }
                        }
                    }

                    componentWillReceiveProps({ value, isFocused }) {
                        if (value !== this.props.value) {
                            this.setState({
                                value: value,
                            });
                        }

                        if (isFocused !== this.props.isFocused) {
                            this.setState({
                                isFocused: isFocused,
                            });

                            if (isFocused) {
                                this.setFocusOnInput();
                                this.setCursorPosition(0, this.formattedValue.length);
                            } else {
                                this.blurInput();
                            }
                        }
                    }

                    get formattedValue() {
                        return this.props.currencyType
                            ? lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.SystemLocale.getNumberFormat(
                                  this.state.value,
                                  lib_view_env_helper__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType.GOLD,
                              )
                            : this.state.value.toString();
                    }

                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }

                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }

                    render() {
                        const _this$props = this.props,
                            isDisabled = _this$props.isDisabled,
                            size = _this$props.size,
                            currencyType = _this$props.currencyType;
                        const baseClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].base,
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][`base__${size}`],
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `base__withCurrency-${size}`
                                ],
                            isDisabled && _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].base__isDisabled,
                            this.state.isFocused &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].base__isFocus,
                        );
                        const classButtonIncrement = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].buttonIncrement,
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][`buttonIncrement__${size}`],
                            this.buttonIncrementIsDisabled &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].buttonIncrement__isDisabled,
                            this.state.activeIncrement &&
                                !this.buttonIncrementIsDisabled &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `buttonIncrement__isActive-${this.props.size}`
                                ],
                        );
                        const classButtonDecrement = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].buttonDecrement,
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][`buttonDecrement__${size}`],
                            this.buttonDecrementIsDisabled &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].buttonDecrement__isDisabled,
                            this.state.activeDecrement &&
                                !this.buttonDecrementIsDisabled &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `buttonDecrement__isActive-${this.props.size}`
                                ],
                        );
                        const classInput = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].input,
                            isDisabled && _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].input__disabled,
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].input__withCurrency,
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `input__${currencyType}-${size}`
                                ],
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][`input__${currencyType}`],
                            currencyType &&
                                isDisabled &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `input__${currencyType}-disabled`
                                ],
                        );
                        const classIcon = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].currencyIcon,
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `currencyIcon__${currencyType}-${size}`
                                ],
                        );
                        const classCurrency = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].currency,
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `currency__${currencyType}`
                                ],
                            currencyType &&
                                _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'][
                                    `currency__${currencyType}-${size}`
                                ],
                        );
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                            'div',
                            {
                                className: baseClassNames,
                                ref: this.numericalStepper,
                                style: getStepperStyle(this.props.width),
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                'div',
                                {
                                    className:
                                        _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].inputContainer,
                                },
                                currencyType &&
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        'div',
                                        {
                                            className: classCurrency,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            'span',
                                            {
                                                className:
                                                    _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default']
                                                        .dummyValue,
                                            },
                                            this.formattedValue,
                                        ),
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            'span',
                                            {
                                                className: classIcon,
                                            },
                                        ),
                                    ),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('input', {
                                    ref: this.input,
                                    className: classInput,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: isDisabled,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                'div',
                                {
                                    className: _NumericStepper_css__WEBPACK_IMPORTED_MODULE_7__['default'].control,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                    className: classButtonIncrement,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                    className: classButtonDecrement,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                    }
                }

                NumericStepper.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: true,
                    isDisabled: false,
                    onChange: () => null,
                    onKeyDown: () => null,
                };

                /***/
            },

        /***/ './src/components/Rewards/constants.ts':
            /*!*********************************************!*\
  !*** ./src/components/Rewards/constants.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BonusNames: () => /* binding */ BonusNames,
                    /* harmony export */ HighlightClasses: () => /* binding */ HighlightClasses,
                    /* harmony export */ ImageSize: () => /* binding */ ImageSize,
                    /* harmony export */ OverlayClasses: () => /* binding */ OverlayClasses,
                    /* harmony export */ RewardType: () => /* binding */ RewardType,
                    /* harmony export */ Specials: () => /* binding */ Specials,
                    /* harmony export */ ValueTypes: () => /* binding */ ValueTypes,
                    /* harmony export */
                });
                let RewardType; // TODO: looks like we have to do some refactoring for rewards in FE and GP sides

                (function (RewardType) {
                    RewardType['Items'] = 'items';
                    RewardType['Equipment'] = 'equipment';
                    RewardType['Xp'] = 'xp';
                    RewardType['XpFactor'] = 'xpFactor';
                    RewardType['Blueprints'] = 'blueprints';
                    RewardType['BlueprintsAny'] = 'blueprintsAny';
                    RewardType['Goodies'] = 'goodies';
                    RewardType['Berths'] = 'berths';
                    RewardType['Slots'] = 'slots';
                    RewardType['Tokens'] = 'tokens';
                    RewardType['CrewSkins'] = 'crewSkins';
                    RewardType['CrewBooks'] = 'crewBooks';
                    RewardType['Customizations'] = 'customizations';
                    RewardType['CreditsFactor'] = 'creditsFactor';
                    RewardType['Currency'] = 'currency';
                    RewardType['TankmenXp'] = 'tankmenXP';
                    RewardType['TankmenXpFactor'] = 'tankmenXPFactor';
                    RewardType['FreeXpFactor'] = 'freeXPFactor';
                    RewardType['BattleToken'] = 'battleToken';
                    RewardType['PremiumUniversal'] = 'premium_universal';
                    RewardType['Gold'] = 'gold';
                    RewardType['Credits'] = 'credits';
                    RewardType['Crystal'] = 'crystal';
                    RewardType['FreeXp'] = 'freeXP';
                    RewardType['Premium'] = 'premium';
                    RewardType['PremiumPlus'] = 'premium_plus';
                    RewardType['BattlePassPoints'] = 'battlePassPoints';
                    RewardType['BattlePassSelectToken'] = 'battlePassSelectToken';
                    RewardType['StyleProgressToken'] = 'styleProgressToken';
                    RewardType['TmanToken'] = 'tmanToken';
                    RewardType['NaturalCover'] = 'naturalCover';
                    RewardType['BpCoin'] = 'bpcoin';
                    RewardType['BattlaPassFinalAchievement'] = 'dossier_achievement';
                    RewardType['BattleBadge'] = 'dossier_badge';
                    RewardType['NewYearAlbumsAccess'] = 'newYearAlbumsAccess';
                    RewardType['NewYearFillers'] = 'ny22Fillers';
                    RewardType['NewYearInvoice'] = 'newYearInvoice';
                    RewardType['NewYearToyFragments'] = 'ny22ToyFragments';
                    RewardType['NewYearSlot'] = 'newYearSlot';
                    RewardType['BonusX5'] = 'battle_bonus_x5';
                    RewardType['CrewBonusX3'] = 'crew_bonus_x3';
                    RewardType['Vehicles'] = 'vehicles';
                    RewardType['EpicSelectToken'] = 'epicSelectToken';
                    RewardType['CollectionItem'] = 'collectionItem';
                    RewardType['Comp7TokenWeeklyReward'] = 'comp7TokenWeeklyReward';
                    RewardType['Comp7TokenCouponReward'] = 'comp7TokenCouponReward';
                    RewardType['BattleBoosterGift'] = 'battleBooster_gift';
                    RewardType['CosmicLootboxSilver'] = 'lootBoxToken';
                    RewardType['CosmicLootboxCommon'] = 'cosmic_2024_2';
                })(RewardType || (RewardType = {}));

                let BonusNames;

                (function (BonusNames) {
                    BonusNames['Gold'] = 'gold';
                    BonusNames['Credits'] = 'credits';
                    BonusNames['Crystal'] = 'crystal';
                    BonusNames['Premium'] = 'premium';
                    BonusNames['PremiumPlus'] = 'premium_plus';
                    BonusNames['Vehicles'] = 'vehicles';
                    BonusNames['Customizations'] = 'customizations';
                    BonusNames['Blueprints'] = 'blueprints';
                    BonusNames['BlueprintsAny'] = 'blueprintsAny';
                    BonusNames['BlueprintsFinal'] = 'finalBlueprints';
                    BonusNames['Goodies'] = 'goodies';
                    BonusNames['CrewSkins'] = 'crewSkins';
                    BonusNames['Xp'] = 'xp';
                    BonusNames['XpFactor'] = 'xpFactor';
                    BonusNames['FreeXp'] = 'freeXP';
                    BonusNames['FreeXPFactor'] = 'freeXPFactor';
                    BonusNames['TankmenXP'] = 'tankmenXP';
                    BonusNames['TankmenXPFactor'] = 'tankmenXPFactor';
                    BonusNames['DailyXPFactor'] = 'dailyXPFactor';
                    BonusNames['CreditsFactor'] = 'creditsFactor';
                    BonusNames['Items'] = 'items';
                    BonusNames['StrBonus'] = 'strBonus';
                    BonusNames['Groups'] = 'groups';
                    BonusNames['Berths'] = 'berths';
                    BonusNames['Slots'] = 'slots';
                    BonusNames['Meta'] = 'meta';
                    BonusNames['Tokens'] = 'tokens';
                    BonusNames['Dossier'] = 'dossier';
                    BonusNames['OneOf'] = 'oneof';
                    BonusNames['PremiumUniversal'] = 'premium_universal';
                    BonusNames['BadgesGroup'] = 'badgesGroup';
                    BonusNames['Entitlements'] = 'entitlements';
                    BonusNames['RankedDailyBattles'] = 'rankedDailyBattles';
                    BonusNames['RankedBonusBattles'] = 'rankedBonusBattles';
                    BonusNames['BattlePassPoints'] = 'battlePassPoints';
                    BonusNames['BattleBadge'] = 'dossier_badge';
                    BonusNames['BattleAchievement'] = 'dossier_achievement';
                })(BonusNames || (BonusNames = {}));

                let ImageSize;

                (function (ImageSize) {
                    ImageSize['Big'] = 'big';
                    ImageSize['Small'] = 'small';
                    ImageSize['Mini'] = 'mini';
                    ImageSize['S600x450'] = 's600x450';
                    ImageSize['S400x300'] = 's400x300';
                    ImageSize['S296x222'] = 's296x222';
                    ImageSize['S232x174'] = 's232x174';
                    ImageSize['S180x135'] = 's180x135';
                    ImageSize['S128x100'] = 's128x100';
                    ImageSize['S80x80'] = 's80x80';
                    ImageSize['S48x48'] = 's48x48';
                })(ImageSize || (ImageSize = {}));

                let ValueTypes;

                (function (ValueTypes) {
                    ValueTypes['MULTI'] = 'multi';
                    ValueTypes['CURRENCY'] = 'currency';
                    ValueTypes['PREMIUM_PLUS'] = 'premium_plus';
                    ValueTypes['NUMBER'] = 'number';
                    ValueTypes['STRING'] = 'string';
                })(ValueTypes || (ValueTypes = {}));

                let Specials;

                (function (Specials) {
                    Specials['BATTLE_BOOSTER'] = 'battleBooster';
                    Specials['BATTLE_BOOSTER_REPLACE'] = 'battleBoosterReplace';
                    Specials['BUILT_IN_EQUIPMENT'] = 'builtInEquipment';
                    Specials['EQUIPMENT_PLUS'] = 'equipmentPlus';
                    Specials['EQUIPMENT_TROPHY_BASIC'] = 'equipmentTrophyBasic';
                    Specials['EQUIPMENT_TROPHY_UPGRADED'] = 'equipmentTrophyUpgraded';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_1'] = 'equipmentModernized_1';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_2'] = 'equipmentModernized_2';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_3'] = 'equipmentModernized_3';
                    Specials['PROGRESSION_STYLE_UPGRADED_1'] = 'progressionStyleUpgraded_1';
                    Specials['PROGRESSION_STYLE_UPGRADED_2'] = 'progressionStyleUpgraded_2';
                    Specials['PROGRESSION_STYLE_UPGRADED_3'] = 'progressionStyleUpgraded_3';
                    Specials['PROGRESSION_STYLE_UPGRADED_4'] = 'progressionStyleUpgraded_4';
                })(Specials || (Specials = {}));

                let HighlightClasses;

                (function (HighlightClasses) {
                    HighlightClasses['BATTLE_BOOSTER'] = 'battleBooster';
                })(HighlightClasses || (HighlightClasses = {}));

                let OverlayClasses;

                (function (OverlayClasses) {
                    OverlayClasses['BATTLE_BOOSTER'] = 'battleBooster';
                    OverlayClasses['BATTLE_BOOSTER_REPLACE'] = 'battleBoosterReplace';
                    OverlayClasses['BUILT_IN_EQUIPMENT'] = 'builtInEquipment';
                    OverlayClasses['EQUIPMENT_PLUS'] = 'equipmentPlus';
                    OverlayClasses['EQUIPMENT_TROPHY_BASIC'] = 'equipmentTrophyBasic';
                    OverlayClasses['EQUIPMENT_TROPHY_UPGRADED'] = 'equipmentTrophyUpgraded';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_1'] = 'equipmentModernized_1';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_2'] = 'equipmentModernized_2';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_3'] = 'equipmentModernized_3';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_1'] = 'progressionStyleUpgraded_1';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_2'] = 'progressionStyleUpgraded_2';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_3'] = 'progressionStyleUpgraded_3';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_4'] = 'progressionStyleUpgraded_4';
                })(OverlayClasses || (OverlayClasses = {}));

                /***/
            },

        /***/ './src/components/TextButton/TextButton.tsx':
            /*!**************************************************!*\
  !*** ./src/components/TextButton/TextButton.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TextButton: () => /* binding */ TextButton,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var _TextButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./TextButton.css */ './src/components/TextButton/TextButton.css',
                );
                const _excluded = [
                    'caption',
                    'onClick',
                    'goto',
                    'side',
                    'type',
                    'classNames',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'soundClick',
                    'soundHover',
                ];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                /* eslint-disable react/no-unused-state */
                // waiting for focus implement

                /**
                 * @link https://confluence.wargaming.net/pages/viewpage.action?pageId=712582882
                 * what back_shine is used when button doesn't have any text?
                 * text shadow not enough
                 */
                class TextButton extends react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent {
                    constructor(...args) {
                        super(...args);
                        this.state = {
                            hover: false,
                            click: false,
                        };

                        this._onMouseEnter = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                hover: true,
                            });

                            if (this.props.soundHover) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_2__.playSound)(this.props.soundHover);
                            }
                        };

                        this._onMouseLeave = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                hover: false,
                                click: false,
                            });
                        };

                        this._onMouseDown = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                click: true,
                            });

                            if (this.props.soundClick) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_2__.playSound)(this.props.soundClick);
                            }
                        };

                        this._onMouseUp = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                click: false,
                            });
                        };

                        this.handleFocus = () =>
                            this.setState({
                                focus: true,
                            });

                        this.handleBlur = () =>
                            this.setState({
                                focus: false,
                            });
                    }

                    render() {
                        const _this$props = this.props,
                            caption = _this$props.caption,
                            onClick = _this$props.onClick,
                            goto = _this$props.goto,
                            side = _this$props.side,
                            type = _this$props.type,
                            classes = _this$props.classNames,
                            onMouseEnter = _this$props.onMouseEnter,
                            onMouseLeave = _this$props.onMouseLeave,
                            onMouseDown = _this$props.onMouseDown,
                            onMouseUp = _this$props.onMouseUp,
                            soundClick = _this$props.soundClick,
                            soundHover = _this$props.soundHover,
                            rest = _objectWithoutPropertiesLoose(_this$props, _excluded);

                        const classBase = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${type}`],
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${side}`],
                            classes == null ? void 0 : classes.base,
                        );
                        const classIcon = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].icon,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`icon__${type}`],
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`icon__${side}`],
                            classes == null ? void 0 : classes.icon,
                        );
                        const classGlow = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].glow,
                            classes == null ? void 0 : classes.glow,
                        );
                        const classCaption = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].caption,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`caption__${type}`],
                            classes == null ? void 0 : classes.caption,
                        );
                        const classGoto = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].goto,
                            classes == null ? void 0 : classes.goto,
                        );
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                            'div',
                            _extends(
                                {
                                    className: classBase,
                                    onMouseEnter: this._onMouseEnter(onMouseEnter),
                                    onMouseLeave: this._onMouseLeave(onMouseLeave),
                                    onMouseDown: this._onMouseDown(onMouseDown),
                                    onMouseUp: this._onMouseUp(onMouseUp),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: onClick,
                                },
                                rest,
                            ),
                            type !== 'info' &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                                    className: _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].shine,
                                }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classIcon,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                                    className: classGlow,
                                }),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classCaption,
                                },
                                caption,
                            ),
                            goto &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                    'div',
                                    {
                                        className: classGoto,
                                    },
                                    goto,
                                ),
                        );
                    }
                }

                TextButton.defaultProps = {
                    side: 'left',
                    type: 'back',
                    soundHover: 'highlight',
                    soundClick: 'play',
                };

                /***/
            },

        /***/ './src/components/Text/Text.tsx':
            /*!**************************************!*\
  !*** ./src/components/Text/Text.tsx ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ defaultMarginMap: () => /* binding */ defaultMarginMap,
                    /* harmony export */ defaultMargins: () => /* binding */ defaultMargins,
                    /* harmony export */ standardColors: () => /* binding */ standardColors,
                    /* harmony export */ standardMargins: () => /* binding */ standardMargins,
                    /* harmony export */ variantMarginSizeMap: () => /* binding */ variantMarginSizeMap,
                    /* harmony export */ variants: () => /* binding */ variants,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Box/Box */ './src/components/Box/Box.tsx',
                );
                /* harmony import */ var components_FormatText_FormatText__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! components/FormatText/FormatText */ './src/components/FormatText/FormatText.tsx',
                    );
                /* harmony import */ var global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! global-styles/variables/colors */ './src/global-styles/variables/colors.js',
                    );
                /* harmony import */ var global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! global-styles/variables/spacing */ './src/global-styles/variables/spacing.js',
                    );
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! lib/hocs/adaptive/adaptive */ './src/lib/hocs/adaptive/adaptive.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./Text.css */ './src/components/Text/Text.css',
                );
                const _excluded = [
                    'text',
                    'variant',
                    'className',
                    'color',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'style',
                    'format',
                ];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const standardMargins = Object.keys(
                    global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4___default(),
                );
                const standardColors = Object.keys(
                    global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3___default(),
                );
                const xlStyleMargins = {
                    mt: 'XL',
                    mr: 'LG',
                    mb: 'LG',
                    ml: 'LG',
                };
                const lgStyleMargins = {
                    mt: 'LG',
                    mr: 'MD',
                    mb: 'MD',
                    ml: 'MD',
                };
                const mdStyleMargins = {
                    mt: 'MD',
                    mr: 'SM',
                    mb: 'SM',
                    ml: 'SM',
                };
                const smStyleMargins = {
                    mt: 'SM',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const xsStyleMargins = {
                    mt: 'XS',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const defaultXlMargins = {
                    mt: 'XL',
                    mr: 'XL',
                    mb: 'XL',
                    ml: 'XL',
                };
                const defaultLgMargins = {
                    mt: 'LG',
                    mr: 'LG',
                    mb: 'LG',
                    ml: 'LG',
                };
                const defaultMdpMargins = {
                    mt: 'MDp',
                    mr: 'MDp',
                    mb: 'MDp',
                    ml: 'MDp',
                };
                const defaultMdMargins = {
                    mt: 'MD',
                    mr: 'MD',
                    mb: 'MD',
                    ml: 'MD',
                };
                const defaultSmpMargins = {
                    mt: 'SMp',
                    mr: 'SMp',
                    mb: 'SMp',
                    ml: 'SMp',
                };
                const defaultSmMargins = {
                    mt: 'SM',
                    mr: 'SM',
                    mb: 'SM',
                    ml: 'SM',
                };
                const defaultXsMargins = {
                    mt: 'XS',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const defaultMarginMap = {
                    XL: defaultXlMargins,
                    LG: defaultLgMargins,
                    MDp: defaultMdpMargins,
                    MD: defaultMdMargins,
                    SMp: defaultSmpMargins,
                    SM: defaultSmMargins,
                    XS: defaultXsMargins,
                };
                const defaultMargins = Object.keys(defaultMarginMap);
                const variantMarginSizeMap = {
                    'heading-H144': xlStyleMargins,
                    'heading-H73': lgStyleMargins,
                    'heading-H56': mdStyleMargins,
                    'heading-H36': mdStyleMargins,
                    'heading-H28': smStyleMargins,
                    'heading-H24': smStyleMargins,
                    'heading-H24R': smStyleMargins,
                    'heading-H22': smStyleMargins,
                    'heading-H20R': smStyleMargins,
                    'heading-H18': smStyleMargins,
                    'heading-H15': xsStyleMargins,
                    'heading-H14': xsStyleMargins,
                    'paragraph-P24': smStyleMargins,
                    'paragraph-P18': smStyleMargins,
                    'paragraph-P16': smStyleMargins,
                    'paragraph-P14': xsStyleMargins,
                    'paragraph-P12': xsStyleMargins,
                    'paragraph-P10': xsStyleMargins,
                };
                const variants = Object.keys(variantMarginSizeMap);

                const isDefaultColor = (color) => standardColors.includes(color);

                const getColorStyleOrClassName = (color) => {
                    if (!color) {
                        return {};
                    }

                    if (isDefaultColor(color)) {
                        return {
                            colorClassName: _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'][color],
                        };
                    }

                    return {
                        colorStyle: {
                            color,
                        },
                    };
                };

                /**
                 * Renders the text passed in as a prop with styling and formatting options.
                 *
                 * @param {object} props - The props object containing:
                 *   @param {string} text - The text to be rendered.
                 *   @param {VariantType | string} variant - The variant of the text styling.
                 *   @param {string} className - The class name(s) to be applied to the text component.
                 *   @param {ColorType} color - The color of the text, e.g. "WHITE_SPANISH" or "#f00".
                 *   @param {SpacingType} m - The margin applied to all sides, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mt - The applied margin-top, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mr - The applied margin-right, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mb - The applied margin-bottom, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} ml - The applied margin-left, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {CSSProperties} style - The style object to be applied to the text component.
                 *   @param {FormatTextProps} format - The formatting props of FormatText.
                 *   @param {BoxProps} restProps - other props of internal Box component.
                 * @return {JSX.Element} The Text element.
                 */
                const Text = (_ref) => {
                    let text = _ref.text,
                        variant = _ref.variant,
                        className = _ref.className,
                        color = _ref.color,
                        m = _ref.m,
                        _ref$mt = _ref.mt,
                        mt = _ref$mt === void 0 ? m : _ref$mt,
                        _ref$mr = _ref.mr,
                        mr = _ref$mr === void 0 ? m : _ref$mr,
                        _ref$mb = _ref.mb,
                        mb = _ref$mb === void 0 ? m : _ref$mb,
                        _ref$ml = _ref.ml,
                        ml = _ref$ml === void 0 ? m : _ref$ml,
                        style = _ref.style,
                        format = _ref.format,
                        restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
                            const _getColorStyleOrClass = getColorStyleOrClassName(color),
                                colorClassName = _getColorStyleOrClass.colorClassName,
                                _getColorStyleOrClass2 = _getColorStyleOrClass.colorStyle,
                                colorStyle = _getColorStyleOrClass2 === void 0 ? {} : _getColorStyleOrClass2;

                            return {
                                computedStyle: Object.assign({}, style, colorStyle),
                                colorClassName,
                            };
                        }, [style, color]),
                        computedStyle = _useMemo.computedStyle,
                        colorClassName = _useMemo.colorClassName;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                        components_Box_Box__WEBPACK_IMPORTED_MODULE_1__['default'],
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'].base,
                                    variant && _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'][variant],
                                    colorClassName,
                                    className,
                                ),
                                style: computedStyle,
                                mt: mt === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mt : mt,
                                mr: mr === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mr : mr,
                                mb: mb === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mb : mb,
                                ml: ml === true ? variantMarginSizeMap[variant || 'paragraph-P16'].ml : ml,
                            },
                            restProps,
                        ),
                        format !== undefined
                            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                  components_FormatText_FormatText__WEBPACK_IMPORTED_MODULE_2__.FormatText,
                                  _extends({}, format, {
                                      text: text,
                                  }),
                              )
                            : text,
                    );
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
                lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_5__['default'])(Text);

                /***/
            },

        /***/ './src/components/Tooltip/Tooltip.tsx':
            /*!********************************************!*\
  !*** ./src/components/Tooltip/Tooltip.tsx ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Tooltip: () => /* binding */ Tooltip,
                    /* harmony export */
                });
                /* harmony import */ var lib_get_from_callstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/get-from-callstack */ './src/lib/get-from-callstack.ts',
                );
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                const _excluded = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const SHOW_DELAY_MIN = 100;
                const SHOW_DELAY_DEFAULT = 400;

                function getViewEventArguments(args) {
                    return Object.entries(args || {}).map(([key, value]) => {
                        const out = {
                            __Type: 'GFValueProxy',
                            name: key,
                        };

                        switch (typeof value) {
                            case 'number':
                                out.number = value;
                                break;

                            case 'boolean':
                                out.bool = value;
                                break;

                            case 'undefined':
                                break;

                            default:
                                out.string = value.toString();
                        }

                        return out;
                    });
                }

                const handleViewEvent = (contentId, decoratorId, options = {}, targetID = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.ViewEventType.TOOLTIP,
                                contentID: contentId,
                                decoratorID: decoratorId,
                                targetID: targetID,
                            },
                            options,
                        ),
                    );
                };

                const Tooltip = (_ref) => {
                    let children = _ref.children,
                        contentId = _ref.contentId,
                        args = _ref.args,
                        onMouseEnter = _ref.onMouseEnter,
                        onMouseLeave = _ref.onMouseLeave,
                        onMouseDown = _ref.onMouseDown,
                        onClick = _ref.onClick,
                        _ref$ignoreShowDelay = _ref.ignoreShowDelay,
                        ignoreShowDelay = _ref$ignoreShowDelay === void 0 ? false : _ref$ignoreShowDelay,
                        _ref$ignoreMouseClick = _ref.ignoreMouseClick,
                        ignoreMouseClick = _ref$ignoreMouseClick === void 0 ? false : _ref$ignoreMouseClick,
                        _ref$decoratorId = _ref.decoratorId,
                        decoratorId = _ref$decoratorId === void 0 ? 0 : _ref$decoratorId,
                        _ref$isEnabled = _ref.isEnabled,
                        isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
                        _ref$targetId = _ref.targetId,
                        targetId = _ref$targetId === void 0 ? 0 : _ref$targetId,
                        onShow = _ref.onShow,
                        onHide = _ref.onHide,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
                        timeoutId: 0,
                        isVisible: false,
                        prevTarget: null,
                        hideTimerId: null,
                    });
                    const resId = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
                        () =>
                            targetId ||
                            (0, lib_get_from_callstack__WEBPACK_IMPORTED_MODULE_0__.getFromCallStack)().resId,
                        [targetId],
                    );
                    const show = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        // we handle show() only if tooltip is HIDDEN now OR timeout for show has already RESET
                        if (!ref.current.isVisible || !ref.current.timeoutId) {
                            handleViewEvent(
                                contentId,
                                decoratorId,
                                {
                                    isMouseEvent: true,
                                    on: true,
                                    arguments: getViewEventArguments(args),
                                },
                                resId,
                            );
                            onShow && onShow();
                            ref.current.isVisible = true;
                        }
                    }, [contentId, decoratorId, args, resId, onShow]);
                    const hide = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        // we handle hide() only if tooltip is VISIBLE now OR timeout for show has already SET
                        if (ref.current.isVisible || ref.current.timeoutId) {
                            const timer = ref.current.timeoutId;

                            if (timer > 0) {
                                clearTimeout(timer);
                                ref.current.timeoutId = 0;
                            }

                            handleViewEvent(
                                contentId,
                                decoratorId,
                                {
                                    on: false,
                                },
                                resId,
                            );

                            if (ref.current.isVisible && onHide) {
                                onHide();
                            }

                            ref.current.isVisible = false;
                        }
                    }, [contentId, decoratorId, resId, onHide]);
                    const onScroll = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e) => {
                        // we handle scroll only if tooltip is VISIBLE
                        if (!ref.current.isVisible) {
                            return;
                        }

                        ref.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY);
                        ref.current.hideTimerId = window.setTimeout(() => {
                            const target = document.elementFromPoint(e.clientX, e.clientY);

                            if (target && !target.isSameNode(ref.current.prevTarget)) {
                                hide();
                            }
                        }, 200); // eslint-disable-next-line
                    }, []);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        const hideTimer = ref.current.hideTimerId;
                        document.addEventListener('wheel', onScroll, {
                            capture: true,
                        });
                        return () => {
                            document.removeEventListener('wheel', onScroll, {
                                capture: true,
                            });
                            hideTimer && window.clearTimeout(hideTimer);
                        }; // eslint-disable-next-line
                    }, []);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        if (isEnabled === false) {
                            hide();
                        }
                    }, [isEnabled, hide]);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        window.addEventListener('mouseleave', hide);
                        return () => {
                            window.removeEventListener('mouseleave', hide);
                            hide();
                        };
                    }, [hide]);

                    const handleMouseEnter = (childEvent) => (event) => {
                        // window used here for correct ReturnType: number
                        if (event.clientX === window.innerWidth && event.clientY === window.innerHeight) {
                            // TODO: we need this hack to fix https://jira.wargaming.net/browse/WOTD-158427 issue.
                            //  This check can be removed when mouseEnter event that fired on resize will be fixed at GF integration side.
                            //  Probably we can check it after https://jira.wargaming.net/browse/WOTD-154564 bug fix,
                            //  when view border events resolving will work properly.
                            return;
                        }

                        ref.current.timeoutId = window.setTimeout(
                            show,
                            ignoreShowDelay ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT,
                        );
                        onMouseEnter && onMouseEnter(event);
                        childEvent && childEvent(event);
                    };

                    const handleMouseLeave = (childEvent) => (event) => {
                        hide();
                        onMouseLeave == null ? void 0 : onMouseLeave(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    const handleClick = (childEvent) => (event) => {
                        if (ignoreMouseClick === false) {
                            hide();
                        }

                        onClick == null ? void 0 : onClick(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    const handleMouseDown = (childEvent) => (event) => {
                        if (ignoreMouseClick === false) {
                            hide();
                        }

                        onMouseDown == null ? void 0 : onMouseDown(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    return !isEnabled
                        ? children
                        : (0, react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(
                              children,
                              Object.assign(
                                  {
                                      onMouseEnter: handleMouseEnter(children.props.onMouseEnter),
                                      onMouseLeave: handleMouseLeave(children.props.onMouseLeave),
                                      onClick: handleClick(children.props.onClick),
                                      onMouseDown: handleMouseDown(children.props.onMouseDown),
                                  },
                                  rest,
                              ),
                          );
                };

                /***/
            },

        /***/ './src/global-styles/mixins/mediaCss.js':
            /*!**********************************************!*\
  !*** ./src/global-styles/mixins/mediaCss.js ***!
  \**********************************************/
            /***/ (module) => {
                const MEDIA_CSS = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
                module.exports = MEDIA_CSS;

                /***/
            },

        /***/ './src/global-styles/variables/colors.js':
            /*!***********************************************!*\
  !*** ./src/global-styles/variables/colors.js ***!
  \***********************************************/
            /***/ (module) => {
                module.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };

                /***/
            },

        /***/ './src/global-styles/variables/spacing.js':
            /*!************************************************!*\
  !*** ./src/global-styles/variables/spacing.js ***!
  \************************************************/
            /***/ (module) => {
                module.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };

                /***/
            },

        /***/ './src/lib/data-layer/data-layer.ts':
            /*!******************************************!*\
  !*** ./src/lib/data-layer/data-layer.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ create: () => /* binding */ create,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                function _createForOfIteratorHelperLoose(o, allowArrayLike) {
                    var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
                    if (it) return (it = it.call(o)).next.bind(it);
                    if (
                        Array.isArray(o) ||
                        (it = _unsupportedIterableToArray(o)) ||
                        (allowArrayLike && o && typeof o.length === 'number')
                    ) {
                        if (it) o = it;
                        var i = 0;
                        return function () {
                            if (i >= o.length) return { done: true };
                            return { done: false, value: o[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }

                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === 'Object' && o.constructor) n = o.constructor.name;
                    if (n === 'Map' || n === 'Set') return Array.from(o);
                    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }

                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                    return arr2;
                }

                /* eslint-disable @typescript-eslint/no-explicit-any */

                const getRootDefault = (rootId) => {
                    if (rootId === 0) {
                        return window;
                    }

                    return window.subViews.get(rootId);
                };

                function create({ initializer = true, rootId = 0, getRoot = getRootDefault, context = 'model' } = {}) {
                    const subscribers = new Map();
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (data, _, callbackIDs) => {
                            callbackIDs.forEach((callbackID) => {
                                const callback = subscribers.get(callbackID);

                                if (callback !== undefined) {
                                    callback(data);
                                }
                            });
                        });
                    });

                    function unsubscribe(id, resId = 0) {
                        if (viewEnv.removeDataChangedCallback(id, resId)) {
                            subscribers.delete(id);
                        } else {
                            console.error("Can't remove callback by id:", id);
                        }
                    }

                    const readByPath = (path) => {
                        const root = getRoot(rootId);
                        const model = context.split('.').reduce((result, key) => {
                            return result[key];
                        }, root);

                        if (typeof path !== 'string' || path.length === 0) {
                            return model;
                        }

                        return path.split('.').reduce((result, key) => {
                            const element = result[key];

                            if (typeof element === 'function') {
                                return element.bind(result);
                            }

                            return element;
                        }, model);
                    };

                    const subscribe = (subscriber, path) => {
                        const subscribePath = typeof path === 'string' ? `${context}.${path}` : context;
                        const trackInDepth = true;
                        const id = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.addModelObserver(
                            subscribePath,
                            rootId,
                            trackInDepth,
                        );
                        subscribers.set(id, subscriber);

                        if (initializer) {
                            subscriber(readByPath(path));
                        }

                        return id;
                    };

                    const createCallback = (argsMap, path) => {
                        const fn = readByPath(path);
                        return (...args) => {
                            fn(argsMap(...args));
                        };
                    };

                    const createCallbackNoArgs = (path) => {
                        const fn = readByPath(path);
                        return () => {
                            fn();
                        };
                    };

                    function dispose() {
                        for (
                            var _iterator = _createForOfIteratorHelperLoose(subscribers.keys()), _step;
                            !(_step = _iterator()).done;

                        ) {
                            const subscriberId = _step.value;
                            unsubscribe(subscriberId, rootId);
                        }
                    }

                    return {
                        subscribe,
                        readByPath,
                        createCallback,
                        createCallbackNoArgs,
                        dispose,
                        unsubscribe,
                    };
                }

                /***/
            },

        /***/ './src/lib/data-layer/index.tsx':
            /*!**************************************!*\
  !*** ./src/lib/data-layer/index.tsx ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ dataLayer: () =>
                        /* reexport module object */ _data_layer__WEBPACK_IMPORTED_MODULE_2__,
                    /* harmony export */ initializeModelWithContext: () => /* binding */ initializeModelWithContext,
                    /* harmony export */
                });
                /* harmony import */ var lib_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/function */ './src/lib/function.ts',
                );
                /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx */ './node_modules/mobx/dist/mobx.esm.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _data_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./data-layer */ './src/lib/data-layer/data-layer.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                /* eslint-disable react/function-component-definition */

                /**
                 * Create ModelProvider and useModel for your data-layer:
                 * ```ts
                 * export const [ModelProvider, useModel] = initializeModelWithContext<<MODEL_TYPE>>()(
                 *     () => {}, // for model
                 *     () => {}, // for controls (functions)
                 * );
                 * ```
                 * Where `<MODEL_TYPE>` is your model type.
                 */
                const initializeModelWithContext = () => {
                    return (modelCreator, controlsCreator) => {
                        const Context = (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
                        return [
                            function DataLayerProvider({ mode: dataMode = 'real', options, children, mocks }) {
                                const cleanupsRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);

                                const createContextValue = (mode, options, mocks) => {
                                    var _mocks$getter;

                                    const dataLayerInstance = _data_layer__WEBPACK_IMPORTED_MODULE_2__.create(options);
                                    const externalModel =
                                        mode === 'real'
                                            ? dataLayerInstance
                                            : Object.assign({}, dataLayerInstance, {
                                                  readByPath:
                                                      (_mocks$getter = mocks == null ? void 0 : mocks.getter) != null
                                                          ? _mocks$getter
                                                          : () => undefined,
                                              });

                                    const readByPath = (path) => {
                                        if (mode === 'mocks') {
                                            return mocks == null ? void 0 : mocks.getter(path);
                                        } else {
                                            return externalModel.readByPath(path);
                                        }
                                    };

                                    const observableArray = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observableObject = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observablePrimitives = (keys, path) => {
                                        const initObservable = readByPath(path);

                                        if (Array.isArray(keys)) {
                                            const model = keys.reduce((acc, key) => {
                                                acc[key] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[key],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keys.forEach((key) => {
                                                            model[key].set(data[key]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        } else {
                                            const keysRecord = keys;
                                            const keysEntries = Object.entries(keysRecord);
                                            const model = keysEntries.reduce((acc, [keyFrom, keyTo]) => {
                                                acc[keyTo] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[keyFrom],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keysEntries.forEach(([keyFrom, keyTo]) => {
                                                            model[keyTo].set(data[keyFrom]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        }
                                    };

                                    const cleanup = (fn) => cleanupsRef.current.push(fn);

                                    const model = modelCreator({
                                        mode,
                                        readByPath,
                                        externalModel,
                                        observableModel: {
                                            array: observableArray,
                                            object: observableObject,
                                            primitives: observablePrimitives,
                                        },
                                        cleanup,
                                    });
                                    const controlsArgs = {
                                        mode,
                                        model,
                                        externalModel,
                                        cleanup,
                                    };
                                    const controls =
                                        mode === 'mocks' && mocks
                                            ? mocks.controls(controlsArgs)
                                            : controlsCreator(controlsArgs);
                                    return {
                                        model,
                                        controls,
                                        externalModel,
                                        mode,
                                    };
                                };

                                const startedRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

                                const _useState = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(dataMode),
                                    mode = _useState[0],
                                    changeMode = _useState[1];

                                const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(() =>
                                        createContextValue(dataMode, options, mocks),
                                    ),
                                    value = _useState2[0],
                                    setValue = _useState2[1];

                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    if (!startedRef.current) {
                                        startedRef.current = true;
                                        return;
                                    }

                                    setValue(createContextValue(mode, options, mocks));
                                }, [mocks, mode, options]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    changeMode(dataMode);
                                }, [dataMode]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                                    () => () => {
                                        value.externalModel.dispose();
                                        cleanupsRef.current.forEach((fn) => fn());
                                    },
                                    [value],
                                );
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    Context.Provider,
                                    {
                                        value: value,
                                    },
                                    children,
                                );
                            },
                            () => (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context),
                        ];
                    };
                };

                /***/
            },

        /***/ './src/lib/env/client/events.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/client/events.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ mouse: () => /* binding */ mouse,
                    /* harmony export */ onResize: () => /* binding */ onResize,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );
                /* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./internal */ './src/lib/env/client/internal.ts',
                );

                const onResize = (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('clientResized');
                const internalMouse = {
                    down: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousedown'),
                    up: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mouseup'),
                    move: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousemove'),
                };

                /**
                 * Calculate mouse position relative to the view is expensive operation.
                 * This decorator separate track mouse events between inside and outside.
                 * When cursor is outside of the view.
                 * When mouse cursor is inside of the view, it will be tracked by internal default events.
                 *
                 * Function encapsulate logic and state inside.
                 */
                function initMouseEvents() {
                    const state = {
                        listeners: 0,
                        enabled: true,
                        initialized: false,
                    };

                    function handleMouseEnter() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                        }
                    }

                    function handleMouseLeave() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                        }
                    }

                    function updateLazyTrack() {
                        if (!state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            return;
                        }

                        if (state.listeners < 1) {
                            state.initialized = false;
                            document.body.removeEventListener('mouseenter', handleMouseEnter);
                            document.body.removeEventListener('mouseleave', handleMouseLeave);
                        } else if (!state.initialized) {
                            state.initialized = true;
                            document.body.addEventListener('mouseenter', handleMouseEnter);
                            document.body.addEventListener('mouseleave', handleMouseLeave);
                        }
                    }

                    function makeEvent(name) {
                        return (listener) => {
                            state.listeners += 1;
                            let active = true; // prevent double dispose(unsubscribe)

                            const windowEvent = `mouse${name}`;
                            const dispose = internalMouse[name]((event) => listener([event, 'outside']));

                            function handleWindowEvent(event) {
                                listener([event, 'inside']);
                            }

                            window.addEventListener(windowEvent, handleWindowEvent);
                            updateLazyTrack();
                            return () => {
                                if (!active) {
                                    return;
                                }

                                dispose();
                                window.removeEventListener(windowEvent, handleWindowEvent);
                                state.listeners -= 1;
                                updateLazyTrack();
                                active = false;
                            };
                        };
                    }

                    const events = ['down', 'up', 'move'];
                    const subscribeApi = events.reduce((acc, name) => {
                        acc[name] = makeEvent(name);
                        return acc;
                    }, {});
                    return Object.assign({}, subscribeApi, {
                        disable() {
                            state.enabled = false;
                            updateLazyTrack();
                        },

                        enable() {
                            state.enabled = true;
                            updateLazyTrack();
                        },

                        enableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                            }
                        },

                        disableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            }
                        },
                    });
                }

                const mouse = initMouseEvents();

                /***/
            },

        /***/ './src/lib/env/client/index.ts':
            /*!*************************************!*\
  !*** ./src/lib/env/client/index.ts ***!
  \*************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () =>
                        /* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ getMouseGlobalPosition: () => /* binding */ getMouseGlobalPosition,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ graphicsQuality: () => /* binding */ graphicsQuality,
                    /* harmony export */
                });
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/client/events.ts',
                );

                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function getMouseGlobalPosition(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const graphicsQuality = {
                    isLow: () => viewEnv.getGraphicsQuality() === 1,
                    isHigh: () => viewEnv.getGraphicsQuality() === 0,
                    get: () => viewEnv.getGraphicsQuality(),
                };

                /***/
            },

        /***/ './src/lib/env/client/internal.ts':
            /*!****************************************!*\
  !*** ./src/lib/env/client/internal.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ setTrackMouseOutside: () => /* binding */ setTrackMouseOutside,
                    /* harmony export */
                });
                function setTrackMouseOutside(value) {
                    viewEnv.setTrackMouseOnStage(value);
                }

                /***/
            },

        /***/ './src/lib/env/helpers.ts':
            /*!********************************!*\
  !*** ./src/lib/env/helpers.ts ***!
  \********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ makeEngineEvent: () => /* binding */ makeEngineEvent,
                    /* harmony export */
                });
                function makeEngineEvent(eventName) {
                    return (handler) => {
                        engine.on(eventName, handler);
                        return () => {
                            engine.off(eventName, handler);
                        };
                    };
                }

                /***/
            },

        /***/ './src/lib/env/index.ts':
            /*!******************************!*\
  !*** ./src/lib/env/index.ts ***!
  \******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ env: () => /* binding */ env,
                    /* harmony export */
                });
                /* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./client */ './src/lib/env/client/index.ts',
                );
                /* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./view */ './src/lib/env/view/index.ts',
                );

                const env = {
                    view: _view__WEBPACK_IMPORTED_MODULE_1__,
                    client: _client__WEBPACK_IMPORTED_MODULE_0__,
                };

                if (true) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.env = env;
                }

                /***/
            },

        /***/ './src/lib/env/view/children.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/view/children.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getBgUrl: () => /* binding */ getBgUrl,
                    /* harmony export */ getTextureUrl: () => /* binding */ getTextureUrl,
                    /* harmony export */
                });
                function getTextureUrl(childId, size, scale = 1) {
                    return viewEnv.getChildTexturePath(childId, size.width, size.height, scale);
                }
                function getBgUrl(childId, size, scale) {
                    return `url(${getTextureUrl(childId, size, scale)})`;
                }

                /***/
            },

        /***/ './src/lib/env/view/common.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/common.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ displayStatus: () => /* binding */ displayStatus,
                    /* harmony export */
                });
                const displayStatus = {
                    showing: 0,
                    shown: 1,
                    hiding: 2,
                    hidden: 3,
                };

                /***/
            },

        /***/ './src/lib/env/view/events.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/events.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () => /* binding */ events,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );

                const events = {
                    onTextureFrozen: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureFrozen'),
                    onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureReady'),
                    onDomBuilt: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onDomBuilt'),
                    onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onLoaded'),
                    onDisplayChanged: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                        'self.onShowingStatusChanged',
                    ),
                    onFocusUpdated: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAdded'),
                        onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onLoaded'),
                        onRemoved: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onRemoved'),
                        onAttached: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAttached'),
                        onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.onTextureReady',
                        ),
                        onRequestPosition: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.requestPosition',
                        ),
                    },
                };

                /***/
            },

        /***/ './src/lib/env/view/index.ts':
            /*!***********************************!*\
  !*** ./src/lib/env/view/index.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addModelObserver: () => /* binding */ addModelObserver,
                    /* harmony export */ addPreloadTexture: () => /* binding */ addPreloadTexture,
                    /* harmony export */ children: () =>
                        /* reexport module object */ _children__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ displayStatus: () =>
                        /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus,
                    /* harmony export */ displayStatusIs: () => /* binding */ displayStatusIs,
                    /* harmony export */ events: () => /* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_2__.events,
                    /* harmony export */ extraSize: () => /* binding */ extraSize,
                    /* harmony export */ forceTriggerMouseMove: () => /* binding */ forceTriggerMouseMove,
                    /* harmony export */ freezeTextureBeforeResize: () => /* binding */ freezeTextureBeforeResize,
                    /* harmony export */ getBrowserTexturePath: () => /* binding */ getBrowserTexturePath,
                    /* harmony export */ getDisplayStatus: () => /* binding */ getDisplayStatus,
                    /* harmony export */ getScale: () => /* binding */ getScale,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ getViewGlobalPosition: () => /* binding */ getViewGlobalPosition,
                    /* harmony export */ isEventHandled: () => /* binding */ isEventHandled,
                    /* harmony export */ isFocused: () => /* binding */ isFocused,
                    /* harmony export */ pxToRem: () => /* binding */ pxToRem,
                    /* harmony export */ remToPx: () => /* binding */ remToPx,
                    /* harmony export */ resize: () => /* binding */ resize,
                    /* harmony export */ sendEvent: () =>
                        /* reexport safe */ _sendEvent__WEBPACK_IMPORTED_MODULE_3__.sendEvent,
                    /* harmony export */ setAnimateWindow: () => /* binding */ setAnimateWindow,
                    /* harmony export */ setEventHandled: () => /* binding */ setEventHandled,
                    /* harmony export */ setInputPaddingsRem: () => /* binding */ setInputPaddingsRem,
                    /* harmony export */ setSidePaddingsRem: () => /* binding */ setSidePaddingsRem,
                    /* harmony export */ whenTutorialReady: () => /* binding */ whenTutorialReady,
                    /* harmony export */
                });
                /* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./children */ './src/lib/env/view/children.ts',
                );
                /* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./common */ './src/lib/env/view/common.ts',
                );
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/view/events.ts',
                );
                /* harmony import */ var _sendEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./sendEvent */ './src/lib/env/view/sendEvent.ts',
                );

                const ALL_SIDES = 0xf;
                function addPreloadTexture(path) {
                    viewEnv.addPreloadTexture(path);
                }
                function setInputPaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(paddings, paddings, paddings, paddings, ALL_SIDES);
                }
                function getBrowserTexturePath(id, width, height, scale = 1) {
                    return viewEnv.getWebBrowserTexturePath(id, width, height, scale);
                }
                function addModelObserver(path, resId, trackSubItems) {
                    return viewEnv.addDataChangedCallback(path, resId, trackSubItems);
                }
                function setSidePaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(
                        paddings.top,
                        paddings.right,
                        paddings.bottom,
                        paddings.left,
                        ALL_SIDES,
                    );
                }
                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function resize(width, height, unit = 'px') {
                    return unit === 'rem' ? viewEnv.resizeViewRem(width, height) : viewEnv.resizeViewPx(width, height);
                }
                function getViewGlobalPosition(unit = 'rem') {
                    const value = viewEnv.getViewGlobalPositionRem();
                    return unit === 'rem'
                        ? value
                        : {
                              x: remToPx(value.x),
                              y: remToPx(value.y),
                          };
                }
                function freezeTextureBeforeResize() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function getScale() {
                    return viewEnv.getScale();
                }
                function pxToRem(px) {
                    return viewEnv.pxToRem(px);
                }
                function remToPx(rem) {
                    return viewEnv.remToPx(rem);
                }
                function setAnimateWindow(showing, hiding) {
                    viewEnv.setAnimateWindow(showing, hiding);
                }
                function isFocused() {
                    return viewEnv.isFocused();
                }
                function setEventHandled() {
                    return viewEnv.setEventHandled();
                }
                function isEventHandled() {
                    return viewEnv.isEventHandled();
                }
                function forceTriggerMouseMove() {
                    viewEnv.forceTriggerMouseMove();
                }
                function getDisplayStatus() {
                    return viewEnv.getShowingStatus();
                }
                const displayStatusIs = Object.keys(_common__WEBPACK_IMPORTED_MODULE_1__.displayStatus).reduce(
                    (acc, key) => {
                        acc[key] = () =>
                            viewEnv.getShowingStatus() === _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus[key];

                        return acc;
                    },
                    {},
                );
                const extraSize = {
                    /** Rem units */
                    set: (width, height) => {
                        viewEnv.setExtraSizeRem(width, height);
                    },

                    /** Rem units */
                    get: (width, height) => {
                        viewEnv.getExtraSizeRem(width, height);
                    },
                };
                const whenTutorialReady = Promise.all([
                    new Promise((resolve) => {
                        if (window.isDomBuilt) {
                            resolve();
                        } else {
                            _events__WEBPACK_IMPORTED_MODULE_2__.events.onDomBuilt(resolve);
                        }
                    }),
                    engine.whenReady,
                ]);

                /***/
            },

        /***/ './src/lib/env/view/sendEvent.ts':
            /*!***************************************!*\
  !*** ./src/lib/env/view/sendEvent.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ sendEvent: () => /* binding */ sendEvent,
                    /* harmony export */ sendViewEvent: () => /* binding */ sendViewEvent,
                    /* harmony export */ viewEventTypes: () => /* binding */ viewEventTypes,
                    /* harmony export */
                });
                const _excluded = ['args'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const viewEventTypes = {
                    closePopover: 2,
                    move: 16,
                    close: 32,
                    minimize: 64,
                };

                const createViewEventArguments = (data) => {
                    return Object.entries(data).map(([name, value]) => {
                        const __Type = 'GFValueProxy';

                        switch (typeof value) {
                            case 'number':
                                return {
                                    __Type,
                                    name,
                                    number: value,
                                };

                            case 'boolean':
                                return {
                                    __Type,
                                    name,
                                    bool: value,
                                };

                            default:
                            case 'string':
                                return {
                                    __Type,
                                    name,
                                    string: value.toString(),
                                };
                        }
                    });
                };

                const sendViewEvent = (type, options) => {
                    const __Type = 'GFViewEventProxy';

                    if (options !== undefined) {
                        const args = options.args,
                            restOptions = _objectWithoutPropertiesLoose(options, _excluded);

                        if (args !== undefined) {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                    {
                                        arguments: createViewEventArguments(args),
                                    },
                                ),
                            );
                        } else {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                ),
                            );
                        }
                    } else {
                        return viewEnv.handleViewEvent({
                            __Type,
                            type,
                        });
                    }
                };
                const sendEvent = {
                    close(type) {
                        if (type === 'popover') {
                            sendViewEvent(viewEventTypes.closePopover);
                        } else {
                            sendViewEvent(viewEventTypes.close);
                        }
                    },

                    minimize() {
                        sendViewEvent(viewEventTypes.minimize);
                    },

                    move(start) {
                        sendViewEvent(viewEventTypes.move, {
                            isMouseEvent: true,
                            on: start,
                        });
                    },
                };

                /***/
            },

        /***/ './src/lib/function.ts':
            /*!*****************************!*\
  !*** ./src/lib/function.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ constFalse: () => /* binding */ constFalse,
                    /* harmony export */ constTrue: () => /* binding */ constTrue,
                    /* harmony export */ emptyFunction: () => /* binding */ emptyFunction,
                    /* harmony export */ identity: () => /* binding */ identity,
                    /* harmony export */ log: () => /* binding */ log,
                    /* harmony export */ noop: () => /* binding */ noop,
                    /* harmony export */
                });
                /** Empty function */
                function noop() {} // eslint-disable-line @typescript-eslint/no-empty-function

                /** Alias of noop */

                const emptyFunction = noop;
                /**
                 * This helper function for corner case
                 * For example:
                 * ```js
                 * Object.keys(obj).map(identity) // -> [..]
                 * ```
                 */

                function identity(a) {
                    return a;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constFalse })
                 * ```
                 * Means that value will trigger updates by mutate
                 */

                function constFalse() {
                    return false;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constTrue })
                 * ```
                 * Means that value will **never** trigger updates by mutate
                 */

                function constTrue() {
                    return true;
                }
                /**
                 * This helper function for logging callbacks inside Data Layer Mocks without linter issues
                 *
                 * For example:
                 * ```js
                 *     controls: () => {
                 *         return makeActions({
                 *             goToBranchReset: () => log('onGoToBranchReset'),
                 *         });
                 *     },
                 * ```
                 */
                // eslint-disable-next-line no-console

                const log = console.log;

                /***/
            },

        /***/ './src/lib/get-from-callstack.ts':
            /*!***************************************!*\
  !*** ./src/lib/get-from-callstack.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getFromCallStack: () => /* binding */ getFromCallStack,
                    /* harmony export */
                });
                const getFromCallStack = (line = 1) => {
                    const stack = new Error().stack;
                    let resId = R.invalid('resId');
                    let caller;

                    if (stack) {
                        caller = stack.split('\n')[line].split('.js')[0].split('/').pop() || '';

                        if (window.__feature && window.__feature !== caller) {
                            if (window.subViews[caller]) {
                                resId = window.subViews[caller].id;
                            }
                        }
                    }

                    return {
                        caller,
                        stack,
                        resId,
                    };
                };

                /***/
            },

        /***/ './src/lib/hocs/adaptive/adaptive.tsx':
            /*!********************************************!*\
  !*** ./src/lib/hocs/adaptive/adaptive.tsx ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ adaptiveSuffixSequence: () => /* binding */ adaptiveSuffixSequence,
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ getAdaptiveController: () => /* binding */ getAdaptiveController,
                    /* harmony export */ getDraftedAdaptiveProps: () => /* binding */ getDraftedAdaptiveProps,
                    /* harmony export */ hasDefinedAdaptiveProps: () => /* binding */ hasDefinedAdaptiveProps,
                    /* harmony export */ normalizeAdaptiveProps: () => /* binding */ normalizeAdaptiveProps,
                    /* harmony export */
                });
                /* harmony import */ var lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/hooks/useMedia */ './src/lib/hooks/useMedia.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* eslint-disable react/no-multi-comp */

                const adaptiveSuffixSequence = ['xl', 'lg', 'md', 'sm', 'xs'];

                const isAdaptiveSuffix = (key) => {
                    return adaptiveSuffixSequence.includes(key);
                };

                const isAdaptivePropName = (key) => {
                    return key.includes('_') && isAdaptiveSuffix(key.split('_').at(-1));
                };

                const mediaSizeSequence = [
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.ExtraLarge,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Large,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Medium,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Small,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.ExtraSmall,
                ];
                const hasDefinedAdaptiveProps = (propName, props) => {
                    return adaptiveSuffixSequence.some((suffix) => props[`${propName}_${suffix}`] !== undefined);
                };
                /**
                 * Normalizes all adaptive properties by picking the largest property from a list, for example `m_xl, m_lg, m_md, m_sm, m_xs` that is not larger than MediaSize and returning it as `m` in a new object with only the normalized props.
                 *
                 * @param {Object} props - An object with adaptive properties.
                 * @param {MediaSize} mediaSize - A media size to normalize adaptive props for.
                 * @return {Object} - A new object with normalized properties.
                 */

                const normalizeAdaptiveProps = (props, mediaSize) => {
                    return Object.keys(props).reduce((output, propName) => {
                        // If key is already in output, it means it is a base for an adaptive prop which was already processed -> skip
                        if (propName in output) {
                            return output;
                        }

                        if (isAdaptivePropName(propName)) {
                            const basePropName = propName.split('_').slice(0, -1).join('_'); // if base prop is already in output, it must have been already processed -> skip

                            if (basePropName in output) {
                                return output;
                            }

                            const mediaSizeIndex = mediaSizeSequence.indexOf(mediaSize); // filter out adaptive properties that are larger than mediaSize

                            const relevantAdaptiveSuffixes =
                                mediaSizeIndex !== -1 ? adaptiveSuffixSequence.slice(mediaSizeIndex) : [];
                            const relevantPropertyNames = relevantAdaptiveSuffixes.map(
                                (suffix) => basePropName + '_' + suffix,
                            );
                            const resolvedPropName = relevantPropertyNames.find(
                                (propName) => props[propName] !== undefined,
                            );
                            const resolvedPropValue = resolvedPropName ? props[resolvedPropName] : undefined; // assign baseProp with value of the first relevant adaptive prop or base prop

                            output[basePropName] =
                                resolvedPropValue !== undefined ? resolvedPropValue : props[basePropName];
                            return output;
                        }

                        const value = props[propName]; // skip props that are undefined or have some adaptive properties set

                        if (value === undefined || hasDefinedAdaptiveProps(propName, props)) {
                            return output;
                        }

                        output[propName] = value;
                        return output;
                    }, {});
                };
                /**
                 * Returns a component that normalizes adaptive properties based on the current media size and passes it to the Component.
                 *
                 * @param {React.ComponentType<StaticProps>} Component - React component that handles static props.
                 * @param {typeof normalizeAdaptiveProps} normalizeProps - optional custom function that normalizes adaptive props, useful mainly for testing.
                 * @return {JSX.Element} the Box component with normalized adaptive properties
                 */

                const getAdaptiveComponent =
                    (Component, normalizeProps = normalizeAdaptiveProps) =>
                    (props) => {
                        const _useMedia = (0, lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.useMedia)(),
                            mediaSize = _useMedia.mediaSize;

                        const normalizedProps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                            () => normalizeProps(props, mediaSize),
                            [props, mediaSize],
                        );
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            Component,
                            normalizedProps,
                        );
                    };
                /**
                 * Returns either an AdaptiveComponent or a Component depending on whether adaptive props are present in the props object.
                 * Generic types StaticProps (e.g. CompProps) and AdaptiveKeys (e.g. CompAdaptivePropNames) are optional. Adaptive logic would work
                 * on any props in runtime, but adding the types will filter which keys are validated by Typescript so that adaptive props
                 * that do not make sense are not suggested by intellisense.
                 * @usage (in root scope) const AdaptiveComp = getAdaptiveController<CompProps, CompAdaptivePropNames>(Comp);
                 *  export type CompAdaptivePropNames = 'size' | 'className';
                 *  export type CompProps = CompStaticProps & AdaptiveProps<CompStaticProps, CompAdaptivePropNamesType>;
                 *  export default AdaptiveComp;
                 *
                 * @param {React.ComponentType<StaticProps>} Component - React component that handles static props.
                 * @param {typeof normalizeAdaptiveProps} normalizeProps - optional custom function that normalizes adaptive props, useful mainly for testing.
                 * @return {JSX.Element} Either an AdaptiveBox or a Box component.
                 */

                const getAdaptiveController = (Component, normalizeProps = normalizeAdaptiveProps) => {
                    const AdaptiveComponent = getAdaptiveComponent(Component, normalizeProps);
                    return react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
                        const hasAdaptiveProps = Object.keys(props).some(
                            (key) => isAdaptivePropName(key) && props[key] !== undefined,
                        );
                        return hasAdaptiveProps
                            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                  AdaptiveComponent,
                                  props,
                              )
                            : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                  Component,
                                  props,
                              );
                    });
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = getAdaptiveController;
                const getDraftedAdaptiveProps = (propName, draftProps) =>
                    adaptiveSuffixSequence.reduce((props, suffix) => {
                        props[propName + '_' + suffix] = draftProps;
                        return props;
                    }, {});

                /***/
            },

        /***/ './src/lib/hooks/useCallOnce.ts':
            /*!**************************************!*\
  !*** ./src/lib/hooks/useCallOnce.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                const useCallOnce = (f) => {
                    const calledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

                    if (!calledRef.current) {
                        f();
                        calledRef.current = true;
                    }
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = useCallOnce;

                /***/
            },

        /***/ './src/lib/hooks/useKeydownListener.ts':
            /*!*********************************************!*\
  !*** ./src/lib/hooks/useKeydownListener.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useCallbackOnEsc: () => /* binding */ useCallbackOnEsc,
                    /* harmony export */ useCloseOnEsc: () => /* binding */ useCloseOnEsc,
                    /* harmony export */ useCloseOnKeyPress: () => /* binding */ useCloseOnKeyPress,
                    /* harmony export */ useKeydownListener: () => /* binding */ useKeydownListener,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

                const defaultCallback = (event) => {
                    console.error(event.type + ': useKeydownListener hook :: Callback is not defined');
                };

                function useKeydownListener(
                    key = lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.NONE,
                    listener = defaultCallback,
                    preventPropagation = false,
                ) {
                    (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
                        if (key === lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.NONE) {
                            return;
                        }

                        function handleKeyPress(event) {
                            if (event.keyCode === key) {
                                if (lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.isEventHandled()) {
                                    return;
                                }

                                lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.setEventHandled();
                                listener(event);

                                if (preventPropagation) {
                                    event.stopPropagation();
                                }
                            }
                        }

                        window.addEventListener('keydown', handleKeyPress, preventPropagation);
                        return () => {
                            window.removeEventListener('keydown', handleKeyPress, preventPropagation);
                        };
                    }, [listener, key, preventPropagation]);
                }
                function useCloseOnKeyPress(key = lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE) {
                    useKeydownListener(key, lib_view_env_helper__WEBPACK_IMPORTED_MODULE_2__.sendCloseEvent, true);
                }
                function useCallbackOnEsc(callback) {
                    useKeydownListener(lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE, callback);
                }
                function useCloseOnEsc() {
                    useCloseOnKeyPress(lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE);
                }

                /***/
            },

        /***/ './src/lib/hooks/useMedia.ts':
            /*!***********************************!*\
  !*** ./src/lib/hooks/useMedia.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaHeight: () => /* binding */ MediaHeight,
                    /* harmony export */ MediaSize: () => /* binding */ MediaSize,
                    /* harmony export */ MediaWidth: () => /* binding */ MediaWidth,
                    /* harmony export */ useMedia: () => /* binding */ useMedia,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _components_MediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../components/MediaQuery */ './src/components/MediaQuery/index.ts',
                );
                /* harmony import */ var _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../components/MediaQuery/static */ './src/components/MediaQuery/static.ts',
                    );

                let MediaSize;

                (function (MediaSize) {
                    MediaSize[
                        (MediaSize['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.width)
                    ] = 'ExtraSmall';
                    MediaSize[
                        (MediaSize['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.width)
                    ] = 'Small';
                    MediaSize[
                        (MediaSize['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.width)
                    ] = 'Medium';
                    MediaSize[
                        (MediaSize['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.width)
                    ] = 'Large';
                    MediaSize[
                        (MediaSize['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.width)
                    ] = 'ExtraLarge';
                })(MediaSize || (MediaSize = {}));

                let MediaWidth;

                (function (MediaWidth) {
                    MediaWidth[
                        (MediaWidth['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.width)
                    ] = 'ExtraSmall';
                    MediaWidth[
                        (MediaWidth['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.width)
                    ] = 'Small';
                    MediaWidth[
                        (MediaWidth['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.width)
                    ] = 'Medium';
                    MediaWidth[
                        (MediaWidth['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.width)
                    ] = 'Large';
                    MediaWidth[
                        (MediaWidth['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.width)
                    ] = 'ExtraLarge';
                })(MediaWidth || (MediaWidth = {}));

                let MediaHeight;

                (function (MediaHeight) {
                    MediaHeight[
                        (MediaHeight['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.height)
                    ] = 'ExtraSmall';
                    MediaHeight[
                        (MediaHeight['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.height)
                    ] = 'Small';
                    MediaHeight[
                        (MediaHeight['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.height)
                    ] = 'Medium';
                    MediaHeight[
                        (MediaHeight['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.height)
                    ] = 'Large';
                    MediaHeight[
                        (MediaHeight['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.height)
                    ] = 'ExtraLarge';
                })(MediaHeight || (MediaHeight = {}));

                const convertToMediaSize = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLarge:
                            return MediaSize.ExtraLarge;

                        case mediaContext.large:
                            return MediaSize.Large;

                        case mediaContext.medium:
                            return MediaSize.Medium;

                        case mediaContext.small:
                            return MediaSize.Small;

                        case mediaContext.extraSmall:
                            return MediaSize.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaSize.ExtraSmall;
                    }
                };

                const convertToMediaWidth = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLargeWidth:
                            return MediaWidth.ExtraLarge;

                        case mediaContext.largeWidth:
                            return MediaWidth.Large;

                        case mediaContext.mediumWidth:
                            return MediaWidth.Medium;

                        case mediaContext.smallWidth:
                            return MediaWidth.Small;

                        case mediaContext.extraSmallWidth:
                            return MediaWidth.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaWidth.ExtraSmall;
                    }
                };

                const convertToMediaHeight = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLargeHeight:
                            return MediaHeight.ExtraLarge;

                        case mediaContext.largeHeight:
                            return MediaHeight.Large;

                        case mediaContext.mediumHeight:
                            return MediaHeight.Medium;

                        case mediaContext.smallHeight:
                            return MediaHeight.Small;

                        case mediaContext.extraSmallHeight:
                            return MediaHeight.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaHeight.ExtraSmall;
                    }
                };

                const useMedia = () => {
                    const mediaContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _components_MediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaContext,
                    );
                    const width = mediaContext.width,
                        height = mediaContext.height;
                    const mediaSize = convertToMediaSize(mediaContext);
                    const mediaWidth = convertToMediaWidth(mediaContext);
                    const mediaHeight = convertToMediaHeight(mediaContext);
                    return {
                        mediaSize,
                        mediaWidth,
                        mediaHeight,
                        remScreenWidth: width,
                        remScreenHeight: height,
                    };
                };

                /***/
            },

        /***/ './src/lib/keycodes.ts':
            /*!*****************************!*\
  !*** ./src/lib/keycodes.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ KEY_CODES: () => /* binding */ KEY_CODES,
                    /* harmony export */ KEY_MODIFIERS: () => /* binding */ KEY_MODIFIERS,
                    /* harmony export */
                });
                let KEY_CODES;

                (function (KEY_CODES) {
                    KEY_CODES[(KEY_CODES['NONE'] = -1)] = 'NONE';
                    KEY_CODES[(KEY_CODES['ALT'] = 165)] = 'ALT';
                    KEY_CODES[(KEY_CODES['ENTER'] = 13)] = 'ENTER';
                    KEY_CODES[(KEY_CODES['ESCAPE'] = 27)] = 'ESCAPE';
                    KEY_CODES[(KEY_CODES['SPACE'] = 32)] = 'SPACE';
                    KEY_CODES[(KEY_CODES['END'] = 35)] = 'END';
                    KEY_CODES[(KEY_CODES['HOME'] = 36)] = 'HOME';
                    KEY_CODES[(KEY_CODES['ARROW_LEFT'] = 37)] = 'ARROW_LEFT';
                    KEY_CODES[(KEY_CODES['ARROW_UP'] = 38)] = 'ARROW_UP';
                    KEY_CODES[(KEY_CODES['ARROW_RIGHT'] = 39)] = 'ARROW_RIGHT';
                    KEY_CODES[(KEY_CODES['ARROW_DOWN'] = 40)] = 'ARROW_DOWN';
                    KEY_CODES[(KEY_CODES['NUM_PLUS'] = 107)] = 'NUM_PLUS';
                    KEY_CODES[(KEY_CODES['NUM_MINUS'] = 109)] = 'NUM_MINUS';
                    KEY_CODES[(KEY_CODES['PLUS'] = 187)] = 'PLUS';
                    KEY_CODES[(KEY_CODES['MINUS'] = 189)] = 'MINUS';
                    KEY_CODES[(KEY_CODES['PAGE_UP'] = 33)] = 'PAGE_UP';
                    KEY_CODES[(KEY_CODES['PAGE_DOWN'] = 34)] = 'PAGE_DOWN';
                    KEY_CODES[(KEY_CODES['BACKSPACE'] = 8)] = 'BACKSPACE';
                    KEY_CODES[(KEY_CODES['DELETE'] = 46)] = 'DELETE';
                    KEY_CODES[(KEY_CODES['TAB'] = 9)] = 'TAB';
                    KEY_CODES[(KEY_CODES['KEY_N'] = 78)] = 'KEY_N';
                    KEY_CODES[(KEY_CODES['KEY_1'] = 49)] = 'KEY_1';
                    KEY_CODES[(KEY_CODES['KEY_2'] = 50)] = 'KEY_2';
                    KEY_CODES[(KEY_CODES['KEY_3'] = 51)] = 'KEY_3';
                    KEY_CODES[(KEY_CODES['KEY_4'] = 52)] = 'KEY_4';
                    KEY_CODES[(KEY_CODES['KEY_5'] = 53)] = 'KEY_5';
                    KEY_CODES[(KEY_CODES['KEY_6'] = 54)] = 'KEY_6';
                    KEY_CODES[(KEY_CODES['KEY_7'] = 55)] = 'KEY_7';
                    KEY_CODES[(KEY_CODES['KEY_8'] = 56)] = 'KEY_8';
                    KEY_CODES[(KEY_CODES['KEY_9'] = 57)] = 'KEY_9';
                    KEY_CODES[(KEY_CODES['CAPS_LOCK'] = 20)] = 'CAPS_LOCK';
                    KEY_CODES[(KEY_CODES['INSERT'] = 45)] = 'INSERT';
                    KEY_CODES[(KEY_CODES['F1'] = 112)] = 'F1';
                    KEY_CODES[(KEY_CODES['F2'] = 113)] = 'F2';
                    KEY_CODES[(KEY_CODES['F3'] = 114)] = 'F3';
                    KEY_CODES[(KEY_CODES['F4'] = 115)] = 'F4';
                    KEY_CODES[(KEY_CODES['F5'] = 116)] = 'F5';
                    KEY_CODES[(KEY_CODES['F6'] = 117)] = 'F6';
                    KEY_CODES[(KEY_CODES['F7'] = 118)] = 'F7';
                    KEY_CODES[(KEY_CODES['F8'] = 119)] = 'F8';
                    KEY_CODES[(KEY_CODES['F9'] = 120)] = 'F9';
                    KEY_CODES[(KEY_CODES['F10'] = 121)] = 'F10';
                    KEY_CODES[(KEY_CODES['F11'] = 122)] = 'F11';
                    KEY_CODES[(KEY_CODES['F12'] = 123)] = 'F12';
                    KEY_CODES[(KEY_CODES['SELECT'] = 93)] = 'SELECT';
                    KEY_CODES[(KEY_CODES['NUMPAD_0'] = 96)] = 'NUMPAD_0';
                    KEY_CODES[(KEY_CODES['NUMPAD_1'] = 97)] = 'NUMPAD_1';
                    KEY_CODES[(KEY_CODES['NUMPAD_2'] = 98)] = 'NUMPAD_2';
                    KEY_CODES[(KEY_CODES['NUMPAD_3'] = 99)] = 'NUMPAD_3';
                    KEY_CODES[(KEY_CODES['NUMPAD_4'] = 100)] = 'NUMPAD_4';
                    KEY_CODES[(KEY_CODES['NUMPAD_5'] = 101)] = 'NUMPAD_5';
                    KEY_CODES[(KEY_CODES['NUMPAD_6'] = 102)] = 'NUMPAD_6';
                    KEY_CODES[(KEY_CODES['NUMPAD_7'] = 103)] = 'NUMPAD_7';
                    KEY_CODES[(KEY_CODES['NUMPAD_8'] = 104)] = 'NUMPAD_8';
                    KEY_CODES[(KEY_CODES['NUMPAD_9'] = 105)] = 'NUMPAD_9';
                    KEY_CODES[(KEY_CODES['NUM_DECIMAL'] = 110)] = 'NUM_DECIMAL';
                    KEY_CODES[(KEY_CODES['STAR'] = 106)] = 'STAR';
                    KEY_CODES[(KEY_CODES['NUM_SLASH'] = 111)] = 'NUM_SLASH';
                    KEY_CODES[(KEY_CODES['FORWARD_SLASH'] = 191)] = 'FORWARD_SLASH';
                    KEY_CODES[(KEY_CODES['COMMA'] = 188)] = 'COMMA';
                    KEY_CODES[(KEY_CODES['DASH'] = 189)] = 'DASH';
                    KEY_CODES[(KEY_CODES['PERIOD'] = 190)] = 'PERIOD';
                })(KEY_CODES || (KEY_CODES = {}));

                let KEY_MODIFIERS;

                (function (KEY_MODIFIERS) {
                    KEY_MODIFIERS['ALT'] = 'Alt';
                    KEY_MODIFIERS['ALT_GRAPH'] = 'AltGraph';
                    KEY_MODIFIERS['CAPS_LOCK'] = 'CapsLock';
                    KEY_MODIFIERS['CONTROL'] = 'Control';
                    KEY_MODIFIERS['FN'] = 'Fn';
                    KEY_MODIFIERS['FN_LOCK'] = 'FnLock';
                    KEY_MODIFIERS['META'] = 'Meta';
                    KEY_MODIFIERS['NUM_LOCK'] = 'NumLock';
                    KEY_MODIFIERS['SCROLL_LOCK'] = 'ScrollLock';
                    KEY_MODIFIERS['SHIFT'] = 'Shift';
                    KEY_MODIFIERS['SYMBOL'] = 'Symbol';
                    KEY_MODIFIERS['SYMBOL_LOCK'] = 'SymbolLock';
                })(KEY_MODIFIERS || (KEY_MODIFIERS = {}));

                /***/
            },

        /***/ './src/lib/likeArray/index.ts':
            /*!************************************!*\
  !*** ./src/lib/likeArray/index.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ likeArray: () =>
                        /* reexport module object */ _likeArray__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */
                });
                /* harmony import */ var _likeArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./likeArray */ './src/lib/likeArray/likeArray.ts',
                );

                /***/
            },

        /***/ './src/lib/likeArray/likeArray.ts':
            /*!****************************************!*\
  !*** ./src/lib/likeArray/likeArray.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ contains: () => /* binding */ contains,
                    /* harmony export */ every: () => /* binding */ every,
                    /* harmony export */ filter: () => /* binding */ filter,
                    /* harmony export */ filterMap: () => /* binding */ filterMap,
                    /* harmony export */ find: () => /* binding */ find,
                    /* harmony export */ findIndex: () => /* binding */ findIndex,
                    /* harmony export */ findIndexLast: () => /* binding */ findIndexLast,
                    /* harmony export */ findLast: () => /* binding */ findLast,
                    /* harmony export */ get: () => /* binding */ get,
                    /* harmony export */ includes: () => /* binding */ includes,
                    /* harmony export */ join: () => /* binding */ join,
                    /* harmony export */ lastElement: () => /* binding */ lastElement,
                    /* harmony export */ lastIndex: () => /* binding */ lastIndex,
                    /* harmony export */ lastIndexZero: () => /* binding */ lastIndexZero,
                    /* harmony export */ map: () => /* binding */ map,
                    /* harmony export */ mapExists: () => /* binding */ mapExists,
                    /* harmony export */ pop: () => /* binding */ pop,
                    /* harmony export */ push: () => /* binding */ push,
                    /* harmony export */ reduce: () => /* binding */ reduce,
                    /* harmony export */ set: () => /* binding */ set,
                    /* harmony export */ slice: () => /* binding */ slice,
                    /* harmony export */ some: () => /* binding */ some,
                    /* harmony export */ splice: () => /* binding */ splice,
                    /* harmony export */ tail: () => /* binding */ tail,
                    /* harmony export */ unsafeGet: () => /* binding */ unsafeGet,
                    /* harmony export */ unwrapItem: () => /* binding */ unwrapItem,
                    /* harmony export */
                });
                /* harmony import */ var lib_nullable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/nullable */ './src/lib/nullable.ts',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                /* eslint-disable @typescript-eslint/no-explicit-any */

                /** Read value from LikeArray by index */
                function get(array, index) {
                    var _array$index;

                    if (index >= array.length) {
                        return undefined;
                    }

                    if (Array.isArray(array)) {
                        return array[index];
                    }

                    return (_array$index = array[index]) == null ? void 0 : _array$index.value;
                }
                const unsafeGet = get;
                /** Returns item.value if it's coherent array item or just item */

                function unwrapItem(item) {
                    var _constructor;

                    if (
                        item &&
                        'value' in item &&
                        (_constructor = item.constructor) != null &&
                        _constructor.name.includes('ArrayItem')
                    ) {
                        return item == null ? void 0 : item.value;
                    }

                    return item;
                }
                /**
                 * Works like default method of array but element will be item.value or item
                 * @see {@link Array.prototype.map}
                 */

                function map(array, fn) {
                    if (Array.isArray(array)) {
                        return array.map(fn);
                    }

                    return array.map((element, index, arr) => fn(element == null ? void 0 : element.value, index, arr));
                }
                /**
                 * Works like default method 'every' of array, but element will be item.value or item
                 * @see {@link Array.prototype.every}
                 */

                function every(array, fn) {
                    if (Array.isArray(array)) {
                        return array.every(fn);
                    }

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (!fn(element, index, array)) {
                            return false;
                        }
                    }

                    return true;
                }
                /**
                 * Works like default method 'some' of array, but element will be item.value or item
                 * @see {@link Array.prototype.some}
                 */

                function some(array, fn) {
                    if (Array.isArray(array)) {
                        return array.some(fn);
                    }

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (fn(element, index, array)) {
                            return true;
                        }
                    }

                    return false;
                }
                /**
                 * Works like default method of array but element will be item.value or item
                 * @see {@link Array.prototype.filter}
                 */

                function filter(array, predicate) {
                    if (Array.isArray(array)) {
                        return array.filter(predicate);
                    }

                    const result = [];

                    for (let index = 0; index < array.length; index++) {
                        var _array$index2;

                        const element = (_array$index2 = array[index]) == null ? void 0 : _array$index2.value;

                        if (predicate(element, index, array)) {
                            result.push(element);
                        }
                    }

                    return result;
                }
                /**
                 * Works like default method of array
                 *
                 * **But will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.push}
                 */

                function push(array, item) {
                    if (Array.isArray(array)) {
                        array.push(item);
                        return array;
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Just set item by index
                 *
                 * **But will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * ```ts
                 * likeArray(array, 0, item)
                 * // equals to:
                 * array[0] = item
                 * ```
                 * @see {@link Array.prototype.push}
                 */

                function set(array, index, item) {
                    if (Array.isArray(array)) {
                        array[index] = item;
                        return array;
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like default method of array. But has second parameter for remove index and get the value.
                 *
                 * **Will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.pop}
                 */

                function pop(array, index = array.length - 1) {
                    if (Array.isArray(array)) {
                        return array.splice(index, 1)[0];
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like includes but find by function
                 * ```ts
                 * const array = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }]
                 * likeArray.contains(array, ({ name }) => name === 'foo')) // true
                 * likeArray.contains(array, ({ name }) => name === 'foo-bar-baz')) // false
                 * ```
                 */

                function contains(array, item, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (predicate && predicate(element)) {
                            return true;
                        } else if (item === element) {
                            return true;
                        }
                    }

                    return false;
                }
                /** Returns last index of array or -1 if it's empty */

                function lastIndex(array) {
                    return array.length - 1;
                }
                /** Works like {@link lastIndex} but returns 0 if array is empty */

                function lastIndexZero(array) {
                    return Math.max(0, array.length - 1);
                }
                /** Returns last element of array or `undefined` it's empty */

                function lastElement(array) {
                    if (array.length === 0) {
                        return undefined;
                    }

                    return get(array, array.length - 1);
                }
                /**
                 * Returns iterator from range. Start index cannot be less than `0` (it will be clamped).
                 * Also end index cannot be more than array length (it will be clamped).
                 * Last index **inclusive**.
                 * ```ts
                 * const items = [1,2,3,4,5,6,7,8,9]
                 * const sliceItems = [...likeArray.slice(items, 0, 2)] // [1,2,3]
                 * ```
                 */

                function slice(array, indexFrom = 0, indexTo = array.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let nextIndex = Math.max(indexFrom, 0);
                            const endIndex = Math.min(indexTo, lastIndexZero(array));
                            return {
                                next: function next() {
                                    if (nextIndex > endIndex) {
                                        return {
                                            done: true,
                                            value: null,
                                        };
                                    }

                                    const item = array[nextIndex++];

                                    if (item) {
                                        return {
                                            value: unwrapItem(item),
                                            done: false,
                                        };
                                    } else {
                                        return {
                                            done: true,
                                            value: null,
                                        };
                                    }
                                },
                            };
                        },
                    };
                }
                /**
                 * Returns slice of last elements by count parameter
                 * ```ts
                 * const items = [1,2,3,4,5,6,7,8,9]
                 * const lastTheeItems = [...likeArray.tail(items, 3)] // [7,8,9]
                 * ```
                 */

                function tail(array, count) {
                    return slice(array, Math.max(0, array.length - 1 - count), lastIndex(array));
                }
                /**
                 * Works like default method of array.
                 *
                 * **Will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.splice}
                 */

                function splice(array, start, deleteCount) {
                    if (Array.isArray(array)) {
                        return array.splice(start, deleteCount);
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like {@link Array.prototype.find} method of array, but find from tail.
                 * If it's {@link CoherentArrayProxy<T>} then `item.value` will pass in predicate.
                 */

                function findLast(array, predicate) {
                    for (let index = array.length - 1; index >= 0; index--) {
                        const element = unwrapItem(array[index]);

                        if (predicate(element, index, array)) {
                            return element;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like {@link Array.prototype.find} method of array.
                 * If it's {@link CoherentArrayProxy<T>} then `item.value` will pass in predicate.
                 */

                function find(array, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unwrapItem(array[index]);

                        if (predicate(element, index, array)) {
                            return element;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like {@link Array.prototype.includes} method of array.
                 */

                function includes(array, item) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (element === item) {
                            return true;
                        }
                    }

                    return false;
                }
                /**
                 * Using like `array.filter().map()` but for {@link LikeArray<T>} and works in one cycle.
                 * ```ts
                 * const array = [1, 2, 3, 4, 5]
                 * likeArray.filterMap(array, (n) => n % 2 === 0, (n) => n * n) // [4, 16]
                 * ```
                 */

                function filterMap(array, predicate, fn) {
                    const result = [];

                    for (let index = 0; index < array.length; index++) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            result.push(fn(item, index, array));
                        }
                    }

                    return result;
                }
                /**
                 * See also {@link filterMap}. Works like filter non-empty elements and apply function.
                 * Creating new array.
                 * ```ts
                 * const array = [null, 0, undefined, 1]
                 * likeArray.mapExists(array, (n) => n * 2) // [0, 2]
                 * ```
                 */

                function mapExists(array, fn) {
                    return filterMap(array, lib_nullable__WEBPACK_IMPORTED_MODULE_0__.isNonNullable, fn);
                }
                /**
                 * Works like default method of array.
                 * @see {@link Array.prototype.findIndex}
                 */

                function findIndex(array, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            return index;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like default method of array `findIndex` but from tail.
                 * @see {@link Array.prototype.findIndex}
                 */

                function findIndexLast(array, predicate) {
                    for (let index = array.length - 1; index >= 0; index--) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            return index;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like default method of array `join` except array-like objects (for LikeArray type only).
                 * @see {@link Array.prototype.join}
                 *
                 * Implementation according to:
                 * {@link https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join}
                 */

                function join(array, separator = ',') {
                    let result = '';

                    for (let index = 0; index < array.length; index++) {
                        if (index > 0) {
                            result += separator;
                        }

                        const element = unsafeGet(array, index);
                        const next = element === undefined || element === null ? '' : String(element);
                        result += next;
                    }

                    return result;
                }
                /**
                 * Works like {@link Array.prototype.reduce} method of array.
                 * ```ts
                 * const array = [1, 2, 3, 4]
                 * likeArray.reduce(array, (previous, current) => previous += current, 0) // 10
                 * ```
                 */

                function reduce(array, predicate, initialValue) {
                    if (Array.isArray(array)) {
                        return array.reduce(predicate, initialValue);
                    }

                    let result = initialValue;

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);
                        result = predicate(result, element, index, array);
                    }

                    return result;
                }

                /***/
            },

        /***/ './src/lib/mouse-selection.js':
            /*!************************************!*\
  !*** ./src/lib/mouse-selection.js ***!
  \************************************/
            /***/ () => {
                // Mouse drag selection for input fields
                (function () {
                    // State variables
                    let focusedSelectableElement;
                    let selectionBounds;
                    let startIndex = -1;
                    document.addEventListener('mousedown', (event) => {
                        // Deselect any generic text
                        document.getSelection().empty(); // Get the selection target on mousedown

                        if (event.target.select && startIndex === -1) {
                            focusedSelectableElement = event.target;
                            selectionBounds = focusedSelectableElement.getBoundingClientRect();
                            focusedSelectableElement.setSelectionRange(0, 0);
                        }
                    });
                    document.addEventListener('mousemove', (event) => {
                        // Get the selection start index on mousemove as it is not available on mousedown
                        if (startIndex === -1 && event.target.select && event.target === focusedSelectableElement) {
                            startIndex = focusedSelectableElement.selectionStart;
                        } // Update the selection in real time

                        if (startIndex > -1) {
                            // Clamp mouse position to element bounds
                            const x = Math.min(Math.max(event.x, selectionBounds.left), selectionBounds.right);
                            const y = Math.min(Math.max(event.y, selectionBounds.top), selectionBounds.bottom); // Get selection index from mouse position
                            // Send a 'mousedown' event to move the caret at current mouse coordinates

                            const evObj = document.createEvent('MouseEvent');
                            evObj.initMouseEvent(
                                'mousedown',
                                true,
                                true,
                                null,
                                1,
                                x,
                                y,
                                x,
                                y,
                                false,
                                false,
                                false,
                                false,
                                0,
                                null,
                            );
                            focusedSelectableElement.dispatchEvent(evObj); // Get the position of the caret

                            const selectionIndex = focusedSelectableElement.selectionEnd; // Make bidirectional selection

                            if (selectionIndex > startIndex) {
                                focusedSelectableElement.setSelectionRange(startIndex, selectionIndex, 'forward');
                            } else {
                                focusedSelectableElement.setSelectionRange(selectionIndex, startIndex, 'backward');
                            }
                        }
                    });
                    document.addEventListener('mouseup', () => {
                        // Reset states
                        focusedSelectableElement = null;
                        startIndex = -1;
                    });
                    let element;
                    let content;
                    let indexCursorPosition;
                    let indexSelectionStart;
                    let indexSelectionEnd; // Double click selection text

                    document.addEventListener('dblclick', (event) => {
                        if (!event.target.select) {
                            return;
                        }

                        document.getSelection().empty();
                        element = event.target;
                        content = event.target.value;
                        indexCursorPosition = element.selectionStart;
                        indexSelectionStart =
                            content.lastIndexOf(' ', indexCursorPosition) !== -1
                                ? content.lastIndexOf(' ', indexCursorPosition) + 1
                                : 0;
                        indexSelectionEnd =
                            content.indexOf(' ', indexCursorPosition) !== -1
                                ? content.indexOf(' ', indexCursorPosition)
                                : content.length;
                        element.setSelectionRange(indexSelectionStart, indexSelectionEnd, 'forward');
                    });
                })(); // Mouse drag selection for generic text

                (function () {
                    // State variables
                    let anchorCaretPosition = null;
                    document.addEventListener('mousedown', (event) => {
                        // Reset any current selection
                        document.getSelection().empty(); // Get the anchor node and offset

                        if (event.button === 0 && !event.target.select && !anchorCaretPosition) {
                            anchorCaretPosition = document.caretPositionFromPoint(event.x, event.y);
                        }
                    });
                    document.addEventListener('mousemove', (event) => {
                        // Get the focus node and offset and make a selection
                        if (event.button === 0 && !event.target.select && anchorCaretPosition) {
                            const focusCaretPosition = document.caretPositionFromPoint(event.x, event.y);

                            if (!focusCaretPosition.offsetNode || !anchorCaretPosition.offsetNode) {
                                return;
                            }

                            const selection = document.getSelection();
                            selection.setBaseAndExtent(
                                anchorCaretPosition.offsetNode,
                                anchorCaretPosition.offset,
                                focusCaretPosition.offsetNode,
                                focusCaretPosition.offset,
                            );
                        }
                    });
                    document.addEventListener('mouseup', () => {
                        // Reset state
                        anchorCaretPosition = null;
                    });
                })();

                /***/
            },

        /***/ './src/lib/nullable.ts':
            /*!*****************************!*\
  !*** ./src/lib/nullable.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ isNonNullable: () => /* binding */ isNonNullable,
                    /* harmony export */ isNullable: () => /* binding */ isNullable,
                    /* harmony export */
                });
                function isNullable(item) {
                    return item === null || item === undefined;
                }
                function isNonNullable(item) {
                    return isNullable(item) === false;
                }

                /***/
            },

        /***/ './src/lib/number-keycodes.ts':
            /*!************************************!*\
  !*** ./src/lib/number-keycodes.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ NUMBER_KEY_CODES: () => /* binding */ NUMBER_KEY_CODES,
                    /* harmony export */
                });
                let NUMBER_KEY_CODES;

                (function (NUMBER_KEY_CODES) {
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['ZERO'] = 48)] = 'ZERO';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['ONE'] = 49)] = 'ONE';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['TWO'] = 50)] = 'TWO';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['THREE'] = 51)] = 'THREE';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['FOUR'] = 52)] = 'FOUR';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['FIVE'] = 53)] = 'FIVE';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['SIX'] = 54)] = 'SIX';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['SEVEN'] = 55)] = 'SEVEN';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['EIGHT'] = 56)] = 'EIGHT';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NINE'] = 57)] = 'NINE';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_0'] = 96)] = 'NUMPAD_0';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_1'] = 97)] = 'NUMPAD_1';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_2'] = 98)] = 'NUMPAD_2';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_3'] = 99)] = 'NUMPAD_3';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_4'] = 100)] = 'NUMPAD_4';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_5'] = 101)] = 'NUMPAD_5';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_6'] = 102)] = 'NUMPAD_6';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_7'] = 103)] = 'NUMPAD_7';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_8'] = 104)] = 'NUMPAD_8';
                    NUMBER_KEY_CODES[(NUMBER_KEY_CODES['NUMPAD_9'] = 105)] = 'NUMPAD_9';
                })(NUMBER_KEY_CODES || (NUMBER_KEY_CODES = {}));

                /***/
            },

        /***/ './src/lib/sound.js':
            /*!**************************!*\
  !*** ./src/lib/sound.js ***!
  \**************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Sound: () => /* binding */ Sound,
                    /* harmony export */ playSound: () => /* binding */ playSound,
                    /* harmony export */
                });
                function playSound(soundName) {
                    engine.call('PlaySound', soundName);
                }
                const Sound = {
                    playHighlight() {
                        playSound('highlight');
                    },

                    playClick() {
                        playSound('play');
                    },

                    playYes() {
                        playSound('yes1');
                    },
                };

                /***/
            },

        /***/ './src/lib/string-utils.ts':
            /*!*********************************!*\
  !*** ./src/lib/string-utils.ts ***!
  \*********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Alignment: () => /* binding */ Alignment,
                    /* harmony export */ convertNbsp: () => /* binding */ convertNbsp,
                    /* harmony export */ convertZwnbsp: () => /* binding */ convertZwnbsp,
                    /* harmony export */ format: () => /* binding */ format,
                    /* harmony export */ formatPrintf: () => /* binding */ formatPrintf,
                    /* harmony export */ formatString: () => /* binding */ formatString,
                    /* harmony export */ normalizeResource: () => /* binding */ normalizeResource,
                    /* harmony export */ snakeToCamel: () => /* binding */ snakeToCamel,
                    /* harmony export */ splitChinese: () => /* binding */ splitChinese,
                    /* harmony export */ splitEuropean: () => /* binding */ splitEuropean,
                    /* harmony export */ splitWords: () => /* binding */ splitWords,
                    /* harmony export */ upCaseFirstChar: () => /* binding */ upCaseFirstChar,
                    /* harmony export */
                });
                let Alignment;

                (function (Alignment) {
                    Alignment[(Alignment['left'] = 0)] = 'left';
                    Alignment[(Alignment['right'] = 1)] = 'right';
                })(Alignment || (Alignment = {}));

                /**
                 * Replace in string named params set in python style through braces: 'blalbla {param1} blalbla {param1} ...'
                 * @param str
                 * @param mapping is key/value params object
                 * @returns {void|*|XML|string}
                 */
                function format(str, mapping) {
                    return str.replace(/\{\w+\}/g, (match) => String(mapping[match.slice(1, -1)]));
                }
                /**
                 * Replace in string named params set in printf-style style: 'blalbla %(param1)s blalbla %(param1)s ...'
                 * @param str
                 * @param mapping is key/value params object
                 * @returns {void|*|XML|string}
                 */

                function formatPrintf(str, mapping) {
                    return str.replace(/(\{|%\()\w+(\}|\)s)/g, (match) => {
                        const pad = match.indexOf('%') === 0 ? 2 : 1;
                        return String(mapping[match.slice(pad, -pad)]);
                    });
                }
                /**
                 * Convert snake_case string to camelCase'
                 * @param {string} str
                 * @returns {string}
                 */

                function snakeToCamel(str) {
                    return str.replace(/_\w/g, (match) => {
                        return match[1].toUpperCase();
                    });
                }
                /**
                 * Convert file name to R class name'
                 * @param str
                 * @returns {string}
                 */

                function normalizeResource(str) {
                    return str.replace(/-/g, '_');
                }
                /**
                 * convert first char to upper case
                 * @param str
                 * @returns {string}
                 */

                function upCaseFirstChar(str) {
                    return str[0].toUpperCase() + str.slice(1);
                }
                /**
                 * replace &nbsp; to \xa0
                 * @param str
                 * @returns {string}
                 */

                const convertNbsp = (str) => {
                    return str.replace(/&nbsp;/g, '\xa0');
                };
                /**
                 * replace &zwnbsp; to \ufeff
                 * @param str
                 * @returns {string}
                 */

                const convertZwnbsp = (str) => {
                    return str.replace(/&zwnbsp;/g, '\ufeff');
                };

                const addSeparatorToRight = (acc, item, index) => {
                    if (!(index % 2)) {
                        return [...acc, item];
                    } else {
                        const last = acc.pop();
                        return [...acc, last + item];
                    }
                };

                const addSeparatorToLeft = (acc, item, index) => {
                    if (index === 0) {
                        return [item];
                    } else if (index % 2) {
                        return [...acc, item === ' ' ? '\xa0' : item];
                    } else {
                        const last = acc.pop();
                        return [...acc, last + item];
                    }
                };
                /**
                 * Split text string with RegExp separator and then add separator to the proper side
                 */

                const splitAndFormat = (stringToSplit, separator, alignment = Alignment.left) =>
                    stringToSplit
                        .split(separator)
                        .reduce(alignment === Alignment.left ? addSeparatorToRight : addSeparatorToLeft, []);

                const splitEuropean = (stringToSplit, alignment = Alignment.left) => {
                    let splitResult = [];
                    const splitRegex =
                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu; // exclude special words like vehicle names KV-2 etc

                    const stringWithNbsp = convertNbsp(stringToSplit);
                    splitAndFormat(stringWithNbsp, /( )/, alignment).forEach(
                        (word) => (splitResult = splitResult.concat(splitAndFormat(word, splitRegex, Alignment.left))),
                    );
                    return splitResult;
                };
                const splitChinese = (() => {
                    /* eslint-disable no-useless-escape */
                    // Escaping is necessary for unicode RegExp.
                    // Symbols used for latin vehicle names, ranges etc. expected not be wrapped from each other or following punctuation mark.
                    // You can add new ones to the third pair of [] (currently the list is [a-zA-Z0-9-–— %….\{3\}/])
                    const latinInjections =
                        /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu; // This rule prevents wrapping of some symbols neighboring to the brackets/quotes.
                    // Pairs of opening (left) and closing (right) symbols are described.
                    // Only use separate unicode symbols for left and right part(«»), but NOT universal ones (").
                    // In case if universal symbol is used in the translation, the translation must be fixed, not the rule.

                    const bracketsAndQuotes =
                        /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu; // Rule describes that previous hieroglyph should not be wrapped.
                    // Only unicode punctuation marks are used for asian languages.
                    // Otherwise string should be fixed to use unicode punctuation marks, not the rule.

                    const punctuationMarks =
                        /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu; // This rule makes it possible to wrap any neighboring pair of hieroglyphs.

                    const neighboringHieroglyphs =
                        /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu;
                    /* eslint-enable */
                    // Order is important.

                    const mainRegex = new RegExp(
                        latinInjections.source +
                            '|' +
                            bracketsAndQuotes.source +
                            '|' +
                            punctuationMarks.source +
                            '|' +
                            neighboringHieroglyphs.source,
                        'gum',
                    );
                    return (stringsToSplit) =>
                        stringsToSplit
                            .replace(/&nbsp;/g, '\xa0')
                            .replace(/ /g, '\xa0')
                            .match(mainRegex);
                })();
                const CHINESE_LANGUAGE_CODES = ['zh_cn', 'zh_sg', 'zh_tw'];
                /**
                 * Split one line of localized text to array of words which then can be line-wrapped by gameface.
                 * @param stringToSplit supports &nbsp, hyphens and dashes for asian languages.
                 * @param alignment set to `right` for right-aligned text
                 * See tests for example
                 */

                const splitWords = (stringToSplit, alignment = Alignment.left) => {
                    const language = R.strings.settings.LANGUAGE_CODE().toLowerCase();

                    if (CHINESE_LANGUAGE_CODES.includes(language)) {
                        return splitChinese(stringToSplit);
                    }

                    return splitEuropean(stringToSplit, alignment);
                };
                const formatString = (text, alignment, binding) =>
                    text.split(/%\((.*?)\)(?:[sd])?/g).map((subString) => {
                        if (!binding) {
                            return splitWords(subString, alignment);
                        }

                        return subString in binding ? binding[subString] : splitWords(subString, alignment);
                    });

                /***/
            },

        /***/ './src/lib/view-env-helper/ClickOutsideManager.ts':
            /*!********************************************************!*\
  !*** ./src/lib/view-env-helper/ClickOutsideManager.ts ***!
  \********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                class ClickOutsideManager {
                    constructor() {
                        this.entries = [];
                        this._listenMouse = false;

                        this.onMouseDown = (event) => {
                            this.entries.forEach(({ container, callback }) => {
                                let target = event.target;

                                do {
                                    if (target === container) {
                                        // this is a click in inner area or close button. need to check close button too,
                                        // because mousedown
                                        // its parent is not popover content block, so popover closes incorrectly
                                        // do nothing, just return.
                                        return;
                                    } // go up the DOM

                                    target = target.parentNode;
                                } while (target); // this is a click outside.

                                callback();
                            });
                        };
                    }

                    static get instance() {
                        if (!ClickOutsideManager.__instance) {
                            ClickOutsideManager.__instance = new ClickOutsideManager();
                        }

                        return ClickOutsideManager.__instance;
                    }

                    register(container, callback) {
                        this.addMouseListener();
                        this.entries.push({
                            container,
                            callback,
                        });
                    }

                    unregister(container, callback) {
                        const targetContainer = container;
                        const targetCallback = callback;
                        this.entries = this.entries.filter(({ container, callback }) => {
                            return container !== targetContainer || callback !== targetCallback;
                        });
                        this.removeMouseListener();
                    }

                    addMouseListener() {
                        if (!this._listenMouse) {
                            document.addEventListener('mousedown', this.onMouseDown);
                            this._listenMouse = true;
                        }
                    }

                    removeMouseListener() {
                        if (this._listenMouse && this.entries.length === 0) {
                            document.removeEventListener('mousedown', this.onMouseDown);
                            this._listenMouse = false;
                        }
                    }
                }

                ClickOutsideManager.__instance = void 0;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ClickOutsideManager;

                /***/
            },

        /***/ './src/lib/view-env-helper/DataTracker.ts':
            /*!************************************************!*\
  !*** ./src/lib/view-env-helper/DataTracker.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                class DataTracker {
                    constructor() {
                        this._callbacks = void 0;
                        this._updateHandler = void 0;
                        this._views = void 0;

                        this.clearViewCallbacks = (viewId) => {
                            if (this._views[viewId]) {
                                this._views[viewId].forEach((callbackId) => {
                                    // tracker cleaned up on integration side
                                    // this.removeCallback(callbackId, viewId);
                                    delete this._callbacks[callbackId];
                                });

                                delete this._views[viewId];
                            }
                        };

                        this._callbacks = {};
                        this._views = {};
                        this._updateHandler = undefined;
                    }

                    static get instance() {
                        // we should have one instance for different bundles
                        if (!window.__dataTracker) {
                            window.__dataTracker = new DataTracker();
                        }

                        return window.__dataTracker;
                    }

                    clear() {
                        if (this._updateHandler !== undefined) {
                            this._updateHandler.clear();

                            this._updateHandler = undefined;
                        }

                        this._callbacks = {};
                    }

                    addCallback(path, callback, resId = 0, trackInDepth = true) {
                        if (this._updateHandler === undefined) {
                            this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this);
                        }

                        const callbackID = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.addModelObserver(
                            path,
                            resId,
                            trackInDepth,
                        );

                        if (callbackID > 0) {
                            this._callbacks[callbackID] = callback;

                            if (resId > 0) {
                                if (this._views[resId]) {
                                    this._views[resId].push(callbackID);
                                } else {
                                    this._views[resId] = [callbackID];
                                }
                            }
                        } else {
                            console.error("Can't add callback for model:", path);
                        }

                        return callbackID;
                    }

                    removeCallback(callbackID, resId = 0) {
                        let result = false;

                        if (callbackID !== undefined && this._callbacks[callbackID] !== undefined) {
                            result = viewEnv.removeDataChangedCallback(callbackID, resId);
                            delete this._callbacks[callbackID];
                        }

                        if (!result) {
                            console.error("Can't remove callback by id:", callbackID);
                        }

                        return result;
                    }

                    _emmitDataChanged(data, indexes, callbackIDs) {
                        callbackIDs.forEach((callbackID) => {
                            const callback = this._callbacks[callbackID];

                            if (callback !== undefined) {
                                callback(data, indexes);
                            }
                        });
                    }
                }

                DataTracker.__instance = void 0;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = DataTracker;

                /***/
            },

        /***/ './src/lib/view-env-helper/ViewModel.ts':
            /*!**********************************************!*\
  !*** ./src/lib/view-env-helper/ViewModel.ts ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./DataTracker */ './src/lib/view-env-helper/DataTracker.ts',
                );
                /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./index */ './src/lib/view-env-helper/index.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                class ViewModel {
                    constructor(path, watchingFields = []) {
                        this.dataTracker = void 0;
                        this.modelPath = void 0;
                        this.callbacks = void 0;
                        this.data = void 0;

                        this._notifyObservers = () => {
                            this.data = eval(this.modelPath);
                            this.callbacks.forEach((callback) => {
                                callback(this.data);
                            });
                        };

                        this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__['default']();
                        this.modelPath = path;
                        this.callbacks = new Set();
                        (0, _index__WEBPACK_IMPORTED_MODULE_1__.onBindingsReady)().then(() => {
                            this._addCallback(path);

                            watchingFields.forEach((suffix) => {
                                this._addCallback(path + '.' + suffix);
                            });

                            this._notifyObservers();
                        });
                    }

                    subscribe(callback) {
                        this.callbacks.add(callback);

                        if (this.data !== null && this.data !== undefined) {
                            callback(this.data);
                        }
                    }

                    unsubscribe(callback) {
                        this.callbacks.delete(callback);
                    }

                    destroy() {
                        this.dataTracker.clear();
                        this.callbacks.clear();
                    }

                    _addCallback(path) {
                        this.dataTracker.addCallback(path, this._notifyObservers);
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;

                /***/
            },

        /***/ './src/lib/view-env-helper/dumpViewModel.ts':
            /*!**************************************************!*\
  !*** ./src/lib/view-env-helper/dumpViewModel.ts ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ dumpViewModel: () => /* binding */ dumpViewModel,
                    /* harmony export */
                });
                /* eslint-disable @typescript-eslint/no-explicit-any */
                function dumpViewModel(model) {
                    const result = {};

                    if (typeof model !== 'object') {
                        return model;
                    }

                    for (const property in model) {
                        if (Object.prototype.hasOwnProperty.call(model, property)) {
                            const type = Object.prototype.toString.call(model[property]);

                            if (type.startsWith('[object CoherentArrayProxy]')) {
                                const array = model[property];
                                result[property] = [];

                                for (let i = 0; i < array.length; i++) {
                                    result[property].push({
                                        value: dumpViewModel(array[i].value),
                                    });
                                }
                            } else if (type.startsWith('[object class BW::WULF::ViewModel')) {
                                result[property] = dumpViewModel(model[property]);
                            } else {
                                result[property] = model[property];
                            }
                        }
                    }

                    return result;
                }

                /***/
            },

        /***/ './src/lib/view-env-helper/index.ts':
            /*!******************************************!*\
  !*** ./src/lib/view-env-helper/index.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ClickOutsideManager: () => /* binding */ ClickOutsideManager,
                    /* harmony export */ DataTracker: () =>
                        /* reexport safe */ _DataTracker__WEBPACK_IMPORTED_MODULE_2__['default'],
                    /* harmony export */ DateFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.DateFormatType,
                    /* harmony export */ NumberFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType,
                    /* harmony export */ RealFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.RealFormatType,
                    /* harmony export */ SystemLocale: () =>
                        /* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_4__.SystemLocale,
                    /* harmony export */ TimeFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.TimeFormatType,
                    /* harmony export */ UserLocale: () =>
                        /* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_4__.UserLocale,
                    /* harmony export */ ViewEventType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.ViewEventType,
                    /* harmony export */ ViewModel: () =>
                        /* reexport safe */ _ViewModel__WEBPACK_IMPORTED_MODULE_7__['default'],
                    /* harmony export */ addEscapeListener: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.addEscapeListener,
                    /* harmony export */ closeOnEsc: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.closeOnEsc,
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ dumpViewModel: () =>
                        /* reexport safe */ _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__.dumpViewModel,
                    /* harmony export */ handleViewEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.handleViewEvent,
                    /* harmony export */ isContextMenuShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isContextMenuShown,
                    /* harmony export */ isPopOverShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isPopOverShown,
                    /* harmony export */ isTooltipShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isTooltipShown,
                    /* harmony export */ makeGlobalBoundingBox: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.makeGlobalBoundingBox,
                    /* harmony export */ onBindingsReady: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.onBindingsReady,
                    /* harmony export */ onLayoutReady: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.onLayoutReady,
                    /* harmony export */ sendCloseEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendCloseEvent,
                    /* harmony export */ sendClosePopOverEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendClosePopOverEvent,
                    /* harmony export */ sendMoveEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendMoveEvent,
                    /* harmony export */ sendShowContextMenuEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowContextMenuEvent,
                    /* harmony export */ sendShowPopOverEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowPopOverEvent,
                    /* harmony export */
                });
                /* harmony import */ var _showModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./showModel */ './src/lib/view-env-helper/showModel.ts',
                );
                /* harmony import */ var _showModel__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(_showModel__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _ClickOutsideManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./ClickOutsideManager */ './src/lib/view-env-helper/ClickOutsideManager.ts',
                );
                /* harmony import */ var _DataTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./DataTracker */ './src/lib/view-env-helper/DataTracker.ts',
                );
                /* harmony import */ var _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./dumpViewModel */ './src/lib/view-env-helper/dumpViewModel.ts',
                );
                /* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./locale */ './src/lib/view-env-helper/locale.ts',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./types */ './src/lib/view-env-helper/types.ts',
                );
                /* harmony import */ var _view_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ./view-events */ './src/lib/view-env-helper/view-events.ts',
                );
                /* harmony import */ var _ViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./ViewModel */ './src/lib/view-env-helper/ViewModel.ts',
                );

                const ClickOutsideManager = _ClickOutsideManager__WEBPACK_IMPORTED_MODULE_1__['default'].instance;

                const ViewEnvHelper = {
                    DataTracker: _DataTracker__WEBPACK_IMPORTED_MODULE_2__['default'],
                    ViewModel: _ViewModel__WEBPACK_IMPORTED_MODULE_7__['default'],
                    ViewEventType: _types__WEBPACK_IMPORTED_MODULE_5__.ViewEventType,
                    NumberFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType,
                    RealFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.RealFormatType,
                    TimeFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.TimeFormatType,
                    DateFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.DateFormatType,
                    makeGlobalBoundingBox: _view_events__WEBPACK_IMPORTED_MODULE_6__.makeGlobalBoundingBox,
                    sendMoveEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendMoveEvent,
                    sendCloseEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendCloseEvent,
                    sendClosePopOverEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendClosePopOverEvent,
                    sendShowContextMenuEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowContextMenuEvent,
                    sendShowPopOverEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowPopOverEvent,
                    addEscapeListener: _view_events__WEBPACK_IMPORTED_MODULE_6__.addEscapeListener,
                    closeOnEsc: _view_events__WEBPACK_IMPORTED_MODULE_6__.closeOnEsc,
                    handleViewEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.handleViewEvent,
                    onBindingsReady: _view_events__WEBPACK_IMPORTED_MODULE_6__.onBindingsReady,
                    onLayoutReady: _view_events__WEBPACK_IMPORTED_MODULE_6__.onLayoutReady,
                    isTooltipShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isTooltipShown,
                    isContextMenuShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isContextMenuShown,
                    isPopOverShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isPopOverShown,
                    dumpViewModel: _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__.dumpViewModel,
                    ClickOutsideManager,
                    SystemLocale: _locale__WEBPACK_IMPORTED_MODULE_4__.SystemLocale,
                    UserLocale: _locale__WEBPACK_IMPORTED_MODULE_4__.UserLocale,
                };
                window.ViewEnvHelper = ViewEnvHelper;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ViewEnvHelper;

                /***/
            },

        /***/ './src/lib/view-env-helper/locale.ts':
            /*!*******************************************!*\
  !*** ./src/lib/view-env-helper/locale.ts ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ SystemLocale: () => /* binding */ SystemLocale,
                    /* harmony export */ UserLocale: () => /* binding */ UserLocale,
                    /* harmony export */
                });
                const SystemLocale = {
                    getNumberFormat(value, type) {
                        return systemLocale.getNumberFormat(value, type);
                    },

                    getRealFormat(value, type) {
                        return systemLocale.getRealFormat(value, type);
                    },

                    getTimeFormat(utc, type) {
                        return systemLocale.getTimeFormat(utc, type);
                    },

                    getDateFormat(utc, type) {
                        return systemLocale.getDateFormat(utc, type);
                    },

                    toUpperCase(str) {
                        return systemLocale.toUpperCase(str);
                    },

                    toLowerCase(str) {
                        return systemLocale.toUpperCase(str);
                    },
                };
                const UserLocale = {
                    getNumberFormat(value) {
                        return userLocale.getNumberFormat(value);
                    },

                    /**
                     * Returns string presentation of data and time using pattern.
                     * @param pattern The string containing conversion specifiers,
                     *      see std::put_time to get available specifiers, for example.
                     * @param utc The number containing time in seconds since the Epoch.
                     * @param timeToLocal Is time converted to local time.
                     * @returns The string containing presentation of data and time.
                     */
                    getTimeFormat(pattern, utc, timeToLocal) {
                        return userLocale.getTimeFormat(pattern, utc, timeToLocal === undefined ? true : timeToLocal);
                    },

                    /**
                     * Returns string presentation of data and time using ID of string resource.
                     * @param resourceID The ID of string resource where place conversion specifiers.
                     * @param utc The number containing time in seconds since the Epoch.
                     * @param timeToLocal Is time converted to local time.
                     * @returns The string containing presentation of data and time.
                     */
                    getTimeString(resourceID, utc, timeToLocal) {
                        return userLocale.getTimeString(
                            resourceID,
                            utc,
                            timeToLocal === undefined ? true : timeToLocal,
                        );
                    },
                };

                /***/
            },

        /***/ './src/lib/view-env-helper/showModel.ts':
            /*!**********************************************!*\
  !*** ./src/lib/view-env-helper/showModel.ts ***!
  \**********************************************/
            /***/ () => {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                if (true) {
                    const showModel = (model = window.model, depth = 16) => {
                        if (depth < 0) {
                            console.warn(`Depth limit has been reached.
            You can change the limit with second argument.
            Use _showModel(model, <number>) for this. 16 is default.`);
                            return 'Depth limit has been reached';
                        }

                        if (model === null) {
                            return null;
                        }

                        switch (typeof model) {
                            case 'number':
                            case 'string':
                            case 'boolean':
                            case 'bigint':
                            case 'undefined':
                                return model;

                            case 'function':
                                return 'function';

                            case 'object': {
                                var _model$constructor$na, _model$constructor;

                                const type =
                                    (_model$constructor$na =
                                        (_model$constructor = model.constructor) == null
                                            ? void 0
                                            : _model$constructor.name) != null
                                        ? _model$constructor$na
                                        : 'UNKNOWN';

                                switch (true) {
                                    case type.includes('CoherentArrayProxy'):
                                        return [...model.values()].map((item) => showModel(item, depth - 1));

                                    case type === 'UNKNOWN':
                                        return 'UNKNOWN_TYPE';

                                    case type.includes('ViewModel'):
                                    default: {
                                        const result = {};

                                        for (const key in model) {
                                            if (Object.prototype.hasOwnProperty.call(model, key)) {
                                                result[key] = showModel(model[key], depth - 1);
                                            }
                                        }

                                        return result;
                                    }
                                }
                            }

                            default:
                                return `Unknown: ${String(model)}`;
                        }
                    };

                    window._showModel = showModel;
                }

                /***/
            },

        /***/ './src/lib/view-env-helper/types.ts':
            /*!******************************************!*\
  !*** ./src/lib/view-env-helper/types.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ DateFormatType: () => /* binding */ DateFormatType,
                    /* harmony export */ NumberFormatType: () => /* binding */ NumberFormatType,
                    /* harmony export */ RealFormatType: () => /* binding */ RealFormatType,
                    /* harmony export */ TimeFormatType: () => /* binding */ TimeFormatType,
                    /* harmony export */ ViewEventType: () => /* binding */ ViewEventType,
                    /* harmony export */
                });
                let ViewEventType;

                (function (ViewEventType) {
                    ViewEventType[(ViewEventType['UNDEFINED'] = 0)] = 'UNDEFINED';
                    ViewEventType[(ViewEventType['TOOLTIP'] = 1)] = 'TOOLTIP';
                    ViewEventType[(ViewEventType['POP_OVER'] = 2)] = 'POP_OVER';
                    ViewEventType[(ViewEventType['CONTEXT_MENU'] = 4)] = 'CONTEXT_MENU';
                    ViewEventType[(ViewEventType['DROP_DOWN'] = 8)] = 'DROP_DOWN';
                    ViewEventType[(ViewEventType['MOVE'] = 16)] = 'MOVE';
                    ViewEventType[(ViewEventType['CLOSE'] = 32)] = 'CLOSE';
                    ViewEventType[(ViewEventType['MINIMIZE'] = 64)] = 'MINIMIZE';
                })(ViewEventType || (ViewEventType = {}));

                const NumberFormatType = Object.freeze({
                    INTEGRAL: 0,
                    GOLD: 1,
                });
                const RealFormatType = Object.freeze({
                    FRACTIONAL: 0,
                    WO_ZERO_DIGITS: 1,
                });
                const TimeFormatType = Object.freeze({
                    SHORT_FORMAT: 0,
                    LONG_FORMAT: 1,
                });
                const DateFormatType = Object.freeze({
                    SHORT_FORMAT: 0,
                    LONG_FORMAT: 1,
                    YEAR_MONTH: 2,
                });

                /***/
            },

        /***/ './src/lib/view-env-helper/view-events.ts':
            /*!************************************************!*\
  !*** ./src/lib/view-env-helper/view-events.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addEscapeListener: () => /* binding */ addEscapeListener,
                    /* harmony export */ callOnEsc: () => /* binding */ callOnEsc,
                    /* harmony export */ closeOnEsc: () => /* binding */ closeOnEsc,
                    /* harmony export */ handleViewEvent: () => /* binding */ handleViewEvent,
                    /* harmony export */ isContextMenuShown: () => /* binding */ isContextMenuShown,
                    /* harmony export */ isPopOverShown: () => /* binding */ isPopOverShown,
                    /* harmony export */ isTooltipShown: () => /* binding */ isTooltipShown,
                    /* harmony export */ makeGlobalBoundingBox: () => /* binding */ makeGlobalBoundingBox,
                    /* harmony export */ onBindingsReady: () => /* binding */ onBindingsReady,
                    /* harmony export */ onLayoutReady: () => /* binding */ onLayoutReady,
                    /* harmony export */ sendCloseEvent: () => /* binding */ sendCloseEvent,
                    /* harmony export */ sendClosePopOverEvent: () => /* binding */ sendClosePopOverEvent,
                    /* harmony export */ sendMinimizeEvent: () => /* binding */ sendMinimizeEvent,
                    /* harmony export */ sendMoveEvent: () => /* binding */ sendMoveEvent,
                    /* harmony export */ sendShowContextMenuEvent: () => /* binding */ sendShowContextMenuEvent,
                    /* harmony export */ sendShowPopOverEvent: () => /* binding */ sendShowPopOverEvent,
                    /* harmony export */
                });
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./types */ './src/lib/view-env-helper/types.ts',
                );
                const _excluded = ['args'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }

                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                            }
                            function _throw(err) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                            }
                            _next(undefined);
                        });
                    };
                }

                const makeGlobalBoundingBox = (clientRect) => {
                    return {
                        __Type: 'GFBoundingBox',
                        x: clientRect.x,
                        y: clientRect.y,
                        width: clientRect.width,
                        height: clientRect.height,
                    };
                };
                const onBindingsReady = /*#__PURE__*/ (function () {
                    var _ref = _asyncToGenerator(function* () {
                        if (engine._BindingsReady && engine._WindowLoaded) {
                            return true;
                        }

                        return new Promise((resolve) => {
                            engine.on('Ready', resolve);
                        });
                    });

                    return function onBindingsReady() {
                        return _ref.apply(this, arguments);
                    };
                })();
                const onLayoutReady = () =>
                    new Promise((resolve) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                resolve();
                            });
                        });
                    });

                const createViewEventArguments = (data) => {
                    return Object.entries(data).map(([key, value]) => {
                        const out = {
                            __Type: 'GFValueProxy',
                            name: key,
                        };

                        switch (typeof value) {
                            case 'number':
                                out.number = value;
                                break;

                            case 'boolean':
                                out.bool = value;
                                break;

                            default:
                            case 'string':
                                out.string = value.toString();
                                break;
                        }

                        return out;
                    });
                };

                const handleViewEvent = (type, options) => {
                    const __Type = 'GFViewEventProxy';

                    if (options !== undefined) {
                        const args = options.args,
                            restOptions = _objectWithoutPropertiesLoose(options, _excluded);

                        if (args !== undefined) {
                            viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                    {
                                        arguments: createViewEventArguments(args),
                                    },
                                ),
                            );
                        } else {
                            viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                ),
                            );
                        }
                    } else {
                        viewEnv.handleViewEvent({
                            __Type,
                            type,
                        });
                    }
                };
                /** @deprecated Use env.view.sendEvent.move method instead. */

                const sendMoveEvent = (start) =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.MOVE, {
                        isMouseEvent: true,
                        on: start,
                    });
                /** @deprecated Use env.view.sendEvent.close method instead. */

                const sendCloseEvent = () => handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CLOSE);
                const sendClosePopOverEvent = () =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER, {
                        on: false,
                    });
                /** @deprecated Use env.view.sendEvent.minimize method instead. */

                const sendMinimizeEvent = () =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.MINIMIZE);
                const sendShowContextMenuEvent = (contentID, args, decoratorID = 0) => {
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CONTEXT_MENU, {
                        isMouseEvent: true,
                        contentID: contentID,
                        on: true,
                        decoratorID: decoratorID,
                        args: args,
                    });
                };
                const sendShowPopOverEvent = (
                    contentID,
                    direction,
                    node,
                    decoratorID,
                    targetID = R.invalid('resId'),
                    args,
                ) => {
                    const globalPosition = _env__WEBPACK_IMPORTED_MODULE_1__.env.view.getViewGlobalPosition();

                    const _node$getBoundingClie = node.getBoundingClientRect(),
                        x = _node$getBoundingClie.x,
                        y = _node$getBoundingClie.y,
                        width = _node$getBoundingClie.width,
                        height = _node$getBoundingClie.height;

                    const clientRectPx = {
                        x: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(x) + globalPosition.x,
                        y: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(y) + globalPosition.y,
                        width: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(width),
                        height: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(height),
                    };
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER, {
                        isMouseEvent: true,
                        contentID: contentID,
                        decoratorID: decoratorID || R.invalid('resId'),
                        targetID: targetID,
                        direction: direction,
                        bbox: makeGlobalBoundingBox(clientRectPx),
                        on: true,
                        args: args,
                    });
                };
                const isTooltipShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.TOOLTIP);
                const isContextMenuShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CONTEXT_MENU);
                const isPopOverShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER);
                const callOnEsc = (event, callback) => {
                    event.keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_0__.KEY_CODES.ESCAPE && callback();
                };
                const closeOnEsc = (event) => {
                    callOnEsc(event, sendCloseEvent);
                };
                /** @deprecated Don't use it with hooks. Use useKeydownListener, useCallbackOnEsc or useCloseOnEsc hooks instead. */

                const addEscapeListener = (callback) => {
                    const handleFunc = (event) => callOnEsc(event, callback);

                    window.addEventListener('keydown', handleFunc);
                    return () => window.removeEventListener('keydown', handleFunc);
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/MediaWrapper.tsx':
            /*!********************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/MediaWrapper.tsx ***!
  \********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapper: () => /* binding */ MediaWrapper,
                    /* harmony export */
                });
                /* harmony import */ var components_MediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/MediaQuery */ './src/components/MediaQuery/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _MediaWrapperInner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaWrapperInner */ './src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx',
                );
                const _excluded = ['children'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const MediaWrapper = (_ref) => {
                    let children = _ref.children,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        components_MediaQuery__WEBPACK_IMPORTED_MODULE_0__.MediaProvider,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _MediaWrapperInner__WEBPACK_IMPORTED_MODULE_2__.MediaWrapperInner,
                            rest,
                            children,
                        ),
                    );
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx':
            /*!*************************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx ***!
  \*************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapperInner: () => /* binding */ MediaWrapperInner,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(/*! global-styles/mixins/mediaCss */ './src/global-styles/mixins/mediaCss.js');
                /* harmony import */ var global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../hooks/useMedia */ './src/lib/hooks/useMedia.ts',
                );
                const _excluded = ['children', 'className'];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const WIDTH_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_WIDTH}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE_WIDTH}`,
                };
                const HEIGHT_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_HEIGHT}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE_HEIGHT}`,
                };
                const SIZE_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE}`,
                };
                const MediaWrapperInner = (_ref) => {
                    let children = _ref.children,
                        className = _ref.className,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMedia = (0, _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.useMedia)(),
                        mediaWidth = _useMedia.mediaWidth,
                        mediaHeight = _useMedia.mediaHeight,
                        mediaSize = _useMedia.mediaSize;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    className,
                                    WIDTH_CLASSES[mediaWidth],
                                    HEIGHT_CLASSES[mediaHeight],
                                    SIZE_CLASSES[mediaSize],
                                ),
                            },
                            rest,
                        ),
                        children,
                    );
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/index.ts':
            /*!************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/index.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapper: () =>
                        /* reexport safe */ _MediaWrapper__WEBPACK_IMPORTED_MODULE_0__.MediaWrapper,
                    /* harmony export */
                });
                /* harmony import */ var _MediaWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./MediaWrapper */ './src/lib/wrappers/MediaWrapper/MediaWrapper.tsx',
                );

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx':
            /*!***********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx ***!
  \***********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var lib_wrappers_MediaWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/wrappers/MediaWrapper */ './src/lib/wrappers/MediaWrapper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react-dom */ './node_modules/@wotfe/react-dom/index.js',
                );
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/App/App */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts',
                );

                engine.whenReady.then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _model__WEBPACK_IMPORTED_MODULE_4__.ModelProvider,
                            null,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                lib_wrappers_MediaWrapper__WEBPACK_IMPORTED_MODULE_0__.MediaWrapper,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    _components_App_App__WEBPACK_IMPORTED_MODULE_3__.App,
                                    null,
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx':
            /*!*********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx ***!
  \*********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
                    /* harmony export */
                });
                /* harmony import */ var components_Rewards_constants__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! components/Rewards/constants */ './src/components/Rewards/constants.ts');
                /* harmony import */ var components_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! components/TextButton/TextButton */ './src/components/TextButton/TextButton.tsx',
                    );
                /* harmony import */ var lib_hooks_useKeydownListener__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! lib/hooks/useKeydownListener */ './src/lib/hooks/useKeydownListener.ts');
                /* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx-react-lite */ './node_modules/mobx-react-lite/es/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ../../model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts',
                );
                /* harmony import */ var _Description_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ../Description/Description */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx',
                );
                /* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ../Footer/Footer */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx',
                );
                /* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ../Header/Header */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx',
                );
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./App.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css',
                );

                const TEXTS = R.strings.armory_yard;
                const ZERO_PRICE = 0;
                const App = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(() => {
                    const _useModel = (0, _model__WEBPACK_IMPORTED_MODULE_5__.useModel)(),
                        controls = _useModel.controls,
                        model = _useModel.model;

                    const _model$root$get = model.root.get(),
                        tokensCount = _model$root$get.tokensCount,
                        payedTokensLimit = _model$root$get.payedTokensLimit,
                        isWalletAvailable = _model$root$get.isWalletAvailable,
                        userGold = _model$root$get.userGold;

                    const tokenPrice = model.computes.getTokenPrice();
                    const tokenRate =
                        tokenPrice.price.find(
                            (onePrice) =>
                                onePrice.name ===
                                components_Rewards_constants__WEBPACK_IMPORTED_MODULE_0__.RewardType.Gold,
                        ).value || ZERO_PRICE;
                    (0, lib_hooks_useKeydownListener__WEBPACK_IMPORTED_MODULE_2__.useCallbackOnEsc)(controls.back);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                        'div',
                        {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            components_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_1__.TextButton,
                            {
                                caption: TEXTS.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                classNames: {
                                    base: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].close,
                                },
                                onClick: controls.cancel,
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].content,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].header,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    _Header_Header__WEBPACK_IMPORTED_MODULE_8__.Header,
                                    {
                                        tokensCount: tokensCount,
                                    },
                                ),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].productInfo,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    'div',
                                    {
                                        className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].description,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                        _Description_Description__WEBPACK_IMPORTED_MODULE_6__.Description,
                                        null,
                                    ),
                                ),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].tokenImage,
                                }),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footer,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__.Footer,
                                    {
                                        tokenRate: tokenRate,
                                        isWalletAvailable: isWalletAvailable,
                                        buy: controls.buy,
                                        payedTokensLimit: payedTokensLimit,
                                        userGold: userGold,
                                    },
                                ),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx':
            /*!*************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx ***!
  \*************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Description: () => /* binding */ Description,
                    /* harmony export */
                });
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _Description_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./Description.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.description;
                const Description = (0, react__WEBPACK_IMPORTED_MODULE_1__.memo)(() => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'div',
                        {
                            className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].title,
                                text: TEXTS.title(),
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].description,
                                text: TEXTS.body(),
                            },
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Footer: () => /* binding */ Footer,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Button/CButton */ './src/components/Button/CButton.tsx',
                );
                /* harmony import */ var components_Currency_Currency__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! components/Currency/Currency */ './src/components/Currency/Currency.tsx');
                /* harmony import */ var components_Currency_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! components/Currency/types */ './src/components/Currency/types.ts',
                );
                /* harmony import */ var components_NumericStepper_NumericStepper__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! components/NumericStepper/NumericStepper */ './src/components/NumericStepper/NumericStepper.tsx',
                    );
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! components/Tooltip/Tooltip */ './src/components/Tooltip/Tooltip.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
                /* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ./Footer.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.footer;
                const STEP_SIZE = 1;
                const STEPPER_WIDTH = 100;
                const Footer = (0, react__WEBPACK_IMPORTED_MODULE_7__.memo)(
                    ({ isWalletAvailable, payedTokensLimit, tokenRate, userGold, buy }) => {
                        const _useState = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)(STEP_SIZE),
                            tokensValue = _useState[0],
                            setTokensValue = _useState[1];

                        const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)(tokenRate),
                            goldValue = _useState2[0],
                            setGoldValue = _useState2[1];

                        const _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)(userGold >= tokenRate),
                            isEnough = _useState3[0],
                            setIsEnough = _useState3[1];

                        const handleChangeTokens = (0, react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(
                            (selectedValue) => {
                                const goldRate = selectedValue * tokenRate;
                                setTokensValue(selectedValue < payedTokensLimit ? selectedValue : payedTokensLimit);
                                setGoldValue(goldRate);
                                setIsEnough(userGold >= goldRate);
                            },
                            [tokenRate, payedTokensLimit, userGold],
                        );
                        (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
                            if (tokensValue > payedTokensLimit) {
                                setTokensValue(payedTokensLimit);
                            }
                        }, [payedTokensLimit, tokensValue]);
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                            'div',
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].base,
                                    !isWalletAvailable &&
                                        _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].base__hovered,
                                ),
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].line,
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].line__first,
                                ),
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement('div', {
                                className: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].bg,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].line,
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].line__second,
                                ),
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                'div',
                                {
                                    className: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].content,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                    components_Text_Text__WEBPACK_IMPORTED_MODULE_5__['default'],
                                    {
                                        className: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].tokensAvailable,
                                        text: TEXTS.availableTokens(),
                                        format: {
                                            binding: {
                                                tokens: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                                    components_Text_Text__WEBPACK_IMPORTED_MODULE_5__['default'],
                                                    {
                                                        className:
                                                            _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default']
                                                                .tokensAvailable__tokens,
                                                        text: String(payedTokensLimit),
                                                    },
                                                ),
                                            },
                                        },
                                    },
                                ),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                    'div',
                                    {
                                        className: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].finalPrice,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                        components_Currency_Currency__WEBPACK_IMPORTED_MODULE_2__.Currency,
                                        {
                                            type: components_Currency_types__WEBPACK_IMPORTED_MODULE_3__.CurrencyType
                                                .gold,
                                            value: goldValue,
                                            size: components_Currency_types__WEBPACK_IMPORTED_MODULE_3__.CurrencySize
                                                .big,
                                            isEnough: isEnough,
                                        },
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                        'div',
                                        {
                                            className:
                                                _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].productCounter,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                            components_NumericStepper_NumericStepper__WEBPACK_IMPORTED_MODULE_4__.NumericStepper,
                                            {
                                                onChange: handleChangeTokens,
                                                value: tokensValue,
                                                stepSize: STEP_SIZE,
                                                maximum: payedTokensLimit,
                                                minimum: STEP_SIZE,
                                                size: 'medium',
                                                width: STEPPER_WIDTH,
                                            },
                                        ),
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                        components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__.CButton,
                                        {
                                            type: components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__.ButtonType
                                                .main,
                                            mixClass: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].buyButton,
                                            onClick: () => buy(tokensValue),
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                            components_Text_Text__WEBPACK_IMPORTED_MODULE_5__['default'],
                                            {
                                                text: TEXTS.buy(),
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].buttonText,
                                            },
                                        ),
                                    ),
                                ),
                            ),
                            !isWalletAvailable &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                    components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                                    {
                                        contentId:
                                            R.views.armory_yard.lobby.feature.tooltips.ArmoryYardWalletNotAvailableTooltipView(
                                                'resId',
                                            ),
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                        'div',
                                        {
                                            className: _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].warning,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                            'div',
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].warning__glow,
                                            },
                                        ),
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(
                                            'div',
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_8__['default'].warning__icon,
                                            },
                                        ),
                                    ),
                                ),
                        );
                    },
                );

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Header: () => /* binding */ Header,
                    /* harmony export */
                });
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Tooltip/Tooltip */ './src/components/Tooltip/Tooltip.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./Header.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.header;
                const Header = (0, react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ tokensCount }) => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        {
                            className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'div',
                            {
                                className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].productTitleWrapper,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].title,
                                    text: TEXTS.title(),
                                },
                            ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'div',
                            {
                                className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__text,
                                    text: TEXTS.available(),
                                },
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.ShopCurrencyTooltipView('resId'),
                                    ignoreShowDelay: true,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                    'div',
                                    {
                                        className:
                                            _Header_css__WEBPACK_IMPORTED_MODULE_3__['default']
                                                .tokenCount__underTooltip,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                        {
                                            className:
                                                _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__count,
                                            text: String(tokensCount),
                                        },
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__icon,
                                    }),
                                ),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts':
            /*!*******************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts ***!
  \*******************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ModelProvider: () => /* binding */ ModelProvider,
                    /* harmony export */ useModel: () => /* binding */ useModel,
                    /* harmony export */
                });
                /* harmony import */ var lib_data_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/data-layer */ './src/lib/data-layer/index.tsx',
                );
                /* harmony import */ var lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/function */ './src/lib/function.ts',
                );
                /* harmony import */ var lib_likeArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/likeArray */ './src/lib/likeArray/index.ts',
                );
                /* harmony import */ var mobx_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx-utils */ './node_modules/mobx-utils/mobx-utils.module.js',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                const _initializeModelWithC = (0,
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(
                        ({ observableModel }) => {
                            const model = {
                                root: observableModel.object(),
                                price: observableModel.object('price'),
                            };
                            const getTokenPrice = (0, mobx_utils__WEBPACK_IMPORTED_MODULE_3__.computedFn)(
                                () => {
                                    const _model$root$get = model.root.get(),
                                        price = _model$root$get.price;

                                    return Object.assign({}, price, {
                                        price: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.price,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        defPrice: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.defPrice,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        discount: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.discount,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                    });
                                },
                                {
                                    equals: lib_function__WEBPACK_IMPORTED_MODULE_1__.constFalse,
                                },
                            );
                            return Object.assign({}, model, {
                                computes: {
                                    getTokenPrice,
                                },
                            });
                        },
                        ({ externalModel }) => ({
                            cancel: externalModel.createCallbackNoArgs('onCancel'),
                            back: externalModel.createCallbackNoArgs('onBack'),
                            buy: externalModel.createCallback(
                                (tokens) => ({
                                    tokens,
                                }),
                                'onBuy',
                            ),
                        }),
                    ),
                    ModelProvider = _initializeModelWithC[0],
                    useModel = _initializeModelWithC[1];

                /***/
            },

        /***/ './src/components/Box/Box.css':
            /*!************************************!*\
  !*** ./src/components/Box/Box.css ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    mt__XS: 'Box_mt__XS_0c',
                    mt__SM: 'Box_mt__SM_eb',
                    mt__SMp: 'Box_mt__SMp_cf',
                    mt__MD: 'Box_mt__MD_25',
                    mt__MDp: 'Box_mt__MDp_49',
                    mt__LG: 'Box_mt__LG_e8',
                    mt__XL: 'Box_mt__XL_83',
                    mr__XS: 'Box_mr__XS_7c',
                    mr__SM: 'Box_mr__SM_08',
                    mr__SMp: 'Box_mr__SMp_06',
                    mr__MD: 'Box_mr__MD_4a',
                    mr__MDp: 'Box_mr__MDp_b6',
                    mr__LG: 'Box_mr__LG_d0',
                    mr__XL: 'Box_mr__XL_db',
                    mb__XS: 'Box_mb__XS_bb',
                    mb__SM: 'Box_mb__SM_83',
                    mb__SMp: 'Box_mb__SMp_04',
                    mb__MD: 'Box_mb__MD_ed',
                    mb__MDp: 'Box_mb__MDp_65',
                    mb__LG: 'Box_mb__LG_c8',
                    mb__XL: 'Box_mb__XL_f8',
                    ml__XS: 'Box_ml__XS_8a',
                    ml__SM: 'Box_ml__SM_e6',
                    ml__SMp: 'Box_ml__SMp_fb',
                    ml__MD: 'Box_ml__MD_2b',
                    ml__MDp: 'Box_ml__MDp_c7',
                    ml__LG: 'Box_ml__LG_39',
                    ml__XL: 'Box_ml__XL_4a',
                };

                /***/
            },

        /***/ './src/components/Button/CButton.css':
            /*!*******************************************!*\
  !*** ./src/components/Button/CButton.css ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };

                /***/
            },

        /***/ './src/components/Currency/Currency.css':
            /*!**********************************************!*\
  !*** ./src/components/Currency/Currency.css ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };

                /***/
            },

        /***/ './src/components/FormatText/FormatText.css':
            /*!**************************************************!*\
  !*** ./src/components/FormatText/FormatText.css ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = { base: 'FormatText_base_d0' };

                /***/
            },

        /***/ './src/components/NumericStepper/NumericStepper.css':
            /*!**********************************************************!*\
  !*** ./src/components/NumericStepper/NumericStepper.css ***!
  \**********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'NumericStepper_base_35',
                    base__small: 'NumericStepper_base__small_11',
                    base__medium: 'NumericStepper_base__medium_9d',
                    base__large: 'NumericStepper_base__large_dc',
                    base__isFocus: 'NumericStepper_base__isFocus_49',
                    base__isDisabled: 'NumericStepper_base__isDisabled_ac',
                    inputContainer: 'NumericStepper_inputContainer_e2',
                    input: 'NumericStepper_input_55',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_de',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_69',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a1',
                    input__disabled: 'NumericStepper_input__disabled_d8',
                    input__credits: 'NumericStepper_input__credits_08',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_3f',
                    input__gold: 'NumericStepper_input__gold_14',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_c6',
                    input__xp: 'NumericStepper_input__xp_c4',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_79',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c7',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_55',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_a4',
                    currencyIcon: 'NumericStepper_currencyIcon_8e',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_99',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_1a',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_bc',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_f6',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_d6',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_b5',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_ac',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_2b',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_4d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_85',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_76',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_73',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ef',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_3e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_ab',
                    buttonIncrement: 'NumericStepper_buttonIncrement_16',
                    buttonDecrement: 'NumericStepper_buttonDecrement_c8',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_f6',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_36',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_fd',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_d1',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_56',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_63',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_68',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_d9',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_2a',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_c2',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_91',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_21',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_a3',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_8b',
                };

                /***/
            },

        /***/ './src/components/TextButton/TextButton.css':
            /*!**************************************************!*\
  !*** ./src/components/TextButton/TextButton.css ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TextButton_base_b6',
                    base__right: 'TextButton_base__right_39',
                    icon: 'TextButton_icon_17',
                    icon__back: 'TextButton_icon__back_43',
                    icon__forward: 'TextButton_icon__forward_59',
                    icon__close: 'TextButton_icon__close_53',
                    icon__info: 'TextButton_icon__info_33',
                    glow: 'TextButton_glow_a4',
                    caption: 'TextButton_caption_82',
                    caption__back: 'TextButton_caption__back_b9',
                    caption__forward: 'TextButton_caption__forward_4e',
                    caption__close: 'TextButton_caption__close_36',
                    caption__info: 'TextButton_caption__info_23',
                    goto: 'TextButton_goto_e7',
                    base__left: 'TextButton_base__left_ff',
                    shine: 'TextButton_shine_e2',
                };

                /***/
            },

        /***/ './src/components/Text/Text.css':
            /*!**************************************!*\
  !*** ./src/components/Text/Text.css ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    'paragraph-P10': 'Text_paragraph-P10_2c',
                    'paragraph-P12': 'Text_paragraph-P12_22',
                    'paragraph-P14': 'Text_paragraph-P14_a7',
                    'paragraph-P16': 'Text_paragraph-P16_90',
                    'paragraph-P18': 'Text_paragraph-P18_50',
                    'paragraph-P24': 'Text_paragraph-P24_33',
                    'heading-H14': 'Text_heading-H14_8b',
                    'heading-H15': 'Text_heading-H15_9e',
                    'heading-H18': 'Text_heading-H18_b7',
                    'heading-H20R': 'Text_heading-H20R_f6',
                    'heading-H22': 'Text_heading-H22_27',
                    'heading-H24R': 'Text_heading-H24R_be',
                    'heading-H24': 'Text_heading-H24_0c',
                    'heading-H28': 'Text_heading-H28_78',
                    'heading-H36': 'Text_heading-H36_32',
                    'heading-H56': 'Text_heading-H56_c3',
                    'heading-H73': 'Text_heading-H73_8f',
                    'heading-H144': 'Text_heading-H144_a9',
                    BLACK_REAL: 'Text_BLACK_REAL_30',
                    WHITE_REAL: 'Text_WHITE_REAL_bc',
                    WHITE: 'Text_WHITE_62',
                    WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                    WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                    PAR: 'Text_PAR_15',
                    PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                    PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                    INFO_RED: 'Text_INFO_RED_30',
                    RED: 'Text_RED_66',
                    RED_DARK: 'Text_RED_DARK_d8',
                    YELLOW: 'Text_YELLOW_ed',
                    ORANGE: 'Text_ORANGE_be',
                    CREAM: 'Text_CREAM_57',
                    BROWN: 'Text_BROWN_18',
                    GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                    GREEN: 'Text_GREEN_e3',
                    GREEN_DARK: 'Text_GREEN_DARK_f1',
                    BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                    BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                    CRED: 'Text_CRED_f7',
                    GOLD: 'Text_GOLD_28',
                    BOND: 'Text_BOND_be',
                    PROM: 'Text_PROM_65',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css':
            /*!*********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css ***!
  \*********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_4f',
                    close: 'App_close_ab',
                    content: 'App_content_97',
                    header: 'App_header_1e',
                    productInfo: 'App_productInfo_74',
                    description: 'App_description_f6',
                    tokenImage: 'App_tokenImage_87',
                    footer: 'App_footer_e7',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css':
            /*!*************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css ***!
  \*************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Description_base_1d',
                    title: 'Description_title_b6',
                    description: 'Description_description_ae',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Footer_base_c0',
                    base__hovered: 'Footer_base__hovered_99',
                    line: 'Footer_line_fc',
                    line__first: 'Footer_line__first_21',
                    line__second: 'Footer_line__second_73',
                    bg: 'Footer_bg_78',
                    content: 'Footer_content_b3',
                    tokensAvailable: 'Footer_tokensAvailable_f7',
                    tokensAvailable__tokens: 'Footer_tokensAvailable__tokens_bd',
                    finalPrice: 'Footer_finalPrice_41',
                    productCounter: 'Footer_productCounter_9a',
                    buyButton: 'Footer_buyButton_fe',
                    buttonText: 'Footer_buttonText_9a',
                    warning: 'Footer_warning_76',
                    warning__glow: 'Footer_warning__glow_e1',
                    warning__icon: 'Footer_warning__icon_19',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Header_base_29',
                    productTitleWrapper: 'Header_productTitleWrapper_19',
                    title: 'Header_title_42',
                    tokenCount: 'Header_tokenCount_0f',
                    tokenCount__underTooltip: 'Header_tokenCount__underTooltip_f1',
                    tokenCount__text: 'Header_tokenCount__text_a8',
                    tokenCount__count: 'Header_tokenCount__count_8e',
                    tokenCount__icon: 'Header_tokenCount__icon_67',
                };

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/chunk loaded */
    /******/ (() => {
        /******/ var deferred = [];
        /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/ if (chunkIds) {
                /******/ priority = priority || 0;
                /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
                    deferred[i] = deferred[i - 1];
                /******/ deferred[i] = [chunkIds, fn, priority];
                /******/ return;
                /******/
            }
            /******/ var notFulfilled = Infinity;
            /******/ for (var i = 0; i < deferred.length; i++) {
                /******/ var [chunkIds, fn, priority] = deferred[i];
                /******/ var fulfilled = true;
                /******/ for (var j = 0; j < chunkIds.length; j++) {
                    /******/ if (
                        (priority & (1 === 0) || notFulfilled >= priority) &&
                        Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))
                    ) {
                        /******/ chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/ fulfilled = false;
                        /******/ if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/ if (fulfilled) {
                    /******/ deferred.splice(i--, 1);
                    /******/ var r = fn();
                    /******/ if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/ return result;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
            /******/ var getter =
                module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
            /******/ __webpack_require__.d(getter, { a: getter });
            /******/ return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/global */
    /******/ (() => {
        /******/ __webpack_require__.g = (function () {
            /******/ if (typeof globalThis === 'object') return globalThis;
            /******/ try {
                /******/ return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/ if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/jsonp chunk loading */
    /******/ (() => {
        /******/ // no baseURI
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ var installedChunks = {
            /******/ 'lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView': 0,
            /******/
        };
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/ __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        /******/
        /******/ // install a JSONP callback for chunk loading
        /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/ var [chunkIds, moreModules, runtime] = data;
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/ var moduleId,
                chunkId,
                i = 0;
            /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
                /******/ for (moduleId in moreModules) {
                    /******/ if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/ if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/ for (; i < chunkIds.length; i++) {
                /******/ chunkId = chunkIds[i];
                /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/ installedChunks[chunkId][0]();
                    /******/
                }
                /******/ installedChunks[chunkId] = 0;
                /******/
            }
            /******/ return __webpack_require__.O(result);
            /******/
        };
        /******/
        /******/ var chunkLoadingGlobal = (self['webpackChunkgameface'] = self['webpackChunkgameface'] || []);
        /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
            null,
            chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
        );
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module depends on other loaded chunks and execution need to be delayed
    /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['lib/vendors'], () =>
        __webpack_require__(
            '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSU8sTUFBTU0sZUFBZSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsd0VBQVosQ0FBeEI7QUFJUCxNQUFNUSxnQkFBZ0IsR0FBRztBQUFFQyxFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWFZO0FBQTVFLENBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFBRVIsRUFBQUEsRUFBRSxFQUFFTCx1REFBTjtBQUFxQk8sRUFBQUEsRUFBRSxFQUFFUCx1REFBekI7QUFBd0NTLEVBQUFBLEVBQUUsRUFBRVQsdURBQTVDO0FBQTJEVyxFQUFBQSxFQUFFLEVBQUVYLHVEQUFhaUI7QUFBNUUsQ0FBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRztBQUFFYixFQUFBQSxFQUFFLEVBQUVMLHdEQUFOO0FBQXNCTyxFQUFBQSxFQUFFLEVBQUVQLHdEQUExQjtBQUEwQ1MsRUFBQUEsRUFBRSxFQUFFVCx3REFBOUM7QUFBOERXLEVBQUFBLEVBQUUsRUFBRVgsd0RBQWNzQjtBQUFoRixDQUExQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHO0FBQUVsQixFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWEyQjtBQUE1RSxDQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHO0FBQUV2QixFQUFB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QUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSxlQUFBQTs7QUFzREwsSUFBS0MsVUFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsZUFBQUE7O0FBd0NMLElBQUtDLFNBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFB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QTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi90eXBlcy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L0N1cnJlbmN5LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L3R5cGVzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvRm9ybWF0TnVtYmVyL0Zvcm1hdE51bWJlci50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtYXRUZXh0L0Zvcm1hdFRleHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYUNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L01lZGlhUHJvdmlkZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYVF1ZXJ5LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvZ2V0QnlIZWlnaHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS91dGlscy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL051bWVyaWNTdGVwcGVyL051bWVyaWNTdGVwcGVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1Jld2FyZHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVGV4dEJ1dHRvbi9UZXh0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL1Rvb2x0aXAudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMvbWl4aW5zL21lZGlhQ3NzLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9nbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2RhdGEtbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2RhdGEtbGF5ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvY2xpZW50L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NvbW1vbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvZXZlbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvc2VuZEV2ZW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZ2V0LWZyb20tY2FsbHN0YWNrLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlQ2FsbE9uY2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZUtleWRvd25MaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTWVkaWEudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2tleWNvZGVzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9saWtlQXJyYXkvbGlrZUFycmF5LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9tb3VzZS1zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL251bGxhYmxlLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9udW1iZXIta2V5Y29kZXMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3NvdW5kLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9DbGlja091dHNpZGVNYW5hZ2VyLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi92aWV3LWVudi1oZWxwZXIvRGF0YVRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9WaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9kdW1wVmlld01vZGVsLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi92aWV3LWVudi1oZWxwZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9sb2NhbGUudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9zaG93TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci90eXBlcy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL3ZpZXctZXZlbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi93cmFwcGVycy9NZWRpYVdyYXBwZXIvTWVkaWFXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvd3JhcHBlcnMvTWVkaWFXcmFwcGVyL01lZGlhV3JhcHBlcklubmVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvY29tcG9uZW50cy9BcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L0N1cnJlbmN5LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dC5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9OdW1lcmljU3RlcHBlci9OdW1lcmljU3RlcHBlci5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0QnV0dG9uL1RleHRCdXR0b24uY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVGV4dC9UZXh0LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRGVzY3JpcHRpb24vRGVzY3JpcHRpb24uY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHNwYWNpbmcgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZyc7XHJcbmltcG9ydCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIsIHsgQWRhcHRpdmVQcm9wcyB9IGZyb20gJ2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlJztcclxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQm94LmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFuZGFyZFNwYWNpbmdUeXBlID0ga2V5b2YgdHlwZW9mIHNwYWNpbmc7XHJcbmV4cG9ydCB0eXBlIFNwYWNpbmdUeXBlID0gU3RhbmRhcmRTcGFjaW5nVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI7XHJcbmV4cG9ydCBjb25zdCBzdGFuZGFyZE1hcmdpbnMgPSBPYmplY3Qua2V5cyhzcGFjaW5nKSBhcyBTdGFuZGFyZFNwYWNpbmdUeXBlW107XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b21Db21wb25lbnRSZXF1aXJlZFByb3BzID0geyBjbGFzc05hbWU/OiBzdHJpbmc7IHN0eWxlPzogQ1NTUHJvcGVydGllczsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9O1xyXG5cclxuY29uc3QgZGVmYXVsdFhsTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fWEwsIG1yOiBzdHlsZXMubXJfX1hMLCBtYjogc3R5bGVzLm1iX19YTCwgbWw6IHN0eWxlcy5tbF9fWEwgfTtcclxuY29uc3QgZGVmYXVsdExnTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fTEcsIG1yOiBzdHlsZXMubXJfX0xHLCBtYjogc3R5bGVzLm1iX19MRywgbWw6IHN0eWxlcy5tbF9fTEcgfTtcclxuY29uc3QgZGVmYXVsdE1kcE1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX01EcCwgbXI6IHN0eWxlcy5tcl9fTURwLCBtYjogc3R5bGVzLm1iX19NRHAsIG1sOiBzdHlsZXMubWxfX01EcCB9O1xyXG5jb25zdCBkZWZhdWx0TWRNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19NRCwgbXI6IHN0eWxlcy5tcl9fTUQsIG1iOiBzdHlsZXMubWJfX01ELCBtbDogc3R5bGVzLm1sX19NRCB9O1xyXG5jb25zdCBkZWZhdWx0U21wTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fU01wLCBtcjogc3R5bGVzLm1yX19TTXAsIG1iOiBzdHlsZXMubWJfX1NNcCwgbWw6IHN0eWxlcy5tbF9fU01wIH07XHJcbmNvbnN0IGRlZmF1bHRTbU1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1NNLCBtcjogc3R5bGVzLm1yX19TTSwgbWI6IHN0eWxlcy5tYl9fU00sIG1sOiBzdHlsZXMubWxfX1NNIH07XHJcbmNvbnN0IGRlZmF1bHRYc01hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1hTLCBtcjogc3R5bGVzLm1yX19YUywgbWI6IHN0eWxlcy5tYl9fWFMsIG1sOiBzdHlsZXMubWxfX1hTIH07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2luTWFwID0ge1xyXG4gICAgWEw6IGRlZmF1bHRYbE1hcmdpbnMsXHJcbiAgICBMRzogZGVmYXVsdExnTWFyZ2lucyxcclxuICAgIE1EcDogZGVmYXVsdE1kcE1hcmdpbnMsXHJcbiAgICBNRDogZGVmYXVsdE1kTWFyZ2lucyxcclxuICAgIFNNcDogZGVmYXVsdFNtcE1hcmdpbnMsXHJcbiAgICBTTTogZGVmYXVsdFNtTWFyZ2lucyxcclxuICAgIFhTOiBkZWZhdWx0WHNNYXJnaW5zLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdE1hcmdpbk1hcCkgYXMgKGtleW9mIHR5cGVvZiBkZWZhdWx0TWFyZ2luTWFwKVtdO1xyXG5cclxuY29uc3QgbWFyZ2luS2V5TGlzdCA9IFsnbXQnLCAnbXInLCAnbWInLCAnbWwnXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGdldE1hcmdpbkNsYXNzTmFtZXMgPSAobWFyZ2luTWFwOiB7IG10PzogU3BhY2luZ1R5cGU7IG1yPzogU3BhY2luZ1R5cGU7IG1iPzogU3BhY2luZ1R5cGU7IG1sPzogU3BhY2luZ1R5cGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIG1hcmdpbktleUxpc3QucmVkdWNlKChjbGFzc05hbWVzLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuY29uY2F0KGRlZmF1bHRNYXJnaW5NYXBbdmFsdWUgPT09IHRydWUgPyAnTUQnIDogdmFsdWVdW2tleV0pO1xyXG4gICAgfSwgW10gYXMgc3RyaW5nW10pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyZ2luS2V5UHJvcGVydHlNYXAgPSB7XHJcbiAgICBtdDogJ21hcmdpblRvcCcsXHJcbiAgICBtcjogJ21hcmdpblJpZ2h0JyxcclxuICAgIG1iOiAnbWFyZ2luQm90dG9tJyxcclxuICAgIG1sOiAnbWFyZ2luTGVmdCcsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBnZXRNYXJnaW5TdHlsZSA9IChtYXJnaW5NYXA6IHsgbXQ/OiBTcGFjaW5nVHlwZTsgbXI/OiBTcGFjaW5nVHlwZTsgbWI/OiBTcGFjaW5nVHlwZTsgbWw/OiBTcGFjaW5nVHlwZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gbWFyZ2luS2V5TGlzdC5yZWR1Y2UoKHN0eWxlLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbWFyZ2luS2V5UHJvcGVydHlNYXBba2V5XTtcclxuICAgICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWUgKyAncmVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfSwge30gYXMgQ1NTUHJvcGVydGllcyk7XHJcbn07XHJcblxyXG50eXBlIEJhc2VCb3hQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIG0/OiBTcGFjaW5nVHlwZTtcclxuICAgIG10PzogU3BhY2luZ1R5cGU7XHJcbiAgICBtcj86IFNwYWNpbmdUeXBlO1xyXG4gICAgbWI/OiBTcGFjaW5nVHlwZTtcclxuICAgIG1sPzogU3BhY2luZ1R5cGU7XHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgICBjb2x1bW4/OiBib29sZWFuO1xyXG4gICAgcm93PzogYm9vbGVhbjtcclxuICAgIHNwYWNlQmV0d2Vlbj86IGJvb2xlYW47XHJcbiAgICBzcGFjZUFyb3VuZD86IGJvb2xlYW47XHJcbiAgICBmbGV4U3RhcnQ/OiBib29sZWFuO1xyXG4gICAgY2VudGVyPzogYm9vbGVhbjtcclxuICAgIGZsZXhFbmQ/OiBib29sZWFuO1xyXG4gICAgZ3Jvdz86IGJvb2xlYW47XHJcbiAgICBzaHJpbms/OiBib29sZWFuO1xyXG4gICAgd3JhcD86IGJvb2xlYW47XHJcbn0gJiBQaWNrPFxyXG4gICAgQ1NTUHJvcGVydGllcyxcclxuICAgICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdmbGV4JyB8ICdmbGV4RGlyZWN0aW9uJyB8ICdmbGV4V3JhcCcgfCAnanVzdGlmeUNvbnRlbnQnIHwgJ2FsaWduSXRlbXMnIHwgJ2FsaWduU2VsZidcclxuPjtcclxuXHJcbmV4cG9ydCB0eXBlIEJveFN0YXRpY1Byb3BzID0gUmVhZG9ubHk8QmFzZUJveFByb3BzPiAmIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LCBrZXlvZiBCYXNlQm94UHJvcHM+O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGdlbmVyYXRlcyBhIGRpdiB3aXRoIGFwcGxpZWQgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQm94UHJvcHMgLSBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBbY2xhc3NOYW1lXSAtIEFkZGl0aW9uYWwgY2xhc3MoZXMpIHRvIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzWyd3aWR0aCddfSBbd2lkdGhdIC0gV2lkdGggb2YgdGhlIGJveC4gU3VwcG9ydHMgc3RhbmRhcmQgQ1NTIHVuaXRzLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1snaGVpZ2h0J119IFtoZWlnaHRdIC0gSGVpZ2h0IG9mIHRoZSBib3guIFN1cHBvcnRzIHN0YW5kYXJkIENTUyB1bml0cywgbnVtZXJpYyB2YWx1ZXMgYXJlIHRyYW5zZm9ybWVkIHRvIHJlbS5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byBhbGwgc2lkZXMgb2YgdGhlIGJveC4gU3VwcG9ydHMgWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBmb3IgTUQgbWFyZ2luLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttdD1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b3Agb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbXI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgcmlnaHQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbWI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgYm90dG9tIG9mIHRoZSBib3guXHJcbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gW21sPW1dIC0gTWFyZ2luIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGxlZnQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtjb2x1bW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSBjb2x1bW4uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbcm93XSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGNvbnRhaW5lciBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgcm93LlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImZsZXhEaXJlY3Rpb25cIl19IFtmbGV4RGlyZWN0aW9uXSAtIFNwZWNpZmllcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmbGV4IGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4U3RhcnRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb250YWluZXIuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbY2VudGVyXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBjZW50ZXJlZCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4RW5kXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIHRvIHRoZSBlbmQgb2YgdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzcGFjZUJldHdlZW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBiZXR3ZWVuIHRoZW0uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbc3BhY2VBcm91bmRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBhcm91bmQgdGhlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJqdXN0aWZ5Q29udGVudFwiXX0gW2p1c3RpZnlDb250ZW50XSAtIFNwZWNpZmllcyBob3cgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgYWxvbmcgdGhlIG1haW4gYXhpcy5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJhbGlnbkl0ZW1zXCJdfSBbYWxpZ25JdGVtc10gLSBTcGVjaWZpZXMgaG93IHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIGFsb25nIHRoZSBjcm9zcyBheGlzLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImFsaWduU2VsZlwiXX0gW2FsaWduU2VsZl0gLSBTcGVjaWZpZXMgaG93IGEgZmxleCBpdGVtIHNob3VsZCBhbGlnbiBpdHNlbGYgYWxvbmcgdGhlIGNyb3NzIGF4aXMuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbd3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiZmxleFdyYXBcIl19IFtmbGV4V3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbZ3Jvd10gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdyBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzaHJpbmtdIC0gU3BlY2lmaWVzIHRoZSBmbGV4IHNocmluayBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJmbGV4XCJdfSBbZmxleF0gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdywgZmxleCBzaHJpbmssIGFuZCBmbGV4IGJhc2lzIG9mIHRoZSBmbGV4IGl0ZW0uXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzfSBbc3R5bGVdIC0gQ3VzdG9tIHN0eWxlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtSZWFjdE5vZGV9IFtjaGlsZHJlbl0gLSBDaGlsZCBjb21wb25lbnRzIHRvIGJlIHJlbmRlcmVkIHdpdGhpbiB0aGUgY29tcG9uZW50LlxyXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBbLi4ucmVzdFByb3BzXSAtIEFkZGl0aW9uYWwgSFRNTCBkaXYgcHJvcGVydGllcy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEEgYm94IGVsZW1lbnQuXHJcbiAqL1xyXG5jb25zdCBCb3ggPSAoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBtLFxyXG4gICAgbXQgPSBtLFxyXG4gICAgbXIgPSBtLFxyXG4gICAgbWIgPSBtLFxyXG4gICAgbWwgPSBtLFxyXG4gICAgY29sdW1uLFxyXG4gICAgcm93LFxyXG4gICAgZmxleERpcmVjdGlvbiA9IChjb2x1bW4gJiYgJ2NvbHVtbicpIHx8IChyb3cgJiYgJ3JvdycpIHx8IHVuZGVmaW5lZCxcclxuICAgIGZsZXhTdGFydCxcclxuICAgIGNlbnRlcixcclxuICAgIGZsZXhFbmQsXHJcbiAgICBzcGFjZUJldHdlZW4sXHJcbiAgICBzcGFjZUFyb3VuZCxcclxuICAgIGp1c3RpZnlDb250ZW50ID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8XHJcbiAgICAgICAgKGNlbnRlciAmJiAnY2VudGVyJykgfHxcclxuICAgICAgICAoZmxleEVuZCAmJiAnZmxleC1lbmQnKSB8fFxyXG4gICAgICAgIChzcGFjZUJldHdlZW4gJiYgJ3NwYWNlLWJldHdlZW4nKSB8fFxyXG4gICAgICAgIChzcGFjZUFyb3VuZCAmJiAnc3BhY2UtYXJvdW5kJykgfHxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICBhbGlnbkl0ZW1zID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8IChjZW50ZXIgJiYgJ2NlbnRlcicpIHx8IChmbGV4RW5kICYmICdmbGV4LWVuZCcpIHx8IHVuZGVmaW5lZCxcclxuICAgIGFsaWduU2VsZixcclxuICAgIHdyYXAsXHJcbiAgICBmbGV4V3JhcCA9ICh3cmFwICYmICd3cmFwJykgfHwgdW5kZWZpbmVkLFxyXG4gICAgZ3JvdyxcclxuICAgIHNocmluayxcclxuICAgIGZsZXggPSBncm93IHx8IHNocmluayA/IGAke2dyb3cgPyAxIDogMH0gJHtzaHJpbmsgPyAxIDogMH0gYXV0b2AgOiB1bmRlZmluZWQsXHJcbiAgICBzdHlsZSxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucmVzdFByb3BzXHJcbn06IEJveFN0YXRpY1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbXB1dGVkU3R5bGUsIGNvbXB1dGVkQ2xhc3NOYW1lcyB9ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luTWFwID0ge1xyXG4gICAgICAgICAgICBtdCxcclxuICAgICAgICAgICAgbXIsXHJcbiAgICAgICAgICAgIG1iLFxyXG4gICAgICAgICAgICBtbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkQ2xhc3NOYW1lcyA9IGdldE1hcmdpbkNsYXNzTmFtZXMobWFyZ2luTWFwKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdHlsZSA9IGdldE1hcmdpblN0eWxlKG1hcmdpbk1hcCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAuLi5tYXJnaW5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicgPyB3aWR0aCArICdyZW0nIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInID8gaGVpZ2h0ICsgJ3JlbScgOiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmbGV4LFxyXG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleERpcmVjdGlvbiB8fCBhbGlnbkl0ZW1zID8gJ2ZsZXgnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wdXRlZENsYXNzTmFtZXMsXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt3aWR0aCwgaGVpZ2h0LCBtdCwgbXIsIG1iLCBtbCwgc3R5bGUsIGZsZXgsIGFsaWduU2VsZiwgZmxleERpcmVjdGlvbiwgZmxleFdyYXAsIGp1c3RpZnlDb250ZW50LCBhbGlnbkl0ZW1zXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFzZSwgLi4uY29tcHV0ZWRDbGFzc05hbWVzLCBjbGFzc05hbWUpfSBzdHlsZT17Y29tcHV0ZWRTdHlsZX0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG50eXBlIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZSA9XHJcbiAgICB8ICd3aWR0aCdcclxuICAgIHwgJ2hlaWdodCdcclxuICAgIHwgJ20nXHJcbiAgICB8ICdtdCdcclxuICAgIHwgJ21yJ1xyXG4gICAgfCAnbWInXHJcbiAgICB8ICdtbCdcclxuICAgIHwgJ2ZsZXhEaXJlY3Rpb24nXHJcbiAgICB8ICdqdXN0aWZ5Q29udGVudCdcclxuICAgIHwgJ2FsaWduSXRlbXMnXHJcbiAgICB8ICdhbGlnblNlbGYnXHJcbiAgICB8ICdmbGV4V3JhcCdcclxuICAgIHwgJ2ZsZXgnO1xyXG5cclxuZXhwb3J0IHR5cGUgQm94UHJvcHMgPSBCb3hTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT4oQm94KTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICdsaWIvc291bmQnO1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DQnV0dG9uLmNzcyc7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIHNpemUsXG4gICAgaXNGb2N1c2VkLFxuICAgIHR5cGUsXG4gICAgZGlzYWJsZWQsXG4gICAgbWl4Q2xhc3MsXG4gICAgc291bmRIb3ZlcixcbiAgICBzb3VuZENsaWNrLFxuICAgIG9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTW92ZSxcbiAgICBvbk1vdXNlRG93bixcbiAgICBvbk1vdXNlVXAsXG4gICAgb25Nb3VzZUxlYXZlLFxuICAgIG9uQ2xpY2ssXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW2J1dHRvbkZvY3VzLCBzZXRCdXR0b25Gb2N1c10gPSB1c2VTdGF0ZShpc0ZvY3VzZWQpO1xuICAgIGNvbnN0IFtpc0hpZ2hsaWdodEFjdGl2ZSwgc2V0SGlnaGxpZ2h0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNGaXJzdEhvdmVyZWQsIHNldEZpcnN0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBzZXRGb2N1c09uQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnV0dG9uLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgICAgICBzZXRCdXR0b25Gb2N1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtkaXNhYmxlZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duT3V0c2lkZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b25Gb2N1cyAmJiBidXR0b24uY3VycmVudCAhPT0gbnVsbCAmJiAhYnV0dG9uLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNldEJ1dHRvbkZvY3VzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2J1dHRvbkZvY3VzXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2Rpc2FibGVkLCBvbkNsaWNrXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdW5kSG92ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5U291bmQoc291bmRIb3Zlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Rmlyc3RIb3ZlcmVkKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIHNvdW5kSG92ZXIsIG9uTW91c2VFbnRlcl0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtvbk1vdXNlTW92ZV0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbk1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXAoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIG9uTW91c2VVcF0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdW5kQ2xpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5U291bmQoc291bmRDbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRGb2N1c09uQnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtkaXNhYmxlZCwgc291bmRDbGljaywgb25Nb3VzZURvd24sIHNldEZvY3VzT25CdXR0b24sIGlzRm9jdXNlZF0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIG9uTW91c2VMZWF2ZV0sXG4gICAgKTtcblxuICAgIGNvbnN0IGNsYXNzQmFzZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5iYXNlLFxuICAgICAgICBzdHlsZXNbYGJhc2VfXyR7dHlwZX1gXSxcbiAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5iYXNlX19kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgICAgICAgW3N0eWxlc1tgYmFzZV9fJHtzaXplfWBdXTogc2l6ZSxcbiAgICAgICAgICAgIFtzdHlsZXMuYmFzZV9fZm9jdXNdOiBidXR0b25Gb2N1cyxcbiAgICAgICAgICAgIFtzdHlsZXMuYmFzZV9faGlnaGxpZ2h0QWN0aXZlXTogaXNIaWdobGlnaHRBY3RpdmUsXG4gICAgICAgICAgICBbc3R5bGVzLmJhc2VfX2ZpcnN0SG92ZXJdOiBpc0ZpcnN0SG92ZXJlZCxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4Q2xhc3MsXG4gICAgKTtcblxuICAgIGNvbnN0IGNsYXNzU3RhdGUgPSBjbGFzc05hbWVzKHN0eWxlcy5zdGF0ZSwgc3R5bGVzLnN0YXRlX19kZWZhdWx0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bk91dHNpZGUpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd25PdXRzaWRlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGFuZGxlTW91c2VEb3duT3V0c2lkZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QnV0dG9uRm9jdXMoaXNGb2N1c2VkKTtcbiAgICB9LCBbaXNGb2N1c2VkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e2J1dHRvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NCYXNlfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgICAge3R5cGUgIT09IEJ1dHRvblR5cGUuZ2hvc3QgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja30gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzU3RhdGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXRlRGlzYWJsZWR9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdGVIaWdobGlnaHRIb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0ZUhpZ2hsaWdodEFjdGl2ZX0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IGxhbmc9e1Iuc3RyaW5ncy5zZXR0aW5ncy5MQU5HVUFHRV9DT0RFKCl9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogQnV0dG9uVHlwZS5wcmltYXJ5LFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgc291bmRIb3ZlcjogJ2hpZ2hsaWdodCcsXG4gICAgc291bmRDbGljazogJ3BsYXknLFxufTtcblxuY29uc3QgQ0J1dHRvbiA9IG1lbW8oQnV0dG9uKTtcblxuZXhwb3J0IHsgQ0J1dHRvbiwgQnV0dG9uVHlwZSwgQnV0dG9uU2l6ZSB9O1xuIiwiaW1wb3J0IHsgU291bmRzIH0gZnJvbSAnZ3VpL2ltcGwvZ2VuL3Jlc291cmNlcy9zb3VuZHMnO1xuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBTb3VuZCA9IGtleW9mIFBpY2s8U291bmRzLCBFeGNsdWRlPGtleW9mIFNvdW5kcywga2V5b2YgR0ZGb2xkZXI+PjtcblxuZXhwb3J0IGVudW0gQnV0dG9uVHlwZSB7XG4gICAgbWFpbiA9ICdtYWluJyxcbiAgICBwcmltYXJ5ID0gJ3ByaW1hcnknLFxuICAgIHByaW1hcnlHcmVlbiA9ICdwcmltYXJ5R3JlZW4nLFxuICAgIHByaW1hcnlSZWQgPSAncHJpbWFyeVJlZCcsXG4gICAgc2Vjb25kYXJ5ID0gJ3NlY29uZGFyeScsXG4gICAgZ2hvc3QgPSAnZ2hvc3QnLFxufVxuXG5leHBvcnQgZW51bSBCdXR0b25TaXplIHtcbiAgICBleHRyYVNtYWxsID0gJ2V4dHJhU21hbGwnLFxuICAgIHNtYWxsID0gJ3NtYWxsJyxcbiAgICBtZWRpdW0gPSAnbWVkaXVtJyxcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSZWFkb25seTx7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgICB0eXBlPzoga2V5b2YgdHlwZW9mIEJ1dHRvblR5cGU7XG4gICAgaXNGb2N1c2VkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgc2l6ZT86IGtleW9mIHR5cGVvZiBCdXR0b25TaXplO1xuICAgIG1peENsYXNzPzogc3RyaW5nO1xuICAgIHNvdW5kSG92ZXI/OiBTb3VuZCB8IG51bGw7XG4gICAgc291bmRDbGljaz86IFNvdW5kIHwgbnVsbDtcbiAgICBvbk1vdXNlRW50ZXI/OiBNb3VzZUV2ZW50SGFuZGxlcjtcbiAgICBvbk1vdXNlTW92ZT86IE1vdXNlRXZlbnRIYW5kbGVyO1xuICAgIG9uTW91c2VEb3duPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25Nb3VzZVVwPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25Nb3VzZUxlYXZlPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25DbGljaz86IE1vdXNlRXZlbnRIYW5kbGVyO1xufT47XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDdXJyZW5jeVR5cGUsIFByb3BzIGFzIEN1cnJlbmN5UHJvcHMsIFN0b2NrQmFja2dyb3VuZE5hbWUgfSBmcm9tICcuL3R5cGVzJztcclxuZXhwb3J0IHR5cGUgeyBQcm9wcyBhcyBDdXJyZW5jeVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1hdE51bWJlciB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0TnVtYmVyL0Zvcm1hdE51bWJlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VycmVuY3kuY3NzJztcclxuXHJcbmNvbnN0IEN1cnJlbmN5Q29tcG9uZW50ID0gKHtcclxuICAgIGlzRGlzY291bnQsXHJcbiAgICBpc0ludGVyYWN0aXZlRGlzY291bnQsXHJcbiAgICBzaXplLFxyXG4gICAgdHlwZSxcclxuICAgIGlzRW5vdWdoLFxyXG4gICAgdmFsdWUsXHJcbiAgICBkaXNjb3VudFZhbHVlLFxyXG4gICAgc2hvd1BsdXMsXHJcbiAgICBzdG9ja0JhY2tncm91bmROYW1lID0gU3RvY2tCYWNrZ3JvdW5kTmFtZS5SZWQsXHJcbn06IEN1cnJlbmN5UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlQ2xhc3NlcyA9IGN4KHN0eWxlcy52YWx1ZSwgc3R5bGVzW2B2YWx1ZV9fJHt0eXBlfWBdLCAhaXNFbm91Z2ggJiYgc3R5bGVzLnZhbHVlX19ub3RFbm91Z2gpO1xyXG5cclxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gY3goc3R5bGVzLmljb24sIHN0eWxlc1tgaWNvbl9fJHt0eXBlfS0ke3NpemV9YF0pO1xyXG5cclxuICAgIGNvbnN0IGRpc2NvdW50Q2xhc3NlcyA9IGN4KFxyXG4gICAgICAgIHN0eWxlcy5zdG9jayxcclxuICAgICAgICBkaXNjb3VudFZhbHVlICYmIHN0eWxlcy5zdG9ja19faW5kZW50LFxyXG4gICAgICAgIGlzSW50ZXJhY3RpdmVEaXNjb3VudCAmJiBzdHlsZXMuc3RvY2tfX2ludGVyYWN0aXZlLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwbHVzID0gc2hvd1BsdXMgJiYgdmFsdWUgPiAwICYmICcrJztcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IGN4KHN0eWxlcy5iYXNlLCBzdHlsZXNbYGJhc2VfXyR7c2l6ZX1gXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Jhc2VDbGFzc2VzfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWx1ZUNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAge3BsdXN9XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0TnVtYmVyIHZhbHVlPXt2YWx1ZX0gZm9ybWF0PXt0eXBlID09PSBDdXJyZW5jeVR5cGUuZ29sZCA/ICdnb2xkJyA6ICdpbnRlZ3JhbCd9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gLz5cclxuICAgICAgICAgICAge2lzRGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtkaXNjb3VudENsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0b2NrQmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFIuaW1hZ2VzLmd1aS5tYXBzLmljb25zLmxpYnJhcnkuJHtzdG9ja0JhY2tncm91bmROYW1lfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihkaXNjb3VudFZhbHVlKSAmJiBkaXNjb3VudFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5DdXJyZW5jeUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7IGlzRW5vdWdoOiB0cnVlIH07XHJcblxyXG5jb25zdCBDdXJyZW5jeSA9IFJlYWN0Lm1lbW88Q3VycmVuY3lQcm9wcz4oQ3VycmVuY3lDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IHsgQ3VycmVuY3kgfTtcclxuIiwiZXhwb3J0IGVudW0gQ3VycmVuY3lTaXplIHtcclxuICAgIHNtYWxsID0gJ3NtYWxsJyxcclxuICAgIGJpZyA9ICdiaWcnLFxyXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxyXG4gICAgZXh0cmFMYXJnZSA9ICdleHRyYUxhcmdlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ3VycmVuY3lUeXBlIHtcclxuICAgIGNyZWRpdHMgPSAnY3JlZGl0cycsXHJcbiAgICBnb2xkID0gJ2dvbGQnLFxyXG4gICAgY3J5c3RhbCA9ICdjcnlzdGFsJyxcclxuICAgIHhwID0gJ3hwJyxcclxuICAgIGZyZWVYUCA9ICdmcmVlWFAnLFxyXG4gICAgZXF1aXBDb2luID0gJ2VxdWlwQ29pbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0b2NrQmFja2dyb3VuZE5hbWUge1xyXG4gICAgUmVkID0gJ1JlZEFjdGlvbkJHJyxcclxuICAgIEJsdWUgPSAnQmx1ZUFjdGlvbkJHJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSZWFkb25seTx7XHJcbiAgICBpc0Rpc2NvdW50PzogYm9vbGVhbjtcclxuICAgIGlzSW50ZXJhY3RpdmVEaXNjb3VudD86IGJvb2xlYW47XHJcbiAgICBzaXplOiBrZXlvZiB0eXBlb2YgQ3VycmVuY3lTaXplO1xyXG4gICAgdHlwZToga2V5b2YgdHlwZW9mIEN1cnJlbmN5VHlwZTtcclxuICAgIGlzRW5vdWdoPzogYm9vbGVhbjtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBkaXNjb3VudFZhbHVlPzogbnVtYmVyO1xyXG4gICAgc2hvd1BsdXM/OiBib29sZWFuO1xyXG4gICAgc3RvY2tCYWNrZ3JvdW5kTmFtZT86IFN0b2NrQmFja2dyb3VuZE5hbWU7XHJcbn0+O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Mb2NhbGUsIE51bWJlckZvcm1hdFR5cGUgfSBmcm9tICdsaWIvdmlldy1lbnYtaGVscGVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcm1hdD86ICdpbnRlZ3JhbCcgfCAnZ29sZCc7XHJcbn1cclxuXHJcbmNsYXNzIEZvcm1hdE51bWJlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IGZvcm1hdDogJ2ludGVncmFsJyB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZm9ybWF0OiBudW1iZXI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5mb3JtYXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnZ29sZCc6XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBOdW1iZXJGb3JtYXRUeXBlLkdPTEQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaW50ZWdyYWwnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gTnVtYmVyRm9ybWF0VHlwZS5JTlRFR1JBTDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyRm9ybWF0ID0gU3lzdGVtTG9jYWxlLmdldE51bWJlckZvcm1hdCh0aGlzLnByb3BzLnZhbHVlLCBmb3JtYXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIG51bWJlckZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRm9ybWF0TnVtYmVyIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgZm9ybWF0U3RyaW5nLCBBbGlnbm1lbnQgfSBmcm9tICdsaWIvc3RyaW5nLXV0aWxzJztcblxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtYXRUZXh0LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRUZXh0ID0gKHsgYmluZGluZywgdGV4dCA9ICcnLCBjbGFzc01peCwgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQgfTogUHJvcHMpID0+IHtcbiAgICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybWF0VGV4dCB3YXMgc3VwcGxpZWQgd2l0aCAnbnVsbCdcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHt0ZXh0LnNwbGl0KCdcXG4nKS5tYXAoKHRleHRMaW5lLCBsaW5lSWQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhc2UsIGNsYXNzTWl4KX0ga2V5PXtgJHt0ZXh0TGluZX0tJHtsaW5lSWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRTdHJpbmcodGV4dExpbmUsIGFsaWdubWVudCwgYmluZGluZykubWFwKCh0ZXh0LCB3b3JkSWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Ake3dvcmRJZH0tJHt0ZXh0fWB9Pnt0ZXh0fTwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IHsgZ2V0U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgeyB3aWR0aDogaW5pdGlhbFdpZHRoLCBoZWlnaHQ6IGluaXRpYWxIZWlnaHQgfSA9IGVudi5jbGllbnQuZ2V0U2l6ZSgncmVtJyk7XG5cbmV4cG9ydCB0eXBlIE1lZGlhQ29udGV4dFR5cGUgPSB7XG4gICAgZXh0cmFTbWFsbDogYm9vbGVhbjtcbiAgICBzbWFsbDogYm9vbGVhbjtcbiAgICBtZWRpdW06IGJvb2xlYW47XG4gICAgbGFyZ2U6IGJvb2xlYW47XG4gICAgZXh0cmFMYXJnZTogYm9vbGVhbjtcbiAgICBleHRyYVNtYWxsV2lkdGg6IGJvb2xlYW47XG4gICAgc21hbGxXaWR0aDogYm9vbGVhbjtcbiAgICBtZWRpdW1XaWR0aDogYm9vbGVhbjtcbiAgICBsYXJnZVdpZHRoOiBib29sZWFuO1xuICAgIGV4dHJhTGFyZ2VXaWR0aDogYm9vbGVhbjtcbiAgICBleHRyYVNtYWxsSGVpZ2h0OiBib29sZWFuO1xuICAgIHNtYWxsSGVpZ2h0OiBib29sZWFuO1xuICAgIG1lZGl1bUhlaWdodDogYm9vbGVhbjtcbiAgICBsYXJnZUhlaWdodDogYm9vbGVhbjtcbiAgICBleHRyYUxhcmdlSGVpZ2h0OiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsVmFsdWU6IE1lZGlhQ29udGV4dFR5cGUgPSB7XG4gICAgd2lkdGg6IGluaXRpYWxXaWR0aCxcbiAgICBoZWlnaHQ6IGluaXRpYWxIZWlnaHQsXG4gICAgLi4uZ2V0U2l6ZXMoaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0LCBCUkVBS1BPSU5UUyksXG59O1xuXG4vKipcbiAqIFVzZSB1c2VNZWRpYSBob29rIGZyb20gJ2xpYi9ob29rcy91c2VNZWRpYScgZGlyZWN0bHkgaW4geW91ciByZWFjdCBjb21wb25lbnRzXG4gKlxuICogVXNhZ2UgYW5kIHRlY2ggZG9jOiBodHRwczovL2NvbmZsdWVuY2Uud2FyZ2FtaW5nLm5ldC9wYWdlcy92aWV3cGFnZS5hY3Rpb24/cGFnZUlkPTE1ODMyNTU1NDRcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgTWVkaWFDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsVmFsdWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlQ2FsbE9uY2UgZnJvbSAnbGliL2hvb2tzL3VzZUNhbGxPbmNlJztcblxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgeyBnZXRTaXplcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJlcGFyZWRXaWR0aCA9IGVudi52aWV3LnB4VG9SZW0od2lkdGgpO1xuICAgICAgICBjb25zdCBwcmVwYXJlZEhlaWdodCA9IGVudi52aWV3LnB4VG9SZW0oaGVpZ2h0KTtcblxuICAgICAgICBzZXRWYWx1ZSh7XG4gICAgICAgICAgICB3aWR0aDogcHJlcGFyZWRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcHJlcGFyZWRIZWlnaHQsXG4gICAgICAgICAgICAuLi5nZXRTaXplcyhwcmVwYXJlZFdpZHRoLCBwcmVwYXJlZEhlaWdodCwgQlJFQUtQT0lOVFMpLFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VDYWxsT25jZSgoKSA9PiB7XG4gICAgICAgIGVuZ2luZS5vbignY2xpZW50UmVzaXplZCcsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4gZW5naW5lLm9mZignY2xpZW50UmVzaXplZCcsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSwgW2hhbmRsZVJlc2l6ZV0pO1xuXG4gICAgY29uc3QgdmFsdWVBc1Byb3AgPSB1c2VNZW1vKCgpID0+ICh7IC4uLnZhbHVlIH0pLCBbdmFsdWVdKTtcblxuICAgIHJldHVybiA8TWVkaWFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZUFzUHJvcH0+e2NoaWxkcmVufTwvTWVkaWFDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmNvbnN0IE1lZGlhUHJvdmlkZXIgPSBtZW1vKFByb3ZpZGVyKTtcblxuZXhwb3J0IHsgTWVkaWFQcm92aWRlciB9O1xuIiwiaW1wb3J0IHsgbWVtbywgdXNlQ29udGV4dCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRCeUhlaWdodCB9IGZyb20gJy4vZ2V0QnlIZWlnaHQnO1xuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXh0cmFMYXJnZTogZmFsc2UsXG4gICAgbGFyZ2U6IGZhbHNlLFxuICAgIG1lZGl1bTogZmFsc2UsXG4gICAgc21hbGw6IGZhbHNlLFxuICAgIGV4dHJhU21hbGw6IGZhbHNlLFxuICAgIGV4dHJhTGFyZ2VXaWR0aDogZmFsc2UsXG4gICAgbGFyZ2VXaWR0aDogZmFsc2UsXG4gICAgbWVkaXVtV2lkdGg6IGZhbHNlLFxuICAgIHNtYWxsV2lkdGg6IGZhbHNlLFxuICAgIGV4dHJhU21hbGxXaWR0aDogZmFsc2UsXG4gICAgZXh0cmFMYXJnZUhlaWdodDogZmFsc2UsXG4gICAgbGFyZ2VIZWlnaHQ6IGZhbHNlLFxuICAgIG1lZGl1bUhlaWdodDogZmFsc2UsXG4gICAgc21hbGxIZWlnaHQ6IGZhbHNlLFxuICAgIGV4dHJhU21hbGxIZWlnaHQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHR5cGUgRGVmYXVsdFByb3BzID0gdHlwZW9mIGRlZmF1bHRQcm9wcztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xufSAmIFBhcnRpYWw8RGVmYXVsdFByb3BzPjtcblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludFByb3BzID0gUmVhZG9ubHk8UGljazxQcm9wcywgJ2V4dHJhTGFyZ2UnIHwgJ2xhcmdlJyB8ICdtZWRpdW0nIHwgJ3NtYWxsJyB8ICdleHRyYVNtYWxsJz4+XG5cbmNvbnN0IE1lZGlhID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGV4dHJhTGFyZ2UsIGxhcmdlLCBtZWRpdW0sIHNtYWxsLCBleHRyYVNtYWxsLFxuICAgICAgICBleHRyYUxhcmdlV2lkdGgsIGxhcmdlV2lkdGgsIG1lZGl1bVdpZHRoLCBzbWFsbFdpZHRoLCBleHRyYVNtYWxsV2lkdGgsXG4gICAgICAgIGV4dHJhTGFyZ2VIZWlnaHQsIGxhcmdlSGVpZ2h0LCBtZWRpdW1IZWlnaHQsIHNtYWxsSGVpZ2h0LCBleHRyYVNtYWxsSGVpZ2h0LFxuICAgIH0gPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XG5cbiAgICBjb25zdCBicmVha3BvaW50UHJvcHM6IEJyZWFrcG9pbnRQcm9wcyA9IHtcbiAgICAgICAgZXh0cmFMYXJnZTogZXh0cmFMYXJnZUhlaWdodCxcbiAgICAgICAgbGFyZ2U6IGxhcmdlSGVpZ2h0LFxuICAgICAgICBtZWRpdW06IG1lZGl1bUhlaWdodCxcbiAgICAgICAgc21hbGw6IHNtYWxsSGVpZ2h0LFxuICAgICAgICBleHRyYVNtYWxsOiBleHRyYVNtYWxsSGVpZ2h0LFxuICAgIH07XG5cbiAgICBpZiAocmVzdC5leHRyYUxhcmdlIHx8IHJlc3QubGFyZ2UgfHwgcmVzdC5tZWRpdW0gfHwgcmVzdC5zbWFsbCB8fCByZXN0LmV4dHJhU21hbGwpIHtcbiAgICAgICAgaWYgKHJlc3QuZXh0cmFMYXJnZSAmJiBleHRyYUxhcmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5sYXJnZSAmJiBsYXJnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubWVkaXVtICYmIG1lZGl1bSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3Quc21hbGwgJiYgc21hbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmV4dHJhU21hbGwgJiYgZXh0cmFTbWFsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlc3QuZXh0cmFMYXJnZVdpZHRoICYmIGV4dHJhTGFyZ2VXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubGFyZ2VXaWR0aCAmJiBsYXJnZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5tZWRpdW1XaWR0aCAmJiBtZWRpdW1XaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3Quc21hbGxXaWR0aCAmJiBzbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsV2lkdGggJiYgZXh0cmFTbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3QuZXh0cmFMYXJnZVdpZHRoICYmICFyZXN0LmxhcmdlV2lkdGggJiYgIXJlc3QubWVkaXVtV2lkdGggJiYgIXJlc3Quc21hbGxXaWR0aCAmJiAhcmVzdC5leHRyYVNtYWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgZXh0cmFMYXJnZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3QubGFyZ2VIZWlnaHQgJiYgbGFyZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0Lm1lZGl1bUhlaWdodCAmJiBtZWRpdW1IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0LnNtYWxsSGVpZ2h0ICYmIHNtYWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsSGVpZ2h0ICYmIGV4dHJhU21hbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbk1lZGlhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuY29uc3QgTWVkaWFRdWVyeSA9IG1lbW8oTWVkaWEpO1xuXG5leHBvcnQgeyBNZWRpYVF1ZXJ5IH07XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIEJyZWFrcG9pbnRQcm9wcyB9IGZyb20gJy4vTWVkaWFRdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QnlIZWlnaHQgPSAoY2hpbGRyZW46IFJlYWN0RWxlbWVudCwgcmVzdDogUGFydGlhbDxEZWZhdWx0UHJvcHM+LCBicmVha3BvaW50UHJvcHM6IEJyZWFrcG9pbnRQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwgPT4ge1xyXG4gICAgaWYgKCFyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgIXJlc3QubGFyZ2VIZWlnaHQgJiYgIXJlc3QubWVkaXVtSGVpZ2h0ICYmICFyZXN0LnNtYWxsSGVpZ2h0ICYmICFyZXN0LmV4dHJhU21hbGxIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QuZXh0cmFMYXJnZUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMuZXh0cmFMYXJnZSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5sYXJnZUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMubGFyZ2UpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QubWVkaXVtSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5tZWRpdW0pIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3Quc21hbGxIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLnNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LmV4dHJhU21hbGxIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmV4dHJhU21hbGwpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiIsImltcG9ydCB7IE1lZGlhQ29udGV4dFR5cGUgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5cbmV4cG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL01lZGlhUXVlcnknO1xuZXhwb3J0IHsgTWVkaWFQcm92aWRlciB9IGZyb20gJy4vTWVkaWFQcm92aWRlcic7XG5leHBvcnQgeyBNZWRpYUNvbnRleHQgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7IE1lZGlhQ29udGV4dFR5cGUgfTtcbiIsImV4cG9ydCBjb25zdCBCUkVBS1BPSU5UUyA9IHtcbiAgICBleHRyYUxhcmdlOiB7XG4gICAgICAgIHdlaWdodDogNCxcbiAgICAgICAgd2lkdGg6IDI1NjAsXG4gICAgICAgIGhlaWdodDogMTQ0MCxcbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICAgIHdlaWdodDogMyxcbiAgICAgICAgd2lkdGg6IDE5MjAsXG4gICAgICAgIGhlaWdodDogMTA4MCxcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIHdpZHRoOiAxNjAwLFxuICAgICAgICBoZWlnaHQ6IDkwMCxcbiAgICB9LFxuICAgIHNtYWxsOiB7XG4gICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgd2lkdGg6IDEzNjYsXG4gICAgICAgIGhlaWdodDogNzY4LFxuICAgIH0sXG4gICAgZXh0cmFTbWFsbDoge1xuICAgICAgICB3ZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAxMDI0LFxuICAgICAgICBoZWlnaHQ6IDc2OCxcbiAgICB9LFxufTtcbiIsImltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2lkdGhCUFdlaWdodCh3aWR0aDogbnVtYmVyLCBicmVha3BvaW50czogdHlwZW9mIEJSRUFLUE9JTlRTKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMubGFyZ2Uud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLm1lZGl1bS53aWR0aCkgJiYgKHdpZHRoIDwgYnJlYWtwb2ludHMubGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodDtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5zbWFsbC53aWR0aCkgJiYgKHdpZHRoIDwgYnJlYWtwb2ludHMubWVkaXVtLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodEJQV2VpZ2h0KGhlaWdodDogbnVtYmVyLCBicmVha3BvaW50czogdHlwZW9mIEJSRUFLUE9JTlRTKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5leHRyYUxhcmdlLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMubGFyZ2UuaGVpZ2h0KSAmJiAoaGVpZ2h0IDwgYnJlYWtwb2ludHMuZXh0cmFMYXJnZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5tZWRpdW0uaGVpZ2h0KSAmJiAoaGVpZ2h0IDwgYnJlYWtwb2ludHMubGFyZ2UuaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLnNtYWxsLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLm1lZGl1bS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZW51bSBTaXplcyB7XHJcbiAgICBleHRyYUxhcmdlID0gJ2V4dHJhTGFyZ2UnLFxyXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxyXG4gICAgbWVkaXVtID0gJ21lZGl1bScsXHJcbiAgICBzbWFsbCA9ICdzbWFsbCcsXHJcbiAgICBleHRyYVNtYWxsID0gJ2V4dHJhU21hbGwnLFxyXG4gICAgZXh0cmFMYXJnZVdpZHRoID0gJ2V4dHJhTGFyZ2VXaWR0aCcsXHJcbiAgICBsYXJnZVdpZHRoID0gJ2xhcmdlV2lkdGgnLFxyXG4gICAgbWVkaXVtV2lkdGggPSAnbWVkaXVtV2lkdGgnLFxyXG4gICAgc21hbGxXaWR0aCA9ICdzbWFsbFdpZHRoJyxcclxuICAgIGV4dHJhU21hbGxXaWR0aCA9ICdleHRyYVNtYWxsV2lkdGgnLFxyXG4gICAgZXh0cmFMYXJnZUhlaWdodCA9ICdleHRyYUxhcmdlSGVpZ2h0JyxcclxuICAgIGxhcmdlSGVpZ2h0ID0gJ2xhcmdlSGVpZ2h0JyxcclxuICAgIG1lZGl1bUhlaWdodCA9ICdtZWRpdW1IZWlnaHQnLFxyXG4gICAgc21hbGxIZWlnaHQgPSAnc21hbGxIZWlnaHQnLFxyXG4gICAgZXh0cmFTbWFsbEhlaWdodCA9ICdleHRyYVNtYWxsSGVpZ2h0J1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTaXplcyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IHtba2V5IGluIFNpemVzXTogYm9vbGVhbn0ge1xyXG4gICAgY29uc3Qgd2lkdGhCUFdlaWdodDogbnVtYmVyID0gZ2V0V2lkdGhCUFdlaWdodCh3aWR0aCwgYnJlYWtwb2ludHMpO1xyXG4gICAgY29uc3QgaGVpZ2h0QlBXZWlnaHQ6IG51bWJlciA9IGdldEhlaWdodEJQV2VpZ2h0KGhlaWdodCwgYnJlYWtwb2ludHMpO1xyXG4gICAgY29uc3Qgd2VpZ2h0OiBudW1iZXIgPSBNYXRoLm1pbih3aWR0aEJQV2VpZ2h0LCBoZWlnaHRCUFdlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBleHRyYUxhcmdlOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbGFyZ2U6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbWVkaXVtOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0KSxcclxuICAgICAgICBzbWFsbDogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYVNtYWxsOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFMYXJnZVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodCksXHJcbiAgICAgICAgc21hbGxXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbFdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhTGFyZ2VIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbWVkaXVtSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQpLFxyXG4gICAgICAgIHNtYWxsSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbEhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodCksXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBTaXplcywgZ2V0U2l6ZXMgfTtcclxuIiwiaW1wb3J0ICdsaWIvbW91c2Utc2VsZWN0aW9uLmpzJztcclxuXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBLRVlfQ09ERVMgfSBmcm9tICdsaWIva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBOVU1CRVJfS0VZX0NPREVTIH0gZnJvbSAnbGliL251bWJlci1rZXljb2Rlcyc7XHJcbmltcG9ydCB7IHBsYXlTb3VuZCB9IGZyb20gJ2xpYi9zb3VuZCc7XHJcbmltcG9ydCB7IE51bWJlckZvcm1hdFR5cGUsIFN5c3RlbUxvY2FsZSB9IGZyb20gJ2xpYi92aWV3LWVudi1oZWxwZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL051bWVyaWNTdGVwcGVyLmNzcyc7XHJcbmltcG9ydCB7IFByb3BzLCBTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuY29uc3QgU1BFRUQgPSA1MDtcclxuY29uc3QgREVMQVkgPSAzMDA7XHJcbmNvbnN0IFZBTElEQVRJT05fREVMQVkgPSAxMDAwO1xyXG5jb25zdCBTT1VORF9IT1ZFUiA9ICdoaWdobGlnaHQnO1xyXG5jb25zdCBTT1VORF9DTElDSyA9ICdwbGF5JztcclxuXHJcbmNvbnN0IGdldFN0ZXBwZXJTdHlsZSA9ICh3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiAod2lkdGggPyB7IHdpZHRoOiBgJHt3aWR0aH1yZW1gIH0gOiB7fSk7XHJcblxyXG5jbGFzcyBOdW1lcmljU3RlcHBlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygd2luZG93LnNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgICB2YWxpZGF0aW9uVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHdpbmRvdy5zZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xyXG4gICAgbnVtZXJpY2FsU3RlcHBlciA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGlucHV0ID0gY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICBzdGVwU2l6ZTogMSxcclxuICAgICAgICBtaW5pbXVtOiAwLFxyXG4gICAgICAgIG1heGltdW06IDAsXHJcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXHJcbiAgICAgICAgaXNGb2N1c2VkOiB0cnVlLFxyXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBudWxsLFxyXG4gICAgICAgIG9uS2V5RG93bjogKCkgPT4gbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgaXNGb2N1c2VkOiB0aGlzLnByb3BzLmlzRm9jdXNlZCxcclxuICAgICAgICBhY3RpdmVEZWNyZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgIGFjdGl2ZUluY3JlbWVudDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldEZvY3VzT25JbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGJsdXJJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuY3VycmVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNPbklucHV0KCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTGVuID0gdGhpcy5mb3JtYXR0ZWRWYWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmN1cnJlbnQgJiYgdGhpcy5pbnB1dC5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHZhbHVlTGVuLCB2YWx1ZUxlbik7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKF86IFByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgaXNGb2N1c2VkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gcHJldlN0YXRlLnZhbHVlICYmIGlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxlbiA9IHRoaXMuZm9ybWF0dGVkVmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gdGhpcy5pbnB1dC5jdXJyZW50ICYmIHRoaXMuaW5wdXQuY3VycmVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSB0aGlzLmlucHV0LmN1cnJlbnQgJiYgdGhpcy5pbnB1dC5jdXJyZW50LnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydFBvc2l0aW9uID09PSBlbmRQb3NpdGlvbiA/IHZhbHVlTGVuIDogc3RhcnRQb3NpdGlvbiB8fCAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb24gPT09IDAgJiYgZW5kUG9zaXRpb24gPT09IHZhbHVlTGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmN1cnJlbnQgJiYgdGhpcy5pbnB1dC5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHZhbHVlTGVuLCB2YWx1ZUxlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmN1cnJlbnQgJiYgdGhpcy5pbnB1dC5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCB2YWx1ZUxlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyB2YWx1ZSwgaXNGb2N1c2VkIH06IFByb3BzKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNGb2N1c2VkICE9PSB0aGlzLnByb3BzLmlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBpc0ZvY3VzZWQgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzT25JbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3JQb3NpdGlvbigwLCB0aGlzLmZvcm1hdHRlZFZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsdXJJbnB1dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtYXR0ZWRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW5jeVR5cGVcclxuICAgICAgICAgICAgPyBTeXN0ZW1Mb2NhbGUuZ2V0TnVtYmVyRm9ybWF0KHRoaXMuc3RhdGUudmFsdWUsIE51bWJlckZvcm1hdFR5cGUuR09MRClcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VmFsdWUgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbmN5VHlwZSA/IFN5c3RlbUxvY2FsZS5nZXROdW1iZXJGb3JtYXQodmFsdWUsIE51bWJlckZvcm1hdFR5cGUuR09MRCkgOiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRWYWxpZFZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBib3VuZGVkVmFsdWUgPSBNYXRoLm1pbih0aGlzLnByb3BzLm1heGltdW0sIE1hdGgubWF4KHRoaXMucHJvcHMubWluaW11bSwgdmFsdWUpKTtcclxuICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IHRoaXMucHJvcHMuc3RlcFNpemU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYm91bmRlZFZhbHVlIC8gc3RlcFNpemUpICogc3RlcFNpemU7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZVZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRDdXJzb3JQb3NpdGlvbiA9IChjdXJzb3JTdGFydDogbnVtYmVyLCBjdXJzb3JFbmQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY3VycmVudCAmJiB0aGlzLmlucHV0LmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yU3RhcnQsIGN1cnNvckVuZCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuY3VycmVudCAmJiB0aGlzLmlucHV0LmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yU3RhcnQsIGN1cnNvckVuZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVJbnB1dCA9IChrZXlDb2RlID0gMCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQmFja3NwYWNlS2V5ID0ga2V5Q29kZSA9PT0gS0VZX0NPREVTLkJBQ0tTUEFDRTtcclxuICAgICAgICBjb25zdCBpc0RlbGV0ZUtleSA9IGtleUNvZGUgPT09IEtFWV9DT0RFUy5ERUxFVEU7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5jdXJyZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydCB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwO1xyXG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudEN1cnNvclBvc2l0aW9uID0gTWF0aC5tYXgoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbiA9IGN1cnJlbnRDdXJzb3JQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVsZXRlS2V5KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKDAsIGN1cnJlbnRDdXJzb3JQb3NpdGlvbikgK1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlLnN1YnN0cmluZyhjdXJyZW50Q3Vyc29yUG9zaXRpb24gKyAxLCBjdXJyZW50VmFsdWUubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0JhY2tzcGFjZUtleSAmJiBzZWxlY3Rpb25TdGFydCA9PT0gMSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bSA9IE51bWJlcihjdXJyZW50VmFsdWUudHJpbSgpLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyLmlzU2FmZUludGVnZXIoY3VycmVudE51bSkgPyBjdXJyZW50TnVtIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLnByb3BzLmN1cnJlbmN5VHlwZVxyXG4gICAgICAgICAgICA/IFN5c3RlbUxvY2FsZS5nZXROdW1iZXJGb3JtYXQobmV3VmFsdWUsIE51bWJlckZvcm1hdFR5cGUuR09MRClcclxuICAgICAgICAgICAgOiBuZXdWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsdWVOdW1lcmljID0gIWlzTmFOKE51bWJlcihjdXJyZW50VmFsdWUucmVwbGFjZSgnXFx1MDBBMCcsICcnKSkpO1xyXG5cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBudW1SZWdleCA9IG5ldyBSZWdFeHAoL1xcZC9nKTtcclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dENoYXIgPSBjdXJyZW50VmFsdWVbaV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGb3JtYXRDaGFyID0gZm9ybWF0dGVkVmFsdWVbdXBkYXRlZEN1cnNvclBvc2l0aW9uXSB8fCAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudElucHV0Q2hhci5tYXRjaChudW1SZWdleCkgJiYgY3VycmVudElucHV0Q2hhciAhPT0gY3VycmVudEZvcm1hdENoYXIpIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudElucHV0Q2hhciAhPT0gZm9ybWF0dGVkVmFsdWVbdXBkYXRlZEN1cnNvclBvc2l0aW9uXSAmJlxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEN1cnNvclBvc2l0aW9uIDwgZm9ybWF0dGVkVmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEN1cnNvclBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZWRDdXJzb3JQb3NpdGlvbisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdXBkYXRlZEN1cnNvclBvc2l0aW9uID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc1ZhbHVlTnVtZXJpYykge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ3Vyc29yUG9zaXRpb24gPSBjdXJyZW50VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dC5jdXJyZW50ICYmIHRoaXMuaW5wdXQuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcclxuICAgICAgICB0aGlzLnNldEN1cnNvclBvc2l0aW9uKHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiwgdXBkYXRlZEN1cnNvclBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uVGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudmFsaWRhdGlvblRpbWVyKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkVmFsdWUgPSB0aGlzLmdldFZhbGlkVmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZFZhbHVlICE9PSBuZXdWYWx1ZSAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldFZhbGlkVmFsdWUobmV3VmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yUG9zaXRpb24oMCwgdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSkubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFZBTElEQVRJT05fREVMQVkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVEZWxldGUgPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCBpc0JhY2tzcGFjZSA9IGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFUy5CQUNLU1BBQ0U7XHJcbiAgICAgICAgY29uc3QgaXNEZWxldGUgPSBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERVMuREVMRVRFO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGlzVGV4dFNlbGVjdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICE9PSBzZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cCgvXFxELyk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbiA9IGlzQmFja3NwYWNlICYmIHNlbGVjdGlvblN0YXJ0ID8gc2VsZWN0aW9uU3RhcnQgLSAxIDogc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGV4dFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXBkYXRlZEN1cnNvclBvc2l0aW9uID0gZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBpc0RlbGV0ZVNlcGFyYXRvciA9IHNlcGFyYXRvclJlZ0V4cC50ZXN0KHZhbHVlW2V4cGVjdGVkQ3Vyc29yUG9zaXRpb25dKTtcclxuICAgICAgICBpZiAoaXNEZWxldGUgJiYgaXNEZWxldGVTZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNlcGFyYXRvclJlZ0V4cC50ZXN0KHZhbHVlW3VwZGF0ZWRDdXJzb3JQb3NpdGlvbl0pICYmIHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiA8IHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEN1cnNvclBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQmFja3NwYWNlICYmIGlzRGVsZXRlU2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzZXBhcmF0b3JSZWdFeHAudGVzdCh2YWx1ZVt1cGRhdGVkQ3Vyc29yUG9zaXRpb25dKSAmJiB1cGRhdGVkQ3Vyc29yUG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ3Vyc29yUG9zaXRpb24tLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiAhPT0gZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbiB8fCAoaXNCYWNrc3BhY2UgJiYgaXNEZWxldGVTZXBhcmF0b3IpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiA9IHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiA8IDAgPyAwIDogdXBkYXRlZEN1cnNvclBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvclBvc2l0aW9uKHVwZGF0ZWRDdXJzb3JQb3NpdGlvbiwgdXBkYXRlZEN1cnNvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChpc0JhY2tzcGFjZSAmJiBzZWxlY3Rpb25TdGFydCA9PT0gMSAmJiB2YWx1ZS5sZW5ndGggPT09IDEpIHx8IGlzRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXQoZXZlbnQua2V5Q29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmXHJcbiAgICAgICAgICAgIGN1ckVsZW1lbnQgIT09IHRoaXMuaW5wdXQuY3VycmVudCAmJlxyXG4gICAgICAgICAgICB0aGlzLm51bWVyaWNhbFN0ZXBwZXIuY3VycmVudCAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5udW1lcmljYWxTdGVwcGVyLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbGlkVmFsdWUgPSB0aGlzLmdldFZhbGlkVmFsdWUodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbGlkVmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWxpZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVdoZWVsID0gKGV2ZW50OiBSZWFjdC5XaGVlbEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNEaXNhYmxlZCB8fCAhdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHdoZWVsaW5nRG93biA9IGV2ZW50LmRlbHRhWSA8IDA7XHJcbiAgICAgICAgaWYgKHdoZWVsaW5nRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVJbmNyZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhY3RpdmVEZWNyZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgYnV0dG9uSW5jcmVtZW50SXNEaXNhYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSA+PSB0aGlzLnByb3BzLm1heGltdW0gfHwgdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJ1dHRvbkRlY3JlbWVudElzRGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPD0gdGhpcy5wcm9wcy5taW5pbXVtIHx8IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnRIYW5kbGVNb3VzZUVudGVyID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSW5jcmVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50SGFuZGxlTW91c2VEb3duKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbkluY3JlbWVudElzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5SG92ZXJTb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZGVjcmVtZW50SGFuZGxlTW91c2VFbnRlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZURlY3JlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudEhhbmRsZU1vdXNlRG93bihldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5idXR0b25EZWNyZW1lbnRJc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUhvdmVyU291bmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlIGluIEtFWV9DT0RFUyAmJiBldmVudC5rZXlDb2RlICE9PSBLRVlfQ09ERVMuQkFDS1NQQUNFICYmIGV2ZW50LmtleUNvZGUgIT09IEtFWV9DT0RFUy5ERUxFVEUpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19VUDpcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuTlVNX1BMVVM6XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLlBMVVM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYWN0aXZlSW5jcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluY3JlbWVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLk5VTV9NSU5VUzpcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuTUlOVVM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYWN0aXZlRGVjcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZURlY3JlbWVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucHJvcHMubWluaW11bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLm1heGltdW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOlxyXG4gICAgICAgICAgICAgICAgZXZlbnQubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA+PSB0aGlzLnByb3BzLm1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUxlbiA9IHRoaXMuZm9ybWF0VmFsdWUodGhpcy5wcm9wcy5tYXhpbXVtKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLm1heGltdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yUG9zaXRpb24oMCwgdmFsdWVMZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLlBBR0VfVVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucHJvcHMubWF4aW11bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuUEFHRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLm1pbmltdW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkJBQ0tTUEFDRTpcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuREVMRVRFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWxldGUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUtleVVwID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfVVA6XHJcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLk5VTV9QTFVTOlxyXG4gICAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5QTFVTOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluY3JlbWVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfRE9XTjpcclxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuTlVNX01JTlVTOlxyXG4gICAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5NSU5VUzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVEZWNyZW1lbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhbGxvd09ubHlOdW1iZXJzID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNOdW1iZXIgPSBldmVudC53aGljaCBpbiBOVU1CRVJfS0VZX0NPREVTO1xyXG4gICAgICAgIGlmICghaXNOdW1iZXIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluY3JlbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBNYXRoLm1pbih0aGlzLmdldFZhbGlkVmFsdWUodGhpcy5zdGF0ZS52YWx1ZSkgKyB0aGlzLnByb3BzLnN0ZXBTaXplLCB0aGlzLnByb3BzLm1heGltdW0pO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV4dFZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVjcmVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IE1hdGgubWF4KHRoaXMuZ2V0VmFsaWRWYWx1ZSh0aGlzLnN0YXRlLnZhbHVlKSAtIHRoaXMucHJvcHMuc3RlcFNpemUsIHRoaXMucHJvcHMubWluaW11bSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShuZXh0VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbmNyZW1lbnRIYW5kbGVNb3VzZURvd24gPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQsIGlzUmVjdXJzaXZlQ2FsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uSW5jcmVtZW50SXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPCB0aGlzLnByb3BzLm1heGltdW0pIHtcclxuICAgICAgICAgICAgIWlzUmVjdXJzaXZlQ2FsbCAmJiB0aGlzLnBsYXlDbGlja1NvdW5kKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwIHx8IGlzUmVjdXJzaXZlQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50SGFuZGxlTW91c2VEb3duKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVjdXJzaXZlQ2FsbCA/IFNQRUVEIDogREVMQVksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmNyZW1lbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRlY3JlbWVudEhhbmRsZU1vdXNlRG93biA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCwgaXNSZWN1cnNpdmVDYWxsID0gZmFsc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5idXR0b25EZWNyZW1lbnRJc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c09uSW5wdXQoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA+IHRoaXMucHJvcHMubWluaW11bSkge1xyXG4gICAgICAgICAgICAhaXNSZWN1cnNpdmVDYWxsICYmIHRoaXMucGxheUNsaWNrU291bmQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDAgfHwgaXNSZWN1cnNpdmVDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRIYW5kbGVNb3VzZURvd24oZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZWN1cnNpdmVDYWxsID8gU1BFRUQgOiBERUxBWSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZURlY3JlbWVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcGxheUhvdmVyU291bmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXlTb3VuZChTT1VORF9IT1ZFUik7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsYXlDbGlja1NvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5U291bmQoU09VTkRfQ0xJQ0spO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0Rpc2FibGVkLCBzaXplLCBjdXJyZW5jeVR5cGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VDbGFzc05hbWVzID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmJhc2UsXHJcbiAgICAgICAgICAgIHN0eWxlc1tgYmFzZV9fJHtzaXplfWBdLFxyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGUgJiYgc3R5bGVzW2BiYXNlX193aXRoQ3VycmVuY3ktJHtzaXplfWBdLFxyXG4gICAgICAgICAgICBpc0Rpc2FibGVkICYmIHN0eWxlcy5iYXNlX19pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiBzdHlsZXMuYmFzZV9faXNGb2N1cyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc0J1dHRvbkluY3JlbWVudCA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5idXR0b25JbmNyZW1lbnQsXHJcbiAgICAgICAgICAgIHN0eWxlc1tgYnV0dG9uSW5jcmVtZW50X18ke3NpemV9YF0sXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uSW5jcmVtZW50SXNEaXNhYmxlZCAmJiBzdHlsZXMuYnV0dG9uSW5jcmVtZW50X19pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZUluY3JlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuYnV0dG9uSW5jcmVtZW50SXNEaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgc3R5bGVzW2BidXR0b25JbmNyZW1lbnRfX2lzQWN0aXZlLSR7dGhpcy5wcm9wcy5zaXplfWBdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzQnV0dG9uRGVjcmVtZW50ID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmJ1dHRvbkRlY3JlbWVudCxcclxuICAgICAgICAgICAgc3R5bGVzW2BidXR0b25EZWNyZW1lbnRfXyR7c2l6ZX1gXSxcclxuICAgICAgICAgICAgdGhpcy5idXR0b25EZWNyZW1lbnRJc0Rpc2FibGVkICYmIHN0eWxlcy5idXR0b25EZWNyZW1lbnRfX2lzRGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlRGVjcmVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5idXR0b25EZWNyZW1lbnRJc0Rpc2FibGVkICYmXHJcbiAgICAgICAgICAgICAgICBzdHlsZXNbYGJ1dHRvbkRlY3JlbWVudF9faXNBY3RpdmUtJHt0aGlzLnByb3BzLnNpemV9YF0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NJbnB1dCA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5pbnB1dCxcclxuICAgICAgICAgICAgaXNEaXNhYmxlZCAmJiBzdHlsZXMuaW5wdXRfX2Rpc2FibGVkLFxyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGUgJiYgc3R5bGVzLmlucHV0X193aXRoQ3VycmVuY3ksXHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZSAmJiBzdHlsZXNbYGlucHV0X18ke2N1cnJlbmN5VHlwZX0tJHtzaXplfWBdLFxyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGUgJiYgc3R5bGVzW2BpbnB1dF9fJHtjdXJyZW5jeVR5cGV9YF0sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZSAmJiBpc0Rpc2FibGVkICYmIHN0eWxlc1tgaW5wdXRfXyR7Y3VycmVuY3lUeXBlfS1kaXNhYmxlZGBdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzSWNvbiA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5jdXJyZW5jeUljb24sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZSAmJiBzdHlsZXNbYGN1cnJlbmN5SWNvbl9fJHtjdXJyZW5jeVR5cGV9LSR7c2l6ZX1gXSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc0N1cnJlbmN5ID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGUgJiYgc3R5bGVzW2BjdXJyZW5jeV9fJHtjdXJyZW5jeVR5cGV9YF0sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZSAmJiBzdHlsZXNbYGN1cnJlbmN5X18ke2N1cnJlbmN5VHlwZX0tJHtzaXplfWBdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3NOYW1lc30gcmVmPXt0aGlzLm51bWVyaWNhbFN0ZXBwZXJ9IHN0eWxlPXtnZXRTdGVwcGVyU3R5bGUodGhpcy5wcm9wcy53aWR0aCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5VHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0N1cnJlbmN5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmR1bW15VmFsdWV9Pnt0aGlzLmZvcm1hdHRlZFZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5mb3JtYXR0ZWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5hbGxvd09ubHlOdW1iZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuc2V0Rm9jdXNPbklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzQnV0dG9uSW5jcmVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldEZvY3VzT25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaW5jcmVtZW50SGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaW5jcmVtZW50SGFuZGxlTW91c2VEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzQnV0dG9uRGVjcmVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldEZvY3VzT25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuZGVjcmVtZW50SGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuZGVjcmVtZW50SGFuZGxlTW91c2VEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTnVtZXJpY1N0ZXBwZXIgfTtcclxuIiwiZXhwb3J0IGVudW0gUmV3YXJkVHlwZSB7XG4gICAgSXRlbXMgPSAnaXRlbXMnLFxuICAgIEVxdWlwbWVudCA9ICdlcXVpcG1lbnQnLFxuICAgIFhwID0gJ3hwJyxcbiAgICBYcEZhY3RvciA9ICd4cEZhY3RvcicsXG4gICAgQmx1ZXByaW50cyA9ICdibHVlcHJpbnRzJyxcbiAgICBCbHVlcHJpbnRzQW55ID0gJ2JsdWVwcmludHNBbnknLFxuICAgIEdvb2RpZXMgPSAnZ29vZGllcycsXG4gICAgQmVydGhzID0gJ2JlcnRocycsXG4gICAgU2xvdHMgPSAnc2xvdHMnLFxuICAgIFRva2VucyA9ICd0b2tlbnMnLFxuICAgIENyZXdTa2lucyA9ICdjcmV3U2tpbnMnLFxuICAgIENyZXdCb29rcyA9ICdjcmV3Qm9va3MnLFxuICAgIEN1c3RvbWl6YXRpb25zID0gJ2N1c3RvbWl6YXRpb25zJyxcbiAgICBDcmVkaXRzRmFjdG9yID0gJ2NyZWRpdHNGYWN0b3InLFxuICAgIEN1cnJlbmN5ID0gJ2N1cnJlbmN5JyxcbiAgICBUYW5rbWVuWHAgPSAndGFua21lblhQJyxcbiAgICBUYW5rbWVuWHBGYWN0b3IgPSAndGFua21lblhQRmFjdG9yJyxcbiAgICBGcmVlWHBGYWN0b3IgPSAnZnJlZVhQRmFjdG9yJyxcbiAgICBCYXR0bGVUb2tlbiA9ICdiYXR0bGVUb2tlbicsXG4gICAgUHJlbWl1bVVuaXZlcnNhbCA9ICdwcmVtaXVtX3VuaXZlcnNhbCcsXG4gICAgR29sZCA9ICdnb2xkJyxcbiAgICBDcmVkaXRzID0gJ2NyZWRpdHMnLFxuICAgIENyeXN0YWwgPSAnY3J5c3RhbCcsXG4gICAgRnJlZVhwID0gJ2ZyZWVYUCcsXG4gICAgUHJlbWl1bSA9ICdwcmVtaXVtJyxcbiAgICBQcmVtaXVtUGx1cyA9ICdwcmVtaXVtX3BsdXMnLFxuICAgIEJhdHRsZVBhc3NQb2ludHMgPSAnYmF0dGxlUGFzc1BvaW50cycsXG4gICAgQmF0dGxlUGFzc1NlbGVjdFRva2VuID0gJ2JhdHRsZVBhc3NTZWxlY3RUb2tlbicsXG4gICAgU3R5bGVQcm9ncmVzc1Rva2VuID0gJ3N0eWxlUHJvZ3Jlc3NUb2tlbicsXG4gICAgVG1hblRva2VuID0gJ3RtYW5Ub2tlbicsXG4gICAgTmF0dXJhbENvdmVyID0gJ25hdHVyYWxDb3ZlcicsXG4gICAgQnBDb2luID0gJ2JwY29pbicsXG4gICAgQmF0dGxhUGFzc0ZpbmFsQWNoaWV2ZW1lbnQgPSAnZG9zc2llcl9hY2hpZXZlbWVudCcsXG4gICAgQmF0dGxlQmFkZ2UgPSAnZG9zc2llcl9iYWRnZScsXG4gICAgTmV3WWVhckFsYnVtc0FjY2VzcyA9ICduZXdZZWFyQWxidW1zQWNjZXNzJyxcbiAgICBOZXdZZWFyRmlsbGVycyA9ICdueTIyRmlsbGVycycsXG4gICAgTmV3WWVhckludm9pY2UgPSAnbmV3WWVhckludm9pY2UnLFxuICAgIE5ld1llYXJUb3lGcmFnbWVudHMgPSAnbnkyMlRveUZyYWdtZW50cycsXG4gICAgTmV3WWVhclNsb3QgPSAnbmV3WWVhclNsb3QnLFxuICAgIEJvbnVzWDUgPSAnYmF0dGxlX2JvbnVzX3g1JyxcbiAgICBDcmV3Qm9udXNYMyA9ICdjcmV3X2JvbnVzX3gzJyxcbiAgICBWZWhpY2xlcyA9ICd2ZWhpY2xlcycsXG4gICAgRXBpY1NlbGVjdFRva2VuID0gJ2VwaWNTZWxlY3RUb2tlbicsXG4gICAgQ29sbGVjdGlvbkl0ZW0gPSAnY29sbGVjdGlvbkl0ZW0nLFxuICAgIENvbXA3VG9rZW5XZWVrbHlSZXdhcmQgPSAnY29tcDdUb2tlbldlZWtseVJld2FyZCcsXG4gICAgQ29tcDdUb2tlbkNvdXBvblJld2FyZCA9ICdjb21wN1Rva2VuQ291cG9uUmV3YXJkJyxcbiAgICBCYXR0bGVCb29zdGVyR2lmdCA9ICdiYXR0bGVCb29zdGVyX2dpZnQnLFxuICAgIENvc21pY0xvb3Rib3hTaWx2ZXIgPSAnbG9vdEJveFRva2VuJyxcbiAgICBDb3NtaWNMb290Ym94Q29tbW9uID0gJ2Nvc21pY18yMDI0XzInLFxufVxuXG4vLyBUT0RPOiBsb29rcyBsaWtlIHdlIGhhdmUgdG8gZG8gc29tZSByZWZhY3RvcmluZyBmb3IgcmV3YXJkcyBpbiBGRSBhbmQgR1Agc2lkZXNcblxuZXhwb3J0IGVudW0gQm9udXNOYW1lcyB7XG4gICAgR29sZCA9ICdnb2xkJyxcbiAgICBDcmVkaXRzID0gJ2NyZWRpdHMnLFxuICAgIENyeXN0YWwgPSAnY3J5c3RhbCcsXG4gICAgUHJlbWl1bSA9ICdwcmVtaXVtJyxcbiAgICBQcmVtaXVtUGx1cyA9ICdwcmVtaXVtX3BsdXMnLFxuICAgIFZlaGljbGVzID0gJ3ZlaGljbGVzJyxcbiAgICBDdXN0b21pemF0aW9ucyA9ICdjdXN0b21pemF0aW9ucycsXG4gICAgQmx1ZXByaW50cyA9ICdibHVlcHJpbnRzJyxcbiAgICBCbHVlcHJpbnRzQW55ID0gJ2JsdWVwcmludHNBbnknLFxuICAgIEJsdWVwcmludHNGaW5hbCA9ICdmaW5hbEJsdWVwcmludHMnLFxuICAgIEdvb2RpZXMgPSAnZ29vZGllcycsXG4gICAgQ3Jld1NraW5zID0gJ2NyZXdTa2lucycsXG4gICAgWHAgPSAneHAnLFxuICAgIFhwRmFjdG9yID0gJ3hwRmFjdG9yJyxcbiAgICBGcmVlWHAgPSAnZnJlZVhQJyxcbiAgICBGcmVlWFBGYWN0b3IgPSAnZnJlZVhQRmFjdG9yJyxcbiAgICBUYW5rbWVuWFAgPSAndGFua21lblhQJyxcbiAgICBUYW5rbWVuWFBGYWN0b3IgPSAndGFua21lblhQRmFjdG9yJyxcbiAgICBEYWlseVhQRmFjdG9yID0gJ2RhaWx5WFBGYWN0b3InLFxuICAgIENyZWRpdHNGYWN0b3IgPSAnY3JlZGl0c0ZhY3RvcicsXG4gICAgSXRlbXMgPSAnaXRlbXMnLFxuICAgIFN0ckJvbnVzID0gJ3N0ckJvbnVzJyxcbiAgICBHcm91cHMgPSAnZ3JvdXBzJyxcbiAgICBCZXJ0aHMgPSAnYmVydGhzJyxcbiAgICBTbG90cyA9ICdzbG90cycsXG4gICAgTWV0YSA9ICdtZXRhJyxcbiAgICBUb2tlbnMgPSAndG9rZW5zJyxcbiAgICBEb3NzaWVyID0gJ2Rvc3NpZXInLFxuICAgIE9uZU9mID0gJ29uZW9mJyxcbiAgICBQcmVtaXVtVW5pdmVyc2FsID0gJ3ByZW1pdW1fdW5pdmVyc2FsJyxcbiAgICBCYWRnZXNHcm91cCA9ICdiYWRnZXNHcm91cCcsXG4gICAgRW50aXRsZW1lbnRzID0gJ2VudGl0bGVtZW50cycsXG4gICAgUmFua2VkRGFpbHlCYXR0bGVzID0gJ3JhbmtlZERhaWx5QmF0dGxlcycsXG4gICAgUmFua2VkQm9udXNCYXR0bGVzID0gJ3JhbmtlZEJvbnVzQmF0dGxlcycsXG4gICAgQmF0dGxlUGFzc1BvaW50cyA9ICdiYXR0bGVQYXNzUG9pbnRzJyxcbiAgICBCYXR0bGVCYWRnZSA9ICdkb3NzaWVyX2JhZGdlJyxcbiAgICBCYXR0bGVBY2hpZXZlbWVudCA9ICdkb3NzaWVyX2FjaGlldmVtZW50Jyxcbn1cblxuZXhwb3J0IGVudW0gSW1hZ2VTaXplIHtcbiAgICBCaWcgPSAnYmlnJyxcbiAgICBTbWFsbCA9ICdzbWFsbCcsXG4gICAgTWluaSA9ICdtaW5pJyxcbiAgICBTNjAweDQ1MCA9ICdzNjAweDQ1MCcsXG4gICAgUzQwMHgzMDAgPSAnczQwMHgzMDAnLFxuICAgIFMyOTZ4MjIyID0gJ3MyOTZ4MjIyJyxcbiAgICBTMjMyeDE3NCA9ICdzMjMyeDE3NCcsXG4gICAgUzE4MHgxMzUgPSAnczE4MHgxMzUnLFxuICAgIFMxMjh4MTAwID0gJ3MxMjh4MTAwJyxcbiAgICBTODB4ODAgPSAnczgweDgwJyxcbiAgICBTNDh4NDggPSAnczQ4eDQ4Jyxcbn1cblxuZXhwb3J0IGVudW0gVmFsdWVUeXBlcyB7XG4gICAgTVVMVEkgPSAnbXVsdGknLFxuICAgIENVUlJFTkNZID0gJ2N1cnJlbmN5JyxcbiAgICBQUkVNSVVNX1BMVVMgPSAncHJlbWl1bV9wbHVzJyxcbiAgICBOVU1CRVIgPSAnbnVtYmVyJyxcbiAgICBTVFJJTkcgPSAnc3RyaW5nJyxcbn1cblxuZXhwb3J0IGVudW0gU3BlY2lhbHMge1xuICAgIEJBVFRMRV9CT09TVEVSID0gJ2JhdHRsZUJvb3N0ZXInLFxuICAgIEJBVFRMRV9CT09TVEVSX1JFUExBQ0UgPSAnYmF0dGxlQm9vc3RlclJlcGxhY2UnLFxuICAgIEJVSUxUX0lOX0VRVUlQTUVOVCA9ICdidWlsdEluRXF1aXBtZW50JyxcbiAgICBFUVVJUE1FTlRfUExVUyA9ICdlcXVpcG1lbnRQbHVzJyxcbiAgICBFUVVJUE1FTlRfVFJPUEhZX0JBU0lDID0gJ2VxdWlwbWVudFRyb3BoeUJhc2ljJyxcbiAgICBFUVVJUE1FTlRfVFJPUEhZX1VQR1JBREVEID0gJ2VxdWlwbWVudFRyb3BoeVVwZ3JhZGVkJyxcbiAgICBFUVVJUE1FTlRfTU9ERVJOSVpFRF9VUEdSQURFRF8xID0gJ2VxdWlwbWVudE1vZGVybml6ZWRfMScsXG4gICAgRVFVSVBNRU5UX01PREVSTklaRURfVVBHUkFERURfMiA9ICdlcXVpcG1lbnRNb2Rlcm5pemVkXzInLFxuICAgIEVRVUlQTUVOVF9NT0RFUk5JWkVEX1VQR1JBREVEXzMgPSAnZXF1aXBtZW50TW9kZXJuaXplZF8zJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8xID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8xJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8yID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8yJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8zID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8zJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF80ID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF80Jyxcbn1cblxuZXhwb3J0IGVudW0gSGlnaGxpZ2h0Q2xhc3NlcyB7XG4gICAgQkFUVExFX0JPT1NURVIgPSAnYmF0dGxlQm9vc3RlcicsXG59XG5cbmV4cG9ydCBlbnVtIE92ZXJsYXlDbGFzc2VzIHtcbiAgICBCQVRUTEVfQk9PU1RFUiA9ICdiYXR0bGVCb29zdGVyJyxcbiAgICBCQVRUTEVfQk9PU1RFUl9SRVBMQUNFID0gJ2JhdHRsZUJvb3N0ZXJSZXBsYWNlJyxcbiAgICBCVUlMVF9JTl9FUVVJUE1FTlQgPSAnYnVpbHRJbkVxdWlwbWVudCcsXG4gICAgRVFVSVBNRU5UX1BMVVMgPSAnZXF1aXBtZW50UGx1cycsXG4gICAgRVFVSVBNRU5UX1RST1BIWV9CQVNJQyA9ICdlcXVpcG1lbnRUcm9waHlCYXNpYycsXG4gICAgRVFVSVBNRU5UX1RST1BIWV9VUEdSQURFRCA9ICdlcXVpcG1lbnRUcm9waHlVcGdyYWRlZCcsXG4gICAgRVFVSVBNRU5UX01PREVSTklaRURfVVBHUkFERURfMSA9ICdlcXVpcG1lbnRNb2Rlcm5pemVkXzEnLFxuICAgIEVRVUlQTUVOVF9NT0RFUk5JWkVEX1VQR1JBREVEXzIgPSAnZXF1aXBtZW50TW9kZXJuaXplZF8yJyxcbiAgICBFUVVJUE1FTlRfTU9ERVJOSVpFRF9VUEdSQURFRF8zID0gJ2VxdWlwbWVudE1vZGVybml6ZWRfMycsXG4gICAgUFJPR1JFU1NJT05fU1RZTEVfVVBHUkFERURfMSA9ICdwcm9ncmVzc2lvblN0eWxlVXBncmFkZWRfMScsXG4gICAgUFJPR1JFU1NJT05fU1RZTEVfVVBHUkFERURfMiA9ICdwcm9ncmVzc2lvblN0eWxlVXBncmFkZWRfMicsXG4gICAgUFJPR1JFU1NJT05fU1RZTEVfVVBHUkFERURfMyA9ICdwcm9ncmVzc2lvblN0eWxlVXBncmFkZWRfMycsXG4gICAgUFJPR1JFU1NJT05fU1RZTEVfVVBHUkFERURfNCA9ICdwcm9ncmVzc2lvblN0eWxlVXBncmFkZWRfNCcsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnbGliL3NvdW5kJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0QnV0dG9uLmNzcyc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cclxuXHJcbi8vIHdhaXRpbmcgZm9yIGZvY3VzIGltcGxlbWVudFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZWFkb25seSBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBnb3RvPzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgc2lkZT86ICdsZWZ0JyB8ICdyaWdodCc7XHJcbiAgICByZWFkb25seSB0eXBlPzogJ2JhY2snIHwgJ2ZvcndhcmQnIHwgJ2Nsb3NlJyB8ICdpbmZvJztcclxuICAgIHJlYWRvbmx5IHNvdW5kSG92ZXI/OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBzb3VuZENsaWNrPzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgY2xhc3NOYW1lcz86IFBhcnRpYWw8e1xyXG4gICAgICAgIGJhc2U6IHN0cmluZztcclxuICAgICAgICBpY29uOiBzdHJpbmc7XHJcbiAgICAgICAgZ2xvdzogc3RyaW5nO1xyXG4gICAgICAgIGNhcHRpb246IHN0cmluZztcclxuICAgICAgICBnb3RvOiBzdHJpbmc7XHJcbiAgICB9PjtcclxuICAgIHJlYWRvbmx5IG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHJlYWRvbmx5IG9uTW91c2VFbnRlcj86IE1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgcmVhZG9ubHkgb25Nb3VzZUxlYXZlPzogTW91c2VFdmVudEhhbmRsZXI7XHJcbiAgICByZWFkb25seSBvbk1vdXNlRG93bj86IE1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgcmVhZG9ubHkgb25Nb3VzZVVwPzogTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGluayBodHRwczovL2NvbmZsdWVuY2Uud2FyZ2FtaW5nLm5ldC9wYWdlcy92aWV3cGFnZS5hY3Rpb24/cGFnZUlkPTcxMjU4Mjg4MlxyXG4gKiB3aGF0IGJhY2tfc2hpbmUgaXMgdXNlZCB3aGVuIGJ1dHRvbiBkb2Vzbid0IGhhdmUgYW55IHRleHQ/XHJcbiAqIHRleHQgc2hhZG93IG5vdCBlbm91Z2hcclxuICovXHJcblxyXG5jbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBzaWRlOiAnbGVmdCcsXHJcbiAgICAgICAgdHlwZTogJ2JhY2snLFxyXG4gICAgICAgIHNvdW5kSG92ZXI6ICdoaWdobGlnaHQnLFxyXG4gICAgICAgIHNvdW5kQ2xpY2s6ICdwbGF5JyxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGNsaWNrOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgX29uTW91c2VFbnRlciA9IChoYW5kbGVyPzogTW91c2VFdmVudEhhbmRsZXIpID0+IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zb3VuZEhvdmVyKSB7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZCh0aGlzLnByb3BzLnNvdW5kSG92ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uTW91c2VMZWF2ZSA9IChoYW5kbGVyPzogTW91c2VFdmVudEhhbmRsZXIpID0+IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xpY2s6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25Nb3VzZURvd24gPSAoaGFuZGxlcj86IE1vdXNlRXZlbnRIYW5kbGVyKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGljazogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc291bmRDbGljaykge1xyXG4gICAgICAgICAgICBwbGF5U291bmQodGhpcy5wcm9wcy5zb3VuZENsaWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbk1vdXNlVXAgPSAoaGFuZGxlcj86IE1vdXNlRXZlbnRIYW5kbGVyKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGljazogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pO1xyXG5cclxuICAgIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhcHRpb24sXHJcbiAgICAgICAgICAgIG9uQ2xpY2ssXHJcbiAgICAgICAgICAgIGdvdG8sXHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IGNsYXNzZXMsXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcixcclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlLFxyXG4gICAgICAgICAgICBvbk1vdXNlRG93bixcclxuICAgICAgICAgICAgb25Nb3VzZVVwLFxyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuICAgICAgICAgICAgc291bmRDbGljayxcclxuICAgICAgICAgICAgc291bmRIb3ZlcixcclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuICAgICAgICAgICAgLi4ucmVzdFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc0Jhc2UgPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBzdHlsZXMuYmFzZSxcclxuICAgICAgICAgICAgc3R5bGVzW2BiYXNlX18ke3R5cGV9YF0sXHJcbiAgICAgICAgICAgIHN0eWxlc1tgYmFzZV9fJHtzaWRlfWBdLFxyXG4gICAgICAgICAgICBjbGFzc2VzPy5iYXNlLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzSWNvbiA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5pY29uLFxyXG4gICAgICAgICAgICBzdHlsZXNbYGljb25fXyR7dHlwZX1gXSxcclxuICAgICAgICAgICAgc3R5bGVzW2BpY29uX18ke3NpZGV9YF0sXHJcbiAgICAgICAgICAgIGNsYXNzZXM/Lmljb24sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NHbG93ID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmdsb3csXHJcbiAgICAgICAgICAgIGNsYXNzZXM/Lmdsb3csXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NDYXB0aW9uID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmNhcHRpb24sXHJcbiAgICAgICAgICAgIHN0eWxlc1tgY2FwdGlvbl9fJHt0eXBlfWBdLFxyXG4gICAgICAgICAgICBjbGFzc2VzPy5jYXB0aW9uLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzR290byA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5nb3RvLFxyXG4gICAgICAgICAgICBjbGFzc2VzPy5nb3RvLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NCYXNlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLl9vbk1vdXNlRW50ZXIob25Nb3VzZUVudGVyKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5fb25Nb3VzZUxlYXZlKG9uTW91c2VMZWF2ZSl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5fb25Nb3VzZURvd24ob25Nb3VzZURvd24pfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLl9vbk1vdXNlVXAob25Nb3VzZVVwKX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh0eXBlICE9PSAnaW5mbycpICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0dsb3d9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0NhcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Z290byAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzR290b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnb3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGV4dEJ1dHRvbiB9O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCb3gsIHsgQm94U3RhdGljUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL0JveC9Cb3gnO1xuaW1wb3J0IHsgRm9ybWF0VGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0VGV4dC9Gb3JtYXRUZXh0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9Gb3JtYXRUZXh0L3R5cGVzJztcbmltcG9ydCBoZWFkaW5nU3R5bGVzIGZyb20gJ2dsb2JhbC1zdHlsZXMvbWl4aW5zL2hlYWRpbmcnO1xuaW1wb3J0IHBhcmFncmFwaFN0eWxlcyBmcm9tICdnbG9iYWwtc3R5bGVzL21peGlucy9wYXJhZ3JhcGgnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICdnbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMnO1xuaW1wb3J0IHNwYWNpbmcgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZyc7XG5pbXBvcnQgZ2V0QWRhcHRpdmVDb250cm9sbGVyLCB7IEFkYXB0aXZlUHJvcHMgfSBmcm9tICdsaWIvaG9jcy9hZGFwdGl2ZS9hZGFwdGl2ZSc7XG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHQuY3NzJztcblxuZXhwb3J0IHR5cGUgU3RhbmRhcmRTcGFjaW5nVHlwZSA9IGtleW9mIHR5cGVvZiBzcGFjaW5nO1xuZXhwb3J0IHR5cGUgU3BhY2luZ1R5cGUgPSBTdGFuZGFyZFNwYWNpbmdUeXBlIHwgYm9vbGVhbiB8IG51bWJlcjtcbmV4cG9ydCBjb25zdCBzdGFuZGFyZE1hcmdpbnMgPSBPYmplY3Qua2V5cyhzcGFjaW5nKSBhcyBTdGFuZGFyZFNwYWNpbmdUeXBlW107XG5cbmV4cG9ydCB0eXBlIFN0YW5kYXJkQ29sb3JUeXBlID0ga2V5b2YgdHlwZW9mIGNvbG9ycztcbmV4cG9ydCBjb25zdCBzdGFuZGFyZENvbG9ycyA9IE9iamVjdC5rZXlzKGNvbG9ycykgYXMgU3RhbmRhcmRDb2xvclR5cGVbXTtcblxuY29uc3QgeGxTdHlsZU1hcmdpbnMgPSB7IG10OiAnWEwnLCBtcjogJ0xHJywgbWI6ICdMRycsIG1sOiAnTEcnIH0gYXMgY29uc3Q7XG5jb25zdCBsZ1N0eWxlTWFyZ2lucyA9IHsgbXQ6ICdMRycsIG1yOiAnTUQnLCBtYjogJ01EJywgbWw6ICdNRCcgfSBhcyBjb25zdDtcbmNvbnN0IG1kU3R5bGVNYXJnaW5zID0geyBtdDogJ01EJywgbXI6ICdTTScsIG1iOiAnU00nLCBtbDogJ1NNJyB9IGFzIGNvbnN0O1xuY29uc3Qgc21TdHlsZU1hcmdpbnMgPSB7IG10OiAnU00nLCBtcjogJ1hTJywgbWI6ICdYUycsIG1sOiAnWFMnIH0gYXMgY29uc3Q7XG5jb25zdCB4c1N0eWxlTWFyZ2lucyA9IHsgbXQ6ICdYUycsIG1yOiAnWFMnLCBtYjogJ1hTJywgbWw6ICdYUycgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRYbE1hcmdpbnMgPSB7IG10OiAnWEwnLCBtcjogJ1hMJywgbWI6ICdYTCcsIG1sOiAnWEwnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0TGdNYXJnaW5zID0geyBtdDogJ0xHJywgbXI6ICdMRycsIG1iOiAnTEcnLCBtbDogJ0xHJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdE1kcE1hcmdpbnMgPSB7IG10OiAnTURwJywgbXI6ICdNRHAnLCBtYjogJ01EcCcsIG1sOiAnTURwJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdE1kTWFyZ2lucyA9IHsgbXQ6ICdNRCcsIG1yOiAnTUQnLCBtYjogJ01EJywgbWw6ICdNRCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRTbXBNYXJnaW5zID0geyBtdDogJ1NNcCcsIG1yOiAnU01wJywgbWI6ICdTTXAnLCBtbDogJ1NNcCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRTbU1hcmdpbnMgPSB7IG10OiAnU00nLCBtcjogJ1NNJywgbWI6ICdTTScsIG1sOiAnU00nIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0WHNNYXJnaW5zID0geyBtdDogJ1hTJywgbXI6ICdYUycsIG1iOiAnWFMnLCBtbDogJ1hTJyB9IGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5NYXAgPSB7XG4gICAgWEw6IGRlZmF1bHRYbE1hcmdpbnMsXG4gICAgTEc6IGRlZmF1bHRMZ01hcmdpbnMsXG4gICAgTURwOiBkZWZhdWx0TWRwTWFyZ2lucyxcbiAgICBNRDogZGVmYXVsdE1kTWFyZ2lucyxcbiAgICBTTXA6IGRlZmF1bHRTbXBNYXJnaW5zLFxuICAgIFNNOiBkZWZhdWx0U21NYXJnaW5zLFxuICAgIFhTOiBkZWZhdWx0WHNNYXJnaW5zLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdE1hcmdpbk1hcCkgYXMgKGtleW9mIHR5cGVvZiBkZWZhdWx0TWFyZ2luTWFwKVtdO1xuXG5leHBvcnQgY29uc3QgdmFyaWFudE1hcmdpblNpemVNYXA6IHtcbiAgICBba2V5IGluIFZhcmlhbnRUeXBlXTogeyBba2V5IGluICdtdCcgfCAnbXInIHwgJ21iJyB8ICdtbCddOiBTcGFjaW5nVHlwZSB9O1xufSA9IHtcbiAgICAnaGVhZGluZy1IMTQ0JzogeGxTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDczJzogbGdTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDU2JzogbWRTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDM2JzogbWRTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI0Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI0Uic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyMic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyMFInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTgnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTUnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTQnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAyNCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDE4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTYnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxNCc6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDEyJzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTAnOiB4c1N0eWxlTWFyZ2lucyxcbn07XG5cbmV4cG9ydCBjb25zdCB2YXJpYW50cyA9IE9iamVjdC5rZXlzKHZhcmlhbnRNYXJnaW5TaXplTWFwKSBhcyAoa2V5b2YgdHlwZW9mIHZhcmlhbnRNYXJnaW5TaXplTWFwKVtdO1xuXG50eXBlIFZhcmlhbnRUeXBlID0ga2V5b2YgdHlwZW9mIGhlYWRpbmdTdHlsZXMgfCBrZXlvZiB0eXBlb2YgcGFyYWdyYXBoU3R5bGVzO1xuXG50eXBlIEJhc2VUZXh0UHJvcHMgPSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHZhcmlhbnQ/OiBWYXJpYW50VHlwZTtcbiAgICBjb2xvcj86IFN0YW5kYXJkQ29sb3JUeXBlIHwgQ1NTUHJvcGVydGllc1snY29sb3InXTtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgbT86IFNwYWNpbmdUeXBlO1xuICAgIG10PzogU3BhY2luZ1R5cGU7XG4gICAgbXI/OiBTcGFjaW5nVHlwZTtcbiAgICBtYj86IFNwYWNpbmdUeXBlO1xuICAgIG1sPzogU3BhY2luZ1R5cGU7XG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICAgIGZvcm1hdD86IE9taXQ8UHJvcHMsICd0ZXh0Jz47XG59O1xuXG5jb25zdCBpc0RlZmF1bHRDb2xvciA9IChjb2xvcjogc3RyaW5nKTogY29sb3IgaXMgU3RhbmRhcmRDb2xvclR5cGUgPT4gKHN0YW5kYXJkQ29sb3JzIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyhjb2xvcik7XG5cbmNvbnN0IGdldENvbG9yU3R5bGVPckNsYXNzTmFtZSA9IChjb2xvcj86IFN0YW5kYXJkQ29sb3JUeXBlIHwgQ1NTUHJvcGVydGllc1snY29sb3InXSkgPT4ge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAoaXNEZWZhdWx0Q29sb3IoY29sb3IpKSB7XG4gICAgICAgIHJldHVybiB7IGNvbG9yQ2xhc3NOYW1lOiBzdHlsZXNbY29sb3JdIH07XG4gICAgfVxuICAgIHJldHVybiB7IGNvbG9yU3R5bGU6IHsgY29sb3IgfSB9O1xufTtcblxuZXhwb3J0IHR5cGUgVGV4dFN0YXRpY1Byb3BzID0gUmVhZG9ubHk8QmFzZVRleHRQcm9wcyAmIE9taXQ8Qm94U3RhdGljUHJvcHMsICdjaGlsZHJlbic+PjtcbmV4cG9ydCB0eXBlIFRleHRQcm9wcyA9IFRleHRTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8VGV4dFN0YXRpY1Byb3BzLCBUZXh0QWRhcHRpdmVQcm9wTmFtZXNUeXBlPjtcbmV4cG9ydCB0eXBlIFRleHRBZGFwdGl2ZVByb3BOYW1lc1R5cGUgPSAndmFyaWFudCcgfCAnY29sb3InIHwgJ20nIHwgJ210JyB8ICdtcicgfCAnbWInIHwgJ21sJztcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSB0ZXh0IHBhc3NlZCBpbiBhcyBhIHByb3Agd2l0aCBzdHlsaW5nIGFuZCBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gVGhlIHByb3BzIG9iamVjdCBjb250YWluaW5nOlxuICogICBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IHRvIGJlIHJlbmRlcmVkLlxuICogICBAcGFyYW0ge1ZhcmlhbnRUeXBlIHwgc3RyaW5nfSB2YXJpYW50IC0gVGhlIHZhcmlhbnQgb2YgdGhlIHRleHQgc3R5bGluZy5cbiAqICAgQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRleHQgY29tcG9uZW50LlxuICogICBAcGFyYW0ge0NvbG9yVHlwZX0gY29sb3IgLSBUaGUgY29sb3Igb2YgdGhlIHRleHQsIGUuZy4gXCJXSElURV9TUEFOSVNIXCIgb3IgXCIjZjAwXCIuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG0gLSBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gYWxsIHNpZGVzLCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG10IC0gVGhlIGFwcGxpZWQgbWFyZ2luLXRvcCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtciAtIFRoZSBhcHBsaWVkIG1hcmdpbi1yaWdodCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtYiAtIFRoZSBhcHBsaWVkIG1hcmdpbi1ib3R0b20sIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbWwgLSBUaGUgYXBwbGllZCBtYXJnaW4tbGVmdCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXN9IHN0eWxlIC0gVGhlIHN0eWxlIG9iamVjdCB0byBiZSBhcHBsaWVkIHRvIHRoZSB0ZXh0IGNvbXBvbmVudC5cbiAqICAgQHBhcmFtIHtGb3JtYXRUZXh0UHJvcHN9IGZvcm1hdCAtIFRoZSBmb3JtYXR0aW5nIHByb3BzIG9mIEZvcm1hdFRleHQuXG4gKiAgIEBwYXJhbSB7Qm94UHJvcHN9IHJlc3RQcm9wcyAtIG90aGVyIHByb3BzIG9mIGludGVybmFsIEJveCBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gVGhlIFRleHQgZWxlbWVudC5cbiAqL1xuY29uc3QgVGV4dCA9ICh7XG4gICAgdGV4dCxcbiAgICB2YXJpYW50LFxuICAgIGNsYXNzTmFtZSxcbiAgICBjb2xvcixcbiAgICBtLFxuICAgIG10ID0gbSxcbiAgICBtciA9IG0sXG4gICAgbWIgPSBtLFxuICAgIG1sID0gbSxcbiAgICBzdHlsZSxcbiAgICBmb3JtYXQsXG4gICAgLi4ucmVzdFByb3BzXG59OiBUZXh0U3RhdGljUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVkU3R5bGUsIGNvbG9yQ2xhc3NOYW1lIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2xvckNsYXNzTmFtZSwgY29sb3JTdHlsZSA9IHt9IH0gPSBnZXRDb2xvclN0eWxlT3JDbGFzc05hbWUoY29sb3IpO1xuICAgICAgICByZXR1cm4geyBjb21wdXRlZFN0eWxlOiB7IC4uLnN0eWxlLCAuLi5jb2xvclN0eWxlIH0sIGNvbG9yQ2xhc3NOYW1lIH07XG4gICAgfSwgW3N0eWxlLCBjb2xvcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5iYXNlLCB2YXJpYW50ICYmIHN0eWxlc1t2YXJpYW50XSwgY29sb3JDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17Y29tcHV0ZWRTdHlsZX1cbiAgICAgICAgICAgIG10PXttdCA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tdCA6IG10fVxuICAgICAgICAgICAgbXI9e21yID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm1yIDogbXJ9XG4gICAgICAgICAgICBtYj17bWIgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubWIgOiBtYn1cbiAgICAgICAgICAgIG1sPXttbCA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tbCA6IG1sfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2Zvcm1hdCAhPT0gdW5kZWZpbmVkID8gPEZvcm1hdFRleHQgey4uLmZvcm1hdH0gdGV4dD17dGV4dH0gLz4gOiB0ZXh0fVxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWRhcHRpdmVDb250cm9sbGVyPFRleHRTdGF0aWNQcm9wcywgVGV4dEFkYXB0aXZlUHJvcE5hbWVzVHlwZT4oVGV4dCk7XG4iLCJpbXBvcnQgeyBnZXRGcm9tQ2FsbFN0YWNrIH0gZnJvbSAnbGliL2dldC1mcm9tLWNhbGxzdGFjayc7XHJcbmltcG9ydCB7IFZpZXdFdmVudFR5cGUgfSBmcm9tICdsaWIvdmlldy1lbnYtaGVscGVyJztcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBNb3VzZUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25Ub29sdGlwUHJvcHMsIFRvb2x0aXBSZWYgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFByb3BzID0gQ29tbW9uVG9vbHRpcFByb3BzICZcclxuICAgIFJlYWRvbmx5PHtcclxuICAgICAgICBjb250ZW50SWQ6IG51bWJlcjtcclxuICAgICAgICBkZWNvcmF0b3JJZD86IG51bWJlcjtcclxuICAgIH0+O1xyXG5cclxuY29uc3QgU0hPV19ERUxBWV9NSU4gPSAxMDA7XHJcbmNvbnN0IFNIT1dfREVMQVlfREVGQVVMVCA9IDQwMDtcclxuXHJcbmZ1bmN0aW9uIGdldFZpZXdFdmVudEFyZ3VtZW50cyhhcmdzOiBDb21tb25Ub29sdGlwUHJvcHNbJ2FyZ3MnXSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGFyZ3MgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0OiBHRlZhbHVlUHJveHkgPSB7XHJcbiAgICAgICAgICAgIF9fVHlwZTogJ0dGVmFsdWVQcm94eScsXHJcbiAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICBvdXQubnVtYmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgICAgICBvdXQuYm9vbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG91dC5zdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVZpZXdFdmVudCA9IChjb250ZW50SWQ6IG51bWJlciwgZGVjb3JhdG9ySWQ/OiBudW1iZXIsIG9wdGlvbnMgPSB7fSwgdGFyZ2V0SUQgPSAwKSA9PiB7XHJcbiAgICB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XHJcbiAgICAgICAgX19UeXBlOiAnR0ZWaWV3RXZlbnRQcm94eScsXHJcbiAgICAgICAgdHlwZTogVmlld0V2ZW50VHlwZS5UT09MVElQLFxyXG4gICAgICAgIGNvbnRlbnRJRDogY29udGVudElkLFxyXG4gICAgICAgIGRlY29yYXRvcklEOiBkZWNvcmF0b3JJZCxcclxuICAgICAgICB0YXJnZXRJRDogdGFyZ2V0SUQsXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgVG9vbHRpcCA9ICh7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNvbnRlbnRJZCxcclxuICAgIGFyZ3MsXHJcbiAgICBvbk1vdXNlRW50ZXIsXHJcbiAgICBvbk1vdXNlTGVhdmUsXHJcbiAgICBvbk1vdXNlRG93bixcclxuICAgIG9uQ2xpY2ssXHJcbiAgICBpZ25vcmVTaG93RGVsYXkgPSBmYWxzZSxcclxuICAgIGlnbm9yZU1vdXNlQ2xpY2sgPSBmYWxzZSxcclxuICAgIGRlY29yYXRvcklkID0gMCxcclxuICAgIGlzRW5hYmxlZCA9IHRydWUsXHJcbiAgICB0YXJnZXRJZCA9IDAsXHJcbiAgICBvblNob3csXHJcbiAgICBvbkhpZGUsXHJcbiAgICAuLi5yZXN0XHJcbn06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8VG9vbHRpcFJlZj4oe1xyXG4gICAgICAgIHRpbWVvdXRJZDogMCxcclxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHByZXZUYXJnZXQ6IG51bGwsXHJcbiAgICAgICAgaGlkZVRpbWVySWQ6IG51bGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNJZCA9IHVzZU1lbW8oKCkgPT4gdGFyZ2V0SWQgfHwgZ2V0RnJvbUNhbGxTdGFjaygpLnJlc0lkLCBbdGFyZ2V0SWRdKTtcclxuXHJcbiAgICBjb25zdCBzaG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIC8vIHdlIGhhbmRsZSBzaG93KCkgb25seSBpZiB0b29sdGlwIGlzIEhJRERFTiBub3cgT1IgdGltZW91dCBmb3Igc2hvdyBoYXMgYWxyZWFkeSBSRVNFVFxyXG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQuaXNWaXNpYmxlIHx8ICFyZWYuY3VycmVudC50aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgaGFuZGxlVmlld0V2ZW50KFxyXG4gICAgICAgICAgICAgICAgY29udGVudElkLFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdG9ySWQsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb3VzZUV2ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogZ2V0Vmlld0V2ZW50QXJndW1lbnRzKGFyZ3MpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc0lkLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBvblNob3cgJiYgb25TaG93KCk7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRlbnRJZCwgZGVjb3JhdG9ySWQsIGFyZ3MsIHJlc0lkLCBvblNob3ddKTtcclxuXHJcbiAgICBjb25zdCBoaWRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIC8vIHdlIGhhbmRsZSBoaWRlKCkgb25seSBpZiB0b29sdGlwIGlzIFZJU0lCTEUgbm93IE9SIHRpbWVvdXQgZm9yIHNob3cgaGFzIGFscmVhZHkgU0VUXHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50LmlzVmlzaWJsZSB8fCByZWYuY3VycmVudC50aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSByZWYuY3VycmVudC50aW1lb3V0SWQ7XHJcbiAgICAgICAgICAgIGlmICh0aW1lciA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC50aW1lb3V0SWQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVWaWV3RXZlbnQoY29udGVudElkLCBkZWNvcmF0b3JJZCwgeyBvbjogZmFsc2UgfSwgcmVzSWQpO1xyXG4gICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQuaXNWaXNpYmxlICYmIG9uSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgb25IaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRlbnRJZCwgZGVjb3JhdG9ySWQsIHJlc0lkLCBvbkhpZGVdKTtcclxuXHJcbiAgICBjb25zdCBvblNjcm9sbCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgLy8gd2UgaGFuZGxlIHNjcm9sbCBvbmx5IGlmIHRvb2x0aXAgaXMgVklTSUJMRVxyXG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmLmN1cnJlbnQucHJldlRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgICAgIHJlZi5jdXJyZW50LmhpZGVUaW1lcklkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiAhdGFyZ2V0LmlzU2FtZU5vZGUocmVmLmN1cnJlbnQucHJldlRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoaWRlVGltZXIgPSByZWYuY3VycmVudC5oaWRlVGltZXJJZDtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uU2Nyb2xsLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvblNjcm9sbCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBoaWRlVGltZXIgJiYgd2luZG93LmNsZWFyVGltZW91dChoaWRlVGltZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRW5hYmxlZCwgaGlkZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGUpO1xyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoaWRlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChjaGlsZEV2ZW50OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIC8vIHdpbmRvdyB1c2VkIGhlcmUgZm9yIGNvcnJlY3QgUmV0dXJuVHlwZTogbnVtYmVyXHJcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPT09IHdpbmRvdy5pbm5lcldpZHRoICYmIGV2ZW50LmNsaWVudFkgPT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRoaXMgaGFjayB0byBmaXggaHR0cHM6Ly9qaXJhLndhcmdhbWluZy5uZXQvYnJvd3NlL1dPVEQtMTU4NDI3IGlzc3VlLlxyXG4gICAgICAgICAgICAvLyAgVGhpcyBjaGVjayBjYW4gYmUgcmVtb3ZlZCB3aGVuIG1vdXNlRW50ZXIgZXZlbnQgdGhhdCBmaXJlZCBvbiByZXNpemUgd2lsbCBiZSBmaXhlZCBhdCBHRiBpbnRlZ3JhdGlvbiBzaWRlLlxyXG4gICAgICAgICAgICAvLyAgUHJvYmFibHkgd2UgY2FuIGNoZWNrIGl0IGFmdGVyIGh0dHBzOi8vamlyYS53YXJnYW1pbmcubmV0L2Jyb3dzZS9XT1RELTE1NDU2NCBidWcgZml4LFxyXG4gICAgICAgICAgICAvLyAgd2hlbiB2aWV3IGJvcmRlciBldmVudHMgcmVzb2x2aW5nIHdpbGwgd29yayBwcm9wZXJseS5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWYuY3VycmVudC50aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dChzaG93LCBpZ25vcmVTaG93RGVsYXkgPyBTSE9XX0RFTEFZX01JTiA6IFNIT1dfREVMQVlfREVGQVVMVCk7XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlciAmJiBvbk1vdXNlRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgIGNoaWxkRXZlbnQgJiYgY2hpbGRFdmVudChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoY2hpbGRFdmVudDogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBoaWRlKCk7XHJcblxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT8uKGV2ZW50KTtcclxuICAgICAgICBjaGlsZEV2ZW50Py4oZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChjaGlsZEV2ZW50OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpZ25vcmVNb3VzZUNsaWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkNsaWNrPy4oZXZlbnQpO1xyXG4gICAgICAgIGNoaWxkRXZlbnQ/LihldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChjaGlsZEV2ZW50OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpZ25vcmVNb3VzZUNsaWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbk1vdXNlRG93bj8uKGV2ZW50KTtcclxuICAgICAgICBjaGlsZEV2ZW50Py4oZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gIWlzRW5hYmxlZFxyXG4gICAgICAgID8gY2hpbGRyZW5cclxuICAgICAgICA6IGNsb25lRWxlbWVudChjaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcjogaGFuZGxlTW91c2VFbnRlcihjaGlsZHJlbi5wcm9wcy5vbk1vdXNlRW50ZXIpLFxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZShjaGlsZHJlbi5wcm9wcy5vbk1vdXNlTGVhdmUpLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrKGNoaWxkcmVuLnByb3BzLm9uQ2xpY2spLFxyXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd24oY2hpbGRyZW4ucHJvcHMub25Nb3VzZURvd24pLFxyXG4gICAgICAgICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFRvb2x0aXAgfTtcclxuIiwiY29uc3QgTUVESUFfQ1NTID0ge1xyXG4gICAgU01BTExfV0lEVEg6ICdtZWRpYVNtYWxsV2lkdGgnLFxyXG4gICAgTUVESVVNX1dJRFRIOiAnbWVkaWFNZWRpdW1XaWR0aCcsXHJcbiAgICBMQVJHRV9XSURUSDogJ21lZGlhTGFyZ2VXaWR0aCcsXHJcbiAgICBFWFRSQV9MQVJHRV9XSURUSDogJ21lZGlhRXh0cmFMYXJnZVdpZHRoJyxcclxuICAgIFNNQUxMX0hFSUdIVDogJ21lZGlhU21hbGxIZWlnaHQnLFxyXG4gICAgTUVESVVNX0hFSUdIVDogJ21lZGlhTWVkaXVtSGVpZ2h0JyxcclxuICAgIExBUkdFX0hFSUdIVDogJ21lZGlhTGFyZ2VIZWlnaHQnLFxyXG4gICAgRVhUUkFfTEFSR0VfSEVJR0hUOiAnbWVkaWFFeHRyYUxhcmdlSGVpZ2h0JyxcclxuICAgIFNNQUxMOiAnbWVkaWFTbWFsbCcsXHJcbiAgICBNRURJVU06ICdtZWRpYU1lZGl1bScsXHJcbiAgICBMQVJHRTogJ21lZGlhTGFyZ2UnLFxyXG4gICAgRVhUUkFfTEFSR0U6ICdtZWRpYUV4dHJhTGFyZ2UnLFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNRURJQV9DU1M7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgJ0JMQUNLX1JFQUwnOiAnIzAwMDAwMCcsXHJcbiAgICAnV0hJVEVfUkVBTCc6ICcjRkZGRkZGJyxcclxuICAgICdXSElURSc6ICcjRjJGMkY3JyxcclxuICAgICdXSElURV9PUkFOR0UnOiAnI0ZFRkVFQycsXHJcbiAgICAnV0hJVEVfU1BBTklTSCc6ICcjRTlFMkJGJyxcclxuICAgICdQQVInOiAnIzhDOEM3RScsXHJcbiAgICAnUEFSX1NFQ09OREFSWSc6ICcjNTk1OTUwJyxcclxuICAgICdQQVJfVEVSVElBUlknOiAnIzM3MzYyRScsXHJcbiAgICAnSU5GT19SRUQnOiAnI0ZGMDAwMCcsXHJcbiAgICAnUkVEJzogJyNGRjI3MTcnLFxyXG4gICAgJ1JFRF9EQVJLJzogJyNCNzAwMDAnLFxyXG4gICAgJ1lFTExPVyc6ICcjRkVBQjM0JyxcclxuICAgICdPUkFOR0UnOiAnI0VFNzAwMCcsXHJcbiAgICAnQ1JFQU0nOiAnI0ZGREQ5OScsXHJcbiAgICAnQlJPV04nOiAnI0NCQUM3NycsXHJcbiAgICAnR1JFRU5fQlJJR0hUJzogJyM4MEQ0M0EnLFxyXG4gICAgJ0dSRUVOJzogJyM3QUIzMDAnLFxyXG4gICAgJ0dSRUVOX0RBUksnOiAnIzQ5NzIxMicsXHJcbiAgICAnQkxVRV9CT09TVEVSJzogJyNDQ0ZGRkYnLFxyXG4gICAgJ0JMVUVfVEVBTUtJTExFUic6ICcjMDlFMkZGJyxcclxuICAgICdDUkVEJzogJyNDRUQ5RDknLFxyXG4gICAgJ0dPTEQnOiAnI0ZGQzM2MycsXHJcbiAgICAnQk9ORCc6ICcjQzlDOUI2JyxcclxuICAgICdQUk9NJzogJyNBMjlCNzAnLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICdYUyc6ICc0cmVtJyxcclxuICAgICdTTSc6ICc4cmVtJyxcclxuICAgICdTTXAnOiAnMTByZW0nLFxyXG4gICAgJ01EJzogJzE2cmVtJyxcclxuICAgICdNRHAnOiAnMjByZW0nLFxyXG4gICAgJ0xHJzogJzMycmVtJyxcclxuICAgICdYTCc6ICc2NHJlbScsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBNb2RlbFN1YnNjcmliZXI8VD4gPSAobW9kZWw6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7XG4gICAgaW5pdGlhbGl6ZXI/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIGNvbnRleHQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcm9vdElkPzogbnVtYmVyO1xuICAgIGdldFJvb3Q/OiAocm9vdElkOiBudW1iZXIpID0+IHVua25vd247XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFMYXllcjxUIGV4dGVuZHMge30+IHtcbiAgICBzdWJzY3JpYmU8UCBleHRlbmRzIHN0cmluZz4oc3Vic2NyaWJlcjogTW9kZWxTdWJzY3JpYmVyPFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4+LCBwYXRoPzogUCk6IG51bWJlcjtcbiAgICByZWFkQnlQYXRoPFAgZXh0ZW5kcyBzdHJpbmc+KHBhdGg/OiBQKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICBjcmVhdGVDYWxsYmFjazxBcmdzTWFwIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBFeHRlcm5BcmdzLCBFeHRlcm5BcmdzIGV4dGVuZHMge30sIFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBhcmdzTWFwOiBBcmdzTWFwLFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoLi4uYXJnczogUGFyYW1ldGVyczxBcmdzTWFwPikgPT4gdm9pZCA6IHVua25vd247XG4gICAgY3JlYXRlQ2FsbGJhY2tOb0FyZ3M8UCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICgpID0+IHZvaWQgOiB1bmtub3duO1xuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XG4gICAgdW5zdWJzY3JpYmU6IChpZDogbnVtYmVyLCByZXNJZD86IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgZ2V0Um9vdERlZmF1bHQgPSAocm9vdElkOiBudW1iZXIpID0+IHtcbiAgICBpZiAocm9vdElkID09PSAwKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cuc3ViVmlld3MuZ2V0KHJvb3RJZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlPFQgZXh0ZW5kcyB7fT4oe1xuICAgIGluaXRpYWxpemVyID0gdHJ1ZSxcbiAgICByb290SWQgPSAwLFxuICAgIGdldFJvb3QgPSBnZXRSb290RGVmYXVsdCxcbiAgICBjb250ZXh0ID0gJ21vZGVsJyxcbn06IERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7fSk6IERhdGFMYXllcjxUPiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgTWFwPG51bWJlciwgTW9kZWxTdWJzY3JpYmVyPGFueT4+KCk7XG5cbiAgICBlbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ3ZpZXdFbnYub25EYXRhQ2hhbmdlZCcsIChkYXRhOiBhbnksIF86IHVua25vd24sIGNhbGxiYWNrSURzOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tJRHMuZm9yRWFjaCgoY2FsbGJhY2tJRCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc3Vic2NyaWJlcnMuZ2V0KGNhbGxiYWNrSUQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoaWQ6IG51bWJlciwgcmVzSWQgPSAwKSB7XG4gICAgICAgIGlmICh2aWV3RW52LnJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2soaWQsIHJlc0lkKSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCByZW1vdmUgY2FsbGJhY2sgYnkgaWQ6XCIsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlYWRCeVBhdGggPSA8UCBleHRlbmRzIHN0cmluZz4ocGF0aD86IFApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+ID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGdldFJvb3Qocm9vdElkKTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBjb250ZXh0LnNwbGl0KCcuJykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQgYXMgYW55KVtrZXldO1xuICAgICAgICB9LCByb290IGFzIFQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyB1bmtub3duIGFzIFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAocmVzdWx0IGFzIGFueSlba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmJpbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9LCBtb2RlbCkgYXMgVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gPFAgZXh0ZW5kcyBzdHJpbmc+KHN1YnNjcmliZXI6IE1vZGVsU3Vic2NyaWJlcjxUeXBlQnlTdHJpbmdQYXRoPFQsIFA+PiwgcGF0aD86IFApID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlUGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IGAke2NvbnRleHR9LiR7cGF0aH1gIDogY29udGV4dDtcbiAgICAgICAgY29uc3QgdHJhY2tJbkRlcHRoID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaWQgPSBlbnYudmlldy5hZGRNb2RlbE9ic2VydmVyKHN1YnNjcmliZVBhdGgsIHJvb3RJZCwgdHJhY2tJbkRlcHRoKTtcbiAgICAgICAgc3Vic2NyaWJlcnMuc2V0KGlkLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKHJlYWRCeVBhdGgocGF0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FsbGJhY2sgPSA8QXJnc01hcCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gRXh0ZXJuQXJncywgRXh0ZXJuQXJncyBleHRlbmRzIHt9LCBQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgYXJnc01hcDogQXJnc01hcCxcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJnc01hcD4pID0+IHZvaWQgOiB1bmtub3duID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSByZWFkQnlQYXRoKHBhdGgpIGFzIChhcmdzPzogRXh0ZXJuQXJncykgPT4gdm9pZDtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgZm4oYXJnc01hcCguLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbGxiYWNrTm9BcmdzID0gPFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoKSA9PiB2b2lkIDogdW5rbm93biA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVhZEJ5UGF0aChwYXRoKSBhcyAoYXJncz86IHsgYXJnczogYW55IH0pID0+IHZvaWQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXJJZCBvZiBzdWJzY3JpYmVycy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKHN1YnNjcmliZXJJZCwgcm9vdElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcmVhZEJ5UGF0aCwgY3JlYXRlQ2FsbGJhY2ssIGNyZWF0ZUNhbGxiYWNrTm9BcmdzLCBkaXNwb3NlLCB1bnN1YnNjcmliZSB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG5pbXBvcnQgeyBjb25zdEZhbHNlIH0gZnJvbSAnbGliL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IERhdGFMYXllciwgRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyB9IGZyb20gJy4vZGF0YS1sYXllcic7XHJcbmltcG9ydCAqIGFzIGRhdGFMYXllciBmcm9tICcuL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kZWwgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCB7IGRhdGFMYXllciB9O1xyXG5leHBvcnQgdHlwZSB7IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsIERhdGFMYXllciB9O1xyXG4vKiogQ3VycmVudCBkYXRhIG1vZGUgKG1vY2tzIG9yIHJlYWwpICovXHJcbmV4cG9ydCB0eXBlIE1vZGUgPSAnbW9ja3MnIHwgJ3JlYWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dDxNb2RlbCwgQ29udHJvbHM+ID0ge1xyXG4gICAgbW9kZWw6IE1vZGVsO1xyXG4gICAgY29udHJvbHM6IENvbnRyb2xzO1xyXG4gICAgbW9kZTogTW9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXaWxsIGJlIGNhbGwgYmVmb3JlIE1vZGVsUHJvdmlkZXIgd2lsbCB1bm1vdW50XHJcbiAqIGBgYHRzeFxyXG4gKiBsZXQgdGltZW91dElkID0gMFxyXG4gKiBjbGVhbnVwKCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpKVxyXG4gKlxyXG4gKiAvLyAuLi5cclxuICpcclxuICogKCkgPT4gdGltZW91dElkID0gc2V0VGltZW91dChkb1NvbWV0aGluZywgNTAwKVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIENsZWFudXAgPSAoY2xlYW51cEZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBDb250ZXh0UHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XHJcbiAgICBtb2RlPzogTW9kZTtcclxuICAgIG9wdGlvbnM/OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zO1xyXG59PjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlYWRCeVBhdGg8VCBleHRlbmRzIHt9PiA9IDxQIGV4dGVuZHMgc3RyaW5nIHwgdW5kZWZpbmVkPihcclxuICAgIHBhdGg6IFAsXHJcbikgPT4gUCBleHRlbmRzIHN0cmluZyA/IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gOiBUO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZWxDcmVhdG9yQXJnczxUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBUaGlzIGlzIEFQSSBmb3IgSlMgPC0+IEMrKywgcmVhZCBvZiBjcmVhdGUgZG9jIGluIHtAbGluayBkYXRhTGF5ZXIuY3JlYXRlfSAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2YWJsZU1vZGVsOiBPYnNlcnZhYmxlTW9kZWw8VD47XHJcbiAgICByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+O1xyXG59O1xyXG5leHBvcnQgdHlwZSBDb250cm9sc0NyZWF0b3JBcmdzPE1vZGVsLCBUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBNb2RlbCB3aGF0IHJldHVybmVkIGZyb20gZmlyc3QgZnVuY3Rpb24gLSB7QGxpbmsgTW9kZWxDcmVhdG9yQXJnczxUPn0gKi9cclxuICAgIG1vZGVsOiBNb2RlbDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vY2tzPE1vZGVsLCBDb250cm9scz4gPSB7XHJcbiAgICBnZXR0ZXI6IChwYXRoPzogc3RyaW5nKSA9PiBhbnk7XHJcbiAgICBjb250cm9sczogKGFyZ3M6IHsgbW9kZTogTW9kZTsgbW9kZWw6IE1vZGVsOyBjbGVhbnVwOiBDbGVhbnVwIH0pID0+IENvbnRyb2xzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICMjIyMgTWFrZXMgdHlwZSBmb3IgbWFrZSBtb2NrcyBlYXNpZXJcclxuICogYGBgdHNcclxuICogIGNvbnN0IG1vY2tzOiBNb2Nrc09mPHR5cGVvZiB1c2VNb2RlbD4gPSB7XHJcbiAqICAgICAgLy8gLi4uXHJcbiAqICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTW9ja3NPZjxVc2VNb2RlbCBleHRlbmRzICgpID0+IGFueT4gPSBSZXR1cm5UeXBlPFVzZU1vZGVsPiBleHRlbmRzIENvbnRleHQ8aW5mZXIgTW9kZWwsIGluZmVyIENvbnRyb2xzPlxyXG4gICAgPyBNb2NrczxNb2RlbCwgQ29udHJvbHM+XHJcbiAgICA6IG5ldmVyO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBNb2RlbFByb3ZpZGVyIGFuZCB1c2VNb2RlbCBmb3IgeW91ciBkYXRhLWxheWVyOlxyXG4gKiBgYGB0c1xyXG4gKiBleHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PDxNT0RFTF9UWVBFPj4oKShcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgbW9kZWxcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgY29udHJvbHMgKGZ1bmN0aW9ucylcclxuICogKTtcclxuICogYGBgXHJcbiAqIFdoZXJlIGA8TU9ERUxfVFlQRT5gIGlzIHlvdXIgbW9kZWwgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dCA9IDxUIGV4dGVuZHMge30+KCkgPT4ge1xyXG4gICAgcmV0dXJuIDxNb2RlbCwgQ29udHJvbHM+KFxyXG4gICAgICAgIG1vZGVsQ3JlYXRvcjogKGFyZ3M6IE1vZGVsQ3JlYXRvckFyZ3M8VD4pID0+IE1vZGVsLFxyXG4gICAgICAgIGNvbnRyb2xzQ3JlYXRvcjogKGFyZ3M6IENvbnRyb2xzQ3JlYXRvckFyZ3M8TW9kZWwsIFQ+KSA9PiBDb250cm9scyxcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPj4oe30gYXMgdW5rbm93biBhcyBDb250ZXh0PE1vZGVsLCBDb250cm9scz4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEYXRhTGF5ZXJQcm92aWRlcih7XHJcbiAgICAgICAgICAgICAgICBtb2RlOiBkYXRhTW9kZSA9ICdyZWFsJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIG1vY2tzLFxyXG4gICAgICAgICAgICB9OiBDb250ZXh0UHJvcHMgJiB7IG1vY2tzPzogTW9ja3M8TW9kZWwsIENvbnRyb2xzPiB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwc1JlZiA9IHVzZVJlZjwoKCkgPT4gdm9pZClbXT4oW10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dFZhbHVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ja3M/OiBNb2NrczxNb2RlbCwgQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUxheWVySW5zdGFuY2UgPSBkYXRhTGF5ZXIuY3JlYXRlPFQ+KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsTW9kZWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAncmVhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YUxheWVySW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YUxheWVySW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoOiBtb2Nrcz8uZ2V0dGVyID8/ICgoKSA9PiB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlIE9ic2VydmFibGVNb2RlbExvY2FsID0gT2JzZXJ2YWJsZU1vZGVsPFQ+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+ID0gKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdtb2NrcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2Nrcz8uZ2V0dGVyKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVybmFsTW9kZWwucmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVBcnJheTogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ2FycmF5J10gPSAocGF0aCwgaW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCA/PyByZWFkQnlQYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBvYnNlcnZhYmxlLmJveDxhbnk+KGluaXRPYnNlcnZhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4gbW9kZWwuc2V0KGRhdGEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZU9iamVjdDogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ29iamVjdCddID0gKHBhdGgsIGluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQgPz8gcmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gb2JzZXJ2YWJsZS5ib3goaW5pdE9ic2VydmFibGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiBtb2RlbC5zZXQoZGF0YSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVByaW1pdGl2ZXM6IE9ic2VydmFibGVNb2RlbExvY2FsWydwcmltaXRpdmVzJ10gPSAoa2V5czogdW5rbm93biwgcGF0aD86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9IHJlYWRCeVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5XSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5XS5zZXQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5c1JlY29yZCA9IGtleXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoa2V5c1JlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IGtleXNFbnRyaWVzLnJlZHVjZSgoYWNjLCBba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2tleVRvXSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5RnJvbV0sIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzRW50cmllcy5mb3JFYWNoKChba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5VG9dLnNldChkYXRhW2tleUZyb21dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cDogQ2xlYW51cCA9IChmbikgPT4gY2xlYW51cHNSZWYuY3VycmVudC5wdXNoKGZuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBtb2RlbENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlTW9kZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBvYnNlcnZhYmxlQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9ic2VydmFibGVPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzOiBvYnNlcnZhYmxlUHJpbWl0aXZlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHNBcmdzID0geyBtb2RlLCBtb2RlbCwgZXh0ZXJuYWxNb2RlbCwgY2xlYW51cCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ21vY2tzJyAmJiBtb2NrcyA/IG1vY2tzLmNvbnRyb2xzKGNvbnRyb2xzQXJncykgOiBjb250cm9sc0NyZWF0b3IoY29udHJvbHNBcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbW9kZWwsIGNvbnRyb2xzLCBleHRlcm5hbE1vZGVsLCBtb2RlIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW21vZGUsIGNoYW5nZU1vZGVdID0gdXNlU3RhdGU8TW9kZT4oZGF0YU1vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVDb250ZXh0VmFsdWUoZGF0YU1vZGUsIG9wdGlvbnMsIG1vY2tzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGNyZWF0ZUNvbnRleHRWYWx1ZShtb2RlLCBvcHRpb25zLCBtb2NrcykpO1xyXG4gICAgICAgICAgICAgICAgfSwgW21vY2tzLCBtb2RlLCBvcHRpb25zXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2RlKGRhdGFNb2RlKTtcclxuICAgICAgICAgICAgICAgIH0sIFtkYXRhTW9kZV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmV4dGVybmFsTW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwc1JlZi5jdXJyZW50LmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV0sXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpLFxyXG4gICAgICAgIF0gYXMgY29uc3Q7XHJcbiAgICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgc2V0VHJhY2tNb3VzZU91dHNpZGUgfSBmcm9tICcuL2ludGVybmFsJztcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudCA9IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGJ1dHRvbjogbnVtYmVyO1xyXG4gICAgYnV0dG9uczogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY2xpZW50WDogbnVtYmVyO1xyXG4gICAgY2xpZW50WTogbnVtYmVyO1xyXG4gICAgc2NyZWVuWDogbnVtYmVyO1xyXG4gICAgc2NyZWVuWTogbnVtYmVyO1xyXG4gICAgYWx0S2V5OiBib29sZWFuO1xyXG4gICAgY3RybEtleTogYm9vbGVhbjtcclxuICAgIHNoaWZ0S2V5OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uUmVzaXplID0gbWFrZUVuZ2luZUV2ZW50PCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZD4oJ2NsaWVudFJlc2l6ZWQnKTtcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VIYW5kbGVyID0gKGV2ZW50OiBHRk1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudE5hbWUgPSAnZG93bicgfCAndXAnIHwgJ21vdmUnO1xyXG5leHBvcnQgdHlwZSBFeHRNb3VzZUV2ZW50ID0gW2V2ZW50OiBHRk1vdXNlRXZlbnQsIHR5cGU6ICdvdXRzaWRlJ10gfCBbZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6ICdpbnNpZGUnXTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdXNlTGlzdGVuZXIgPSAoZXZlbnQ6IEV4dE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBpbnRlcm5hbE1vdXNlID0ge1xyXG4gICAgZG93bjogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vkb3duJyksXHJcbiAgICB1cDogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2V1cCcpLFxyXG4gICAgbW92ZTogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vtb3ZlJyksXHJcbn07XHJcblxyXG50eXBlIE1vdXNlRXZlbnRzQVBJID0gUmVjb3JkPEdGTW91c2VFdmVudE5hbWUsIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4gKCkgPT4gdm9pZD4gJiB7XHJcbiAgICBkaXNhYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlT3V0c2lkZTogKCkgPT4gdm9pZDtcclxuICAgIGRpc2FibGVPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdmlldyBpcyBleHBlbnNpdmUgb3BlcmF0aW9uLlxyXG4gKiBUaGlzIGRlY29yYXRvciBzZXBhcmF0ZSB0cmFjayBtb3VzZSBldmVudHMgYmV0d2VlbiBpbnNpZGUgYW5kIG91dHNpZGUuXHJcbiAqIFdoZW4gY3Vyc29yIGlzIG91dHNpZGUgb2YgdGhlIHZpZXcuXHJcbiAqIFdoZW4gbW91c2UgY3Vyc29yIGlzIGluc2lkZSBvZiB0aGUgdmlldywgaXQgd2lsbCBiZSB0cmFja2VkIGJ5IGludGVybmFsIGRlZmF1bHQgZXZlbnRzLlxyXG4gKlxyXG4gKiBGdW5jdGlvbiBlbmNhcHN1bGF0ZSBsb2dpYyBhbmQgc3RhdGUgaW5zaWRlLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdE1vdXNlRXZlbnRzKCk6IE1vdXNlRXZlbnRzQVBJIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIGxpc3RlbmVyczogMCxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhenlUcmFjaygpIHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubGlzdGVuZXJzIDwgMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VFdmVudChuYW1lOiBHRk1vdXNlRXZlbnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgKz0gMTtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHRydWU7IC8vIHByZXZlbnQgZG91YmxlIGRpc3Bvc2UodW5zdWJzY3JpYmUpXHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0V2ZW50ID0gYG1vdXNlJHtuYW1lfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3Bvc2UgPSBpbnRlcm5hbE1vdXNlW25hbWVdKChldmVudCkgPT4gbGlzdGVuZXIoW2V2ZW50LCAnb3V0c2lkZSddKSk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVdpbmRvd0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihbZXZlbnQsICdpbnNpZGUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2luZG93RXZlbnQsIGhhbmRsZVdpbmRvd0V2ZW50KTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvd0V2ZW50LCBoYW5kbGVXaW5kb3dFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgLT0gMTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudHM6IFR1cGxpZnk8R0ZNb3VzZUV2ZW50TmFtZT4gPSBbJ2Rvd24nLCAndXAnLCAnbW92ZSddO1xyXG5cclxuICAgIGNvbnN0IHN1YnNjcmliZUFwaSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xyXG4gICAgICAgIGFjY1tuYW1lXSA9IG1ha2VFdmVudChuYW1lKTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgPFBpY2s8TW91c2VFdmVudHNBUEksIEdGTW91c2VFdmVudE5hbWU+Pnt9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN1YnNjcmliZUFwaSxcclxuICAgICAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb3VzZSA9IGluaXRNb3VzZUV2ZW50cygpO1xyXG4iLCJleHBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSh1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRDbGllbnRTaXplUmVtKCkgOiB2aWV3RW52LmdldENsaWVudFNpemVQeCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW91c2VHbG9iYWxQb3NpdGlvbih1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRNb3VzZUdsb2JhbFBvc2l0aW9uUmVtKCkgOiB2aWV3RW52LmdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCgpO1xufVxuXG5leHBvcnQgY29uc3QgZ3JhcGhpY3NRdWFsaXR5ID0ge1xuICAgIGlzTG93OiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpID09PSAxLFxuICAgIGlzSGlnaDogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSA9PT0gMCxcbiAgICBnZXQ6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFRyYWNrTW91c2VPdXRzaWRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB2aWV3RW52LnNldFRyYWNrTW91c2VPblN0YWdlKHZhbHVlKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUVuZ2luZUV2ZW50PFQgZXh0ZW5kcyBGdW5jdGlvbj4oZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoaGFuZGxlcjogVCkgPT4ge1xyXG4gICAgICAgIGVuZ2luZS5vbihldmVudE5hbWUsIGhhbmRsZXIgYXMgbmV2ZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZ2luZS5vZmYoZXZlbnROYW1lLCBoYW5kbGVyIGFzIG5ldmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52ID0ge1xyXG4gICAgdmlldyxcclxuICAgIGNsaWVudCxcclxufTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICh3aW5kb3cgYXMgYW55KS5lbnYgPSBlbnY7XHJcbn1cclxuIiwiaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHR1cmVVcmwoY2hpbGRJZDogbnVtYmVyLCBzaXplOiBTaXplLCBzY2FsZSA9IDEpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRDaGlsZFRleHR1cmVQYXRoKGNoaWxkSWQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZ1VybChjaGlsZElkOiBudW1iZXIsIHNpemU6IFNpemUsIHNjYWxlPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGB1cmwoJHtnZXRUZXh0dXJlVXJsKGNoaWxkSWQsIHNpemUsIHNjYWxlKX0pYDtcbn1cbiIsImV4cG9ydCB0eXBlIFNpemUgPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0ge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1cyA9IHtcbiAgICBzaG93aW5nOiAwLFxuICAgIHNob3duOiAxLFxuICAgIGhpZGluZzogMixcbiAgICBoaWRkZW46IDMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEaXNwbGF5U3RhdHVzID0gVmFsdWVPZjx0eXBlb2YgZGlzcGxheVN0YXR1cz47XG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgRGlzcGxheVN0YXR1cywgUG9pbnQgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5leHBvcnQgdHlwZSBDaGlsZHJlbkV2ZW50SGFuZGxlciA9ICh2aWV3SWQ6IG51bWJlciwgaW5zdGFuY2VJZDogbnVtYmVyLCByZXNJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0UG9zaXRpb25IYW5kbGVyID0gKHZpZXdJZDogbnVtYmVyLCBwb3NpdGlvbjogUG9pbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIENoYW5nZURpc3BsYXlIYW5kbGVyID0gKHByZXZTdGF0dXM6IERpc3BsYXlTdGF0dXMsIGN1cnJlbnRTdGF0dXM6IERpc3BsYXlTdGF0dXMpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvY3VzVXBkYXRlZEhhbmRsZXIgPSAocHJldlN0YXR1czogRGlzcGxheVN0YXR1cywgY3VycmVudFN0YXR1czogRGlzcGxheVN0YXR1cykgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICBvblRleHR1cmVGcm96ZW46IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vblRleHR1cmVGcm96ZW4nKSxcclxuICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25UZXh0dXJlUmVhZHknKSxcclxuICAgIG9uRG9tQnVpbHQ6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vbkRvbUJ1aWx0JyksXHJcbiAgICBvbkxvYWRlZDogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uTG9hZGVkJyksXHJcbiAgICBvbkRpc3BsYXlDaGFuZ2VkOiBtYWtlRW5naW5lRXZlbnQ8Q2hhbmdlRGlzcGxheUhhbmRsZXI+KCdzZWxmLm9uU2hvd2luZ1N0YXR1c0NoYW5nZWQnKSxcclxuICAgIG9uRm9jdXNVcGRhdGVkOiBtYWtlRW5naW5lRXZlbnQ8Rm9jdXNVcGRhdGVkSGFuZGxlcj4oJ3NlbGYub25Gb2N1c0NoYW5nZWQnKSxcclxuICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgb25BZGRlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BZGRlZCcpLFxyXG4gICAgICAgIG9uTG9hZGVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vbkxvYWRlZCcpLFxyXG4gICAgICAgIG9uUmVtb3ZlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25SZW1vdmVkJyksXHJcbiAgICAgICAgb25BdHRhY2hlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BdHRhY2hlZCcpLFxyXG4gICAgICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vblRleHR1cmVSZWFkeScpLFxyXG4gICAgICAgIG9uUmVxdWVzdFBvc2l0aW9uOiBtYWtlRW5naW5lRXZlbnQ8UmVxdWVzdFBvc2l0aW9uSGFuZGxlcj4oJ2NoaWxkcmVuLnJlcXVlc3RQb3NpdGlvbicpLFxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0ICogYXMgY2hpbGRyZW4gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBEaXNwbGF5U3RhdHVzLCBkaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgc2VuZEV2ZW50IH0gZnJvbSAnLi9zZW5kRXZlbnQnO1xuXG5leHBvcnQgdHlwZSB7IFBvaW50LCBTaXplLCBEaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgeyBldmVudHMsIHNlbmRFdmVudCwgY2hpbGRyZW4sIGRpc3BsYXlTdGF0dXMgfTtcblxuZXhwb3J0IHR5cGUgU2lkZXMgPSB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG59O1xuXG5jb25zdCBBTExfU0lERVMgPSAweGY7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcmVsb2FkVGV4dHVyZShwYXRoOiBzdHJpbmcpIHtcbiAgICB2aWV3RW52LmFkZFByZWxvYWRUZXh0dXJlKHBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRQYWRkaW5nc1JlbShwYWRkaW5nczogbnVtYmVyKSB7XG4gICAgdmlld0Vudi5zZXRIaXRBcmVhUGFkZGluZ3NSZW0ocGFkZGluZ3MsIHBhZGRpbmdzLCBwYWRkaW5ncywgcGFkZGluZ3MsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyVGV4dHVyZVBhdGgoaWQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlID0gMSkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFdlYkJyb3dzZXJUZXh0dXJlUGF0aChpZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kZWxPYnNlcnZlcihwYXRoOiBzdHJpbmcsIHJlc0lkOiBudW1iZXIsIHRyYWNrU3ViSXRlbXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdmlld0Vudi5hZGREYXRhQ2hhbmdlZENhbGxiYWNrKHBhdGgsIHJlc0lkLCB0cmFja1N1Ykl0ZW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpZGVQYWRkaW5nc1JlbShwYWRkaW5nczogU2lkZXMpIHtcbiAgICB2aWV3RW52LnNldEhpdEFyZWFQYWRkaW5nc1JlbShwYWRkaW5ncy50b3AsIHBhZGRpbmdzLnJpZ2h0LCBwYWRkaW5ncy5ib3R0b20sIHBhZGRpbmdzLmxlZnQsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LmdldFZpZXdTaXplUmVtKCkgOiB2aWV3RW52LmdldFZpZXdTaXplUHgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYucmVzaXplVmlld1JlbSh3aWR0aCwgaGVpZ2h0KSA6IHZpZXdFbnYucmVzaXplVmlld1B4KHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dsb2JhbFBvc2l0aW9uKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdyZW0nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB2aWV3RW52LmdldFZpZXdHbG9iYWxQb3NpdGlvblJlbSgpO1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZhbHVlIDogeyB4OiByZW1Ub1B4KHZhbHVlLngpLCB5OiByZW1Ub1B4KHZhbHVlLnkpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplKCkge1xuICAgIHZpZXdFbnYuZnJlZXplVGV4dHVyZUJlZm9yZVJlc2l6ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0U2NhbGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9SZW0ocHg6IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnB4VG9SZW0ocHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW06IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnJlbVRvUHgocmVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFuaW1hdGVXaW5kb3coc2hvd2luZzogYm9vbGVhbiwgaGlkaW5nOiBib29sZWFuKSB7XG4gICAgdmlld0Vudi5zZXRBbmltYXRlV2luZG93KHNob3dpbmcsIGhpZGluZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuaXNGb2N1c2VkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudEhhbmRsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuc2V0RXZlbnRIYW5kbGVkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50SGFuZGxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmlld0Vudi5pc0V2ZW50SGFuZGxlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCkge1xuICAgIHZpZXdFbnYuZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5U3RhdHVzKCkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFNob3dpbmdTdGF0dXMoKSBhcyBEaXNwbGF5U3RhdHVzO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1c0lzID0gT2JqZWN0LmtleXMoZGlzcGxheVN0YXR1cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gdmlld0Vudi5nZXRTaG93aW5nU3RhdHVzKCkgPT09IGRpc3BsYXlTdGF0dXNba2V5XTtcbiAgICByZXR1cm4gYWNjO1xufSwge30gYXMgUmVjb3JkPGtleW9mIHR5cGVvZiBkaXNwbGF5U3RhdHVzLCAoKSA9PiBib29sZWFuPik7XG5cbmV4cG9ydCBjb25zdCBleHRyYVNpemUgPSB7XG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIHNldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuc2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIGdldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuZ2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgd2hlblR1dG9yaWFsUmVhZHkgPSBQcm9taXNlLmFsbDx2b2lkPihbXG4gICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pc0RvbUJ1aWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMub25Eb21CdWlsdChyZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIGVuZ2luZS53aGVuUmVhZHksXG5dKTtcbiIsImV4cG9ydCB0eXBlIFZpZXdFdmVudEFyZ3MgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50T3B0aW9ucyA9IFBpY2s8XG4gICAgR0ZWaWV3RXZlbnRQcm94eSxcbiAgICAnY29udGVudElEJyB8ICdkZWNvcmF0b3JJRCcgfCAnaXNNb3VzZUV2ZW50JyB8ICdvbicgfCAnZGlyZWN0aW9uJyB8ICdiYm94J1xuPiAmIHsgYXJncz86IFZpZXdFdmVudEFyZ3MgfTtcblxuZXhwb3J0IGNvbnN0IHZpZXdFdmVudFR5cGVzID0ge1xuICAgIGNsb3NlUG9wb3ZlcjogMixcbiAgICBtb3ZlOiAxNixcbiAgICBjbG9zZTogMzIsXG4gICAgbWluaW1pemU6IDY0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50VHlwZSA9IFZhbHVlT2Y8dHlwZW9mIHZpZXdFdmVudFR5cGVzPjtcblxuY29uc3QgY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzID0gKGRhdGE6IFZpZXdFdmVudEFyZ3MpOiBHRlZhbHVlUHJveHlbXSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBfX1R5cGUgPSAnR0ZWYWx1ZVByb3h5JztcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJvb2w6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFZpZXdFdmVudCA9ICh0eXBlOiBWaWV3RXZlbnRUeXBlLCBvcHRpb25zPzogVmlld0V2ZW50T3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IF9fVHlwZSA9ICdHRlZpZXdFdmVudFByb3h5JztcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgYXJncywgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyhhcmdzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kRXZlbnQgPSB7XG4gICAgY2xvc2UodHlwZT86ICdwb3BvdmVyJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BvcG92ZXInKSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlUG9wb3Zlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1pemUoKSB7XG4gICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMubWluaW1pemUpO1xuICAgIH0sXG4gICAgbW92ZShzdGFydDogYm9vbGVhbikge1xuICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLm1vdmUsIHtcbiAgICAgICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgIG9uOiBzdGFydCxcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG4iLCIvKiogRW1wdHkgZnVuY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cblxuLyoqIEFsaWFzIG9mIG5vb3AgKi9cbmV4cG9ydCBjb25zdCBlbXB0eUZ1bmN0aW9uID0gbm9vcDtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBmb3IgY29ybmVyIGNhc2VcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIE9iamVjdC5rZXlzKG9iaikubWFwKGlkZW50aXR5KSAvLyAtPiBbLi5dXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PEE+KGE6IEEpIHtcbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdEZhbHNlIH0pXG4gKiBgYGBcbiAqIE1lYW5zIHRoYXQgdmFsdWUgd2lsbCB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdEZhbHNlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdFRydWUgfSlcbiAqIGBgYFxuICogTWVhbnMgdGhhdCB2YWx1ZSB3aWxsICoqbmV2ZXIqKiB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdFRydWUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gZm9yIGxvZ2dpbmcgY2FsbGJhY2tzIGluc2lkZSBEYXRhIExheWVyIE1vY2tzIHdpdGhvdXQgbGludGVyIGlzc3Vlc1xuICpcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqICAgICBjb250cm9sczogKCkgPT4ge1xuICogICAgICAgICByZXR1cm4gbWFrZUFjdGlvbnMoe1xuICogICAgICAgICAgICAgZ29Ub0JyYW5jaFJlc2V0OiAoKSA9PiBsb2coJ29uR29Ub0JyYW5jaFJlc2V0JyksXG4gKiAgICAgICAgIH0pO1xuICogICAgIH0sXG4gKiBgYGBcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmV4cG9ydCBjb25zdCBsb2cgPSBjb25zb2xlLmxvZztcbiIsInR5cGUgR2V0RnJvbUNhbGxTdGFjayA9IChsaW5lPzogbnVtYmVyKSA9PiB7XHJcbiAgICBjYWxsZXI/OiBzdHJpbmc7XHJcbiAgICBzdGFjaz86IHN0cmluZztcclxuICAgIHJlc0lkPzogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZyb21DYWxsU3RhY2s6IEdldEZyb21DYWxsU3RhY2sgPSAobGluZSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XHJcbiAgICBsZXQgcmVzSWQgPSBSLmludmFsaWQoJ3Jlc0lkJykgYXMgbnVtYmVyO1xyXG4gICAgbGV0IGNhbGxlcjtcclxuXHJcbiAgICBpZiAoc3RhY2spIHtcclxuICAgICAgICBjYWxsZXIgPSBzdGFja1xyXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpW2xpbmVdXHJcbiAgICAgICAgICAgIC5zcGxpdCgnLmpzJylbMF1cclxuICAgICAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAgICAgLnBvcCgpIHx8ICcnO1xyXG5cclxuICAgICAgICBpZiAod2luZG93Ll9fZmVhdHVyZSAmJiB3aW5kb3cuX19mZWF0dXJlICE9PSBjYWxsZXIpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdWJWaWV3c1tjYWxsZXJdKSB7XHJcbiAgICAgICAgICAgICAgICByZXNJZCA9IHdpbmRvdy5zdWJWaWV3c1tjYWxsZXJdLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FsbGVyLFxyXG4gICAgICAgIHN0YWNrLFxyXG4gICAgICAgIHJlc0lkLFxyXG4gICAgfTtcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG5pbXBvcnQgeyBEcmFmdFByb3BzIH0gZnJvbSAnbGliL2RyYWZ0ZWQvdHlwZXMnO1xyXG5pbXBvcnQgeyBNZWRpYVNpemUsIHVzZU1lZGlhIH0gZnJvbSAnbGliL2hvb2tzL3VzZU1lZGlhJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFN0YXRpY0tleVR5cGU8QWRhcHRpdmVLZXkgZXh0ZW5kcyBzdHJpbmc+ID0gQWRhcHRpdmVLZXkgZXh0ZW5kcyBgJHtpbmZlciBCYXNlfV8ke0FkYXB0aXZlU3VmZml4VHlwZX1gXHJcbiAgICA/IEJhc2VcclxuICAgIDogbmV2ZXI7XHJcblxyXG50eXBlIEFkYXB0aXZlU3VmZml4VHlwZSA9ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xyXG50eXBlIEFkYXB0aXZlS2V5c1R5cGU8S2V5cyBleHRlbmRzIHN0cmluZz4gPSBgJHtLZXlzfV8ke0FkYXB0aXZlU3VmZml4VHlwZX1gO1xyXG50eXBlIEFkYXB0aXZlUHJvcHNPbmx5PFByb3BzIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIEFkYXB0aXZlUHJvcE5hbWVzIGV4dGVuZHMga2V5b2YgUHJvcHM+ID0ge1xyXG4gICAgW2tleSBpbiBBZGFwdGl2ZUtleXNUeXBlPEV4Y2x1ZGU8QWRhcHRpdmVQcm9wTmFtZXMsIG51bWJlciB8IHN5bWJvbD4+XT86IFByb3BzW1N0YXRpY0tleVR5cGU8a2V5Pl07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzIGV4dGVuZHMge30sIEFkYXB0aXZlS2V5cyBleHRlbmRzIGtleW9mIFN0YXRpY1Byb3BzPiA9IFN0YXRpY1Byb3BzICZcclxuICAgIEFkYXB0aXZlUHJvcHNPbmx5PFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkYXB0aXZlU3VmZml4U2VxdWVuY2UgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ10gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBpc0FkYXB0aXZlU3VmZml4ID0gKGtleT86IHN0cmluZyk6IGtleSBpcyBBZGFwdGl2ZVN1ZmZpeFR5cGUgPT4ge1xyXG4gICAgcmV0dXJuIGFkYXB0aXZlU3VmZml4U2VxdWVuY2UuaW5jbHVkZXMoa2V5IGFzIEFkYXB0aXZlU3VmZml4VHlwZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0FkYXB0aXZlUHJvcE5hbWUgPSAoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBrZXkuaW5jbHVkZXMoJ18nKSAmJiBpc0FkYXB0aXZlU3VmZml4KGtleS5zcGxpdCgnXycpLmF0KC0xKSk7XHJcbn07XHJcblxyXG5jb25zdCBtZWRpYVNpemVTZXF1ZW5jZSA9IFtcclxuICAgIE1lZGlhU2l6ZS5FeHRyYUxhcmdlLFxyXG4gICAgTWVkaWFTaXplLkxhcmdlLFxyXG4gICAgTWVkaWFTaXplLk1lZGl1bSxcclxuICAgIE1lZGlhU2l6ZS5TbWFsbCxcclxuICAgIE1lZGlhU2l6ZS5FeHRyYVNtYWxsLFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0RlZmluZWRBZGFwdGl2ZVByb3BzID0gKHByb3BOYW1lOiBzdHJpbmcsIHByb3BzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIGFkYXB0aXZlU3VmZml4U2VxdWVuY2Uuc29tZSgoc3VmZml4KSA9PiBwcm9wc1tgJHtwcm9wTmFtZX1fJHtzdWZmaXh9YF0gIT09IHVuZGVmaW5lZCk7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBhbGwgYWRhcHRpdmUgcHJvcGVydGllcyBieSBwaWNraW5nIHRoZSBsYXJnZXN0IHByb3BlcnR5IGZyb20gYSBsaXN0LCBmb3IgZXhhbXBsZSBgbV94bCwgbV9sZywgbV9tZCwgbV9zbSwgbV94c2AgdGhhdCBpcyBub3QgbGFyZ2VyIHRoYW4gTWVkaWFTaXplIGFuZCByZXR1cm5pbmcgaXQgYXMgYG1gIGluIGEgbmV3IG9iamVjdCB3aXRoIG9ubHkgdGhlIG5vcm1hbGl6ZWQgcHJvcHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEFuIG9iamVjdCB3aXRoIGFkYXB0aXZlIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7TWVkaWFTaXplfSBtZWRpYVNpemUgLSBBIG1lZGlhIHNpemUgdG8gbm9ybWFsaXplIGFkYXB0aXZlIHByb3BzIGZvci5cclxuICogQHJldHVybiB7T2JqZWN0fSAtIEEgbmV3IG9iamVjdCB3aXRoIG5vcm1hbGl6ZWQgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgbWVkaWFTaXplOiBNZWRpYVNpemUpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKChvdXRwdXQsIHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gSWYga2V5IGlzIGFscmVhZHkgaW4gb3V0cHV0LCBpdCBtZWFucyBpdCBpcyBhIGJhc2UgZm9yIGFuIGFkYXB0aXZlIHByb3Agd2hpY2ggd2FzIGFscmVhZHkgcHJvY2Vzc2VkIC0+IHNraXBcclxuICAgICAgICBpZiAocHJvcE5hbWUgaW4gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0FkYXB0aXZlUHJvcE5hbWUocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VQcm9wTmFtZSA9IHByb3BOYW1lLnNwbGl0KCdfJykuc2xpY2UoMCwgLTEpLmpvaW4oJ18nKTtcclxuICAgICAgICAgICAgLy8gaWYgYmFzZSBwcm9wIGlzIGFscmVhZHkgaW4gb3V0cHV0LCBpdCBtdXN0IGhhdmUgYmVlbiBhbHJlYWR5IHByb2Nlc3NlZCAtPiBza2lwXHJcbiAgICAgICAgICAgIGlmIChiYXNlUHJvcE5hbWUgaW4gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhU2l6ZUluZGV4ID0gbWVkaWFTaXplU2VxdWVuY2UuaW5kZXhPZihtZWRpYVNpemUpO1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGFkYXB0aXZlIHByb3BlcnRpZXMgdGhhdCBhcmUgbGFyZ2VyIHRoYW4gbWVkaWFTaXplXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50QWRhcHRpdmVTdWZmaXhlcyA9IG1lZGlhU2l6ZUluZGV4ICE9PSAtMSA/IGFkYXB0aXZlU3VmZml4U2VxdWVuY2Uuc2xpY2UobWVkaWFTaXplSW5kZXgpIDogW107XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50UHJvcGVydHlOYW1lcyA9IHJlbGV2YW50QWRhcHRpdmVTdWZmaXhlcy5tYXAoKHN1ZmZpeCkgPT4gYmFzZVByb3BOYW1lICsgJ18nICsgc3VmZml4KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9wTmFtZSA9IHJlbGV2YW50UHJvcGVydHlOYW1lcy5maW5kKChwcm9wTmFtZSkgPT4gcHJvcHNbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFByb3BWYWx1ZSA9IHJlc29sdmVkUHJvcE5hbWUgPyBwcm9wc1tyZXNvbHZlZFByb3BOYW1lXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gYXNzaWduIGJhc2VQcm9wIHdpdGggdmFsdWUgb2YgdGhlIGZpcnN0IHJlbGV2YW50IGFkYXB0aXZlIHByb3Agb3IgYmFzZSBwcm9wXHJcbiAgICAgICAgICAgIG91dHB1dFtiYXNlUHJvcE5hbWVdID0gcmVzb2x2ZWRQcm9wVmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlc29sdmVkUHJvcFZhbHVlIDogcHJvcHNbYmFzZVByb3BOYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XHJcbiAgICAgICAgLy8gc2tpcCBwcm9wcyB0aGF0IGFyZSB1bmRlZmluZWQgb3IgaGF2ZSBzb21lIGFkYXB0aXZlIHByb3BlcnRpZXMgc2V0XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaGFzRGVmaW5lZEFkYXB0aXZlUHJvcHMocHJvcE5hbWUsIHByb3BzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXRbcHJvcE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0sIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgY29tcG9uZW50IHRoYXQgbm9ybWFsaXplcyBhZGFwdGl2ZSBwcm9wZXJ0aWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IG1lZGlhIHNpemUgYW5kIHBhc3NlcyBpdCB0byB0aGUgQ29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+fSBDb21wb25lbnQgLSBSZWFjdCBjb21wb25lbnQgdGhhdCBoYW5kbGVzIHN0YXRpYyBwcm9wcy5cclxuICogQHBhcmFtIHt0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wc30gbm9ybWFsaXplUHJvcHMgLSBvcHRpb25hbCBjdXN0b20gZnVuY3Rpb24gdGhhdCBub3JtYWxpemVzIGFkYXB0aXZlIHByb3BzLCB1c2VmdWwgbWFpbmx5IGZvciB0ZXN0aW5nLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gdGhlIEJveCBjb21wb25lbnQgd2l0aCBub3JtYWxpemVkIGFkYXB0aXZlIHByb3BlcnRpZXNcclxuICovXHJcbmNvbnN0IGdldEFkYXB0aXZlQ29tcG9uZW50ID1cclxuICAgIDxTdGF0aWNQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcz4oXHJcbiAgICAgICAgQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPixcclxuICAgICAgICBub3JtYWxpemVQcm9wczogdHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMgPSBub3JtYWxpemVBZGFwdGl2ZVByb3BzLFxyXG4gICAgKSA9PlxyXG4gICAgKHByb3BzOiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBtZWRpYVNpemUgfSA9IHVzZU1lZGlhKCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb3BzID0gdXNlTWVtbygoKSA9PiBub3JtYWxpemVQcm9wcyhwcm9wcywgbWVkaWFTaXplKSwgW3Byb3BzLCBtZWRpYVNpemVdKTtcclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uKG5vcm1hbGl6ZWRQcm9wcyBhcyBTdGF0aWNQcm9wcyl9IC8+O1xyXG4gICAgfTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGVpdGhlciBhbiBBZGFwdGl2ZUNvbXBvbmVudCBvciBhIENvbXBvbmVudCBkZXBlbmRpbmcgb24gd2hldGhlciBhZGFwdGl2ZSBwcm9wcyBhcmUgcHJlc2VudCBpbiB0aGUgcHJvcHMgb2JqZWN0LlxyXG4gKiBHZW5lcmljIHR5cGVzIFN0YXRpY1Byb3BzIChlLmcuIENvbXBQcm9wcykgYW5kIEFkYXB0aXZlS2V5cyAoZS5nLiBDb21wQWRhcHRpdmVQcm9wTmFtZXMpIGFyZSBvcHRpb25hbC4gQWRhcHRpdmUgbG9naWMgd291bGQgd29ya1xyXG4gKiBvbiBhbnkgcHJvcHMgaW4gcnVudGltZSwgYnV0IGFkZGluZyB0aGUgdHlwZXMgd2lsbCBmaWx0ZXIgd2hpY2gga2V5cyBhcmUgdmFsaWRhdGVkIGJ5IFR5cGVzY3JpcHQgc28gdGhhdCBhZGFwdGl2ZSBwcm9wc1xyXG4gKiB0aGF0IGRvIG5vdCBtYWtlIHNlbnNlIGFyZSBub3Qgc3VnZ2VzdGVkIGJ5IGludGVsbGlzZW5zZS5cclxuICogQHVzYWdlIChpbiByb290IHNjb3BlKSBjb25zdCBBZGFwdGl2ZUNvbXAgPSBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8Q29tcFByb3BzLCBDb21wQWRhcHRpdmVQcm9wTmFtZXM+KENvbXApO1xyXG4gKiAgZXhwb3J0IHR5cGUgQ29tcEFkYXB0aXZlUHJvcE5hbWVzID0gJ3NpemUnIHwgJ2NsYXNzTmFtZSc7XHJcbiAqICBleHBvcnQgdHlwZSBDb21wUHJvcHMgPSBDb21wU3RhdGljUHJvcHMgJiBBZGFwdGl2ZVByb3BzPENvbXBTdGF0aWNQcm9wcywgQ29tcEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XHJcbiAqICBleHBvcnQgZGVmYXVsdCBBZGFwdGl2ZUNvbXA7XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz59IENvbXBvbmVudCAtIFJlYWN0IGNvbXBvbmVudCB0aGF0IGhhbmRsZXMgc3RhdGljIHByb3BzLlxyXG4gKiBAcGFyYW0ge3R5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzfSBub3JtYWxpemVQcm9wcyAtIG9wdGlvbmFsIGN1c3RvbSBmdW5jdGlvbiB0aGF0IG5vcm1hbGl6ZXMgYWRhcHRpdmUgcHJvcHMsIHVzZWZ1bCBtYWlubHkgZm9yIHRlc3RpbmcuXHJcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBFaXRoZXIgYW4gQWRhcHRpdmVCb3ggb3IgYSBCb3ggY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEFkYXB0aXZlQ29udHJvbGxlciA9IDxcclxuICAgIFN0YXRpY1Byb3BzIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgICBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcyxcclxuPihcclxuICAgIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz4sXHJcbiAgICBub3JtYWxpemVQcm9wczogdHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMgPSBub3JtYWxpemVBZGFwdGl2ZVByb3BzLFxyXG4pID0+IHtcclxuICAgIGNvbnN0IEFkYXB0aXZlQ29tcG9uZW50ID0gZ2V0QWRhcHRpdmVDb21wb25lbnQoQ29tcG9uZW50LCBub3JtYWxpemVQcm9wcykgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgICAgICBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+XHJcbiAgICA+O1xyXG4gICAgcmV0dXJuIFJlYWN0Lm1lbW8oKHByb3BzOiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQWRhcHRpdmVQcm9wcyA9IE9iamVjdC5rZXlzKHByb3BzKS5zb21lKFxyXG4gICAgICAgICAgICAoa2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgaXNBZGFwdGl2ZVByb3BOYW1lKGtleSkgJiYgcHJvcHNba2V5IGFzIGtleW9mIEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz5dICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaGFzQWRhcHRpdmVQcm9wcyA/IDxBZGFwdGl2ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+IDogPENvbXBvbmVudCB7Li4uKHByb3BzIGFzIFN0YXRpY1Byb3BzKX0gLz47XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjtcclxuXHJcbnR5cGUgRHJhZnRQcm9wTWFwID0geyBba2V5OiBzdHJpbmddOiBEcmFmdFByb3BzIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHJhZnRlZEFkYXB0aXZlUHJvcHMgPSAocHJvcE5hbWU6IHN0cmluZywgZHJhZnRQcm9wczogRHJhZnRQcm9wcykgPT5cclxuICAgIGFkYXB0aXZlU3VmZml4U2VxdWVuY2UucmVkdWNlKChwcm9wcywgc3VmZml4KSA9PiB7XHJcbiAgICAgICAgcHJvcHNbcHJvcE5hbWUgKyAnXycgKyBzdWZmaXhdID0gZHJhZnRQcm9wcztcclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICB9LCB7fSBhcyBEcmFmdFByb3BNYXApO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VDYWxsT25jZSA9IChmOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgY2FsbGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIWNhbGxlZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZigpO1xyXG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNhbGxPbmNlO1xyXG4iLCJpbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcclxuaW1wb3J0IHsgS0VZX0NPREVTIH0gZnJvbSAnbGliL2tleWNvZGVzJztcclxuaW1wb3J0IHsgc2VuZENsb3NlRXZlbnQgfSBmcm9tICdsaWIvdmlldy1lbnYtaGVscGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGVmYXVsdENhbGxiYWNrID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGV2ZW50LnR5cGUgKyAnOiB1c2VLZXlkb3duTGlzdGVuZXIgaG9vayA6OiBDYWxsYmFjayBpcyBub3QgZGVmaW5lZCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTGlzdGVuZXIgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlS2V5ZG93bkxpc3RlbmVyKFxyXG4gICAga2V5OiBudW1iZXIgPSBLRVlfQ09ERVMuTk9ORSxcclxuICAgIGxpc3RlbmVyOiBMaXN0ZW5lciA9IGRlZmF1bHRDYWxsYmFjayxcclxuICAgIHByZXZlbnRQcm9wYWdhdGlvbiA9IGZhbHNlLFxyXG4pIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZX0NPREVTLk5PTkUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudi52aWV3LmlzRXZlbnRIYW5kbGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbnYudmlldy5zZXRFdmVudEhhbmRsZWQoKTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2ZW50UHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcywgcHJldmVudFByb3BhZ2F0aW9uKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzLCBwcmV2ZW50UHJvcGFnYXRpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbGlzdGVuZXIsIGtleSwgcHJldmVudFByb3BhZ2F0aW9uXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDbG9zZU9uS2V5UHJlc3Moa2V5OiBLRVlfQ09ERVMgPSBLRVlfQ09ERVMuRVNDQVBFKSB7XHJcbiAgICB1c2VLZXlkb3duTGlzdGVuZXIoa2V5LCBzZW5kQ2xvc2VFdmVudCwgdHJ1ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrT25Fc2MoY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCkge1xyXG4gICAgdXNlS2V5ZG93bkxpc3RlbmVyKEtFWV9DT0RFUy5FU0NBUEUsIGNhbGxiYWNrKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xvc2VPbkVzYygpIHtcclxuICAgIHVzZUNsb3NlT25LZXlQcmVzcyhLRVlfQ09ERVMuRVNDQVBFKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZWRpYUNvbnRleHQsIE1lZGlhQ29udGV4dFR5cGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnknO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljJztcblxuZXhwb3J0IGVudW0gTWVkaWFTaXplIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVdpZHRoIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYUhlaWdodCB7XG4gICAgRXh0cmFTbWFsbCA9IEJSRUFLUE9JTlRTLmV4dHJhU21hbGwuaGVpZ2h0LFxuICAgIFNtYWxsID0gQlJFQUtQT0lOVFMuc21hbGwuaGVpZ2h0LFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS5oZWlnaHQsXG4gICAgTGFyZ2UgPSBCUkVBS1BPSU5UUy5sYXJnZS5oZWlnaHQsXG4gICAgRXh0cmFMYXJnZSA9IEJSRUFLUE9JTlRTLmV4dHJhTGFyZ2UuaGVpZ2h0LFxufVxuXG5jb25zdCBjb252ZXJ0VG9NZWRpYVNpemUgPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2U6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5FeHRyYVNtYWxsO1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUb01lZGlhV2lkdGggPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2VXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbFdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICB9XG59O1xuXG5jb25zdCBjb252ZXJ0VG9NZWRpYUhlaWdodCA9IChtZWRpYUNvbnRleHQ6IE1lZGlhQ29udGV4dFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFMYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5FeHRyYUxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5sYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0Lk1lZGl1bTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuc21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuU21hbGw7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhU21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkV4dHJhU21hbGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZU1lZGlhID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lZGlhQ29udGV4dCA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lZGlhQ29udGV4dDtcbiAgICBjb25zdCBtZWRpYVNpemUgPSBjb252ZXJ0VG9NZWRpYVNpemUobWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBtZWRpYVdpZHRoID0gY29udmVydFRvTWVkaWFXaWR0aChtZWRpYUNvbnRleHQpO1xuICAgIGNvbnN0IG1lZGlhSGVpZ2h0ID0gY29udmVydFRvTWVkaWFIZWlnaHQobWVkaWFDb250ZXh0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhU2l6ZSxcbiAgICAgICAgbWVkaWFXaWR0aCxcbiAgICAgICAgbWVkaWFIZWlnaHQsXG4gICAgICAgIHJlbVNjcmVlbldpZHRoOiB3aWR0aCxcbiAgICAgICAgcmVtU2NyZWVuSGVpZ2h0OiBoZWlnaHQsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgZW51bSBLRVlfQ09ERVMge1xyXG4gICAgTk9ORSA9IC0xLFxuICAgIEFMVCA9IDE2NSxcbiAgICBFTlRFUiA9IDEzLFxyXG4gICAgRVNDQVBFID0gMjcsXHJcbiAgICBTUEFDRSA9IDMyLFxyXG4gICAgRU5EID0gMzUsXHJcbiAgICBIT01FID0gMzYsXHJcbiAgICBBUlJPV19MRUZUID0gMzcsXHJcbiAgICBBUlJPV19VUCA9IDM4LFxyXG4gICAgQVJST1dfUklHSFQgPSAzOSxcclxuICAgIEFSUk9XX0RPV04gPSA0MCxcclxuICAgIE5VTV9QTFVTID0gMTA3LFxyXG4gICAgTlVNX01JTlVTID0gMTA5LFxyXG4gICAgUExVUyA9IDE4NyxcclxuICAgIE1JTlVTID0gMTg5LFxyXG4gICAgUEFHRV9VUCA9IDMzLFxyXG4gICAgUEFHRV9ET1dOID0gMzQsXHJcbiAgICBCQUNLU1BBQ0UgPSA4LFxyXG4gICAgREVMRVRFID0gNDYsXHJcbiAgICBUQUIgPSA5LFxyXG4gICAgS0VZX04gPSA3OCxcbiAgICBLRVlfMSA9IDQ5LFxuICAgIEtFWV8yID0gNTAsXG4gICAgS0VZXzMgPSA1MSxcbiAgICBLRVlfNCA9IDUyLFxuICAgIEtFWV81ID0gNTMsXG4gICAgS0VZXzYgPSA1NCxcbiAgICBLRVlfNyA9IDU1LFxuICAgIEtFWV84ID0gNTYsXG4gICAgS0VZXzkgPSA1NyxcbiAgICBDQVBTX0xPQ0sgPSAyMCxcbiAgICBJTlNFUlQgPSA0NSxcbiAgICBGMSA9IDExMixcbiAgICBGMiA9IDExMyxcbiAgICBGMyA9IDExNCxcbiAgICBGNCA9IDExNSxcbiAgICBGNSA9IDExNixcbiAgICBGNiA9IDExNyxcbiAgICBGNyA9IDExOCxcbiAgICBGOCA9IDExOSxcbiAgICBGOSA9IDEyMCxcbiAgICBGMTAgPSAxMjEsXG4gICAgRjExID0gMTIyLFxuICAgIEYxMiA9IDEyMyxcbiAgICBTRUxFQ1QgPSA5MyxcbiAgICBOVU1QQURfMCA9IDk2LFxuICAgIE5VTVBBRF8xID0gOTcsXG4gICAgTlVNUEFEXzIgPSA5OCxcbiAgICBOVU1QQURfMyA9IDk5LFxuICAgIE5VTVBBRF80ID0gMTAwLFxuICAgIE5VTVBBRF81ID0gMTAxLFxuICAgIE5VTVBBRF82ID0gMTAyLFxuICAgIE5VTVBBRF83ID0gMTAzLFxuICAgIE5VTVBBRF84ID0gMTA0LFxuICAgIE5VTVBBRF85ID0gMTA1LFxuICAgIE5VTV9ERUNJTUFMID0gMTEwLFxuICAgIFNUQVIgPSAxMDYsXG4gICAgTlVNX1NMQVNIID0gMTExLFxuICAgIEZPUldBUkRfU0xBU0ggPSAxOTEsXG4gICAgQ09NTUEgPSAxODgsXG4gICAgREFTSCA9IDE4OSxcbiAgICBQRVJJT0QgPSAxOTAsXG59XHJcblxyXG5leHBvcnQgZW51bSBLRVlfTU9ESUZJRVJTIHtcclxuICAgIEFMVCA9ICdBbHQnLFxyXG4gICAgQUxUX0dSQVBIID0gJ0FsdEdyYXBoJyxcclxuICAgIENBUFNfTE9DSyA9ICdDYXBzTG9jaycsXHJcbiAgICBDT05UUk9MID0gJ0NvbnRyb2wnLFxyXG4gICAgRk4gPSAnRm4nLFxyXG4gICAgRk5fTE9DSyA9ICdGbkxvY2snLFxyXG4gICAgTUVUQSA9ICdNZXRhJyxcclxuICAgIE5VTV9MT0NLID0gJ051bUxvY2snLFxyXG4gICAgU0NST0xMX0xPQ0sgPSAnU2Nyb2xsTG9jaycsXHJcbiAgICBTSElGVCA9ICdTaGlmdCcsXHJcbiAgICBTWU1CT0wgPSAnU3ltYm9sJyxcclxuICAgIFNZTUJPTF9MT0NLID0gJ1N5bWJvbExvY2snLFxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnbGliL251bGxhYmxlJztcblxuZXhwb3J0IHR5cGUgTGlrZUFycmF5PFQ+ID0gQ29oZXJlbnRBcnJheVByb3h5PFQ+IHwgVFtdO1xuZXhwb3J0IHR5cGUgQXJyYXlJdGVtPFQ+ID0gVCB8IENvaGVyZW50QXJyYXlJdGVtPFQ+O1xuZXhwb3J0IHR5cGUgQ2FzdEFsbEFycmF5czxUPiA9IFQgZXh0ZW5kcyBDb2hlcmVudEFycmF5UHJveHk8aW5mZXIgQ29oSXRlbT5cbiAgICA/IExpa2VBcnJheTxDYXN0QWxsQXJyYXlzPENvaEl0ZW0+PlxuICAgIDogVCBleHRlbmRzIEZ1bmN0aW9uXG4gICAgPyBUXG4gICAgOiBUIGV4dGVuZHMgQXJyYXk8aW5mZXIgQXJySXRlbT5cbiAgICA/IExpa2VBcnJheTxDYXN0QWxsQXJyYXlzPEFyckl0ZW0+PlxuICAgIDogVCBleHRlbmRzIHt9XG4gICAgPyB7IFtQIGluIGtleW9mIFRdOiBDYXN0QWxsQXJyYXlzPFRbUF0+IH1cbiAgICA6IFQ7XG5cbi8qKiBSZWFkIHZhbHVlIGZyb20gTGlrZUFycmF5IGJ5IGluZGV4ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoaW5kZXggPj0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheVtpbmRleF0/LnZhbHVlO1xufVxuXG5leHBvcnQgY29uc3QgdW5zYWZlR2V0ID0gZ2V0IGFzIDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpbmRleDogbnVtYmVyKSA9PiBUO1xuXG4vKiogUmV0dXJucyBpdGVtLnZhbHVlIGlmIGl0J3MgY29oZXJlbnQgYXJyYXkgaXRlbSBvciBqdXN0IGl0ZW0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBJdGVtPFQ+KGl0ZW06IEFycmF5SXRlbTxUPik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChpdGVtICYmICd2YWx1ZScgaW4gaXRlbSAmJiAoaXRlbSBhcyBhbnkpLmNvbnN0cnVjdG9yPy5uYW1lLmluY2x1ZGVzKCdBcnJheUl0ZW0nKSkge1xuICAgICAgICByZXR1cm4gaXRlbT8udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW0gYXMgVDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGJ1dCBlbGVtZW50IHdpbGwgYmUgaXRlbS52YWx1ZSBvciBpdGVtXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUubWFwfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFU+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gVSk6IFVbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZm4pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkubWFwKChlbGVtZW50LCBpbmRleCwgYXJyKSA9PiBmbihlbGVtZW50Py52YWx1ZSwgaW5kZXgsIGFycikpO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2QgJ2V2ZXJ5JyBvZiBhcnJheSwgYnV0IGVsZW1lbnQgd2lsbCBiZSBpdGVtLnZhbHVlIG9yIGl0ZW1cbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5ldmVyeX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZXZlcnkoZm4pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAoIWZuKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2QgJ3NvbWUnIG9mIGFycmF5LCBidXQgZWxlbWVudCB3aWxsIGJlIGl0ZW0udmFsdWUgb3IgaXRlbVxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNvbWV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb21lPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc29tZShmbik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChmbihlbGVtZW50LCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGJ1dCBlbGVtZW50IHdpbGwgYmUgaXRlbS52YWx1ZSBvciBpdGVtXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyPFQ+KFxuICAgIGFycmF5OiBMaWtlQXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbixcbik6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIocHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXSBhcyBUW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0/LnZhbHVlO1xuICAgICAgICBpZiAocHJlZGljYXRlKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5XG4gKlxuICogKipCdXQgd2lsbCB0aHJvdyBlcnJvciBpZiB5b3UgdHJ5IHRvIGNoYW5nZSB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSoqXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUucHVzaH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2g8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaXRlbTogVCk6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNdXRhdGUgQ29oZXJlbnRBcnJheVByb3h5IGlzIG5vdCBhdmFpbGFibGVgKTtcbn1cblxuLyoqXG4gKiBKdXN0IHNldCBpdGVtIGJ5IGluZGV4XG4gKlxuICogKipCdXQgd2lsbCB0aHJvdyBlcnJvciBpZiB5b3UgdHJ5IHRvIGNoYW5nZSB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSoqXG4gKiBgYGB0c1xuICogbGlrZUFycmF5KGFycmF5LCAwLCBpdGVtKVxuICogLy8gZXF1YWxzIHRvOlxuICogYXJyYXlbMF0gPSBpdGVtXG4gKiBgYGBcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5wdXNofVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICBhcnJheVtpbmRleF0gPSBpdGVtO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTXV0YXRlIENvaGVyZW50QXJyYXlQcm94eSBpcyBub3QgYXZhaWxhYmxlYCk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCBvZiBhcnJheS4gQnV0IGhhcyBzZWNvbmQgcGFyYW1ldGVyIGZvciByZW1vdmUgaW5kZXggYW5kIGdldCB0aGUgdmFsdWUuXG4gKlxuICogKipXaWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5wb3B9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3A8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXggPSBhcnJheS5sZW5ndGggLSAxKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE11dGF0ZSBDb2hlcmVudEFycmF5UHJveHkgaXMgbm90IGF2YWlsYWJsZWApO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgaW5jbHVkZXMgYnV0IGZpbmQgYnkgZnVuY3Rpb25cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFt7IG5hbWU6ICdmb28nIH0sIHsgbmFtZTogJ2JhcicgfSwgeyBuYW1lOiAnYmF6JyB9XVxuICogbGlrZUFycmF5LmNvbnRhaW5zKGFycmF5LCAoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdmb28nKSkgLy8gdHJ1ZVxuICogbGlrZUFycmF5LmNvbnRhaW5zKGFycmF5LCAoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdmb28tYmFyLWJheicpKSAvLyBmYWxzZVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluczxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpdGVtOiBULCBwcmVkaWNhdGU/OiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAocHJlZGljYXRlICYmIHByZWRpY2F0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogUmV0dXJucyBsYXN0IGluZGV4IG9mIGFycmF5IG9yIC0xIGlmIGl0J3MgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SW5kZXg8VD4oYXJyYXk6IExpa2VBcnJheTxUPik6IG51bWJlciB7XG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aCAtIDE7XG59XG5cbi8qKiBXb3JrcyBsaWtlIHtAbGluayBsYXN0SW5kZXh9IGJ1dCByZXR1cm5zIDAgaWYgYXJyYXkgaXMgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SW5kZXhaZXJvPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4pOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAxKTtcbn1cblxuLyoqIFJldHVybnMgbGFzdCBlbGVtZW50IG9mIGFycmF5IG9yIGB1bmRlZmluZWRgIGl0J3MgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0RWxlbWVudDxUPihhcnJheTogTGlrZUFycmF5PFQ+KTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0KGFycmF5LCBhcnJheS5sZW5ndGggLSAxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGl0ZXJhdG9yIGZyb20gcmFuZ2UuIFN0YXJ0IGluZGV4IGNhbm5vdCBiZSBsZXNzIHRoYW4gYDBgIChpdCB3aWxsIGJlIGNsYW1wZWQpLlxuICogQWxzbyBlbmQgaW5kZXggY2Fubm90IGJlIG1vcmUgdGhhbiBhcnJheSBsZW5ndGggKGl0IHdpbGwgYmUgY2xhbXBlZCkuXG4gKiBMYXN0IGluZGV4ICoqaW5jbHVzaXZlKiouXG4gKiBgYGB0c1xuICogY29uc3QgaXRlbXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldXG4gKiBjb25zdCBzbGljZUl0ZW1zID0gWy4uLmxpa2VBcnJheS5zbGljZShpdGVtcywgMCwgMildIC8vIFsxLDIsM11cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2U8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXhGcm9tID0gMCwgaW5kZXhUbyA9IGFycmF5Lmxlbmd0aCAtIDEpOiBJdGVyYWJsZTxUPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gTWF0aC5tYXgoaW5kZXhGcm9tLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oaW5kZXhUbywgbGFzdEluZGV4WmVybyhhcnJheSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKTogSXRlcmF0b3JSZXN1bHQ8VD4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4ID4gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBudWxsIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGFycmF5W25leHRJbmRleCsrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bndyYXBJdGVtKGl0ZW0pIGFzIFQsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbnVsbCB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHNsaWNlIG9mIGxhc3QgZWxlbWVudHMgYnkgY291bnQgcGFyYW1ldGVyXG4gKiBgYGB0c1xuICogY29uc3QgaXRlbXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldXG4gKiBjb25zdCBsYXN0VGhlZUl0ZW1zID0gWy4uLmxpa2VBcnJheS50YWlsKGl0ZW1zLCAzKV0gLy8gWzcsOCw5XVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWlsPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGNvdW50OiBudW1iZXIpIHtcbiAgICByZXR1cm4gc2xpY2UoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIDEgLSBjb3VudCksIGxhc3RJbmRleChhcnJheSkpO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkuXG4gKlxuICogKipXaWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5zcGxpY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2U8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgc3RhcnQ6IG51bWJlciwgZGVsZXRlQ291bnQ/OiBudW1iZXIgfCB1bmRlZmluZWQpOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTXV0YXRlIENvaGVyZW50QXJyYXlQcm94eSBpcyBub3QgYXZhaWxhYmxlYCk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmR9IG1ldGhvZCBvZiBhcnJheSwgYnV0IGZpbmQgZnJvbSB0YWlsLlxuICogSWYgaXQncyB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSB0aGVuIGBpdGVtLnZhbHVlYCB3aWxsIHBhc3MgaW4gcHJlZGljYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8VD4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSBhcnJheS5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bndyYXBJdGVtKGFycmF5W2luZGV4XSkgYXMgVDtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShlbGVtZW50LCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmR9IG1ldGhvZCBvZiBhcnJheS5cbiAqIElmIGl0J3Mge0BsaW5rIENvaGVyZW50QXJyYXlQcm94eTxUPn0gdGhlbiBgaXRlbS52YWx1ZWAgd2lsbCBwYXNzIGluIHByZWRpY2F0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmQ8VD4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW53cmFwSXRlbShhcnJheVtpbmRleF0pIGFzIFQ7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoZWxlbWVudCwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc30gbWV0aG9kIG9mIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXM8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVXNpbmcgbGlrZSBgYXJyYXkuZmlsdGVyKCkubWFwKClgIGJ1dCBmb3Ige0BsaW5rIExpa2VBcnJheTxUPn0gYW5kIHdvcmtzIGluIG9uZSBjeWNsZS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFsxLCAyLCAzLCA0LCA1XVxuICogbGlrZUFycmF5LmZpbHRlck1hcChhcnJheSwgKG4pID0+IG4gJSAyID09PSAwLCAobikgPT4gbiAqIG4pIC8vIFs0LCAxNl1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTWFwPFQsIFU+KFxuICAgIGFycmF5OiBMaWtlQXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbixcbiAgICBmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IFUsXG4pOiBVW10ge1xuICAgIGNvbnN0IHJlc3VsdDogVVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZm4oaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBTZWUgYWxzbyB7QGxpbmsgZmlsdGVyTWFwfS4gV29ya3MgbGlrZSBmaWx0ZXIgbm9uLWVtcHR5IGVsZW1lbnRzIGFuZCBhcHBseSBmdW5jdGlvbi5cbiAqIENyZWF0aW5nIG5ldyBhcnJheS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFtudWxsLCAwLCB1bmRlZmluZWQsIDFdXG4gKiBsaWtlQXJyYXkubWFwRXhpc3RzKGFycmF5LCAobikgPT4gbiAqIDIpIC8vIFswLCAyXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBFeGlzdHM8VCwgVT4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUIHwgbnVsbCB8IHVuZGVmaW5lZD4sXG4gICAgZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBVLFxuKTogVVtdIHtcbiAgICByZXR1cm4gZmlsdGVyTWFwKGFycmF5IGFzIExpa2VBcnJheTxOb25OdWxsYWJsZTxUPj4sIGlzTm9uTnVsbGFibGUsIGZuKTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5LlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbmRleDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGBmaW5kSW5kZXhgIGJ1dCBmcm9tIHRhaWwuXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4TGFzdDxUPihcbiAgICBhcnJheTogTGlrZUFycmF5PFQ+LFxuICAgIHByZWRpY2F0ZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IGJvb2xlYW4sXG4pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCBvZiBhcnJheSBgam9pbmAgZXhjZXB0IGFycmF5LWxpa2Ugb2JqZWN0cyAoZm9yIExpa2VBcnJheSB0eXBlIG9ubHkpLlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmpvaW59XG4gKlxuICogSW1wbGVtZW50YXRpb24gYWNjb3JkaW5nIHRvOlxuICoge0BsaW5rIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9pbmRleGVkLWNvbGxlY3Rpb25zLmh0bWwjc2VjLWFycmF5LnByb3RvdHlwZS5qb2lufVxuICovXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBzZXBhcmF0b3IgPSAnLCcpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGNvbnN0IG5leHQgPSBlbGVtZW50ID09PSB1bmRlZmluZWQgfHwgZWxlbWVudCA9PT0gbnVsbCA/ICcnIDogU3RyaW5nKGVsZW1lbnQpO1xuICAgICAgICByZXN1bHQgKz0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5yZWR1Y2V9IG1ldGhvZCBvZiBhcnJheS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFsxLCAyLCAzLCA0XVxuICogbGlrZUFycmF5LnJlZHVjZShhcnJheSwgKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArPSBjdXJyZW50LCAwKSAvLyAxMFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2U8QSwgQj4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxBPixcbiAgICBwcmVkaWNhdGU6IChwcmV2aW91c1ZhbHVlOiBCLCBjdXJyZW50VmFsdWU6IEEsIGN1cnJlbnRJbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PEE+KSA9PiBCLFxuICAgIGluaXRpYWxWYWx1ZTogQixcbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkucmVkdWNlKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBCID0gaW5pdGlhbFZhbHVlO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIHJlc3VsdCA9IHByZWRpY2F0ZShyZXN1bHQsIGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vIE1vdXNlIGRyYWcgc2VsZWN0aW9uIGZvciBpbnB1dCBmaWVsZHNcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXRlIHZhcmlhYmxlc1xyXG4gICAgbGV0IGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudDtcclxuICAgIGxldCBzZWxlY3Rpb25Cb3VuZHM7XHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IC0xO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIERlc2VsZWN0IGFueSBnZW5lcmljIHRleHRcclxuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGlvbiB0YXJnZXQgb24gbW91c2Vkb3duXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zZWxlY3QgJiYgc3RhcnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25Cb3VuZHMgPSBmb2N1c2VkU2VsZWN0YWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGlvbiBzdGFydCBpbmRleCBvbiBtb3VzZW1vdmUgYXMgaXQgaXMgbm90IGF2YWlsYWJsZSBvbiBtb3VzZWRvd25cclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gLTEgJiYgZXZlbnQudGFyZ2V0LnNlbGVjdCAmJiBldmVudC50YXJnZXQgPT09IGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNlbGVjdGlvbiBpbiByZWFsIHRpbWVcclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIENsYW1wIG1vdXNlIHBvc2l0aW9uIHRvIGVsZW1lbnQgYm91bmRzXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLm1pbihNYXRoLm1heChldmVudC54LCBzZWxlY3Rpb25Cb3VuZHMubGVmdCksIHNlbGVjdGlvbkJvdW5kcy5yaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1pbihNYXRoLm1heChldmVudC55LCBzZWxlY3Rpb25Cb3VuZHMudG9wKSwgc2VsZWN0aW9uQm91bmRzLmJvdHRvbSk7XHJcbiAgICAgICAgICAgIC8vIEdldCBzZWxlY3Rpb24gaW5kZXggZnJvbSBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgICAgICAvLyBTZW5kIGEgJ21vdXNlZG93bicgZXZlbnQgdG8gbW92ZSB0aGUgY2FyZXQgYXQgY3VycmVudCBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICBjb25zdCBldk9iaiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGV2T2JqLmluaXRNb3VzZUV2ZW50KCdtb3VzZWRvd24nLCB0cnVlLCB0cnVlLCBudWxsLCAxLCB4LCB5LCB4LCB5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2T2JqKTtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FyZXRcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBmb2N1c2VkU2VsZWN0YWJsZUVsZW1lbnQuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICAvLyBNYWtlIGJpZGlyZWN0aW9uYWwgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25JbmRleCA+IHN0YXJ0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydEluZGV4LCBzZWxlY3Rpb25JbmRleCwgJ2ZvcndhcmQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25JbmRleCwgc3RhcnRJbmRleCwgJ2JhY2t3YXJkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlc2V0IHN0YXRlc1xyXG4gICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRJbmRleCA9IC0xO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnQ7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIGxldCBpbmRleEN1cnNvclBvc2l0aW9uO1xyXG4gICAgbGV0IGluZGV4U2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBsZXQgaW5kZXhTZWxlY3Rpb25FbmQ7XHJcblxyXG4gICAgLy8gRG91YmxlIGNsaWNrIHNlbGVjdGlvbiB0ZXh0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnNlbGVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpbmRleEN1cnNvclBvc2l0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBpbmRleFNlbGVjdGlvblN0YXJ0ID1cclxuICAgICAgICAgICAgY29udGVudC5sYXN0SW5kZXhPZignICcsIGluZGV4Q3Vyc29yUG9zaXRpb24pICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgPyBjb250ZW50Lmxhc3RJbmRleE9mKCcgJywgaW5kZXhDdXJzb3JQb3NpdGlvbikgKyAxXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgaW5kZXhTZWxlY3Rpb25FbmQgPVxyXG4gICAgICAgICAgICBjb250ZW50LmluZGV4T2YoJyAnLCBpbmRleEN1cnNvclBvc2l0aW9uKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgID8gY29udGVudC5pbmRleE9mKCcgJywgaW5kZXhDdXJzb3JQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIDogY29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShpbmRleFNlbGVjdGlvblN0YXJ0LCBpbmRleFNlbGVjdGlvbkVuZCwgJ2ZvcndhcmQnKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gTW91c2UgZHJhZyBzZWxlY3Rpb24gZm9yIGdlbmVyaWMgdGV4dFxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhdGUgdmFyaWFibGVzXHJcbiAgICBsZXQgYW5jaG9yQ2FyZXRQb3NpdGlvbiA9IG51bGw7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUmVzZXQgYW55IGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICAgICAgICAvLyBHZXQgdGhlIGFuY2hvciBub2RlIGFuZCBvZmZzZXRcclxuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmICFldmVudC50YXJnZXQuc2VsZWN0ICYmICFhbmNob3JDYXJldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGFuY2hvckNhcmV0UG9zaXRpb24gPSBkb2N1bWVudC5jYXJldFBvc2l0aW9uRnJvbVBvaW50KGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIEdldCB0aGUgZm9jdXMgbm9kZSBhbmQgb2Zmc2V0IGFuZCBtYWtlIGEgc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAhZXZlbnQudGFyZ2V0LnNlbGVjdCAmJiBhbmNob3JDYXJldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzQ2FyZXRQb3NpdGlvbiA9IGRvY3VtZW50LmNhcmV0UG9zaXRpb25Gcm9tUG9pbnQoZXZlbnQueCwgZXZlbnQueSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvY3VzQ2FyZXRQb3NpdGlvbi5vZmZzZXROb2RlIHx8ICFhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQoXHJcbiAgICAgICAgICAgICAgICBhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldE5vZGUsXHJcbiAgICAgICAgICAgICAgICBhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldCxcclxuICAgICAgICAgICAgICAgIGZvY3VzQ2FyZXRQb3NpdGlvbi5vZmZzZXROb2RlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNDYXJldFBvc2l0aW9uLm9mZnNldCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlc2V0IHN0YXRlXHJcbiAgICAgICAgYW5jaG9yQ2FyZXRQb3NpdGlvbiA9IG51bGw7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiZXhwb3J0IHR5cGUgTnVsbGFibGU8VD4gPSBUIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vbk51bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOb25OdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXNOdWxsYWJsZShpdGVtKSA9PT0gZmFsc2U7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTlVNQkVSX0tFWV9DT0RFUyB7XHJcbiAgICBaRVJPID0gNDgsXHJcbiAgICBPTkUgPSA0OSxcclxuICAgIFRXTyA9IDUwLFxyXG4gICAgVEhSRUUgPSA1MSxcclxuICAgIEZPVVIgPSA1MixcclxuICAgIEZJVkUgPSA1MyxcclxuICAgIFNJWCA9IDU0LFxyXG4gICAgU0VWRU4gPSA1NSxcclxuICAgIEVJR0hUID0gNTYsXHJcbiAgICBOSU5FID0gNTcsXHJcbiAgICBOVU1QQURfMCA9IDk2LFxyXG4gICAgTlVNUEFEXzEgPSA5NyxcclxuICAgIE5VTVBBRF8yID0gOTgsXHJcbiAgICBOVU1QQURfMyA9IDk5LFxyXG4gICAgTlVNUEFEXzQgPSAxMDAsXHJcbiAgICBOVU1QQURfNSA9IDEwMSxcclxuICAgIE5VTVBBRF82ID0gMTAyLFxyXG4gICAgTlVNUEFEXzcgPSAxMDMsXHJcbiAgICBOVU1QQURfOCA9IDEwNCxcclxuICAgIE5VTVBBRF85ID0gMTA1LFxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwbGF5U291bmQoc291bmROYW1lKSB7XHJcbiAgICBlbmdpbmUuY2FsbCgnUGxheVNvdW5kJywgc291bmROYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvdW5kID0ge1xyXG4gICAgcGxheUhpZ2hsaWdodCgpIHtcclxuICAgICAgICBwbGF5U291bmQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgfSxcclxuICAgIHBsYXlDbGljaygpIHtcclxuICAgICAgICBwbGF5U291bmQoJ3BsYXknKTtcclxuICAgIH0sXHJcbiAgICBwbGF5WWVzKCkge1xyXG4gICAgICAgIHBsYXlTb3VuZCgneWVzMScpO1xyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBNYXBwaW5nID0ge1xuICAgIFtrZXk6IHN0cmluZ106XG4gICAgICAgIHwgc3RyaW5nXG4gICAgICAgIHwgbnVtYmVyXG4gICAgICAgIHwgYm9vbGVhblxuICAgICAgICB8IFJlYWN0Tm9kZVxuICAgICAgICB8IEhUTUxFbGVtZW50XG4gICAgICAgIHwgbnVtYmVyW11cbiAgICAgICAgfCBzdHJpbmdbXVxuICAgICAgICB8IFJlYWN0Tm9kZVtdXG4gICAgICAgIHwgSFRNTEVsZW1lbnRbXTtcbn07XG5cbmV4cG9ydCBlbnVtIEFsaWdubWVudCB7XG4gICAgbGVmdCxcbiAgICByaWdodCxcbn1cblxuZXhwb3J0IHR5cGUgQmluZGluZyA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgaW4gc3RyaW5nIG5hbWVkIHBhcmFtcyBzZXQgaW4gcHl0aG9uIHN0eWxlIHRocm91Z2ggYnJhY2VzOiAnYmxhbGJsYSB7cGFyYW0xfSBibGFsYmxhIHtwYXJhbTF9IC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xcdytcXH0vZywgKG1hdGNoKSA9PiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZSgxLCAtMSldKSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBpbiBzdHJpbmcgbmFtZWQgcGFyYW1zIHNldCBpbiBwcmludGYtc3R5bGUgc3R5bGU6ICdibGFsYmxhICUocGFyYW0xKXMgYmxhbGJsYSAlKHBhcmFtMSlzIC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmludGYoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHt8JVxcKClcXHcrKFxcfXxcXClzKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3QgcGFkID0gbWF0Y2guaW5kZXhPZignJScpID09PSAwID8gMiA6IDE7XG4gICAgICAgIHJldHVybiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZShwYWQsIC1wYWQpXSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBzbmFrZV9jYXNlIHN0cmluZyB0byBjYW1lbENhc2UnXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9fXFx3L2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGZpbGUgbmFtZSB0byBSIGNsYXNzIG5hbWUnXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmVzb3VyY2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgJ18nKTtcbn1cblxuLyoqXG4gKiBjb252ZXJ0IGZpcnN0IGNoYXIgdG8gdXBwZXIgY2FzZVxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwQ2FzZUZpcnN0Q2hhcihzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiByZXBsYWNlICZuYnNwOyB0byBcXHhhMFxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnROYnNwID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mbmJzcDsvZywgJ1xceGEwJyk7XG59O1xuXG4vKipcbiAqIHJlcGxhY2UgJnp3bmJzcDsgdG8gXFx1ZmVmZlxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRad25ic3AgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyZ6d25ic3A7L2csICdcXHVmZWZmJyk7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYzogc3RyaW5nW10sIGl0ZW06IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nW107XG5cbmNvbnN0IGFkZFNlcGFyYXRvclRvUmlnaHQ6IEFkZFNlcGFyYXRvckZ1bmMgPSAoYWNjLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmICghKGluZGV4ICUgMikpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuY29uc3QgYWRkU2VwYXJhdG9yVG9MZWZ0OiBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtpdGVtXTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ICUgMikge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgaXRlbSA9PT0gJyAnID8gJ1xceGEwJyA6IGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBTcGxpdCB0ZXh0IHN0cmluZyB3aXRoIFJlZ0V4cCBzZXBhcmF0b3IgYW5kIHRoZW4gYWRkIHNlcGFyYXRvciB0byB0aGUgcHJvcGVyIHNpZGVcbiAqL1xuY29uc3Qgc3BsaXRBbmRGb3JtYXQgPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBzZXBhcmF0b3I6IFJlZ0V4cCwgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpOiBzdHJpbmdbXSA9PlxuICAgIHN0cmluZ1RvU3BsaXQuc3BsaXQoc2VwYXJhdG9yKS5yZWR1Y2UoYWxpZ25tZW50ID09PSBBbGlnbm1lbnQubGVmdCA/IGFkZFNlcGFyYXRvclRvUmlnaHQgOiBhZGRTZXBhcmF0b3JUb0xlZnQsIFtdKTtcblxuZXhwb3J0IGNvbnN0IHNwbGl0RXVyb3BlYW4gPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCk6IHN0cmluZ1tdID0+IHtcbiAgICBsZXQgc3BsaXRSZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBzcGxpdFJlZ2V4ID0gLyg/PD1cXHB7TGx9KSgtKSg/PVxccHtMbH0pL2d1OyAvLyBleGNsdWRlIHNwZWNpYWwgd29yZHMgbGlrZSB2ZWhpY2xlIG5hbWVzIEtWLTIgZXRjXG4gICAgY29uc3Qgc3RyaW5nV2l0aE5ic3AgPSBjb252ZXJ0TmJzcChzdHJpbmdUb1NwbGl0KTtcbiAgICBzcGxpdEFuZEZvcm1hdChzdHJpbmdXaXRoTmJzcCwgLyggKS8sIGFsaWdubWVudCkuZm9yRWFjaChcbiAgICAgICAgKHdvcmQpID0+IChzcGxpdFJlc3VsdCA9IHNwbGl0UmVzdWx0LmNvbmNhdChzcGxpdEFuZEZvcm1hdCh3b3JkLCBzcGxpdFJlZ2V4LCBBbGlnbm1lbnQubGVmdCkpKSxcbiAgICApO1xuICAgIHJldHVybiBzcGxpdFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGxpdENoaW5lc2UgPSAoKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovIC8vIEVzY2FwaW5nIGlzIG5lY2Vzc2FyeSBmb3IgdW5pY29kZSBSZWdFeHAuXG4gICAgLy8gU3ltYm9scyB1c2VkIGZvciBsYXRpbiB2ZWhpY2xlIG5hbWVzLCByYW5nZXMgZXRjLiBleHBlY3RlZCBub3QgYmUgd3JhcHBlZCBmcm9tIGVhY2ggb3RoZXIgb3IgZm9sbG93aW5nIHB1bmN0dWF0aW9uIG1hcmsuXG4gICAgLy8gWW91IGNhbiBhZGQgbmV3IG9uZXMgdG8gdGhlIHRoaXJkIHBhaXIgb2YgW10gKGN1cnJlbnRseSB0aGUgbGlzdCBpcyBbYS16QS1aMC05LeKAk+KAlCAl4oCmLlxcezNcXH0vXSlcbiAgICBjb25zdCBsYXRpbkluamVjdGlvbnMgPVxuICAgICAgICAvW1xccHtzYz1IYW5pfShdP1vjgILvvIzvvJrvvJvvvIHvvJ9dP1thLXpBLVrDgC3ItzAtOS3igJPigJQgXFx4YTAl4oCmLitcXHszXFx9L10rW1xccHtzYz1IYW5pfeOAgu+8jO+8mu+8m++8ge+8nyldP1vjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gVGhpcyBydWxlIHByZXZlbnRzIHdyYXBwaW5nIG9mIHNvbWUgc3ltYm9scyBuZWlnaGJvcmluZyB0byB0aGUgYnJhY2tldHMvcXVvdGVzLlxuICAgIC8vIFBhaXJzIG9mIG9wZW5pbmcgKGxlZnQpIGFuZCBjbG9zaW5nIChyaWdodCkgc3ltYm9scyBhcmUgZGVzY3JpYmVkLlxuICAgIC8vIE9ubHkgdXNlIHNlcGFyYXRlIHVuaWNvZGUgc3ltYm9scyBmb3IgbGVmdCBhbmQgcmlnaHQgcGFydCjCq8K7KSwgYnV0IE5PVCB1bml2ZXJzYWwgb25lcyAoXCIpLlxuICAgIC8vIEluIGNhc2UgaWYgdW5pdmVyc2FsIHN5bWJvbCBpcyB1c2VkIGluIHRoZSB0cmFuc2xhdGlvbiwgdGhlIHRyYW5zbGF0aW9uIG11c3QgYmUgZml4ZWQsIG5vdCB0aGUgcnVsZS5cbiAgICBjb25zdCBicmFja2V0c0FuZFF1b3RlcyA9XG4gICAgICAgIC9bXFwo4p2d4oCcwqtdXFxwe3NjPUhhbml9XFxQe3NjPUhhbml9P3xcXHB7c2M9SGFuaX1cXFB7c2M9SGFuaX0/W+OAgu+8jO+8mu+8m++8ge+8n10/W1xcKeKdnuKAncK7XVvjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gUnVsZSBkZXNjcmliZXMgdGhhdCBwcmV2aW91cyBoaWVyb2dseXBoIHNob3VsZCBub3QgYmUgd3JhcHBlZC5cbiAgICAvLyBPbmx5IHVuaWNvZGUgcHVuY3R1YXRpb24gbWFya3MgYXJlIHVzZWQgZm9yIGFzaWFuIGxhbmd1YWdlcy5cbiAgICAvLyBPdGhlcndpc2Ugc3RyaW5nIHNob3VsZCBiZSBmaXhlZCB0byB1c2UgdW5pY29kZSBwdW5jdHVhdGlvbiBtYXJrcywgbm90IHRoZSBydWxlLlxuICAgIGNvbnN0IHB1bmN0dWF0aW9uTWFya3MgPSAvXFxwe0x9P1vjgILvvIw6IDsg77ya77yb77yB77yf44CK44CL44CM44CN4oCiKeOAgV18WyhcXHB7TH17MSx9XS9nbXU7ICAgIFxuICAgIC8vIFRoaXMgcnVsZSBtYWtlcyBpdCBwb3NzaWJsZSB0byB3cmFwIGFueSBuZWlnaGJvcmluZyBwYWlyIG9mIGhpZXJvZ2x5cGhzLlxuICAgIGNvbnN0IG5laWdoYm9yaW5nSGllcm9nbHlwaHMgPSAvXFxwe3NjPUhhbml9L2dtdTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvLyBPcmRlciBpcyBpbXBvcnRhbnQuXG4gICAgY29uc3QgbWFpblJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgbGF0aW5JbmplY3Rpb25zLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgYnJhY2tldHNBbmRRdW90ZXMuc291cmNlICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICBwdW5jdHVhdGlvbk1hcmtzLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdIaWVyb2dseXBocy5zb3VyY2UsXG4gICAgICAgICdndW0nLFxuICAgICk7XG4gICAgcmV0dXJuIChzdHJpbmdzVG9TcGxpdDogc3RyaW5nKSA9PlxuICAgICAgICBzdHJpbmdzVG9TcGxpdFxuICAgICAgICAgICAgLnJlcGxhY2UoLyZuYnNwOy9nLCAnXFx4YTAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyAvZywgJ1xceGEwJylcbiAgICAgICAgICAgIC5tYXRjaChtYWluUmVnZXgpO1xufSkoKTtcblxuY29uc3QgQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyA9IFsnemhfY24nLCAnemhfc2cnLCAnemhfdHcnXTtcblxuLyoqXG4gKiBTcGxpdCBvbmUgbGluZSBvZiBsb2NhbGl6ZWQgdGV4dCB0byBhcnJheSBvZiB3b3JkcyB3aGljaCB0aGVuIGNhbiBiZSBsaW5lLXdyYXBwZWQgYnkgZ2FtZWZhY2UuXG4gKiBAcGFyYW0gc3RyaW5nVG9TcGxpdCBzdXBwb3J0cyAmbmJzcCwgaHlwaGVucyBhbmQgZGFzaGVzIGZvciBhc2lhbiBsYW5ndWFnZXMuXG4gKiBAcGFyYW0gYWxpZ25tZW50IHNldCB0byBgcmlnaHRgIGZvciByaWdodC1hbGlnbmVkIHRleHRcbiAqIFNlZSB0ZXN0cyBmb3IgZXhhbXBsZVxuICovXG5cbmV4cG9ydCBjb25zdCBzcGxpdFdvcmRzID0gKHN0cmluZ1RvU3BsaXQ6IHN0cmluZywgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IFIuc3RyaW5ncy5zZXR0aW5ncy5MQU5HVUFHRV9DT0RFKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChDSElORVNFX0xBTkdVQUdFX0NPREVTLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuICAgICAgICByZXR1cm4gc3BsaXRDaGluZXNlKHN0cmluZ1RvU3BsaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdEV1cm9wZWFuKHN0cmluZ1RvU3BsaXQsIGFsaWdubWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0U3RyaW5nID0gKHRleHQ6IHN0cmluZywgYWxpZ25tZW50OiBBbGlnbm1lbnQsIGJpbmRpbmc/OiBCaW5kaW5nKTogQXJyYXk8c3RyaW5nIHwgUmVhY3ROb2RlPiA9PlxuICAgIHRleHQuc3BsaXQoLyVcXCgoLio/KVxcKSg/OltzZF0pPy9nKS5tYXAoKHN1YlN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghYmluZGluZykgeyByZXR1cm4gc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7IH1cbiAgICAgICAgcmV0dXJuIHN1YlN0cmluZyBpbiBiaW5kaW5nID8gYmluZGluZ1tzdWJTdHJpbmddIDogc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7XG4gICAgfSk7XG5cbiIsImNsYXNzIENsaWNrT3V0c2lkZU1hbmFnZXIge1xyXG4gICAgZW50cmllczoge1xyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICB9W10gPSBbXTtcclxuICAgIF9saXN0ZW5Nb3VzZSA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBfX2luc3RhbmNlOiBDbGlja091dHNpZGVNYW5hZ2VyO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFDbGlja091dHNpZGVNYW5hZ2VyLl9faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgQ2xpY2tPdXRzaWRlTWFuYWdlci5fX2luc3RhbmNlID0gbmV3IENsaWNrT3V0c2lkZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBDbGlja091dHNpZGVNYW5hZ2VyLl9faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmFkZE1vdXNlTGlzdGVuZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMuZW50cmllcy5maWx0ZXIoKHsgY29udGFpbmVyLCBjYWxsYmFjayB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IHRhcmdldENvbnRhaW5lciB8fCBjYWxsYmFjayAhPT0gdGFyZ2V0Q2FsbGJhY2s7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlTW91c2VMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1vdXNlTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5Nb3VzZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuTW91c2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNb3VzZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5Nb3VzZSAmJiB0aGlzLmVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5Nb3VzZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKCh7IGNvbnRhaW5lciwgY2FsbGJhY2sgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0OiBFdmVudFRhcmdldCB8IG51bGwgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgY2xpY2sgaW4gaW5uZXIgYXJlYSBvciBjbG9zZSBidXR0b24uIG5lZWQgdG8gY2hlY2sgY2xvc2UgYnV0dG9uIHRvbyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIG1vdXNlZG93blxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0cyBwYXJlbnQgaXMgbm90IHBvcG92ZXIgY29udGVudCBibG9jaywgc28gcG9wb3ZlciBjbG9zZXMgaW5jb3JyZWN0bHlcclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nLCBqdXN0IHJldHVybi5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBnbyB1cCB0aGUgRE9NXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGNsaWNrIG91dHNpZGUuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGlja091dHNpZGVNYW5hZ2VyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5cclxuaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XHJcblxyXG5jbGFzcyBEYXRhVHJhY2tlciB7XHJcbiAgICBfY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogKGRhdGE6IGFueSwgaW5kZXhlczogYW55KSA9PiB2b2lkO1xyXG4gICAgfTtcclxuICAgIF91cGRhdGVIYW5kbGVyOlxyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB2b2lkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHwgdW5kZWZpbmVkO1xyXG4gICAgX3ZpZXdzOiB7IFtpZDogc3RyaW5nXTogbnVtYmVyW10gfTtcclxuXHJcbiAgICBzdGF0aWMgX19pbnN0YW5jZTogRGF0YVRyYWNrZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgdGhpcy5fdmlld3MgPSB7fTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGhhdmUgb25lIGluc3RhbmNlIGZvciBkaWZmZXJlbnQgYnVuZGxlc1xyXG4gICAgICAgIGlmICghd2luZG93Ll9fZGF0YVRyYWNrZXIpIHtcclxuICAgICAgICAgICAgd2luZG93Ll9fZGF0YVRyYWNrZXIgPSBuZXcgRGF0YVRyYWNrZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19kYXRhVHJhY2tlciBhcyBEYXRhVHJhY2tlcjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXBkYXRlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhhbmRsZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGFuZGxlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVmlld0NhbGxiYWNrcyA9ICh2aWV3SWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl92aWV3c1t2aWV3SWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3ZpZXdJZF0uZm9yRWFjaCgoY2FsbGJhY2tJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhY2tlciBjbGVhbmVkIHVwIG9uIGludGVncmF0aW9uIHNpZGVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2tJZCwgdmlld0lkKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ZpZXdzW3ZpZXdJZF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDYWxsYmFjayhcclxuICAgICAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZT86IGFueSwgaW5kZXhlcz86IEFycmF5PG51bWJlcj4pID0+IHZvaWQsXHJcbiAgICAgICAgcmVzSWQgPSAwLFxyXG4gICAgICAgIHRyYWNrSW5EZXB0aCA9IHRydWUsXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGFuZGxlciA9IGVuZ2luZS5vbigndmlld0Vudi5vbkRhdGFDaGFuZ2VkJywgdGhpcy5fZW1taXREYXRhQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWxsYmFja0lEID0gZW52LnZpZXcuYWRkTW9kZWxPYnNlcnZlcihwYXRoLCByZXNJZCwgdHJhY2tJbkRlcHRoKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrSUQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tjYWxsYmFja0lEXSA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc0lkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXdzW3Jlc0lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3Jlc0lkXS5wdXNoKGNhbGxiYWNrSUQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3c1tyZXNJZF0gPSBbY2FsbGJhY2tJRF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgYWRkIGNhbGxiYWNrIGZvciBtb2RlbDpcIiwgcGF0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2tJRDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDYWxsYmFjayhjYWxsYmFja0lEOiBudW1iZXIsIHJlc0lkID0gMCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrSUQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWxsYmFja3NbY2FsbGJhY2tJRF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB2aWV3RW52LnJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2soY2FsbGJhY2tJRCwgcmVzSWQpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tjYWxsYmFja0lEXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCByZW1vdmUgY2FsbGJhY2sgYnkgaWQ6XCIsIGNhbGxiYWNrSUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfZW1taXREYXRhQ2hhbmdlZChkYXRhOiBhbnksIGluZGV4ZXM6IGFueSwgY2FsbGJhY2tJRHM6IGFueVtdKSB7XHJcbiAgICAgICAgY2FsbGJhY2tJRHMuZm9yRWFjaCgoY2FsbGJhY2tJRCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrc1tjYWxsYmFja0lEXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhLCBpbmRleGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhVHJhY2tlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5cclxuaW1wb3J0IERhdGFUcmFja2VyIGZyb20gJy4vRGF0YVRyYWNrZXInO1xyXG5pbXBvcnQgeyBvbkJpbmRpbmdzUmVhZHkgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNsYXNzIFZpZXdNb2RlbCB7XHJcbiAgICBkYXRhVHJhY2tlcjogRGF0YVRyYWNrZXI7XHJcbiAgICBtb2RlbFBhdGg6IHN0cmluZztcclxuICAgIGNhbGxiYWNrczogU2V0PCgoZGF0YT86IGFueSkgPT4gdm9pZCk+O1xyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZywgd2F0Y2hpbmdGaWVsZHMgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVRyYWNrZXIgPSBuZXcgRGF0YVRyYWNrZXIoKTtcclxuICAgICAgICB0aGlzLm1vZGVsUGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIG9uQmluZGluZ3NSZWFkeSgpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENhbGxiYWNrKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdhdGNoaW5nRmllbGRzLmZvckVhY2goKHN1ZmZpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZENhbGxiYWNrKHBhdGggKyAnLicgKyBzdWZmaXgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShjYWxsYmFjazogKGRhdGE/OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVRyYWNrZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRDYWxsYmFjayhwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFUcmFja2VyLmFkZENhbGxiYWNrKHBhdGgsIHRoaXMuX25vdGlmeU9ic2VydmVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgX25vdGlmeU9ic2VydmVycyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBldmFsKHRoaXMubW9kZWxQYXRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdNb2RlbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBWaWV3TW9kZWwobW9kZWw6IGFueSkge1xyXG4gICAgY29uc3QgcmVzdWx0OiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogQXJyYXk8e1xyXG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICAgICAgfT47XHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtb2RlbCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBtb2RlbCkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kZWwsIHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZGVsW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ1tvYmplY3QgQ29oZXJlbnRBcnJheVByb3h5XScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheTogYW55ID0gbW9kZWxbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0ucHVzaCh7IHZhbHVlOiBkdW1wVmlld01vZGVsKGFycmF5W2ldLnZhbHVlKSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ1tvYmplY3QgY2xhc3MgQlc6OldVTEY6OlZpZXdNb2RlbCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcGVydHldID0gZHVtcFZpZXdNb2RlbChtb2RlbFtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IG1vZGVsW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCAnLi9zaG93TW9kZWwnO1xyXG5cclxuaW1wb3J0IENsaWNrT3V0c2lkZU1hbmFnZXJDbGFzcyBmcm9tICcuL0NsaWNrT3V0c2lkZU1hbmFnZXInO1xyXG5pbXBvcnQgRGF0YVRyYWNrZXIgZnJvbSAnLi9EYXRhVHJhY2tlcic7XHJcbmltcG9ydCB7IGR1bXBWaWV3TW9kZWwgfSBmcm9tICcuL2R1bXBWaWV3TW9kZWwnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Mb2NhbGUsIFVzZXJMb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXRUeXBlLCBOdW1iZXJGb3JtYXRUeXBlLCBSZWFsRm9ybWF0VHlwZSwgVGltZUZvcm1hdFR5cGUsIFZpZXdFdmVudFR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIGFkZEVzY2FwZUxpc3RlbmVyLFxyXG4gICAgY2xvc2VPbkVzYyxcclxuICAgIGhhbmRsZVZpZXdFdmVudCxcclxuICAgIGlzQ29udGV4dE1lbnVTaG93bixcclxuICAgIGlzUG9wT3ZlclNob3duLFxyXG4gICAgaXNUb29sdGlwU2hvd24sXHJcbiAgICBtYWtlR2xvYmFsQm91bmRpbmdCb3gsXHJcbiAgICBvbkJpbmRpbmdzUmVhZHksXHJcbiAgICBvbkxheW91dFJlYWR5LFxyXG4gICAgc2VuZENsb3NlRXZlbnQsXHJcbiAgICBzZW5kQ2xvc2VQb3BPdmVyRXZlbnQsXHJcbiAgICBzZW5kTW92ZUV2ZW50LFxyXG4gICAgc2VuZFNob3dDb250ZXh0TWVudUV2ZW50LFxyXG4gICAgc2VuZFNob3dQb3BPdmVyRXZlbnQsXHJcbn0gZnJvbSAnLi92aWV3LWV2ZW50cyc7XHJcbmltcG9ydCBWaWV3TW9kZWwgZnJvbSAnLi9WaWV3TW9kZWwnO1xyXG5cclxuY29uc3QgQ2xpY2tPdXRzaWRlTWFuYWdlciA9IENsaWNrT3V0c2lkZU1hbmFnZXJDbGFzcy5pbnN0YW5jZTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBEYXRhVHJhY2tlcixcclxuICAgIFZpZXdNb2RlbCxcclxuICAgIFZpZXdFdmVudFR5cGUsXHJcbiAgICBOdW1iZXJGb3JtYXRUeXBlLFxyXG4gICAgUmVhbEZvcm1hdFR5cGUsXHJcbiAgICBUaW1lRm9ybWF0VHlwZSxcclxuICAgIERhdGVGb3JtYXRUeXBlLFxyXG4gICAgbWFrZUdsb2JhbEJvdW5kaW5nQm94LFxyXG4gICAgc2VuZE1vdmVFdmVudCxcclxuICAgIHNlbmRDbG9zZUV2ZW50LFxyXG4gICAgc2VuZENsb3NlUG9wT3ZlckV2ZW50LFxyXG4gICAgc2VuZFNob3dDb250ZXh0TWVudUV2ZW50LFxyXG4gICAgc2VuZFNob3dQb3BPdmVyRXZlbnQsXHJcbiAgICBhZGRFc2NhcGVMaXN0ZW5lcixcclxuICAgIGNsb3NlT25Fc2MsXHJcbiAgICBoYW5kbGVWaWV3RXZlbnQsXHJcbiAgICBvbkJpbmRpbmdzUmVhZHksXHJcbiAgICBvbkxheW91dFJlYWR5LFxyXG4gICAgaXNUb29sdGlwU2hvd24sXHJcbiAgICBpc0NvbnRleHRNZW51U2hvd24sXHJcbiAgICBpc1BvcE92ZXJTaG93bixcclxuICAgIGR1bXBWaWV3TW9kZWwsXHJcbiAgICBDbGlja091dHNpZGVNYW5hZ2VyLFxyXG4gICAgU3lzdGVtTG9jYWxlLFxyXG4gICAgVXNlckxvY2FsZSxcclxufTtcclxuXHJcbmNvbnN0IFZpZXdFbnZIZWxwZXIgPSB7XHJcbiAgICBEYXRhVHJhY2tlcixcclxuICAgIFZpZXdNb2RlbCxcclxuICAgIFZpZXdFdmVudFR5cGUsXHJcbiAgICBOdW1iZXJGb3JtYXRUeXBlLFxyXG4gICAgUmVhbEZvcm1hdFR5cGUsXHJcbiAgICBUaW1lRm9ybWF0VHlwZSxcclxuICAgIERhdGVGb3JtYXRUeXBlLFxyXG4gICAgbWFrZUdsb2JhbEJvdW5kaW5nQm94LFxyXG4gICAgc2VuZE1vdmVFdmVudCxcclxuICAgIHNlbmRDbG9zZUV2ZW50LFxyXG4gICAgc2VuZENsb3NlUG9wT3ZlckV2ZW50LFxyXG4gICAgc2VuZFNob3dDb250ZXh0TWVudUV2ZW50LFxyXG4gICAgc2VuZFNob3dQb3BPdmVyRXZlbnQsXHJcbiAgICBhZGRFc2NhcGVMaXN0ZW5lcixcclxuICAgIGNsb3NlT25Fc2MsXHJcbiAgICBoYW5kbGVWaWV3RXZlbnQsXHJcbiAgICBvbkJpbmRpbmdzUmVhZHksXHJcbiAgICBvbkxheW91dFJlYWR5LFxyXG4gICAgaXNUb29sdGlwU2hvd24sXHJcbiAgICBpc0NvbnRleHRNZW51U2hvd24sXHJcbiAgICBpc1BvcE92ZXJTaG93bixcclxuICAgIGR1bXBWaWV3TW9kZWwsXHJcbiAgICBDbGlja091dHNpZGVNYW5hZ2VyLFxyXG4gICAgU3lzdGVtTG9jYWxlLFxyXG4gICAgVXNlckxvY2FsZSxcclxufTtcclxuXHJcbndpbmRvdy5WaWV3RW52SGVscGVyID0gVmlld0VudkhlbHBlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdFbnZIZWxwZXI7XHJcbiIsImV4cG9ydCBjb25zdCBTeXN0ZW1Mb2NhbGUgPSB7XHJcbiAgICBnZXROdW1iZXJGb3JtYXQodmFsdWU6IG51bWJlciwgdHlwZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtTG9jYWxlLmdldE51bWJlckZvcm1hdCh2YWx1ZSwgdHlwZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFJlYWxGb3JtYXQodmFsdWU6IG51bWJlciwgdHlwZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtTG9jYWxlLmdldFJlYWxGb3JtYXQodmFsdWUsIHR5cGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUaW1lRm9ybWF0KHV0YzogbnVtYmVyLCB0eXBlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1Mb2NhbGUuZ2V0VGltZUZvcm1hdCh1dGMsIHR5cGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXREYXRlRm9ybWF0KHV0YzogbnVtYmVyLCB0eXBlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1Mb2NhbGUuZ2V0RGF0ZUZvcm1hdCh1dGMsIHR5cGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b1VwcGVyQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN5c3RlbUxvY2FsZS50b1VwcGVyQ2FzZShzdHIpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b0xvd2VyQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN5c3RlbUxvY2FsZS50b1VwcGVyQ2FzZShzdHIpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9jYWxlID0ge1xyXG4gICAgZ2V0TnVtYmVyRm9ybWF0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlckxvY2FsZS5nZXROdW1iZXJGb3JtYXQodmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgc3RyaW5nIHByZXNlbnRhdGlvbiBvZiBkYXRhIGFuZCB0aW1lIHVzaW5nIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0gcGF0dGVybiBUaGUgc3RyaW5nIGNvbnRhaW5pbmcgY29udmVyc2lvbiBzcGVjaWZpZXJzLFxyXG4gICAgICogICAgICBzZWUgc3RkOjpwdXRfdGltZSB0byBnZXQgYXZhaWxhYmxlIHNwZWNpZmllcnMsIGZvciBleGFtcGxlLlxyXG4gICAgICogQHBhcmFtIHV0YyBUaGUgbnVtYmVyIGNvbnRhaW5pbmcgdGltZSBpbiBzZWNvbmRzIHNpbmNlIHRoZSBFcG9jaC5cclxuICAgICAqIEBwYXJhbSB0aW1lVG9Mb2NhbCBJcyB0aW1lIGNvbnZlcnRlZCB0byBsb2NhbCB0aW1lLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyBjb250YWluaW5nIHByZXNlbnRhdGlvbiBvZiBkYXRhIGFuZCB0aW1lLlxyXG4gICAgICovXHJcbiAgICBnZXRUaW1lRm9ybWF0KHBhdHRlcm46IHN0cmluZywgdXRjOiBudW1iZXIsIHRpbWVUb0xvY2FsOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdXNlckxvY2FsZS5nZXRUaW1lRm9ybWF0KHBhdHRlcm4sIHV0YywgdGltZVRvTG9jYWwgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aW1lVG9Mb2NhbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBzdHJpbmcgcHJlc2VudGF0aW9uIG9mIGRhdGEgYW5kIHRpbWUgdXNpbmcgSUQgb2Ygc3RyaW5nIHJlc291cmNlLlxyXG4gICAgICogQHBhcmFtIHJlc291cmNlSUQgVGhlIElEIG9mIHN0cmluZyByZXNvdXJjZSB3aGVyZSBwbGFjZSBjb252ZXJzaW9uIHNwZWNpZmllcnMuXHJcbiAgICAgKiBAcGFyYW0gdXRjIFRoZSBudW1iZXIgY29udGFpbmluZyB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIEVwb2NoLlxyXG4gICAgICogQHBhcmFtIHRpbWVUb0xvY2FsIElzIHRpbWUgY29udmVydGVkIHRvIGxvY2FsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyaW5nIGNvbnRhaW5pbmcgcHJlc2VudGF0aW9uIG9mIGRhdGEgYW5kIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVTdHJpbmcocmVzb3VyY2VJRDogbnVtYmVyLCB1dGM6IG51bWJlciwgdGltZVRvTG9jYWw6IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gdXNlckxvY2FsZS5nZXRUaW1lU3RyaW5nKHJlc291cmNlSUQsIHV0YywgdGltZVRvTG9jYWwgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aW1lVG9Mb2NhbCk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCBzaG93TW9kZWwgPSAobW9kZWw6IGFueSA9IHdpbmRvdy5tb2RlbCwgZGVwdGggPSAxNik6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICBgRGVwdGggbGltaXQgaGFzIGJlZW4gcmVhY2hlZC5cclxuICAgICAgICAgICAgWW91IGNhbiBjaGFuZ2UgdGhlIGxpbWl0IHdpdGggc2Vjb25kIGFyZ3VtZW50LlxyXG4gICAgICAgICAgICBVc2UgX3Nob3dNb2RlbChtb2RlbCwgPG51bWJlcj4pIGZvciB0aGlzLiAxNiBpcyBkZWZhdWx0LmAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiAnRGVwdGggbGltaXQgaGFzIGJlZW4gcmVhY2hlZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kZWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBtb2RlbCkge1xyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgY2FzZSAnYmlnaW50JzpcclxuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmdW5jdGlvbic7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gbW9kZWwuY29uc3RydWN0b3I/Lm5hbWUgPz8gJ1VOS05PV04nO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLmluY2x1ZGVzKCdDb2hlcmVudEFycmF5UHJveHknKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5tb2RlbC52YWx1ZXMoKV0ubWFwKChpdGVtKSA9PiBzaG93TW9kZWwoaXRlbSwgZGVwdGggLSAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZSA9PT0gJ1VOS05PV04nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1VOS05PV05fVFlQRSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5pbmNsdWRlcygnVmlld01vZGVsJyk6XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2RlbCwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc2hvd01vZGVsKG1vZGVsW2tleV0sIGRlcHRoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFVua25vd246ICR7U3RyaW5nKG1vZGVsKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAod2luZG93IGFzIGFueSkuX3Nob3dNb2RlbCA9IHNob3dNb2RlbDtcclxufVxyXG4iLCJleHBvcnQgZW51bSBWaWV3RXZlbnRUeXBlIHtcclxuICAgIFVOREVGSU5FRCA9IDAsXHJcbiAgICBUT09MVElQID0gMSxcclxuICAgIFBPUF9PVkVSID0gMixcclxuICAgIENPTlRFWFRfTUVOVSA9IDQsXHJcbiAgICAvLyBEUk9QX0RPV04gaXMgbm90IHVzZWQgZHVlIHRvIGNvbWJvYm94IGlzIG5hdGl2ZSBKYXZhU2NyaXB0IGNvbXBvbmVudCBvbiB0aGUgR2FtZUZhY2UuXHJcbiAgICBEUk9QX0RPV04gPSA4LFxyXG4gICAgTU9WRSA9IDE2LFxyXG4gICAgQ0xPU0UgPSAzMixcclxuICAgIE1JTklNSVpFID0gNjQsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOdW1iZXJGb3JtYXRUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBJTlRFR1JBTDogMCxcclxuICAgIEdPTEQ6IDEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWxGb3JtYXRUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBGUkFDVElPTkFMOiAwLFxyXG4gICAgV09fWkVST19ESUdJVFM6IDEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVGb3JtYXRUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBTSE9SVF9GT1JNQVQ6IDAsXHJcbiAgICBMT05HX0ZPUk1BVDogMSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZUZvcm1hdFR5cGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIFNIT1JUX0ZPUk1BVDogMCxcclxuICAgIExPTkdfRk9STUFUOiAxLFxyXG4gICAgWUVBUl9NT05USDogMixcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBDbGllbnRSZWN0ID0gUmVhZG9ubHk8e1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59PjtcclxuXHJcbmV4cG9ydCB0eXBlIFZpZXdFdmVudEFyZ3MgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfTtcclxuZXhwb3J0IHR5cGUgVmlld0V2ZW50T3B0aW9ucyA9IFBpY2s8XHJcbiAgICBHRlZpZXdFdmVudFByb3h5LFxyXG4gICAgJ2NvbnRlbnRJRCcgfCAnZGVjb3JhdG9ySUQnIHwgJ3RhcmdldElEJyB8ICdpc01vdXNlRXZlbnQnIHwgJ29uJyB8ICdkaXJlY3Rpb24nIHwgJ2Jib3gnXHJcbj4gJiB7IGFyZ3M/OiBWaWV3RXZlbnRBcmdzIH07XHJcbiIsImltcG9ydCB7IEtFWV9DT0RFUyB9IGZyb20gJ2xpYi9rZXljb2Rlcyc7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gJy4uL2Vudic7XG5pbXBvcnQgeyBDbGllbnRSZWN0LCBWaWV3RXZlbnRBcmdzLCBWaWV3RXZlbnRPcHRpb25zLCBWaWV3RXZlbnRUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtYWtlR2xvYmFsQm91bmRpbmdCb3ggPSAoY2xpZW50UmVjdDogQ2xpZW50UmVjdCk6IEdGQm91bmRpbmdCb3ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIF9fVHlwZTogJ0dGQm91bmRpbmdCb3gnLFxuICAgICAgICB4OiBjbGllbnRSZWN0LngsXG4gICAgICAgIHk6IGNsaWVudFJlY3QueSxcbiAgICAgICAgd2lkdGg6IGNsaWVudFJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogY2xpZW50UmVjdC5oZWlnaHQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkJpbmRpbmdzUmVhZHkgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGVuZ2luZS5fQmluZGluZ3NSZWFkeSAmJiBlbmdpbmUuX1dpbmRvd0xvYWRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZW5naW5lLm9uKCdSZWFkeScsIHJlc29sdmUpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uTGF5b3V0UmVhZHkgPSAoKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuY29uc3QgY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzID0gKGRhdGE6IFZpZXdFdmVudEFyZ3MpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiBHRlZhbHVlUHJveHkgPSB7XG4gICAgICAgICAgICBfX1R5cGU6ICdHRlZhbHVlUHJveHknLFxuICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICB9O1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBvdXQubnVtYmVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICBvdXQuYm9vbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgb3V0LnN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVWaWV3RXZlbnQgPSAodHlwZTogVmlld0V2ZW50VHlwZSwgb3B0aW9ucz86IFZpZXdFdmVudE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBfX1R5cGUgPSAnR0ZWaWV3RXZlbnRQcm94eSc7XG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB7IGFyZ3MsIC4uLnJlc3RPcHRpb25zIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChhcmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyhhcmdzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xuICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIC4uLnJlc3RPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKiogQGRlcHJlY2F0ZWQgVXNlIGVudi52aWV3LnNlbmRFdmVudC5tb3ZlIG1ldGhvZCBpbnN0ZWFkLiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRNb3ZlRXZlbnQgPSAoc3RhcnQ6IGJvb2xlYW4pID0+XG4gICAgaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuTU9WRSwge1xuICAgICAgICBpc01vdXNlRXZlbnQ6IHRydWUsXG4gICAgICAgIG9uOiBzdGFydCxcbiAgICB9KTtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgZW52LnZpZXcuc2VuZEV2ZW50LmNsb3NlIG1ldGhvZCBpbnN0ZWFkLiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRDbG9zZUV2ZW50ID0gKCkgPT4gaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuQ0xPU0UpO1xuZXhwb3J0IGNvbnN0IHNlbmRDbG9zZVBvcE92ZXJFdmVudCA9ICgpID0+IGhhbmRsZVZpZXdFdmVudChWaWV3RXZlbnRUeXBlLlBPUF9PVkVSLCB7IG9uOiBmYWxzZSB9KTtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgZW52LnZpZXcuc2VuZEV2ZW50Lm1pbmltaXplIG1ldGhvZCBpbnN0ZWFkLiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRNaW5pbWl6ZUV2ZW50ID0gKCkgPT4gaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuTUlOSU1JWkUpO1xuXG5leHBvcnQgY29uc3Qgc2VuZFNob3dDb250ZXh0TWVudUV2ZW50ID0gKGNvbnRlbnRJRDogbnVtYmVyLCBhcmdzPzogVmlld0V2ZW50QXJncywgZGVjb3JhdG9ySUQgPSAwKSA9PiB7XG4gICAgaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuQ09OVEVYVF9NRU5VLCB7XG4gICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcbiAgICAgICAgY29udGVudElEOiBjb250ZW50SUQsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBkZWNvcmF0b3JJRDogZGVjb3JhdG9ySUQsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFNob3dQb3BPdmVyRXZlbnQgPSAoXG4gICAgY29udGVudElEOiBudW1iZXIsXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXG4gICAgbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgZGVjb3JhdG9ySUQ/OiBudW1iZXIsXG4gICAgdGFyZ2V0SUQgPSBSLmludmFsaWQoJ3Jlc0lkJyksXG4gICAgYXJncz86IFZpZXdFdmVudEFyZ3MsXG4pID0+IHtcbiAgICBjb25zdCBnbG9iYWxQb3NpdGlvbiA9IGVudi52aWV3LmdldFZpZXdHbG9iYWxQb3NpdGlvbigpO1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjbGllbnRSZWN0UHggPSB7XG4gICAgICAgIHg6IGVudi52aWV3LnB4VG9SZW0oeCkgKyBnbG9iYWxQb3NpdGlvbi54LFxuICAgICAgICB5OiBlbnYudmlldy5weFRvUmVtKHkpICsgZ2xvYmFsUG9zaXRpb24ueSxcbiAgICAgICAgd2lkdGg6IGVudi52aWV3LnB4VG9SZW0od2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IGVudi52aWV3LnB4VG9SZW0oaGVpZ2h0KSxcbiAgICB9O1xuXG4gICAgaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuUE9QX09WRVIsIHtcbiAgICAgICAgaXNNb3VzZUV2ZW50OiB0cnVlLFxuICAgICAgICBjb250ZW50SUQ6IGNvbnRlbnRJRCxcbiAgICAgICAgZGVjb3JhdG9ySUQ6IGRlY29yYXRvcklEIHx8IFIuaW52YWxpZCgncmVzSWQnKSxcbiAgICAgICAgdGFyZ2V0SUQ6IHRhcmdldElELFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgYmJveDogbWFrZUdsb2JhbEJvdW5kaW5nQm94KGNsaWVudFJlY3RQeCksXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBhcmdzOiBhcmdzLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVG9vbHRpcFNob3duID0gKCkgPT4gdmlld0Vudi5pc1dpbmRvd1Nob3duQnlWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5UT09MVElQKTtcbmV4cG9ydCBjb25zdCBpc0NvbnRleHRNZW51U2hvd24gPSAoKSA9PiB2aWV3RW52LmlzV2luZG93U2hvd25CeVZpZXdFdmVudChWaWV3RXZlbnRUeXBlLkNPTlRFWFRfTUVOVSk7XG5leHBvcnQgY29uc3QgaXNQb3BPdmVyU2hvd24gPSAoKSA9PiB2aWV3RW52LmlzV2luZG93U2hvd25CeVZpZXdFdmVudChWaWV3RXZlbnRUeXBlLlBPUF9PVkVSKTtcblxuZXhwb3J0IGNvbnN0IGNhbGxPbkVzYyA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgICBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERVMuRVNDQVBFICYmIGNhbGxiYWNrKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VPbkVzYyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNhbGxPbkVzYyhldmVudCwgc2VuZENsb3NlRXZlbnQpO1xufTtcblxuLyoqIEBkZXByZWNhdGVkIERvbid0IHVzZSBpdCB3aXRoIGhvb2tzLiBVc2UgdXNlS2V5ZG93bkxpc3RlbmVyLCB1c2VDYWxsYmFja09uRXNjIG9yIHVzZUNsb3NlT25Fc2MgaG9va3MgaW5zdGVhZC4gKi9cbmV4cG9ydCBjb25zdCBhZGRFc2NhcGVMaXN0ZW5lciA9IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUZ1bmMgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGNhbGxPbkVzYyhldmVudCwgY2FsbGJhY2spO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRnVuYyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRnVuYyk7XG59O1xuIiwiaW1wb3J0IHsgTWVkaWFQcm92aWRlciB9IGZyb20gJ2NvbXBvbmVudHMvTWVkaWFRdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZWRpYVdyYXBwZXJJbm5lciB9IGZyb20gJy4vTWVkaWFXcmFwcGVySW5uZXInO1xuaW1wb3J0IHsgTWVkaWFXcmFwcGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IE1lZGlhV3JhcHBlciA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IE1lZGlhV3JhcHBlclByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lZGlhUHJvdmlkZXI+XG4gICAgICAgICAgICA8TWVkaWFXcmFwcGVySW5uZXIgey4uLnJlc3R9PntjaGlsZHJlbn08L01lZGlhV3JhcHBlcklubmVyPlxuICAgICAgICA8L01lZGlhUHJvdmlkZXI+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTIGZyb20gJ2dsb2JhbC1zdHlsZXMvbWl4aW5zL21lZGlhQ3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lZGlhSGVpZ2h0LCBNZWRpYVNpemUsIE1lZGlhV2lkdGgsIHVzZU1lZGlhIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWVkaWEnO1xuaW1wb3J0IHsgTWVkaWFXcmFwcGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgV0lEVEhfQ0xBU1NFUyA9IHtcbiAgICBbTWVkaWFXaWR0aC5FeHRyYVNtYWxsXTogJycsXG4gICAgW01lZGlhV2lkdGguU21hbGxdOiBDU1MuU01BTExfV0lEVEgsXG4gICAgW01lZGlhV2lkdGguTWVkaXVtXTogYCR7Q1NTLlNNQUxMX1dJRFRIfSAke0NTUy5NRURJVU1fV0lEVEh9YCxcbiAgICBbTWVkaWFXaWR0aC5MYXJnZV06IGAke0NTUy5TTUFMTF9XSURUSH0gJHtDU1MuTUVESVVNX1dJRFRIfSAke0NTUy5MQVJHRV9XSURUSH1gLFxuICAgIFtNZWRpYVdpZHRoLkV4dHJhTGFyZ2VdOiBgJHtDU1MuU01BTExfV0lEVEh9ICR7Q1NTLk1FRElVTV9XSURUSH0gJHtDU1MuTEFSR0VfV0lEVEh9ICR7Q1NTLkVYVFJBX0xBUkdFX1dJRFRIfWAsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBIRUlHSFRfQ0xBU1NFUyA9IHtcbiAgICBbTWVkaWFIZWlnaHQuRXh0cmFTbWFsbF06ICcnLFxuICAgIFtNZWRpYUhlaWdodC5TbWFsbF06IENTUy5TTUFMTF9IRUlHSFQsXG4gICAgW01lZGlhSGVpZ2h0Lk1lZGl1bV06IGAke0NTUy5TTUFMTF9IRUlHSFR9ICR7Q1NTLk1FRElVTV9IRUlHSFR9YCxcbiAgICBbTWVkaWFIZWlnaHQuTGFyZ2VdOiBgJHtDU1MuU01BTExfSEVJR0hUfSAke0NTUy5NRURJVU1fSEVJR0hUfSAke0NTUy5MQVJHRV9IRUlHSFR9YCxcbiAgICBbTWVkaWFIZWlnaHQuRXh0cmFMYXJnZV06IGAke0NTUy5TTUFMTF9IRUlHSFR9ICR7Q1NTLk1FRElVTV9IRUlHSFR9ICR7Q1NTLkxBUkdFX0hFSUdIVH0gJHtDU1MuRVhUUkFfTEFSR0VfSEVJR0hUfWAsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBTSVpFX0NMQVNTRVMgPSB7XG4gICAgW01lZGlhU2l6ZS5FeHRyYVNtYWxsXTogJycsXG4gICAgW01lZGlhU2l6ZS5TbWFsbF06IENTUy5TTUFMTCxcbiAgICBbTWVkaWFTaXplLk1lZGl1bV06IGAke0NTUy5TTUFMTH0gJHtDU1MuTUVESVVNfWAsXG4gICAgW01lZGlhU2l6ZS5MYXJnZV06IGAke0NTUy5TTUFMTH0gJHtDU1MuTUVESVVNfSAke0NTUy5MQVJHRX1gLFxuICAgIFtNZWRpYVNpemUuRXh0cmFMYXJnZV06IGAke0NTUy5TTUFMTH0gJHtDU1MuTUVESVVNfSAke0NTUy5MQVJHRX0gJHtDU1MuRVhUUkFfTEFSR0V9YCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBNZWRpYVdyYXBwZXJJbm5lciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfTogTWVkaWFXcmFwcGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG1lZGlhV2lkdGgsIG1lZGlhSGVpZ2h0LCBtZWRpYVNpemUgfSA9IHVzZU1lZGlhKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgV0lEVEhfQ0xBU1NFU1ttZWRpYVdpZHRoXSwgSEVJR0hUX0NMQVNTRVNbbWVkaWFIZWlnaHRdLCBTSVpFX0NMQVNTRVNbbWVkaWFTaXplXSl9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCB7IE1lZGlhV3JhcHBlciB9IGZyb20gJ2xpYi93cmFwcGVycy9NZWRpYVdyYXBwZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAvQXBwJztcclxuaW1wb3J0IHsgTW9kZWxQcm92aWRlciB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuZW5naW5lLndoZW5SZWFkeS50aGVuKCgpID0+IHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8TW9kZWxQcm92aWRlcj5cclxuICAgICAgICAgICAgPE1lZGlhV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAgICAgPC9NZWRpYVdyYXBwZXI+XHJcbiAgICAgICAgPC9Nb2RlbFByb3ZpZGVyPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCB7IFJld2FyZFR5cGUgfSBmcm9tICdjb21wb25lbnRzL1Jld2FyZHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGV4dEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvVGV4dEJ1dHRvbi9UZXh0QnV0dG9uJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2tPbkVzYyB9IGZyb20gJ2xpYi9ob29rcy91c2VLZXlkb3duTGlzdGVuZXInO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsJztcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi9EZXNjcmlwdGlvbi9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnO1xyXG5cclxuY29uc3QgVEVYVFMgPSBSLnN0cmluZ3MuYXJtb3J5X3lhcmQ7XHJcbmNvbnN0IFpFUk9fUFJJQ0UgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcCA9IG9ic2VydmVyKCgpID0+IHtcclxuICAgIGNvbnN0IHsgY29udHJvbHMsIG1vZGVsIH0gPSB1c2VNb2RlbCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdG9rZW5zQ291bnQsIHBheWVkVG9rZW5zTGltaXQsIGlzV2FsbGV0QXZhaWxhYmxlLCB1c2VyR29sZCB9ID0gbW9kZWwucm9vdC5nZXQoKTtcclxuICAgIGNvbnN0IHRva2VuUHJpY2UgPSBtb2RlbC5jb21wdXRlcy5nZXRUb2tlblByaWNlKCk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5SYXRlID0gdG9rZW5QcmljZS5wcmljZS5maW5kKChvbmVQcmljZSkgPT4gb25lUHJpY2UubmFtZSA9PT0gUmV3YXJkVHlwZS5Hb2xkKS52YWx1ZSB8fCBaRVJPX1BSSUNFO1xyXG5cclxuICAgIHVzZUNhbGxiYWNrT25Fc2MoY29udHJvbHMuYmFjayk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhc2V9PlxyXG4gICAgICAgICAgICA8VGV4dEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbj17VEVYVFMuY2xvc2VCdG4ubGFiZWwoKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBzaWRlPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcz17eyBiYXNlOiBzdHlsZXMuY2xvc2UgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLmNhbmNlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRva2Vuc0NvdW50PXt0b2tlbnNDb3VudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5JbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5SYXRlPXt0b2tlblJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2FsbGV0QXZhaWxhYmxlPXtpc1dhbGxldEF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV5PXtjb250cm9scy5idXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWVkVG9rZW5zTGltaXQ9e3BheWVkVG9rZW5zTGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJHb2xkPXt1c2VyR29sZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGVzY3JpcHRpb24uY3NzJztcclxuXHJcbmNvbnN0IFRFWFRTID0gUi5zdHJpbmdzLmFybW9yeV95YXJkLnBvc3Rwcm9ncmVzc2lvbi5idXlUb2tlbnMuZGVzY3JpcHRpb247XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBtZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cclxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHRleHQ9e1RFWFRTLnRpdGxlKCl9IC8+XHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufSB0ZXh0PXtURVhUUy5ib2R5KCl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBCdXR0b25UeXBlLCBDQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9CdXR0b24vQ0J1dHRvbic7XHJcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnY29tcG9uZW50cy9DdXJyZW5jeS9DdXJyZW5jeSc7XHJcbmltcG9ydCB7IEN1cnJlbmN5U2l6ZSwgQ3VycmVuY3lUeXBlIH0gZnJvbSAnY29tcG9uZW50cy9DdXJyZW5jeS90eXBlcyc7XHJcbmltcG9ydCB7IE51bWVyaWNTdGVwcGVyIH0gZnJvbSAnY29tcG9uZW50cy9OdW1lcmljU3RlcHBlci9OdW1lcmljU3RlcHBlcic7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2NvbXBvbmVudHMvVG9vbHRpcC9Ub29sdGlwJztcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnO1xyXG5cclxuY29uc3QgVEVYVFMgPSBSLnN0cmluZ3MuYXJtb3J5X3lhcmQucG9zdHByb2dyZXNzaW9uLmJ1eVRva2Vucy5mb290ZXI7XHJcblxyXG5jb25zdCBTVEVQX1NJWkUgPSAxO1xyXG5jb25zdCBTVEVQUEVSX1dJRFRIID0gMTAwO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVyUHJvcHMgPSBSZWFkb25seTx7XHJcbiAgICBpc1dhbGxldEF2YWlsYWJsZTogYm9vbGVhbjtcclxuICAgIHBheWVkVG9rZW5zTGltaXQ6IG51bWJlcjtcclxuICAgIHRva2VuUmF0ZTogbnVtYmVyO1xyXG4gICAgdXNlckdvbGQ6IG51bWJlcjtcclxuICAgIGJ1eTogKHRva2VuczogbnVtYmVyKSA9PiB2b2lkO1xyXG59PjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSBtZW1vKCh7IGlzV2FsbGV0QXZhaWxhYmxlLCBwYXllZFRva2Vuc0xpbWl0LCB0b2tlblJhdGUsIHVzZXJHb2xkLCBidXkgfTogRm9vdGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt0b2tlbnNWYWx1ZSwgc2V0VG9rZW5zVmFsdWVdID0gdXNlU3RhdGUoU1RFUF9TSVpFKTtcclxuICAgIGNvbnN0IFtnb2xkVmFsdWUsIHNldEdvbGRWYWx1ZV0gPSB1c2VTdGF0ZSh0b2tlblJhdGUpO1xyXG4gICAgY29uc3QgW2lzRW5vdWdoLCBzZXRJc0Vub3VnaF0gPSB1c2VTdGF0ZSh1c2VyR29sZCA+PSB0b2tlblJhdGUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRva2VucyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChzZWxlY3RlZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvbGRSYXRlID0gc2VsZWN0ZWRWYWx1ZSAqIHRva2VuUmF0ZTtcclxuICAgICAgICAgICAgc2V0VG9rZW5zVmFsdWUoc2VsZWN0ZWRWYWx1ZSA8IHBheWVkVG9rZW5zTGltaXQgPyBzZWxlY3RlZFZhbHVlIDogcGF5ZWRUb2tlbnNMaW1pdCk7XHJcbiAgICAgICAgICAgIHNldEdvbGRWYWx1ZShnb2xkUmF0ZSk7XHJcbiAgICAgICAgICAgIHNldElzRW5vdWdoKHVzZXJHb2xkID49IGdvbGRSYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0b2tlblJhdGUsIHBheWVkVG9rZW5zTGltaXQsIHVzZXJHb2xkXSxcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodG9rZW5zVmFsdWUgPiBwYXllZFRva2Vuc0xpbWl0KSB7XHJcbiAgICAgICAgICAgIHNldFRva2Vuc1ZhbHVlKHBheWVkVG9rZW5zTGltaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYXllZFRva2Vuc0xpbWl0LCB0b2tlbnNWYWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYXNlLCAhaXNXYWxsZXRBdmFpbGFibGUgJiYgc3R5bGVzLmJhc2VfX2hvdmVyZWQpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5saW5lLCBzdHlsZXMubGluZV9fZmlyc3QpfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmxpbmUsIHN0eWxlcy5saW5lX19zZWNvbmQpfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5zQXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e1RFWFRTLmF2YWlsYWJsZVRva2VucygpfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLnRva2Vuc0F2YWlsYWJsZV9fdG9rZW5zfSB0ZXh0PXtTdHJpbmcocGF5ZWRUb2tlbnNMaW1pdCl9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maW5hbFByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3kgdHlwZT17Q3VycmVuY3lUeXBlLmdvbGR9IHZhbHVlPXtnb2xkVmFsdWV9IHNpemU9e0N1cnJlbmN5U2l6ZS5iaWd9IGlzRW5vdWdoPXtpc0Vub3VnaH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljU3RlcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRva2Vuc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2tlbnNWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplPXtTVEVQX1NJWkV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtPXtwYXllZFRva2Vuc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT17U1RFUF9TSVpFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17U1RFUFBFUl9XSURUSH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENCdXR0b24gdHlwZT17QnV0dG9uVHlwZS5tYWlufSBtaXhDbGFzcz17c3R5bGVzLmJ1eUJ1dHRvbn0gb25DbGljaz17KCkgPT4gYnV5KHRva2Vuc1ZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9e1RFWFRTLmJ1eSgpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25UZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyFpc1dhbGxldEF2YWlsYWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJZD17Ui52aWV3cy5hcm1vcnlfeWFyZC5sb2JieS5mZWF0dXJlLnRvb2x0aXBzLkFybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc0lkJyxcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FybmluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FybmluZ19fZ2xvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXJuaW5nX19pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2NvbXBvbmVudHMvVG9vbHRpcC9Ub29sdGlwJztcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcyc7XHJcblxyXG5jb25zdCBURVhUUyA9IFIuc3RyaW5ncy5hcm1vcnlfeWFyZC5wb3N0cHJvZ3Jlc3Npb24uYnV5VG9rZW5zLmhlYWRlcjtcclxuXHJcbmV4cG9ydCB0eXBlIEhlYWRlclByb3BzID0gUmVhZG9ubHk8e1xyXG4gICAgdG9rZW5zQ291bnQ6IG51bWJlcjtcclxufT47XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gbWVtbygoeyB0b2tlbnNDb3VudCB9OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhc2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RUaXRsZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHRleHQ9e1RFWFRTLnRpdGxlKCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuQ291bnR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5Db3VudF9fdGV4dH0gdGV4dD17VEVYVFMuYXZhaWxhYmxlKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJZD17Ui52aWV3cy5hcm1vcnlfeWFyZC5sb2JieS5mZWF0dXJlLnRvb2x0aXBzLlNob3BDdXJyZW5jeVRvb2x0aXBWaWV3KCdyZXNJZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZVNob3dEZWxheT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuQ291bnRfX3VuZGVyVG9vbHRpcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuQ291bnRfX2NvdW50fSB0ZXh0PXtTdHJpbmcodG9rZW5zQ291bnQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuQ291bnRfX2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBBcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlld01vZGVsIH0gZnJvbSAnYXJtb3J5X3lhcmQvZ3VpL2ltcGwvZ2VuL3ZpZXdfbW9kZWxzL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvYXJtb3J5X3lhcmRfcG9zdF9wcm9ncmVzc2lvbl9idXlfdmlld19tb2RlbCc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IH0gZnJvbSAnbGliL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBjb25zdEZhbHNlLCBpZGVudGl0eSB9IGZyb20gJ2xpYi9mdW5jdGlvbic7XHJcbmltcG9ydCB7IENhc3RBbGxBcnJheXMsIGxpa2VBcnJheSB9IGZyb20gJ2xpYi9saWtlQXJyYXknO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZuIH0gZnJvbSAnbW9ieC11dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PFxyXG4gICAgQ2FzdEFsbEFycmF5czxBcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlld01vZGVsPlxyXG4+KCkoXHJcbiAgICAoeyBvYnNlcnZhYmxlTW9kZWwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0ge1xyXG4gICAgICAgICAgICByb290OiBvYnNlcnZhYmxlTW9kZWwub2JqZWN0KCksXHJcbiAgICAgICAgICAgIHByaWNlOiBvYnNlcnZhYmxlTW9kZWwub2JqZWN0KCdwcmljZScpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuUHJpY2UgPSBjb21wdXRlZEZuKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHByaWNlIH0gPSBtb2RlbC5yb290LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogbGlrZUFycmF5Lm1hcChwcmljZS5wcmljZSwgaWRlbnRpdHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZlByaWNlOiBsaWtlQXJyYXkubWFwKHByaWNlLmRlZlByaWNlLCBpZGVudGl0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ6IGxpa2VBcnJheS5tYXAocHJpY2UuZGlzY291bnQsIGlkZW50aXR5KSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5tb2RlbCxcclxuICAgICAgICAgICAgY29tcHV0ZXM6IHsgZ2V0VG9rZW5QcmljZSB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgKHsgZXh0ZXJuYWxNb2RlbCB9KSA9PiAoe1xyXG4gICAgICAgIGNhbmNlbDogZXh0ZXJuYWxNb2RlbC5jcmVhdGVDYWxsYmFja05vQXJncygnb25DYW5jZWwnKSxcclxuICAgICAgICBiYWNrOiBleHRlcm5hbE1vZGVsLmNyZWF0ZUNhbGxiYWNrTm9BcmdzKCdvbkJhY2snKSxcclxuICAgICAgICBidXk6IGV4dGVybmFsTW9kZWwuY3JlYXRlQ2FsbGJhY2soKHRva2VuczogbnVtYmVyKSA9PiAoeyB0b2tlbnMgfSksICdvbkJ1eScpLFxyXG4gICAgfSksXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibXRfX1hTXCI6XCJCb3hfbXRfX1hTXzBjXCIsXCJtdF9fU01cIjpcIkJveF9tdF9fU01fZWJcIixcIm10X19TTXBcIjpcIkJveF9tdF9fU01wX2NmXCIsXCJtdF9fTURcIjpcIkJveF9tdF9fTURfMjVcIixcIm10X19NRHBcIjpcIkJveF9tdF9fTURwXzQ5XCIsXCJtdF9fTEdcIjpcIkJveF9tdF9fTEdfZThcIixcIm10X19YTFwiOlwiQm94X210X19YTF84M1wiLFwibXJfX1hTXCI6XCJCb3hfbXJfX1hTXzdjXCIsXCJtcl9fU01cIjpcIkJveF9tcl9fU01fMDhcIixcIm1yX19TTXBcIjpcIkJveF9tcl9fU01wXzA2XCIsXCJtcl9fTURcIjpcIkJveF9tcl9fTURfNGFcIixcIm1yX19NRHBcIjpcIkJveF9tcl9fTURwX2I2XCIsXCJtcl9fTEdcIjpcIkJveF9tcl9fTEdfZDBcIixcIm1yX19YTFwiOlwiQm94X21yX19YTF9kYlwiLFwibWJfX1hTXCI6XCJCb3hfbWJfX1hTX2JiXCIsXCJtYl9fU01cIjpcIkJveF9tYl9fU01fODNcIixcIm1iX19TTXBcIjpcIkJveF9tYl9fU01wXzA0XCIsXCJtYl9fTURcIjpcIkJveF9tYl9fTURfZWRcIixcIm1iX19NRHBcIjpcIkJveF9tYl9fTURwXzY1XCIsXCJtYl9fTEdcIjpcIkJveF9tYl9fTEdfYzhcIixcIm1iX19YTFwiOlwiQm94X21iX19YTF9mOFwiLFwibWxfX1hTXCI6XCJCb3hfbWxfX1hTXzhhXCIsXCJtbF9fU01cIjpcIkJveF9tbF9fU01fZTZcIixcIm1sX19TTXBcIjpcIkJveF9tbF9fU01wX2ZiXCIsXCJtbF9fTURcIjpcIkJveF9tbF9fTURfMmJcIixcIm1sX19NRHBcIjpcIkJveF9tbF9fTURwX2M3XCIsXCJtbF9fTEdcIjpcIkJveF9tbF9fTEdfMzlcIixcIm1sX19YTFwiOlwiQm94X21sX19YTF80YVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkNCdXR0b25fYmFzZV80MFwiLFwiYmFzZV9fbWFpblwiOlwiQ0J1dHRvbl9iYXNlX19tYWluXzQyXCIsXCJiYXNlX19wcmltYXJ5XCI6XCJDQnV0dG9uX2Jhc2VfX3ByaW1hcnlfN2ZcIixcImJhc2VfX3ByaW1hcnlHcmVlblwiOlwiQ0J1dHRvbl9iYXNlX19wcmltYXJ5R3JlZW5fNmZcIixcImJhc2VfX3ByaW1hcnlSZWRcIjpcIkNCdXR0b25fYmFzZV9fcHJpbWFyeVJlZF9lY1wiLFwiYmFzZV9fc2Vjb25kYXJ5XCI6XCJDQnV0dG9uX2Jhc2VfX3NlY29uZGFyeV81MFwiLFwiYmFzZV9fZ2hvc3RcIjpcIkNCdXR0b25fYmFzZV9fZ2hvc3RfZWRcIixcImJhc2VfX2V4dHJhU21hbGxcIjpcIkNCdXR0b25fYmFzZV9fZXh0cmFTbWFsbF8yN1wiLFwiYmFzZV9fc21hbGxcIjpcIkNCdXR0b25fYmFzZV9fc21hbGxfZGZcIixcImJhc2VfX21lZGl1bVwiOlwiQ0J1dHRvbl9iYXNlX19tZWRpdW1fNzRcIixcImJhc2VfX2Rpc2FibGVkXCI6XCJDQnV0dG9uX2Jhc2VfX2Rpc2FibGVkX2Q5XCIsXCJiYWNrXCI6XCJDQnV0dG9uX2JhY2tfZTVcIixcInRleHR1cmVcIjpcIkNCdXR0b25fdGV4dHVyZV9mZVwiLFwic3RhdGVcIjpcIkNCdXR0b25fc3RhdGVfMTFcIixcImJhc2VfX2ZvY3VzXCI6XCJDQnV0dG9uX2Jhc2VfX2ZvY3VzXzgzXCIsXCJzdGF0ZUhpZ2hsaWdodEhvdmVyXCI6XCJDQnV0dG9uX3N0YXRlSGlnaGxpZ2h0SG92ZXJfZmZcIixcInN0YXRlSGlnaGxpZ2h0QWN0aXZlXCI6XCJDQnV0dG9uX3N0YXRlSGlnaGxpZ2h0QWN0aXZlXzM1XCIsXCJzdGF0ZURpc2FibGVkXCI6XCJDQnV0dG9uX3N0YXRlRGlzYWJsZWRfNTRcIixcImJhc2VfX2ZpcnN0SG92ZXJcIjpcIkNCdXR0b25fYmFzZV9fZmlyc3RIb3Zlcl9kNVwiLFwiYmFzZV9faGlnaGxpZ2h0QWN0aXZlXCI6XCJDQnV0dG9uX2Jhc2VfX2hpZ2hsaWdodEFjdGl2ZV9iMlwiLFwiY29udGVudFwiOlwiQ0J1dHRvbl9jb250ZW50X2NjXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiQ3VycmVuY3lfYmFzZV81N1wiLFwiaWNvblwiOlwiQ3VycmVuY3lfaWNvbl9jNVwiLFwiYmFzZV9fc21hbGxcIjpcIkN1cnJlbmN5X2Jhc2VfX3NtYWxsX2FmXCIsXCJiYXNlX19iaWdcIjpcIkN1cnJlbmN5X2Jhc2VfX2JpZ19iY1wiLFwiYmFzZV9fbGFyZ2VcIjpcIkN1cnJlbmN5X2Jhc2VfX2xhcmdlXzY1XCIsXCJiYXNlX19leHRyYUxhcmdlXCI6XCJDdXJyZW5jeV9iYXNlX19leHRyYUxhcmdlXzRkXCIsXCJpY29uX19jcmVkaXRzLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19jcmVkaXRzLXNtYWxsXzliXCIsXCJpY29uX19jcmVkaXRzLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fY3JlZGl0cy1iaWdfOTZcIixcImljb25fX2NyZWRpdHMtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2NyZWRpdHMtbGFyZ2VfYWNcIixcImljb25fX2NyZWRpdHMtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fY3JlZGl0cy1leHRyYUxhcmdlXzE2XCIsXCJpY29uX19nb2xkLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19nb2xkLXNtYWxsXzg2XCIsXCJpY29uX19nb2xkLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fZ29sZC1iaWdfMTVcIixcImljb25fX2dvbGQtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2dvbGQtbGFyZ2VfMzZcIixcImljb25fX2dvbGQtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fZ29sZC1leHRyYUxhcmdlX2EwXCIsXCJpY29uX19jcnlzdGFsLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19jcnlzdGFsLXNtYWxsXzI3XCIsXCJpY29uX19jcnlzdGFsLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fY3J5c3RhbC1iaWdfY2RcIixcImljb25fX2NyeXN0YWwtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2NyeXN0YWwtbGFyZ2VfZDNcIixcImljb25fX2NyeXN0YWwtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fY3J5c3RhbC1leHRyYUxhcmdlXzA5XCIsXCJpY29uX194cC1zbWFsbFwiOlwiQ3VycmVuY3lfaWNvbl9feHAtc21hbGxfYTdcIixcImljb25fX3hwLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9feHAtYmlnXzk3XCIsXCJpY29uX194cC1sYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9feHAtbGFyZ2VfNmJcIixcImljb25fX3hwLWV4dHJhTGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX3hwLWV4dHJhTGFyZ2VfNjdcIixcImljb25fX2ZyZWVYUC1zbWFsbFwiOlwiQ3VycmVuY3lfaWNvbl9fZnJlZVhQLXNtYWxsX2NhXCIsXCJpY29uX19mcmVlWFAtYmlnXCI6XCJDdXJyZW5jeV9pY29uX19mcmVlWFAtYmlnXzIxXCIsXCJpY29uX19mcmVlWFAtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2ZyZWVYUC1sYXJnZV9jOFwiLFwiaWNvbl9fZnJlZVhQLWV4dHJhTGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2ZyZWVYUC1leHRyYUxhcmdlXzU4XCIsXCJpY29uX19lcXVpcENvaW4tc21hbGxcIjpcIkN1cnJlbmN5X2ljb25fX2VxdWlwQ29pbi1zbWFsbF8zMlwiLFwiaWNvbl9fZXF1aXBDb2luLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fZXF1aXBDb2luLWJpZ183OVwiLFwiaWNvbl9fZXF1aXBDb2luLWxhcmdlXCI6XCJDdXJyZW5jeV9pY29uX19lcXVpcENvaW4tbGFyZ2VfMmNcIixcImljb25fX2VxdWlwQ29pbi1leHRyYUxhcmdlXCI6XCJDdXJyZW5jeV9pY29uX19lcXVpcENvaW4tZXh0cmFMYXJnZV84YVwiLFwidmFsdWVcIjpcIkN1cnJlbmN5X3ZhbHVlX2UxXCIsXCJ2YWx1ZV9fZnJlZVhQXCI6XCJDdXJyZW5jeV92YWx1ZV9fZnJlZVhQX2NiXCIsXCJ2YWx1ZV9fY3JlZGl0c1wiOlwiQ3VycmVuY3lfdmFsdWVfX2NyZWRpdHNfNzZcIixcInZhbHVlX19nb2xkXCI6XCJDdXJyZW5jeV92YWx1ZV9fZ29sZF9kZFwiLFwidmFsdWVfX3hwXCI6XCJDdXJyZW5jeV92YWx1ZV9feHBfYjBcIixcInZhbHVlX19jcnlzdGFsXCI6XCJDdXJyZW5jeV92YWx1ZV9fY3J5c3RhbF8xOVwiLFwidmFsdWVfX2VxdWlwQ29pblwiOlwiQ3VycmVuY3lfdmFsdWVfX2VxdWlwQ29pbl9kMFwiLFwidmFsdWVfX25vdEVub3VnaFwiOlwiQ3VycmVuY3lfdmFsdWVfX25vdEVub3VnaF81NlwiLFwic3RvY2tcIjpcIkN1cnJlbmN5X3N0b2NrXzg3XCIsXCJzdG9ja19faW5kZW50XCI6XCJDdXJyZW5jeV9zdG9ja19faW5kZW50X2ExXCIsXCJzdG9ja19faW50ZXJhY3RpdmVcIjpcIkN1cnJlbmN5X3N0b2NrX19pbnRlcmFjdGl2ZV85M1wiLFwic3RvY2tCYWNrZ3JvdW5kXCI6XCJDdXJyZW5jeV9zdG9ja0JhY2tncm91bmRfODJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJGb3JtYXRUZXh0X2Jhc2VfZDBcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJOdW1lcmljU3RlcHBlcl9iYXNlXzM1XCIsXCJiYXNlX19zbWFsbFwiOlwiTnVtZXJpY1N0ZXBwZXJfYmFzZV9fc21hbGxfMTFcIixcImJhc2VfX21lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfYmFzZV9fbWVkaXVtXzlkXCIsXCJiYXNlX19sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfYmFzZV9fbGFyZ2VfZGNcIixcImJhc2VfX2lzRm9jdXNcIjpcIk51bWVyaWNTdGVwcGVyX2Jhc2VfX2lzRm9jdXNfNDlcIixcImJhc2VfX2lzRGlzYWJsZWRcIjpcIk51bWVyaWNTdGVwcGVyX2Jhc2VfX2lzRGlzYWJsZWRfYWNcIixcImlucHV0Q29udGFpbmVyXCI6XCJOdW1lcmljU3RlcHBlcl9pbnB1dENvbnRhaW5lcl9lMlwiLFwiaW5wdXRcIjpcIk51bWVyaWNTdGVwcGVyX2lucHV0XzU1XCIsXCJiYXNlX193aXRoQ3VycmVuY3ktc21hbGxcIjpcIk51bWVyaWNTdGVwcGVyX2Jhc2VfX3dpdGhDdXJyZW5jeS1zbWFsbF9kZVwiLFwiYmFzZV9fd2l0aEN1cnJlbmN5LW1lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfYmFzZV9fd2l0aEN1cnJlbmN5LW1lZGl1bV82OVwiLFwiYmFzZV9fd2l0aEN1cnJlbmN5LWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9iYXNlX193aXRoQ3VycmVuY3ktbGFyZ2VfYTFcIixcImlucHV0X19kaXNhYmxlZFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2Rpc2FibGVkX2Q4XCIsXCJpbnB1dF9fY3JlZGl0c1wiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2NyZWRpdHNfMDhcIixcImlucHV0X19jcmVkaXRzLWRpc2FibGVkXCI6XCJOdW1lcmljU3RlcHBlcl9pbnB1dF9fY3JlZGl0cy1kaXNhYmxlZF8zZlwiLFwiaW5wdXRfX2dvbGRcIjpcIk51bWVyaWNTdGVwcGVyX2lucHV0X19nb2xkXzE0XCIsXCJpbnB1dF9fZ29sZC1kaXNhYmxlZFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2dvbGQtZGlzYWJsZWRfYzZcIixcImlucHV0X194cFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX3hwX2M0XCIsXCJpbnB1dF9fZnJlZVhQXCI6XCJOdW1lcmljU3RlcHBlcl9pbnB1dF9fZnJlZVhQXzA2XCIsXCJpbnB1dF9fY3J5c3RhbFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2NyeXN0YWxfMmVcIixcImlucHV0X194cC1kaXNhYmxlZFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX3hwLWRpc2FibGVkXzMzXCIsXCJpbnB1dF9fZnJlZVhQLWRpc2FibGVkXCI6XCJOdW1lcmljU3RlcHBlcl9pbnB1dF9fZnJlZVhQLWRpc2FibGVkXzhiXCIsXCJpbnB1dF9fY3J5c3RhbC1kaXNhYmxlZFwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2NyeXN0YWwtZGlzYWJsZWRfZjhcIixcImlucHV0X193aXRoQ3VycmVuY3lcIjpcIk51bWVyaWNTdGVwcGVyX2lucHV0X193aXRoQ3VycmVuY3lfM2JcIixcImlucHV0X194cC1tZWRpdW1cIjpcIk51bWVyaWNTdGVwcGVyX2lucHV0X194cC1tZWRpdW1fZGJcIixcImlucHV0X194cC1sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX3hwLWxhcmdlXzczXCIsXCJpbnB1dF9fZnJlZVhQLW1lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2ZyZWVYUC1tZWRpdW1fMmJcIixcImlucHV0X19mcmVlWFAtbGFyZ2VcIjpcIk51bWVyaWNTdGVwcGVyX2lucHV0X19mcmVlWFAtbGFyZ2VfYzlcIixcImlucHV0X19jcnlzdGFsLW1lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2NyeXN0YWwtbWVkaXVtXzU2XCIsXCJpbnB1dF9fY3J5c3RhbC1sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfaW5wdXRfX2NyeXN0YWwtbGFyZ2VfNGVcIixcImN1cnJlbmN5XCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeV8zOFwiLFwiY3VycmVuY3lfX3hwLW1lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lfX3hwLW1lZGl1bV82NlwiLFwiY3VycmVuY3lfX3hwLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeV9feHAtbGFyZ2VfNjZcIixcImN1cnJlbmN5X19mcmVlWFAtbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeV9fZnJlZVhQLW1lZGl1bV83OVwiLFwiY3VycmVuY3lfX2ZyZWVYUC1sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lfX2ZyZWVYUC1sYXJnZV9jN1wiLFwiY3VycmVuY3lfX2NyeXN0YWwtbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeV9fY3J5c3RhbC1tZWRpdW1fNTVcIixcImN1cnJlbmN5X19jcnlzdGFsLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeV9fY3J5c3RhbC1sYXJnZV9hNFwiLFwiY3VycmVuY3lJY29uXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fOGVcIixcImN1cnJlbmN5SWNvbl9fY3JlZGl0cy1zbWFsbFwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lJY29uX19jcmVkaXRzLXNtYWxsXzk5XCIsXCJjdXJyZW5jeUljb25fX2NyZWRpdHMtbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2NyZWRpdHMtbWVkaXVtXzFhXCIsXCJjdXJyZW5jeUljb25fX2NyZWRpdHMtbGFyZ2VcIjpcIk51bWVyaWNTdGVwcGVyX2N1cnJlbmN5SWNvbl9fY3JlZGl0cy1sYXJnZV9iY1wiLFwiY3VycmVuY3lJY29uX19nb2xkLXNtYWxsXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2dvbGQtc21hbGxfMmFcIixcImN1cnJlbmN5SWNvbl9fZ29sZC1tZWRpdW1cIjpcIk51bWVyaWNTdGVwcGVyX2N1cnJlbmN5SWNvbl9fZ29sZC1tZWRpdW1fZjZcIixcImN1cnJlbmN5SWNvbl9fZ29sZC1sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lJY29uX19nb2xkLWxhcmdlX2Q2XCIsXCJjdXJyZW5jeUljb25fX2NyeXN0YWwtc21hbGxcIjpcIk51bWVyaWNTdGVwcGVyX2N1cnJlbmN5SWNvbl9fY3J5c3RhbC1zbWFsbF9iNVwiLFwiY3VycmVuY3lJY29uX19jcnlzdGFsLW1lZGl1bVwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lJY29uX19jcnlzdGFsLW1lZGl1bV9hY1wiLFwiY3VycmVuY3lJY29uX19jcnlzdGFsLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2NyeXN0YWwtbGFyZ2VfMmJcIixcImN1cnJlbmN5SWNvbl9fZnJlZVhQLXNtYWxsXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2ZyZWVYUC1zbWFsbF80ZFwiLFwiY3VycmVuY3lJY29uX19mcmVlWFAtbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2ZyZWVYUC1tZWRpdW1fODVcIixcImN1cnJlbmN5SWNvbl9fZnJlZVhQLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX2ZyZWVYUC1sYXJnZV83NlwiLFwiY3VycmVuY3lJY29uX194cC1zbWFsbFwiOlwiTnVtZXJpY1N0ZXBwZXJfY3VycmVuY3lJY29uX194cC1zbWFsbF83M1wiLFwiY3VycmVuY3lJY29uX194cC1tZWRpdW1cIjpcIk51bWVyaWNTdGVwcGVyX2N1cnJlbmN5SWNvbl9feHAtbWVkaXVtX2VmXCIsXCJjdXJyZW5jeUljb25fX3hwLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9jdXJyZW5jeUljb25fX3hwLWxhcmdlXzNlXCIsXCJkdW1teVZhbHVlXCI6XCJOdW1lcmljU3RlcHBlcl9kdW1teVZhbHVlXzBjXCIsXCJjb250cm9sXCI6XCJOdW1lcmljU3RlcHBlcl9jb250cm9sX2FiXCIsXCJidXR0b25JbmNyZW1lbnRcIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkluY3JlbWVudF8xNlwiLFwiYnV0dG9uRGVjcmVtZW50XCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25EZWNyZW1lbnRfYzhcIixcImJ1dHRvbkluY3JlbWVudF9fc21hbGxcIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkluY3JlbWVudF9fc21hbGxfZjZcIixcImJ1dHRvbkRlY3JlbWVudF9fc21hbGxcIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkRlY3JlbWVudF9fc21hbGxfMzZcIixcImJ1dHRvbkluY3JlbWVudF9fbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25JbmNyZW1lbnRfX21lZGl1bV9mZFwiLFwiYnV0dG9uRGVjcmVtZW50X19tZWRpdW1cIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkRlY3JlbWVudF9fbWVkaXVtX2QxXCIsXCJidXR0b25JbmNyZW1lbnRfX2xhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25JbmNyZW1lbnRfX2xhcmdlXzU2XCIsXCJidXR0b25EZWNyZW1lbnRfX2xhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25EZWNyZW1lbnRfX2xhcmdlXzYzXCIsXCJidXR0b25JbmNyZW1lbnRfX2lzRGlzYWJsZWRcIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkluY3JlbWVudF9faXNEaXNhYmxlZF82OFwiLFwiYnV0dG9uRGVjcmVtZW50X19pc0Rpc2FibGVkXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25EZWNyZW1lbnRfX2lzRGlzYWJsZWRfZDlcIixcImJ1dHRvbkluY3JlbWVudF9faXNBY3RpdmUtc21hbGxcIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkluY3JlbWVudF9faXNBY3RpdmUtc21hbGxfMmFcIixcImJ1dHRvbkluY3JlbWVudF9faXNBY3RpdmUtbWVkaXVtXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25JbmNyZW1lbnRfX2lzQWN0aXZlLW1lZGl1bV9jMlwiLFwiYnV0dG9uSW5jcmVtZW50X19pc0FjdGl2ZS1sYXJnZVwiOlwiTnVtZXJpY1N0ZXBwZXJfYnV0dG9uSW5jcmVtZW50X19pc0FjdGl2ZS1sYXJnZV85MVwiLFwiYnV0dG9uRGVjcmVtZW50X19pc0FjdGl2ZS1zbWFsbFwiOlwiTnVtZXJpY1N0ZXBwZXJfYnV0dG9uRGVjcmVtZW50X19pc0FjdGl2ZS1zbWFsbF8yMVwiLFwiYnV0dG9uRGVjcmVtZW50X19pc0FjdGl2ZS1tZWRpdW1cIjpcIk51bWVyaWNTdGVwcGVyX2J1dHRvbkRlY3JlbWVudF9faXNBY3RpdmUtbWVkaXVtX2EzXCIsXCJidXR0b25EZWNyZW1lbnRfX2lzQWN0aXZlLWxhcmdlXCI6XCJOdW1lcmljU3RlcHBlcl9idXR0b25EZWNyZW1lbnRfX2lzQWN0aXZlLWxhcmdlXzhiXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiVGV4dEJ1dHRvbl9iYXNlX2I2XCIsXCJiYXNlX19yaWdodFwiOlwiVGV4dEJ1dHRvbl9iYXNlX19yaWdodF8zOVwiLFwiaWNvblwiOlwiVGV4dEJ1dHRvbl9pY29uXzE3XCIsXCJpY29uX19iYWNrXCI6XCJUZXh0QnV0dG9uX2ljb25fX2JhY2tfNDNcIixcImljb25fX2ZvcndhcmRcIjpcIlRleHRCdXR0b25faWNvbl9fZm9yd2FyZF81OVwiLFwiaWNvbl9fY2xvc2VcIjpcIlRleHRCdXR0b25faWNvbl9fY2xvc2VfNTNcIixcImljb25fX2luZm9cIjpcIlRleHRCdXR0b25faWNvbl9faW5mb18zM1wiLFwiZ2xvd1wiOlwiVGV4dEJ1dHRvbl9nbG93X2E0XCIsXCJjYXB0aW9uXCI6XCJUZXh0QnV0dG9uX2NhcHRpb25fODJcIixcImNhcHRpb25fX2JhY2tcIjpcIlRleHRCdXR0b25fY2FwdGlvbl9fYmFja19iOVwiLFwiY2FwdGlvbl9fZm9yd2FyZFwiOlwiVGV4dEJ1dHRvbl9jYXB0aW9uX19mb3J3YXJkXzRlXCIsXCJjYXB0aW9uX19jbG9zZVwiOlwiVGV4dEJ1dHRvbl9jYXB0aW9uX19jbG9zZV8zNlwiLFwiY2FwdGlvbl9faW5mb1wiOlwiVGV4dEJ1dHRvbl9jYXB0aW9uX19pbmZvXzIzXCIsXCJnb3RvXCI6XCJUZXh0QnV0dG9uX2dvdG9fZTdcIixcImJhc2VfX2xlZnRcIjpcIlRleHRCdXR0b25fYmFzZV9fbGVmdF9mZlwiLFwic2hpbmVcIjpcIlRleHRCdXR0b25fc2hpbmVfZTJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJwYXJhZ3JhcGgtUDEwXCI6XCJUZXh0X3BhcmFncmFwaC1QMTBfMmNcIixcInBhcmFncmFwaC1QMTJcIjpcIlRleHRfcGFyYWdyYXBoLVAxMl8yMlwiLFwicGFyYWdyYXBoLVAxNFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDE0X2E3XCIsXCJwYXJhZ3JhcGgtUDE2XCI6XCJUZXh0X3BhcmFncmFwaC1QMTZfOTBcIixcInBhcmFncmFwaC1QMThcIjpcIlRleHRfcGFyYWdyYXBoLVAxOF81MFwiLFwicGFyYWdyYXBoLVAyNFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDI0XzMzXCIsXCJoZWFkaW5nLUgxNFwiOlwiVGV4dF9oZWFkaW5nLUgxNF84YlwiLFwiaGVhZGluZy1IMTVcIjpcIlRleHRfaGVhZGluZy1IMTVfOWVcIixcImhlYWRpbmctSDE4XCI6XCJUZXh0X2hlYWRpbmctSDE4X2I3XCIsXCJoZWFkaW5nLUgyMFJcIjpcIlRleHRfaGVhZGluZy1IMjBSX2Y2XCIsXCJoZWFkaW5nLUgyMlwiOlwiVGV4dF9oZWFkaW5nLUgyMl8yN1wiLFwiaGVhZGluZy1IMjRSXCI6XCJUZXh0X2hlYWRpbmctSDI0Ul9iZVwiLFwiaGVhZGluZy1IMjRcIjpcIlRleHRfaGVhZGluZy1IMjRfMGNcIixcImhlYWRpbmctSDI4XCI6XCJUZXh0X2hlYWRpbmctSDI4Xzc4XCIsXCJoZWFkaW5nLUgzNlwiOlwiVGV4dF9oZWFkaW5nLUgzNl8zMlwiLFwiaGVhZGluZy1INTZcIjpcIlRleHRfaGVhZGluZy1INTZfYzNcIixcImhlYWRpbmctSDczXCI6XCJUZXh0X2hlYWRpbmctSDczXzhmXCIsXCJoZWFkaW5nLUgxNDRcIjpcIlRleHRfaGVhZGluZy1IMTQ0X2E5XCIsXCJCTEFDS19SRUFMXCI6XCJUZXh0X0JMQUNLX1JFQUxfMzBcIixcIldISVRFX1JFQUxcIjpcIlRleHRfV0hJVEVfUkVBTF9iY1wiLFwiV0hJVEVcIjpcIlRleHRfV0hJVEVfNjJcIixcIldISVRFX09SQU5HRVwiOlwiVGV4dF9XSElURV9PUkFOR0VfNTRcIixcIldISVRFX1NQQU5JU0hcIjpcIlRleHRfV0hJVEVfU1BBTklTSF9kZlwiLFwiUEFSXCI6XCJUZXh0X1BBUl8xNVwiLFwiUEFSX1NFQ09OREFSWVwiOlwiVGV4dF9QQVJfU0VDT05EQVJZXzVkXCIsXCJQQVJfVEVSVElBUllcIjpcIlRleHRfUEFSX1RFUlRJQVJZX2M5XCIsXCJJTkZPX1JFRFwiOlwiVGV4dF9JTkZPX1JFRF8zMFwiLFwiUkVEXCI6XCJUZXh0X1JFRF82NlwiLFwiUkVEX0RBUktcIjpcIlRleHRfUkVEX0RBUktfZDhcIixcIllFTExPV1wiOlwiVGV4dF9ZRUxMT1dfZWRcIixcIk9SQU5HRVwiOlwiVGV4dF9PUkFOR0VfYmVcIixcIkNSRUFNXCI6XCJUZXh0X0NSRUFNXzU3XCIsXCJCUk9XTlwiOlwiVGV4dF9CUk9XTl8xOFwiLFwiR1JFRU5fQlJJR0hUXCI6XCJUZXh0X0dSRUVOX0JSSUdIVF8zZlwiLFwiR1JFRU5cIjpcIlRleHRfR1JFRU5fZTNcIixcIkdSRUVOX0RBUktcIjpcIlRleHRfR1JFRU5fREFSS19mMVwiLFwiQkxVRV9CT09TVEVSXCI6XCJUZXh0X0JMVUVfQk9PU1RFUl8yMVwiLFwiQkxVRV9URUFNS0lMTEVSXCI6XCJUZXh0X0JMVUVfVEVBTUtJTExFUl9hYlwiLFwiQ1JFRFwiOlwiVGV4dF9DUkVEX2Y3XCIsXCJHT0xEXCI6XCJUZXh0X0dPTERfMjhcIixcIkJPTkRcIjpcIlRleHRfQk9ORF9iZVwiLFwiUFJPTVwiOlwiVGV4dF9QUk9NXzY1XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiQXBwX2Jhc2VfNGZcIixcImNsb3NlXCI6XCJBcHBfY2xvc2VfYWJcIixcImNvbnRlbnRcIjpcIkFwcF9jb250ZW50Xzk3XCIsXCJoZWFkZXJcIjpcIkFwcF9oZWFkZXJfMWVcIixcInByb2R1Y3RJbmZvXCI6XCJBcHBfcHJvZHVjdEluZm9fNzRcIixcImRlc2NyaXB0aW9uXCI6XCJBcHBfZGVzY3JpcHRpb25fZjZcIixcInRva2VuSW1hZ2VcIjpcIkFwcF90b2tlbkltYWdlXzg3XCIsXCJmb290ZXJcIjpcIkFwcF9mb290ZXJfZTdcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJEZXNjcmlwdGlvbl9iYXNlXzFkXCIsXCJ0aXRsZVwiOlwiRGVzY3JpcHRpb25fdGl0bGVfYjZcIixcImRlc2NyaXB0aW9uXCI6XCJEZXNjcmlwdGlvbl9kZXNjcmlwdGlvbl9hZVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkZvb3Rlcl9iYXNlX2MwXCIsXCJiYXNlX19ob3ZlcmVkXCI6XCJGb290ZXJfYmFzZV9faG92ZXJlZF85OVwiLFwibGluZVwiOlwiRm9vdGVyX2xpbmVfZmNcIixcImxpbmVfX2ZpcnN0XCI6XCJGb290ZXJfbGluZV9fZmlyc3RfMjFcIixcImxpbmVfX3NlY29uZFwiOlwiRm9vdGVyX2xpbmVfX3NlY29uZF83M1wiLFwiYmdcIjpcIkZvb3Rlcl9iZ183OFwiLFwiY29udGVudFwiOlwiRm9vdGVyX2NvbnRlbnRfYjNcIixcInRva2Vuc0F2YWlsYWJsZVwiOlwiRm9vdGVyX3Rva2Vuc0F2YWlsYWJsZV9mN1wiLFwidG9rZW5zQXZhaWxhYmxlX190b2tlbnNcIjpcIkZvb3Rlcl90b2tlbnNBdmFpbGFibGVfX3Rva2Vuc19iZFwiLFwiZmluYWxQcmljZVwiOlwiRm9vdGVyX2ZpbmFsUHJpY2VfNDFcIixcInByb2R1Y3RDb3VudGVyXCI6XCJGb290ZXJfcHJvZHVjdENvdW50ZXJfOWFcIixcImJ1eUJ1dHRvblwiOlwiRm9vdGVyX2J1eUJ1dHRvbl9mZVwiLFwiYnV0dG9uVGV4dFwiOlwiRm9vdGVyX2J1dHRvblRleHRfOWFcIixcIndhcm5pbmdcIjpcIkZvb3Rlcl93YXJuaW5nXzc2XCIsXCJ3YXJuaW5nX19nbG93XCI6XCJGb290ZXJfd2FybmluZ19fZ2xvd19lMVwiLFwid2FybmluZ19faWNvblwiOlwiRm9vdGVyX3dhcm5pbmdfX2ljb25fMTlcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJIZWFkZXJfYmFzZV8yOVwiLFwicHJvZHVjdFRpdGxlV3JhcHBlclwiOlwiSGVhZGVyX3Byb2R1Y3RUaXRsZVdyYXBwZXJfMTlcIixcInRpdGxlXCI6XCJIZWFkZXJfdGl0bGVfNDJcIixcInRva2VuQ291bnRcIjpcIkhlYWRlcl90b2tlbkNvdW50XzBmXCIsXCJ0b2tlbkNvdW50X191bmRlclRvb2x0aXBcIjpcIkhlYWRlcl90b2tlbkNvdW50X191bmRlclRvb2x0aXBfZjFcIixcInRva2VuQ291bnRfX3RleHRcIjpcIkhlYWRlcl90b2tlbkNvdW50X190ZXh0X2E4XCIsXCJ0b2tlbkNvdW50X19jb3VudFwiOlwiSGVhZGVyX3Rva2VuQ291bnRfX2NvdW50XzhlXCIsXCJ0b2tlbkNvdW50X19pY29uXCI6XCJIZWFkZXJfdG9rZW5Db3VudF9faWNvbl82N1wifTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlld1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnYW1lZmFjZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnYW1lZmFjZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wibGliL3ZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInNwYWNpbmciLCJnZXRBZGFwdGl2ZUNvbnRyb2xsZXIiLCJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZXMiLCJzdGFuZGFyZE1hcmdpbnMiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdFhsTWFyZ2lucyIsIm10IiwibXRfX1hMIiwibXIiLCJtcl9fWEwiLCJtYiIsIm1iX19YTCIsIm1sIiwibWxfX1hMIiwiZGVmYXVsdExnTWFyZ2lucyIsIm10X19MRyIsIm1yX19MRyIsIm1iX19MRyIsIm1sX19MRyIsImRlZmF1bHRNZHBNYXJnaW5zIiwibXRfX01EcCIsIm1yX19NRHAiLCJtYl9fTURwIiwibWxfX01EcCIsImRlZmF1bHRNZE1hcmdpbnMiLCJtdF9fTUQiLCJtcl9fTUQiLCJtYl9fTUQiLCJtbF9fTUQiLCJkZWZhdWx0U21wTWFyZ2lucyIsIm10X19TTXAiLCJtcl9fU01wIiwibWJfX1NNcCIsIm1sX19TTXAiLCJkZWZhdWx0U21NYXJnaW5zIiwibXRfX1NNIiwibXJfX1NNIiwibWJfX1NNIiwibWxfX1NNIiwiZGVmYXVsdFhzTWFyZ2lucyIsIm10X19YUyIsIm1yX19YUyIsIm1iX19YUyIsIm1sX19YUyIsImRlZmF1bHRNYXJnaW5NYXAiLCJYTCIsIkxHIiwiTURwIiwiTUQiLCJTTXAiLCJTTSIsIlhTIiwiZGVmYXVsdE1hcmdpbnMiLCJtYXJnaW5LZXlMaXN0IiwiZ2V0TWFyZ2luQ2xhc3NOYW1lcyIsIm1hcmdpbk1hcCIsInJlZHVjZSIsImtleSIsInZhbHVlIiwiY29uY2F0IiwibWFyZ2luS2V5UHJvcGVydHlNYXAiLCJnZXRNYXJnaW5TdHlsZSIsInN0eWxlIiwicHJvcGVydHkiLCJCb3giLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm0iLCJjb2x1bW4iLCJyb3ciLCJmbGV4RGlyZWN0aW9uIiwidW5kZWZpbmVkIiwiZmxleFN0YXJ0IiwiY2VudGVyIiwiZmxleEVuZCIsInNwYWNlQmV0d2VlbiIsInNwYWNlQXJvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25TZWxmIiwid3JhcCIsImZsZXhXcmFwIiwiZ3JvdyIsInNocmluayIsImZsZXgiLCJjaGlsZHJlbiIsInJlc3RQcm9wcyIsImNvbXB1dGVkQ2xhc3NOYW1lcyIsIm1hcmdpblN0eWxlIiwiY29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJiYXNlIiwicGxheVNvdW5kIiwibWVtbyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCdXR0b25TaXplIiwiQnV0dG9uVHlwZSIsIkJ1dHRvbiIsInNpemUiLCJpc0ZvY3VzZWQiLCJ0eXBlIiwiZGlzYWJsZWQiLCJtaXhDbGFzcyIsInNvdW5kSG92ZXIiLCJzb3VuZENsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJidXR0b24iLCJidXR0b25Gb2N1cyIsInNldEJ1dHRvbkZvY3VzIiwiaXNIaWdobGlnaHRBY3RpdmUiLCJzZXRIaWdobGlnaHRBY3RpdmUiLCJpc0ZpcnN0SG92ZXJlZCIsInNldEZpcnN0SG92ZXJlZCIsInNldEZvY3VzT25CdXR0b24iLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVNb3VzZURvd25PdXRzaWRlIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VMZWF2ZSIsImNsYXNzQmFzZSIsImJhc2VfX2Rpc2FibGVkIiwiYmFzZV9fZm9jdXMiLCJiYXNlX19oaWdobGlnaHRBY3RpdmUiLCJiYXNlX19maXJzdEhvdmVyIiwiY2xhc3NTdGF0ZSIsInN0YXRlIiwic3RhdGVfX2RlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2hvc3QiLCJiYWNrIiwidGV4dHVyZSIsInN0YXRlRGlzYWJsZWQiLCJzdGF0ZUhpZ2hsaWdodEhvdmVyIiwic3RhdGVIaWdobGlnaHRBY3RpdmUiLCJjb250ZW50IiwiUiIsInN0cmluZ3MiLCJzZXR0aW5ncyIsIkxBTkdVQUdFX0NPREUiLCJkZWZhdWx0UHJvcHMiLCJwcmltYXJ5IiwiQ0J1dHRvbiIsImN4IiwiQ3VycmVuY3lUeXBlIiwiU3RvY2tCYWNrZ3JvdW5kTmFtZSIsIkZvcm1hdE51bWJlciIsIkN1cnJlbmN5Q29tcG9uZW50IiwiaXNEaXNjb3VudCIsImlzSW50ZXJhY3RpdmVEaXNjb3VudCIsImlzRW5vdWdoIiwiZGlzY291bnRWYWx1ZSIsInNob3dQbHVzIiwic3RvY2tCYWNrZ3JvdW5kTmFtZSIsIlJlZCIsInZhbHVlQ2xhc3NlcyIsInZhbHVlX19ub3RFbm91Z2giLCJpY29uQ2xhc3NlcyIsImljb24iLCJkaXNjb3VudENsYXNzZXMiLCJzdG9jayIsInN0b2NrX19pbmRlbnQiLCJzdG9ja19faW50ZXJhY3RpdmUiLCJwbHVzIiwiYmFzZUNsYXNzZXMiLCJnb2xkIiwic3RvY2tCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiQm9vbGVhbiIsIkN1cnJlbmN5IiwiQ3VycmVuY3lTaXplIiwiU3lzdGVtTG9jYWxlIiwiTnVtYmVyRm9ybWF0VHlwZSIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJmb3JtYXQiLCJwcm9wcyIsIkdPTEQiLCJJTlRFR1JBTCIsIm51bWJlckZvcm1hdCIsImdldE51bWJlckZvcm1hdCIsIkZyYWdtZW50IiwiZm9ybWF0U3RyaW5nIiwiQWxpZ25tZW50IiwiRm9ybWF0VGV4dCIsImJpbmRpbmciLCJ0ZXh0IiwiY2xhc3NNaXgiLCJhbGlnbm1lbnQiLCJsZWZ0IiwiY29uc29sZSIsImVycm9yIiwic3BsaXQiLCJtYXAiLCJ0ZXh0TGluZSIsImxpbmVJZCIsIndvcmRJZCIsImVudiIsImNyZWF0ZUNvbnRleHQiLCJCUkVBS1BPSU5UUyIsImdldFNpemVzIiwiY2xpZW50IiwiZ2V0U2l6ZSIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJpbml0aWFsVmFsdWUiLCJNZWRpYUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQ2FsbE9uY2UiLCJQcm92aWRlciIsImNvbnRleHQiLCJzZXRWYWx1ZSIsImhhbmRsZVJlc2l6ZSIsInByZXBhcmVkV2lkdGgiLCJ2aWV3IiwicHhUb1JlbSIsInByZXBhcmVkSGVpZ2h0IiwiZW5naW5lIiwib24iLCJvZmYiLCJ2YWx1ZUFzUHJvcCIsIk1lZGlhUHJvdmlkZXIiLCJnZXRCeUhlaWdodCIsImV4dHJhTGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwiZXh0cmFTbWFsbCIsImV4dHJhTGFyZ2VXaWR0aCIsImxhcmdlV2lkdGgiLCJtZWRpdW1XaWR0aCIsInNtYWxsV2lkdGgiLCJleHRyYVNtYWxsV2lkdGgiLCJleHRyYUxhcmdlSGVpZ2h0IiwibGFyZ2VIZWlnaHQiLCJtZWRpdW1IZWlnaHQiLCJzbWFsbEhlaWdodCIsImV4dHJhU21hbGxIZWlnaHQiLCJNZWRpYSIsInJlc3QiLCJicmVha3BvaW50UHJvcHMiLCJNZWRpYVF1ZXJ5Iiwid2VpZ2h0IiwiZ2V0V2lkdGhCUFdlaWdodCIsImJyZWFrcG9pbnRzIiwiZ2V0SGVpZ2h0QlBXZWlnaHQiLCJTaXplcyIsIndpZHRoQlBXZWlnaHQiLCJoZWlnaHRCUFdlaWdodCIsIk1hdGgiLCJtaW4iLCJLRVlfQ09ERVMiLCJOVU1CRVJfS0VZX0NPREVTIiwiY3JlYXRlUmVmIiwiU1BFRUQiLCJERUxBWSIsIlZBTElEQVRJT05fREVMQVkiLCJTT1VORF9IT1ZFUiIsIlNPVU5EX0NMSUNLIiwiZ2V0U3RlcHBlclN0eWxlIiwiTnVtZXJpY1N0ZXBwZXIiLCJ0aW1lciIsInZhbGlkYXRpb25UaW1lciIsIm51bWVyaWNhbFN0ZXBwZXIiLCJpbnB1dCIsImFjdGl2ZURlY3JlbWVudCIsImFjdGl2ZUluY3JlbWVudCIsInNldEZvY3VzT25JbnB1dCIsImlzRGlzYWJsZWQiLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImJsdXIiLCJjb21wb25lbnREaWRNb3VudCIsInNldFRpbWVvdXQiLCJ2YWx1ZUxlbiIsImZvcm1hdHRlZFZhbHVlIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJoYW5kbGVDbGlja091dHNpZGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInN0b3AiLCJmb3JtYXRWYWx1ZSIsImN1cnJlbmN5VHlwZSIsInRvU3RyaW5nIiwiZ2V0VmFsaWRWYWx1ZSIsImJvdW5kZWRWYWx1ZSIsIm1heGltdW0iLCJtYXgiLCJtaW5pbXVtIiwic3RlcFNpemUiLCJyb3VuZCIsImNoYW5nZVZhbHVlIiwib25DaGFuZ2UiLCJzZXRDdXJzb3JQb3NpdGlvbiIsImN1cnNvclN0YXJ0IiwiY3Vyc29yRW5kIiwiaGFuZGxlQ2hhbmdlIiwidXBkYXRlSW5wdXQiLCJrZXlDb2RlIiwiaXNCYWNrc3BhY2VLZXkiLCJCQUNLU1BBQ0UiLCJpc0RlbGV0ZUtleSIsIkRFTEVURSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiY3VycmVudFZhbHVlIiwiY3VycmVudEN1cnNvclBvc2l0aW9uIiwiZXhwZWN0ZWRDdXJzb3JQb3NpdGlvbiIsInN1YnN0cmluZyIsImN1cnJlbnROdW0iLCJOdW1iZXIiLCJ0cmltIiwicmVwbGFjZSIsIm5ld1ZhbHVlIiwiaXNTYWZlSW50ZWdlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc1ZhbHVlTnVtZXJpYyIsImlzTmFOIiwibnVtUmVnZXgiLCJSZWdFeHAiLCJ1cGRhdGVkQ3Vyc29yUG9zaXRpb24iLCJpIiwiY3VycmVudElucHV0Q2hhciIsImN1cnJlbnRGb3JtYXRDaGFyIiwibWF0Y2giLCJjbGVhclRpbWVvdXQiLCJjaGVja2VkVmFsdWUiLCJoYW5kbGVEZWxldGUiLCJpc0JhY2tzcGFjZSIsImlzRGVsZXRlIiwiaXNUZXh0U2VsZWN0aW9uIiwic2VwYXJhdG9yUmVnRXhwIiwiaXNEZWxldGVTZXBhcmF0b3IiLCJ0ZXN0IiwicHJldmVudERlZmF1bHQiLCJjdXJFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsImhhbmRsZUJsdXIiLCJ2YWxpZFZhbHVlIiwiaGFuZGxlV2hlZWwiLCJ3aGVlbGluZ0Rvd24iLCJkZWx0YVkiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJpbmNyZW1lbnRIYW5kbGVNb3VzZUVudGVyIiwiaW5jcmVtZW50SGFuZGxlTW91c2VEb3duIiwiYnV0dG9uSW5jcmVtZW50SXNEaXNhYmxlZCIsInBsYXlIb3ZlclNvdW5kIiwiZGVjcmVtZW50SGFuZGxlTW91c2VFbnRlciIsImRlY3JlbWVudEhhbmRsZU1vdXNlRG93biIsImJ1dHRvbkRlY3JlbWVudElzRGlzYWJsZWQiLCJoYW5kbGVLZXlEb3duIiwiQVJST1dfVVAiLCJOVU1fUExVUyIsIlBMVVMiLCJBUlJPV19ET1dOIiwiTlVNX01JTlVTIiwiTUlOVVMiLCJIT01FIiwiRU5EIiwiRU5URVIiLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJvbktleURvd24iLCJoYW5kbGVLZXlVcCIsImFsbG93T25seU51bWJlcnMiLCJpc051bWJlciIsIndoaWNoIiwibmV4dFZhbHVlIiwiaXNSZWN1cnNpdmVDYWxsIiwicGVyc2lzdCIsInBsYXlDbGlja1NvdW5kIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiXyIsInByZXZTdGF0ZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInN0YXJ0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImJhc2VDbGFzc05hbWVzIiwiYmFzZV9faXNEaXNhYmxlZCIsImJhc2VfX2lzRm9jdXMiLCJjbGFzc0J1dHRvbkluY3JlbWVudCIsImJ1dHRvbkluY3JlbWVudCIsImJ1dHRvbkluY3JlbWVudF9faXNEaXNhYmxlZCIsImNsYXNzQnV0dG9uRGVjcmVtZW50IiwiYnV0dG9uRGVjcmVtZW50IiwiYnV0dG9uRGVjcmVtZW50X19pc0Rpc2FibGVkIiwiY2xhc3NJbnB1dCIsImlucHV0X19kaXNhYmxlZCIsImlucHV0X193aXRoQ3VycmVuY3kiLCJjbGFzc0ljb24iLCJjdXJyZW5jeUljb24iLCJjbGFzc0N1cnJlbmN5IiwiY3VycmVuY3kiLCJpbnB1dENvbnRhaW5lciIsImR1bW15VmFsdWUiLCJjb250cm9sIiwiUmV3YXJkVHlwZSIsIkJvbnVzTmFtZXMiLCJJbWFnZVNpemUiLCJWYWx1ZVR5cGVzIiwiU3BlY2lhbHMiLCJIaWdobGlnaHRDbGFzc2VzIiwiT3ZlcmxheUNsYXNzZXMiLCJUZXh0QnV0dG9uIiwiaG92ZXIiLCJjbGljayIsIl9vbk1vdXNlRW50ZXIiLCJoYW5kbGVyIiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlRG93biIsIl9vbk1vdXNlVXAiLCJoYW5kbGVGb2N1cyIsImNhcHRpb24iLCJnb3RvIiwic2lkZSIsImNsYXNzZXMiLCJjbGFzc0dsb3ciLCJnbG93IiwiY2xhc3NDYXB0aW9uIiwiY2xhc3NHb3RvIiwic2hpbmUiLCJjb2xvcnMiLCJzdGFuZGFyZENvbG9ycyIsInhsU3R5bGVNYXJnaW5zIiwibGdTdHlsZU1hcmdpbnMiLCJtZFN0eWxlTWFyZ2lucyIsInNtU3R5bGVNYXJnaW5zIiwieHNTdHlsZU1hcmdpbnMiLCJ2YXJpYW50TWFyZ2luU2l6ZU1hcCIsInZhcmlhbnRzIiwiaXNEZWZhdWx0Q29sb3IiLCJjb2xvciIsImluY2x1ZGVzIiwiZ2V0Q29sb3JTdHlsZU9yQ2xhc3NOYW1lIiwiY29sb3JDbGFzc05hbWUiLCJjb2xvclN0eWxlIiwiVGV4dCIsInZhcmlhbnQiLCJnZXRGcm9tQ2FsbFN0YWNrIiwiVmlld0V2ZW50VHlwZSIsImNsb25lRWxlbWVudCIsIlNIT1dfREVMQVlfTUlOIiwiU0hPV19ERUxBWV9ERUZBVUxUIiwiZ2V0Vmlld0V2ZW50QXJndW1lbnRzIiwiYXJncyIsImVudHJpZXMiLCJvdXQiLCJfX1R5cGUiLCJuYW1lIiwibnVtYmVyIiwiYm9vbCIsInN0cmluZyIsImhhbmRsZVZpZXdFdmVudCIsImNvbnRlbnRJZCIsImRlY29yYXRvcklkIiwib3B0aW9ucyIsInRhcmdldElEIiwidmlld0VudiIsIlRPT0xUSVAiLCJjb250ZW50SUQiLCJkZWNvcmF0b3JJRCIsIlRvb2x0aXAiLCJpZ25vcmVTaG93RGVsYXkiLCJpZ25vcmVNb3VzZUNsaWNrIiwiaXNFbmFibGVkIiwidGFyZ2V0SWQiLCJvblNob3ciLCJvbkhpZGUiLCJyZWYiLCJ0aW1lb3V0SWQiLCJpc1Zpc2libGUiLCJwcmV2VGFyZ2V0IiwiaGlkZVRpbWVySWQiLCJyZXNJZCIsInNob3ciLCJpc01vdXNlRXZlbnQiLCJhcmd1bWVudHMiLCJoaWRlIiwib25TY3JvbGwiLCJlbGVtZW50RnJvbVBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ3aW5kb3ciLCJpc1NhbWVOb2RlIiwiaGlkZVRpbWVyIiwiY2FwdHVyZSIsImNoaWxkRXZlbnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJNRURJQV9DU1MiLCJTTUFMTF9XSURUSCIsIk1FRElVTV9XSURUSCIsIkxBUkdFX1dJRFRIIiwiRVhUUkFfTEFSR0VfV0lEVEgiLCJTTUFMTF9IRUlHSFQiLCJNRURJVU1fSEVJR0hUIiwiTEFSR0VfSEVJR0hUIiwiRVhUUkFfTEFSR0VfSEVJR0hUIiwiU01BTEwiLCJNRURJVU0iLCJMQVJHRSIsIkVYVFJBX0xBUkdFIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFJvb3REZWZhdWx0Iiwicm9vdElkIiwic3ViVmlld3MiLCJnZXQiLCJjcmVhdGUiLCJpbml0aWFsaXplciIsImdldFJvb3QiLCJzdWJzY3JpYmVycyIsIk1hcCIsIndoZW5SZWFkeSIsInRoZW4iLCJkYXRhIiwiY2FsbGJhY2tJRHMiLCJmb3JFYWNoIiwiY2FsbGJhY2tJRCIsImNhbGxiYWNrIiwidW5zdWJzY3JpYmUiLCJpZCIsInJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2siLCJkZWxldGUiLCJyZWFkQnlQYXRoIiwicGF0aCIsInJvb3QiLCJtb2RlbCIsInJlc3VsdCIsImVsZW1lbnQiLCJiaW5kIiwic3Vic2NyaWJlIiwic3Vic2NyaWJlciIsInN1YnNjcmliZVBhdGgiLCJ0cmFja0luRGVwdGgiLCJhZGRNb2RlbE9ic2VydmVyIiwic2V0IiwiY3JlYXRlQ2FsbGJhY2siLCJhcmdzTWFwIiwiZm4iLCJjcmVhdGVDYWxsYmFja05vQXJncyIsImRpc3Bvc2UiLCJzdWJzY3JpYmVySWQiLCJjb25zdEZhbHNlIiwiYWN0aW9uIiwib2JzZXJ2YWJsZSIsImRhdGFMYXllciIsImluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IiwibW9kZWxDcmVhdG9yIiwiY29udHJvbHNDcmVhdG9yIiwiQ29udGV4dCIsIkRhdGFMYXllclByb3ZpZGVyIiwibW9kZSIsImRhdGFNb2RlIiwibW9ja3MiLCJjbGVhbnVwc1JlZiIsImNyZWF0ZUNvbnRleHRWYWx1ZSIsImRhdGFMYXllckluc3RhbmNlIiwiZXh0ZXJuYWxNb2RlbCIsImdldHRlciIsIm9ic2VydmFibGVBcnJheSIsImluaXQiLCJpbml0T2JzZXJ2YWJsZSIsImJveCIsImVxdWFscyIsIm9ic2VydmFibGVPYmplY3QiLCJvYnNlcnZhYmxlUHJpbWl0aXZlcyIsIkFycmF5IiwiaXNBcnJheSIsImFjYyIsImtleXNSZWNvcmQiLCJrZXlzRW50cmllcyIsImtleUZyb20iLCJrZXlUbyIsImNsZWFudXAiLCJwdXNoIiwib2JzZXJ2YWJsZU1vZGVsIiwiYXJyYXkiLCJvYmplY3QiLCJwcmltaXRpdmVzIiwiY29udHJvbHNBcmdzIiwiY29udHJvbHMiLCJzdGFydGVkUmVmIiwiY2hhbmdlTW9kZSIsIm1ha2VFbmdpbmVFdmVudCIsInNldFRyYWNrTW91c2VPdXRzaWRlIiwib25SZXNpemUiLCJpbnRlcm5hbE1vdXNlIiwiZG93biIsInVwIiwibW92ZSIsImluaXRNb3VzZUV2ZW50cyIsImxpc3RlbmVycyIsImVuYWJsZWQiLCJpbml0aWFsaXplZCIsInVwZGF0ZUxhenlUcmFjayIsImJvZHkiLCJtYWtlRXZlbnQiLCJsaXN0ZW5lciIsImFjdGl2ZSIsIndpbmRvd0V2ZW50IiwiaGFuZGxlV2luZG93RXZlbnQiLCJldmVudHMiLCJzdWJzY3JpYmVBcGkiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlT3V0c2lkZSIsImRpc2FibGVPdXRzaWRlIiwibW91c2UiLCJ1bml0IiwiZ2V0Q2xpZW50U2l6ZVJlbSIsImdldENsaWVudFNpemVQeCIsImdldE1vdXNlR2xvYmFsUG9zaXRpb24iLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uUmVtIiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvblB4IiwiZ3JhcGhpY3NRdWFsaXR5IiwiaXNMb3ciLCJnZXRHcmFwaGljc1F1YWxpdHkiLCJpc0hpZ2giLCJzZXRUcmFja01vdXNlT25TdGFnZSIsImV2ZW50TmFtZSIsInByb2Nlc3MiLCJOT0RFX0VOViIsImdldFRleHR1cmVVcmwiLCJjaGlsZElkIiwic2NhbGUiLCJnZXRDaGlsZFRleHR1cmVQYXRoIiwiZ2V0QmdVcmwiLCJkaXNwbGF5U3RhdHVzIiwic2hvd2luZyIsInNob3duIiwiaGlkaW5nIiwiaGlkZGVuIiwib25UZXh0dXJlRnJvemVuIiwib25UZXh0dXJlUmVhZHkiLCJvbkRvbUJ1aWx0Iiwib25Mb2FkZWQiLCJvbkRpc3BsYXlDaGFuZ2VkIiwib25Gb2N1c1VwZGF0ZWQiLCJvbkFkZGVkIiwib25SZW1vdmVkIiwib25BdHRhY2hlZCIsIm9uUmVxdWVzdFBvc2l0aW9uIiwic2VuZEV2ZW50IiwiQUxMX1NJREVTIiwiYWRkUHJlbG9hZFRleHR1cmUiLCJzZXRJbnB1dFBhZGRpbmdzUmVtIiwicGFkZGluZ3MiLCJzZXRIaXRBcmVhUGFkZGluZ3NSZW0iLCJnZXRCcm93c2VyVGV4dHVyZVBhdGgiLCJnZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgiLCJ0cmFja1N1Ykl0ZW1zIiwiYWRkRGF0YUNoYW5nZWRDYWxsYmFjayIsInNldFNpZGVQYWRkaW5nc1JlbSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiZ2V0Vmlld1NpemVSZW0iLCJnZXRWaWV3U2l6ZVB4IiwicmVzaXplIiwicmVzaXplVmlld1JlbSIsInJlc2l6ZVZpZXdQeCIsImdldFZpZXdHbG9iYWxQb3NpdGlvbiIsImdldFZpZXdHbG9iYWxQb3NpdGlvblJlbSIsIngiLCJyZW1Ub1B4IiwieSIsImZyZWV6ZVRleHR1cmVCZWZvcmVSZXNpemUiLCJnZXRTY2FsZSIsInB4IiwicmVtIiwic2V0QW5pbWF0ZVdpbmRvdyIsInNldEV2ZW50SGFuZGxlZCIsImlzRXZlbnRIYW5kbGVkIiwiZm9yY2VUcmlnZ2VyTW91c2VNb3ZlIiwiZ2V0RGlzcGxheVN0YXR1cyIsImdldFNob3dpbmdTdGF0dXMiLCJkaXNwbGF5U3RhdHVzSXMiLCJleHRyYVNpemUiLCJzZXRFeHRyYVNpemVSZW0iLCJnZXRFeHRyYVNpemVSZW0iLCJ3aGVuVHV0b3JpYWxSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwiaXNEb21CdWlsdCIsInZpZXdFdmVudFR5cGVzIiwiY2xvc2VQb3BvdmVyIiwiY2xvc2UiLCJtaW5pbWl6ZSIsImNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyIsInNlbmRWaWV3RXZlbnQiLCJyZXN0T3B0aW9ucyIsIm5vb3AiLCJlbXB0eUZ1bmN0aW9uIiwiaWRlbnRpdHkiLCJhIiwiY29uc3RUcnVlIiwibG9nIiwibGluZSIsInN0YWNrIiwiRXJyb3IiLCJpbnZhbGlkIiwiY2FsbGVyIiwicG9wIiwiX19mZWF0dXJlIiwiTWVkaWFTaXplIiwidXNlTWVkaWEiLCJhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlIiwiaXNBZGFwdGl2ZVN1ZmZpeCIsImlzQWRhcHRpdmVQcm9wTmFtZSIsImF0IiwibWVkaWFTaXplU2VxdWVuY2UiLCJFeHRyYUxhcmdlIiwiTGFyZ2UiLCJNZWRpdW0iLCJTbWFsbCIsIkV4dHJhU21hbGwiLCJoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyIsInByb3BOYW1lIiwic29tZSIsInN1ZmZpeCIsIm5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMiLCJtZWRpYVNpemUiLCJvdXRwdXQiLCJiYXNlUHJvcE5hbWUiLCJzbGljZSIsImpvaW4iLCJtZWRpYVNpemVJbmRleCIsImluZGV4T2YiLCJyZWxldmFudEFkYXB0aXZlU3VmZml4ZXMiLCJyZWxldmFudFByb3BlcnR5TmFtZXMiLCJyZXNvbHZlZFByb3BOYW1lIiwiZmluZCIsInJlc29sdmVkUHJvcFZhbHVlIiwiZ2V0QWRhcHRpdmVDb21wb25lbnQiLCJDb21wb25lbnQiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZWRQcm9wcyIsIkFkYXB0aXZlQ29tcG9uZW50IiwiaGFzQWRhcHRpdmVQcm9wcyIsImdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzIiwiZHJhZnRQcm9wcyIsImYiLCJjYWxsZWRSZWYiLCJzZW5kQ2xvc2VFdmVudCIsImRlZmF1bHRDYWxsYmFjayIsInVzZUtleWRvd25MaXN0ZW5lciIsIk5PTkUiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJoYW5kbGVLZXlQcmVzcyIsInN0b3BQcm9wYWdhdGlvbiIsInVzZUNsb3NlT25LZXlQcmVzcyIsIkVTQ0FQRSIsInVzZUNhbGxiYWNrT25Fc2MiLCJ1c2VDbG9zZU9uRXNjIiwiTWVkaWFXaWR0aCIsIk1lZGlhSGVpZ2h0IiwiY29udmVydFRvTWVkaWFTaXplIiwibWVkaWFDb250ZXh0IiwiY29udmVydFRvTWVkaWFXaWR0aCIsImNvbnZlcnRUb01lZGlhSGVpZ2h0IiwibWVkaWFXaWR0aCIsIm1lZGlhSGVpZ2h0IiwicmVtU2NyZWVuV2lkdGgiLCJyZW1TY3JlZW5IZWlnaHQiLCJLRVlfTU9ESUZJRVJTIiwiaXNOb25OdWxsYWJsZSIsImluZGV4IiwidW5zYWZlR2V0IiwidW53cmFwSXRlbSIsIml0ZW0iLCJjb25zdHJ1Y3RvciIsImFyciIsImV2ZXJ5IiwiZmlsdGVyIiwicHJlZGljYXRlIiwic3BsaWNlIiwibGFzdEluZGV4IiwibGFzdEluZGV4WmVybyIsImxhc3RFbGVtZW50IiwiaW5kZXhGcm9tIiwiaW5kZXhUbyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dEluZGV4IiwiZW5kSW5kZXgiLCJuZXh0IiwiZG9uZSIsInRhaWwiLCJjb3VudCIsImRlbGV0ZUNvdW50IiwiZmluZExhc3QiLCJmaWx0ZXJNYXAiLCJtYXBFeGlzdHMiLCJmaW5kSW5kZXgiLCJmaW5kSW5kZXhMYXN0Iiwic2VwYXJhdG9yIiwiU3RyaW5nIiwiZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50Iiwic2VsZWN0aW9uQm91bmRzIiwic3RhcnRJbmRleCIsImdldFNlbGVjdGlvbiIsImVtcHR5Iiwic2VsZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZXZPYmoiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNlbGVjdGlvbkluZGV4IiwiaW5kZXhDdXJzb3JQb3NpdGlvbiIsImluZGV4U2VsZWN0aW9uU3RhcnQiLCJpbmRleFNlbGVjdGlvbkVuZCIsImxhc3RJbmRleE9mIiwiYW5jaG9yQ2FyZXRQb3NpdGlvbiIsImNhcmV0UG9zaXRpb25Gcm9tUG9pbnQiLCJmb2N1c0NhcmV0UG9zaXRpb24iLCJvZmZzZXROb2RlIiwic2VsZWN0aW9uIiwic2V0QmFzZUFuZEV4dGVudCIsIm9mZnNldCIsImlzTnVsbGFibGUiLCJzb3VuZE5hbWUiLCJjYWxsIiwiU291bmQiLCJwbGF5SGlnaGxpZ2h0IiwicGxheUNsaWNrIiwicGxheVllcyIsInN0ciIsIm1hcHBpbmciLCJmb3JtYXRQcmludGYiLCJwYWQiLCJzbmFrZVRvQ2FtZWwiLCJ0b1VwcGVyQ2FzZSIsIm5vcm1hbGl6ZVJlc291cmNlIiwidXBDYXNlRmlyc3RDaGFyIiwiY29udmVydE5ic3AiLCJjb252ZXJ0WnduYnNwIiwiYWRkU2VwYXJhdG9yVG9SaWdodCIsImxhc3QiLCJhZGRTZXBhcmF0b3JUb0xlZnQiLCJzcGxpdEFuZEZvcm1hdCIsInN0cmluZ1RvU3BsaXQiLCJzcGxpdEV1cm9wZWFuIiwic3BsaXRSZXN1bHQiLCJzcGxpdFJlZ2V4Iiwic3RyaW5nV2l0aE5ic3AiLCJ3b3JkIiwic3BsaXRDaGluZXNlIiwibGF0aW5JbmplY3Rpb25zIiwiYnJhY2tldHNBbmRRdW90ZXMiLCJwdW5jdHVhdGlvbk1hcmtzIiwibmVpZ2hib3JpbmdIaWVyb2dseXBocyIsIm1haW5SZWdleCIsInNvdXJjZSIsInN0cmluZ3NUb1NwbGl0IiwiQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyIsInNwbGl0V29yZHMiLCJsYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwic3ViU3RyaW5nIiwiQ2xpY2tPdXRzaWRlTWFuYWdlciIsIl9saXN0ZW5Nb3VzZSIsImNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJpbnN0YW5jZSIsIl9faW5zdGFuY2UiLCJyZWdpc3RlciIsImFkZE1vdXNlTGlzdGVuZXIiLCJ1bnJlZ2lzdGVyIiwidGFyZ2V0Q29udGFpbmVyIiwidGFyZ2V0Q2FsbGJhY2siLCJyZW1vdmVNb3VzZUxpc3RlbmVyIiwiRGF0YVRyYWNrZXIiLCJfY2FsbGJhY2tzIiwiX3VwZGF0ZUhhbmRsZXIiLCJfdmlld3MiLCJjbGVhclZpZXdDYWxsYmFja3MiLCJ2aWV3SWQiLCJjYWxsYmFja0lkIiwiX19kYXRhVHJhY2tlciIsImNsZWFyIiwiYWRkQ2FsbGJhY2siLCJfZW1taXREYXRhQ2hhbmdlZCIsInJlbW92ZUNhbGxiYWNrIiwiaW5kZXhlcyIsIm9uQmluZGluZ3NSZWFkeSIsIlZpZXdNb2RlbCIsIndhdGNoaW5nRmllbGRzIiwiZGF0YVRyYWNrZXIiLCJtb2RlbFBhdGgiLCJjYWxsYmFja3MiLCJfbm90aWZ5T2JzZXJ2ZXJzIiwiZXZhbCIsIlNldCIsIl9hZGRDYWxsYmFjayIsImFkZCIsImRlc3Ryb3kiLCJkdW1wVmlld01vZGVsIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJzdGFydHNXaXRoIiwiQ2xpY2tPdXRzaWRlTWFuYWdlckNsYXNzIiwiVXNlckxvY2FsZSIsIkRhdGVGb3JtYXRUeXBlIiwiUmVhbEZvcm1hdFR5cGUiLCJUaW1lRm9ybWF0VHlwZSIsImFkZEVzY2FwZUxpc3RlbmVyIiwiY2xvc2VPbkVzYyIsImlzQ29udGV4dE1lbnVTaG93biIsImlzUG9wT3ZlclNob3duIiwiaXNUb29sdGlwU2hvd24iLCJtYWtlR2xvYmFsQm91bmRpbmdCb3giLCJvbkxheW91dFJlYWR5Iiwic2VuZENsb3NlUG9wT3ZlckV2ZW50Iiwic2VuZE1vdmVFdmVudCIsInNlbmRTaG93Q29udGV4dE1lbnVFdmVudCIsInNlbmRTaG93UG9wT3ZlckV2ZW50IiwiVmlld0VudkhlbHBlciIsInN5c3RlbUxvY2FsZSIsImdldFJlYWxGb3JtYXQiLCJnZXRUaW1lRm9ybWF0IiwidXRjIiwiZ2V0RGF0ZUZvcm1hdCIsInVzZXJMb2NhbGUiLCJwYXR0ZXJuIiwidGltZVRvTG9jYWwiLCJnZXRUaW1lU3RyaW5nIiwicmVzb3VyY2VJRCIsInNob3dNb2RlbCIsImRlcHRoIiwid2FybiIsInZhbHVlcyIsIl9zaG93TW9kZWwiLCJmcmVlemUiLCJGUkFDVElPTkFMIiwiV09fWkVST19ESUdJVFMiLCJTSE9SVF9GT1JNQVQiLCJMT05HX0ZPUk1BVCIsIllFQVJfTU9OVEgiLCJjbGllbnRSZWN0IiwiX0JpbmRpbmdzUmVhZHkiLCJfV2luZG93TG9hZGVkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiTU9WRSIsIkNMT1NFIiwiUE9QX09WRVIiLCJzZW5kTWluaW1pemVFdmVudCIsIk1JTklNSVpFIiwiQ09OVEVYVF9NRU5VIiwiZGlyZWN0aW9uIiwibm9kZSIsImdsb2JhbFBvc2l0aW9uIiwiY2xpZW50UmVjdFB4IiwiYmJveCIsImlzV2luZG93U2hvd25CeVZpZXdFdmVudCIsImNhbGxPbkVzYyIsImhhbmRsZUZ1bmMiLCJNZWRpYVdyYXBwZXJJbm5lciIsIk1lZGlhV3JhcHBlciIsIkNTUyIsIldJRFRIX0NMQVNTRVMiLCJIRUlHSFRfQ0xBU1NFUyIsIlNJWkVfQ0xBU1NFUyIsIlJlYWN0RE9NIiwiQXBwIiwiTW9kZWxQcm92aWRlciIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZXIiLCJ1c2VNb2RlbCIsIkRlc2NyaXB0aW9uIiwiRm9vdGVyIiwiSGVhZGVyIiwiVEVYVFMiLCJhcm1vcnlfeWFyZCIsIlpFUk9fUFJJQ0UiLCJ0b2tlbnNDb3VudCIsInBheWVkVG9rZW5zTGltaXQiLCJpc1dhbGxldEF2YWlsYWJsZSIsInVzZXJHb2xkIiwidG9rZW5QcmljZSIsImNvbXB1dGVzIiwiZ2V0VG9rZW5QcmljZSIsInRva2VuUmF0ZSIsInByaWNlIiwib25lUHJpY2UiLCJHb2xkIiwiY2xvc2VCdG4iLCJsYWJlbCIsImNhbmNlbCIsImhlYWRlciIsInByb2R1Y3RJbmZvIiwiZGVzY3JpcHRpb24iLCJ0b2tlbkltYWdlIiwiZm9vdGVyIiwiYnV5IiwicG9zdHByb2dyZXNzaW9uIiwiYnV5VG9rZW5zIiwidGl0bGUiLCJTVEVQX1NJWkUiLCJTVEVQUEVSX1dJRFRIIiwidG9rZW5zVmFsdWUiLCJzZXRUb2tlbnNWYWx1ZSIsImdvbGRWYWx1ZSIsInNldEdvbGRWYWx1ZSIsInNldElzRW5vdWdoIiwiaGFuZGxlQ2hhbmdlVG9rZW5zIiwic2VsZWN0ZWRWYWx1ZSIsImdvbGRSYXRlIiwiYmFzZV9faG92ZXJlZCIsImxpbmVfX2ZpcnN0IiwiYmciLCJsaW5lX19zZWNvbmQiLCJ0b2tlbnNBdmFpbGFibGUiLCJhdmFpbGFibGVUb2tlbnMiLCJ0b2tlbnMiLCJ0b2tlbnNBdmFpbGFibGVfX3Rva2VucyIsImZpbmFsUHJpY2UiLCJiaWciLCJwcm9kdWN0Q291bnRlciIsIm1haW4iLCJidXlCdXR0b24iLCJidXR0b25UZXh0Iiwidmlld3MiLCJsb2JieSIsImZlYXR1cmUiLCJ0b29sdGlwcyIsIkFybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldyIsIndhcm5pbmciLCJ3YXJuaW5nX19nbG93Iiwid2FybmluZ19faWNvbiIsInByb2R1Y3RUaXRsZVdyYXBwZXIiLCJ0b2tlbkNvdW50IiwidG9rZW5Db3VudF9fdGV4dCIsImF2YWlsYWJsZSIsIlNob3BDdXJyZW5jeVRvb2x0aXBWaWV3IiwidG9rZW5Db3VudF9fdW5kZXJUb29sdGlwIiwidG9rZW5Db3VudF9fY291bnQiLCJ0b2tlbkNvdW50X19pY29uIiwibGlrZUFycmF5IiwiY29tcHV0ZWRGbiIsImRlZlByaWNlIiwiZGlzY291bnQiXSwic291cmNlUm9vdCI6IiJ9
