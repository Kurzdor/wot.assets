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

        /***/ './src/components/TooltipDecorator/TooltipDecorator.tsx':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.tsx ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TooltipDecorator: () => /* binding */ TooltipDecorator,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/hooks/useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );
                /* harmony import */ var lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! lib/hooks/useSkipFrame */ './src/lib/hooks/useSkipFrame.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./TooltipDecorator.css */ './src/components/TooltipDecorator/TooltipDecorator.css',
                );
                const _excluded = ['children', 'className', 'theme'];

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

                const TooltipDecorator = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef(
                    function TooltipDecorator(_ref, ref) {
                        let children = _ref.children,
                            className = _ref.className,
                            _ref$theme = _ref.theme,
                            theme = _ref$theme === void 0 ? 'default' : _ref$theme,
                            restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                        const skipFrame = (0, lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__.useSkipFrame)();
                        const baseRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
                        (0, lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__.useMount)(() => {
                            skipFrame.run(() => {
                                const base = baseRef.current;

                                if (!base) {
                                    return;
                                }

                                const contentWidth = base.scrollWidth;
                                const contentHeight = base.scrollHeight;
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.resize(contentWidth, contentHeight);
                                const style = window.getComputedStyle(base);
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.setSidePaddingsRem({
                                    left: parseInt(style.getPropertyValue('padding-left'), 10),
                                    top: parseInt(style.getPropertyValue('padding-top'), 10),
                                    right: parseInt(style.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(style.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        });

                        function setRefs(node) {
                            baseRef.current = node;

                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }

                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            _extends({}, restProps, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].base,
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'][
                                        `base__theme-${theme}`
                                    ],
                                    className,
                                ),
                                ref: setRefs,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].decorator,
                                },
                                children,
                            ),
                        );
                    },
                );

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

        /***/ './src/lib/hooks/useMountUnmount.ts':
            /*!******************************************!*\
  !*** ./src/lib/hooks/useMountUnmount.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useMount: () => /* binding */ useMount,
                    /* harmony export */ useUnmount: () => /* binding */ useUnmount,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                const useMount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(fn, []);
                };
                const useUnmount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => fn, []);
                };

                /***/
            },

        /***/ './src/lib/hooks/useSkipFrame.ts':
            /*!***************************************!*\
  !*** ./src/lib/hooks/useSkipFrame.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useSkipFrame: () => /* binding */ useSkipFrame,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );

                const NO_RAF_ID = 0;
                /**
                 * This hook will correctly work with async skip frame.
                 * It will be cleared when your component is automatically unmounted.
                 * Each time function starts, it will clear the previous run.
                 *
                 * Examples to usage:
                 * ```ts
                 * const skipFrame = useSkipFrame()
                 *
                 * useEffect(() => {
                 *   if (state === 'animating') {
                 *     skipFrame.run(() => setState(...))
                 *   }
                 * }, [state, skipFrame])
                 * ```
                 */

                function useSkipFrame() {
                    const rafIdRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(NO_RAF_ID);
                    (0, _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__.useUnmount)(() => {
                        window.cancelAnimationFrame(rafIdRef.current);
                    });
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                        () => ({
                            run: (handler) => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = window.requestAnimationFrame(() => {
                                    rafIdRef.current = window.requestAnimationFrame(() => {
                                        handler();
                                        rafIdRef.current = NO_RAF_ID;
                                    });
                                });
                            },
                            clear: () => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = NO_RAF_ID;
                            },

                            get isRunning() {
                                return rafIdRef.current !== NO_RAF_ID;
                            },
                        }),
                        [],
                    );
                }

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

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx':
            /*!**********************************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx ***!
  \**********************************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! components/TooltipDecorator/TooltipDecorator */ './src/components/TooltipDecorator/TooltipDecorator.tsx',
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
                /* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/App */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts',
                );

                engine.whenReady.then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _model__WEBPACK_IMPORTED_MODULE_4__.ModelProvider,
                            null,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__.TooltipDecorator,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    _components_App__WEBPACK_IMPORTED_MODULE_3__.App,
                                    null,
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx':
            /*!*********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx ***!
  \*********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
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
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./App.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css',
                );

                const App = react__WEBPACK_IMPORTED_MODULE_1___default().memo(() => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'div',
                        {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].bg,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].metal,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].warningIcon,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].body,
                                text: R.strings.armory_shop.shopBuyView.tooltip.buyNotAvailable(),
                            },
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts':
            /*!***********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts ***!
  \***********************************************************************************************************************************/
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
                /* eslint-disable @typescript-eslint/no-unused-vars */

                const _initializeModelWithC = (0,
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(
                        ({ observableModel }) => {
                            const model = {
                                root: observableModel.object(),
                            };
                            return Object.assign({}, model, {
                                computes: {},
                            });
                        },
                        ({ externalModel }) => ({}),
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

        /***/ './src/components/TooltipDecorator/TooltipDecorator.css':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.css ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TooltipDecorator_base_c9',
                    'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                    decorator: 'TooltipDecorator_decorator_3d',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css':
            /*!*********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css ***!
  \*********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_8a',
                    bg: 'App_bg_a6',
                    metal: 'App_metal_33',
                    warningIcon: 'App_warningIcon_93',
                    body: 'App_body_b0',
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
            /******/ 'lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView': 0,
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
            '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJTyxNQUFNTSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCx3RUFBWixDQUF4QjtBQUlQLE1BQU1RLGdCQUFnQixHQUFHO0FBQUVDLEVBQUFBLEVBQUUsRUFBRUwsdURBQU47QUFBcUJPLEVBQUFBLEVBQUUsRUFBRVAsdURBQXpCO0FBQXdDUyxFQUFBQSxFQUFFLEVBQUVULHVEQUE1QztBQUEyRFcsRUFBQUEsRUFBRSxFQUFFWCx1REFBYVk7QUFBNUUsQ0FBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUFFUixFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWFpQjtBQUE1RSxDQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHO0FBQUViLEVBQUFBLEVBQUUsRUFBRUwsd0RBQU47QUFBc0JPLEVBQUFBLEVBQUUsRUFBRVAsd0RBQTFCO0FBQTBDUyxFQUFBQSxFQUFFLEVBQUVULHdEQUE5QztBQUE4RFcsRUFBQUEsRUFBRSxFQUFFWCx3REFBY3NCO0FBQWhGLENBQTFCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFBRWxCLEVBQUFBLEVBQUUsRUFBRUwsdURBQU47QUFBcUJPLEVBQUFBLEVBQUUsRUFBRVAsdURBQXpCO0FBQXdDUyxFQUFBQSxFQUFFLEVBQUVULHVEQUE1QztBQUEyRFcsRUFBQUEsRUFBRSxFQUFFWCx1REFBYTJCO0FBQTVFLENBQXpCO0FBQ0EsTUFBTUMs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O1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3gudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvRm9ybWF0VGV4dC9Gb3JtYXRUZXh0LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvTWVkaWFDb250ZXh0LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvTWVkaWFRdWVyeS50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L2dldEJ5SGVpZ2h0LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L3N0YXRpYy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0L1RleHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcERlY29yYXRvci9Ub29sdGlwRGVjb3JhdG9yLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9nbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZy5qcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZGF0YS1sYXllci9kYXRhLWxheWVyLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9jbGllbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9jbGllbnQvaW50ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9oZWxwZXJzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NoaWxkcmVuLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L3NlbmRFdmVudC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VDYWxsT25jZS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTWVkaWEudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZU1vdW50VW5tb3VudC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlU2tpcEZyYW1lLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvdG9vbHRpcHMvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3L0FybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldy50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvdG9vbHRpcHMvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3L2NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dC5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0L1RleHQuY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcERlY29yYXRvci9Ub29sdGlwRGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvY29tcG9uZW50cy9BcHAuY3NzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3BhY2luZyBmcm9tICdnbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nJztcclxuaW1wb3J0IGdldEFkYXB0aXZlQ29udHJvbGxlciwgeyBBZGFwdGl2ZVByb3BzIH0gZnJvbSAnbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb3guY3NzJztcclxuXHJcbmV4cG9ydCB0eXBlIFN0YW5kYXJkU3BhY2luZ1R5cGUgPSBrZXlvZiB0eXBlb2Ygc3BhY2luZztcclxuZXhwb3J0IHR5cGUgU3BhY2luZ1R5cGUgPSBTdGFuZGFyZFNwYWNpbmdUeXBlIHwgYm9vbGVhbiB8IG51bWJlcjtcclxuZXhwb3J0IGNvbnN0IHN0YW5kYXJkTWFyZ2lucyA9IE9iamVjdC5rZXlzKHNwYWNpbmcpIGFzIFN0YW5kYXJkU3BhY2luZ1R5cGVbXTtcclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbUNvbXBvbmVudFJlcXVpcmVkUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZzsgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzOyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH07XHJcblxyXG5jb25zdCBkZWZhdWx0WGxNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19YTCwgbXI6IHN0eWxlcy5tcl9fWEwsIG1iOiBzdHlsZXMubWJfX1hMLCBtbDogc3R5bGVzLm1sX19YTCB9O1xyXG5jb25zdCBkZWZhdWx0TGdNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19MRywgbXI6IHN0eWxlcy5tcl9fTEcsIG1iOiBzdHlsZXMubWJfX0xHLCBtbDogc3R5bGVzLm1sX19MRyB9O1xyXG5jb25zdCBkZWZhdWx0TWRwTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fTURwLCBtcjogc3R5bGVzLm1yX19NRHAsIG1iOiBzdHlsZXMubWJfX01EcCwgbWw6IHN0eWxlcy5tbF9fTURwIH07XHJcbmNvbnN0IGRlZmF1bHRNZE1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX01ELCBtcjogc3R5bGVzLm1yX19NRCwgbWI6IHN0eWxlcy5tYl9fTUQsIG1sOiBzdHlsZXMubWxfX01EIH07XHJcbmNvbnN0IGRlZmF1bHRTbXBNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19TTXAsIG1yOiBzdHlsZXMubXJfX1NNcCwgbWI6IHN0eWxlcy5tYl9fU01wLCBtbDogc3R5bGVzLm1sX19TTXAgfTtcclxuY29uc3QgZGVmYXVsdFNtTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fU00sIG1yOiBzdHlsZXMubXJfX1NNLCBtYjogc3R5bGVzLm1iX19TTSwgbWw6IHN0eWxlcy5tbF9fU00gfTtcclxuY29uc3QgZGVmYXVsdFhzTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fWFMsIG1yOiBzdHlsZXMubXJfX1hTLCBtYjogc3R5bGVzLm1iX19YUywgbWw6IHN0eWxlcy5tbF9fWFMgfTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5NYXAgPSB7XHJcbiAgICBYTDogZGVmYXVsdFhsTWFyZ2lucyxcclxuICAgIExHOiBkZWZhdWx0TGdNYXJnaW5zLFxyXG4gICAgTURwOiBkZWZhdWx0TWRwTWFyZ2lucyxcclxuICAgIE1EOiBkZWZhdWx0TWRNYXJnaW5zLFxyXG4gICAgU01wOiBkZWZhdWx0U21wTWFyZ2lucyxcclxuICAgIFNNOiBkZWZhdWx0U21NYXJnaW5zLFxyXG4gICAgWFM6IGRlZmF1bHRYc01hcmdpbnMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmdpbnMgPSBPYmplY3Qua2V5cyhkZWZhdWx0TWFyZ2luTWFwKSBhcyAoa2V5b2YgdHlwZW9mIGRlZmF1bHRNYXJnaW5NYXApW107XHJcblxyXG5jb25zdCBtYXJnaW5LZXlMaXN0ID0gWydtdCcsICdtcicsICdtYicsICdtbCddIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZ2V0TWFyZ2luQ2xhc3NOYW1lcyA9IChtYXJnaW5NYXA6IHsgbXQ/OiBTcGFjaW5nVHlwZTsgbXI/OiBTcGFjaW5nVHlwZTsgbWI/OiBTcGFjaW5nVHlwZTsgbWw/OiBTcGFjaW5nVHlwZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gbWFyZ2luS2V5TGlzdC5yZWR1Y2UoKGNsYXNzTmFtZXMsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyZ2luTWFwW2tleV07XHJcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcy5jb25jYXQoZGVmYXVsdE1hcmdpbk1hcFt2YWx1ZSA9PT0gdHJ1ZSA/ICdNRCcgOiB2YWx1ZV1ba2V5XSk7XHJcbiAgICB9LCBbXSBhcyBzdHJpbmdbXSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXJnaW5LZXlQcm9wZXJ0eU1hcCA9IHtcclxuICAgIG10OiAnbWFyZ2luVG9wJyxcclxuICAgIG1yOiAnbWFyZ2luUmlnaHQnLFxyXG4gICAgbWI6ICdtYXJnaW5Cb3R0b20nLFxyXG4gICAgbWw6ICdtYXJnaW5MZWZ0JyxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGdldE1hcmdpblN0eWxlID0gKG1hcmdpbk1hcDogeyBtdD86IFNwYWNpbmdUeXBlOyBtcj86IFNwYWNpbmdUeXBlOyBtYj86IFNwYWNpbmdUeXBlOyBtbD86IFNwYWNpbmdUeXBlIH0pID0+IHtcclxuICAgIHJldHVybiBtYXJnaW5LZXlMaXN0LnJlZHVjZSgoc3R5bGUsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyZ2luTWFwW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBtYXJnaW5LZXlQcm9wZXJ0eU1hcFtrZXldO1xyXG4gICAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZSArICdyZW0nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9LCB7fSBhcyBDU1NQcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcbnR5cGUgQmFzZUJveFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbT86IFNwYWNpbmdUeXBlO1xyXG4gICAgbXQ/OiBTcGFjaW5nVHlwZTtcclxuICAgIG1yPzogU3BhY2luZ1R5cGU7XHJcbiAgICBtYj86IFNwYWNpbmdUeXBlO1xyXG4gICAgbWw/OiBTcGFjaW5nVHlwZTtcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAgIGNvbHVtbj86IGJvb2xlYW47XHJcbiAgICByb3c/OiBib29sZWFuO1xyXG4gICAgc3BhY2VCZXR3ZWVuPzogYm9vbGVhbjtcclxuICAgIHNwYWNlQXJvdW5kPzogYm9vbGVhbjtcclxuICAgIGZsZXhTdGFydD86IGJvb2xlYW47XHJcbiAgICBjZW50ZXI/OiBib29sZWFuO1xyXG4gICAgZmxleEVuZD86IGJvb2xlYW47XHJcbiAgICBncm93PzogYm9vbGVhbjtcclxuICAgIHNocmluaz86IGJvb2xlYW47XHJcbiAgICB3cmFwPzogYm9vbGVhbjtcclxufSAmIFBpY2s8XHJcbiAgICBDU1NQcm9wZXJ0aWVzLFxyXG4gICAgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2ZsZXgnIHwgJ2ZsZXhEaXJlY3Rpb24nIHwgJ2ZsZXhXcmFwJyB8ICdqdXN0aWZ5Q29udGVudCcgfCAnYWxpZ25JdGVtcycgfCAnYWxpZ25TZWxmJ1xyXG4+O1xyXG5cclxuZXhwb3J0IHR5cGUgQm94U3RhdGljUHJvcHMgPSBSZWFkb25seTxCYXNlQm94UHJvcHM+ICYgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sIGtleW9mIEJhc2VCb3hQcm9wcz47XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgZ2VuZXJhdGVzIGEgZGl2IHdpdGggYXBwbGllZCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBCb3hQcm9wcyAtIE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtjbGFzc05hbWVdIC0gQWRkaXRpb25hbCBjbGFzcyhlcykgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbJ3dpZHRoJ119IFt3aWR0aF0gLSBXaWR0aCBvZiB0aGUgYm94LiBTdXBwb3J0cyBzdGFuZGFyZCBDU1MgdW5pdHMsIG51bWVyaWMgdmFsdWVzIGFyZSB0cmFuc2Zvcm1lZCB0byByZW0uXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzWydoZWlnaHQnXX0gW2hlaWdodF0gLSBIZWlnaHQgb2YgdGhlIGJveC4gU3VwcG9ydHMgc3RhbmRhcmQgQ1NTIHVuaXRzLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIGFsbCBzaWRlcyBvZiB0aGUgYm94LiBTdXBwb3J0cyBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGZvciBNRCBtYXJnaW4sIG51bWVyaWMgdmFsdWVzIGFyZSB0cmFuc2Zvcm1lZCB0byByZW0uXHJcbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gW210PW1dIC0gTWFyZ2luIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRvcCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttcj1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSByaWdodCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttYj1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbWw9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgbGVmdCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbHVtbl0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBjb250YWluZXIgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhIGNvbHVtbi5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtyb3ddIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSByb3cuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiZmxleERpcmVjdGlvblwiXX0gW2ZsZXhEaXJlY3Rpb25dIC0gU3BlY2lmaWVzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGZsZXggY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2ZsZXhTdGFydF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgYWxpZ25lZCB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtjZW50ZXJdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGNlbnRlcmVkIHdpdGhpbiB0aGUgY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2ZsZXhFbmRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgdG8gdGhlIGVuZCBvZiB0aGUgY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW3NwYWNlQmV0d2Vlbl0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgZXZlbmx5IHNwYWNlZCB3aXRoIHNwYWNlIGJldHdlZW4gdGhlbS5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzcGFjZUFyb3VuZF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgZXZlbmx5IHNwYWNlZCB3aXRoIHNwYWNlIGFyb3VuZCB0aGVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImp1c3RpZnlDb250ZW50XCJdfSBbanVzdGlmeUNvbnRlbnRdIC0gU3BlY2lmaWVzIGhvdyB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgYWxpZ25lZCBhbG9uZyB0aGUgbWFpbiBheGlzLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImFsaWduSXRlbXNcIl19IFthbGlnbkl0ZW1zXSAtIFNwZWNpZmllcyBob3cgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgYWxvbmcgdGhlIGNyb3NzIGF4aXMuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiYWxpZ25TZWxmXCJdfSBbYWxpZ25TZWxmXSAtIFNwZWNpZmllcyBob3cgYSBmbGV4IGl0ZW0gc2hvdWxkIGFsaWduIGl0c2VsZiBhbG9uZyB0aGUgY3Jvc3MgYXhpcy5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFt3cmFwXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCB3cmFwIGlmIHRoZXkgZXhjZWVkIHRoZSBjb250YWluZXIncyB3aWR0aC5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJmbGV4V3JhcFwiXX0gW2ZsZXhXcmFwXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCB3cmFwIGlmIHRoZXkgZXhjZWVkIHRoZSBjb250YWluZXIncyB3aWR0aC5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtncm93XSAtIFNwZWNpZmllcyB0aGUgZmxleCBncm93IGZhY3RvciBvZiB0aGUgZmxleCBpdGVtLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW3Nocmlua10gLSBTcGVjaWZpZXMgdGhlIGZsZXggc2hyaW5rIGZhY3RvciBvZiB0aGUgZmxleCBpdGVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImZsZXhcIl19IFtmbGV4XSAtIFNwZWNpZmllcyB0aGUgZmxleCBncm93LCBmbGV4IHNocmluaywgYW5kIGZsZXggYmFzaXMgb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXN9IFtzdHlsZV0gLSBDdXN0b20gc3R5bGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuICogICBAcGFyYW0ge1JlYWN0Tm9kZX0gW2NoaWxkcmVuXSAtIENoaWxkIGNvbXBvbmVudHMgdG8gYmUgcmVuZGVyZWQgd2l0aGluIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtPYmplY3R9IFsuLi5yZXN0UHJvcHNdIC0gQWRkaXRpb25hbCBIVE1MIGRpdiBwcm9wZXJ0aWVzLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQSBib3ggZWxlbWVudC5cclxuICovXHJcbmNvbnN0IEJveCA9ICh7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodCxcclxuICAgIG0sXHJcbiAgICBtdCA9IG0sXHJcbiAgICBtciA9IG0sXHJcbiAgICBtYiA9IG0sXHJcbiAgICBtbCA9IG0sXHJcbiAgICBjb2x1bW4sXHJcbiAgICByb3csXHJcbiAgICBmbGV4RGlyZWN0aW9uID0gKGNvbHVtbiAmJiAnY29sdW1uJykgfHwgKHJvdyAmJiAncm93JykgfHwgdW5kZWZpbmVkLFxyXG4gICAgZmxleFN0YXJ0LFxyXG4gICAgY2VudGVyLFxyXG4gICAgZmxleEVuZCxcclxuICAgIHNwYWNlQmV0d2VlbixcclxuICAgIHNwYWNlQXJvdW5kLFxyXG4gICAganVzdGlmeUNvbnRlbnQgPSAoZmxleFN0YXJ0ICYmICdmbGV4LXN0YXJ0JykgfHxcclxuICAgICAgICAoY2VudGVyICYmICdjZW50ZXInKSB8fFxyXG4gICAgICAgIChmbGV4RW5kICYmICdmbGV4LWVuZCcpIHx8XHJcbiAgICAgICAgKHNwYWNlQmV0d2VlbiAmJiAnc3BhY2UtYmV0d2VlbicpIHx8XHJcbiAgICAgICAgKHNwYWNlQXJvdW5kICYmICdzcGFjZS1hcm91bmQnKSB8fFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgIGFsaWduSXRlbXMgPSAoZmxleFN0YXJ0ICYmICdmbGV4LXN0YXJ0JykgfHwgKGNlbnRlciAmJiAnY2VudGVyJykgfHwgKGZsZXhFbmQgJiYgJ2ZsZXgtZW5kJykgfHwgdW5kZWZpbmVkLFxyXG4gICAgYWxpZ25TZWxmLFxyXG4gICAgd3JhcCxcclxuICAgIGZsZXhXcmFwID0gKHdyYXAgJiYgJ3dyYXAnKSB8fCB1bmRlZmluZWQsXHJcbiAgICBncm93LFxyXG4gICAgc2hyaW5rLFxyXG4gICAgZmxleCA9IGdyb3cgfHwgc2hyaW5rID8gYCR7Z3JvdyA/IDEgOiAwfSAke3NocmluayA/IDEgOiAwfSBhdXRvYCA6IHVuZGVmaW5lZCxcclxuICAgIHN0eWxlLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICAuLi5yZXN0UHJvcHNcclxufTogQm94U3RhdGljUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29tcHV0ZWRTdHlsZSwgY29tcHV0ZWRDbGFzc05hbWVzIH0gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtYXJnaW5NYXAgPSB7XHJcbiAgICAgICAgICAgIG10LFxyXG4gICAgICAgICAgICBtcixcclxuICAgICAgICAgICAgbWIsXHJcbiAgICAgICAgICAgIG1sLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZWRDbGFzc05hbWVzID0gZ2V0TWFyZ2luQ2xhc3NOYW1lcyhtYXJnaW5NYXApO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblN0eWxlID0gZ2V0TWFyZ2luU3R5bGUobWFyZ2luTWFwKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgIC4uLm1hcmdpblN0eWxlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyA/IHdpZHRoICsgJ3JlbScgOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicgPyBoZWlnaHQgKyAncmVtJyA6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGZsZXgsXHJcbiAgICAgICAgICAgICAgICBhbGlnblNlbGYsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4RGlyZWN0aW9uIHx8IGFsaWduSXRlbXMgPyAnZmxleCcgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXAsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudCxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXB1dGVkQ2xhc3NOYW1lcyxcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3dpZHRoLCBoZWlnaHQsIG10LCBtciwgbWIsIG1sLCBzdHlsZSwgZmxleCwgYWxpZ25TZWxmLCBmbGV4RGlyZWN0aW9uLCBmbGV4V3JhcCwganVzdGlmeUNvbnRlbnQsIGFsaWduSXRlbXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5iYXNlLCAuLi5jb21wdXRlZENsYXNzTmFtZXMsIGNsYXNzTmFtZSl9IHN0eWxlPXtjb21wdXRlZFN0eWxlfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbnR5cGUgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlID1cclxuICAgIHwgJ3dpZHRoJ1xyXG4gICAgfCAnaGVpZ2h0J1xyXG4gICAgfCAnbSdcclxuICAgIHwgJ210J1xyXG4gICAgfCAnbXInXHJcbiAgICB8ICdtYidcclxuICAgIHwgJ21sJ1xyXG4gICAgfCAnZmxleERpcmVjdGlvbidcclxuICAgIHwgJ2p1c3RpZnlDb250ZW50J1xyXG4gICAgfCAnYWxpZ25JdGVtcydcclxuICAgIHwgJ2FsaWduU2VsZidcclxuICAgIHwgJ2ZsZXhXcmFwJ1xyXG4gICAgfCAnZmxleCc7XHJcblxyXG5leHBvcnQgdHlwZSBCb3hQcm9wcyA9IEJveFN0YXRpY1Byb3BzICYgQWRhcHRpdmVQcm9wczxCb3hTdGF0aWNQcm9wcywgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjxCb3hTdGF0aWNQcm9wcywgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlPihCb3gpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7IGZvcm1hdFN0cmluZywgQWxpZ25tZW50IH0gZnJvbSAnbGliL3N0cmluZy11dGlscyc7XG5cbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybWF0VGV4dC5jc3MnO1xuXG5leHBvcnQgY29uc3QgRm9ybWF0VGV4dCA9ICh7IGJpbmRpbmcsIHRleHQgPSAnJywgY2xhc3NNaXgsIGFsaWdubWVudCA9IEFsaWdubWVudC5sZWZ0IH06IFByb3BzKSA9PiB7XG4gICAgaWYgKHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZvcm1hdFRleHQgd2FzIHN1cHBsaWVkIHdpdGggJ251bGwnXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGV4dC5zcGxpdCgnXFxuJykubWFwKCh0ZXh0TGluZSwgbGluZUlkKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYXNlLCBjbGFzc01peCl9IGtleT17YCR7dGV4dExpbmV9LSR7bGluZUlkfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0U3RyaW5nKHRleHRMaW5lLCBhbGlnbm1lbnQsIGJpbmRpbmcpLm1hcCgodGV4dCwgd29yZElkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtgJHt3b3JkSWR9LSR7dGV4dH1gfT57dGV4dH08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4vc3RhdGljJztcbmltcG9ydCB7IGdldFNpemVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHsgd2lkdGg6IGluaXRpYWxXaWR0aCwgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0IH0gPSBlbnYuY2xpZW50LmdldFNpemUoJ3JlbScpO1xuXG5leHBvcnQgdHlwZSBNZWRpYUNvbnRleHRUeXBlID0ge1xuICAgIGV4dHJhU21hbGw6IGJvb2xlYW47XG4gICAgc21hbGw6IGJvb2xlYW47XG4gICAgbWVkaXVtOiBib29sZWFuO1xuICAgIGxhcmdlOiBib29sZWFuO1xuICAgIGV4dHJhTGFyZ2U6IGJvb2xlYW47XG4gICAgZXh0cmFTbWFsbFdpZHRoOiBib29sZWFuO1xuICAgIHNtYWxsV2lkdGg6IGJvb2xlYW47XG4gICAgbWVkaXVtV2lkdGg6IGJvb2xlYW47XG4gICAgbGFyZ2VXaWR0aDogYm9vbGVhbjtcbiAgICBleHRyYUxhcmdlV2lkdGg6IGJvb2xlYW47XG4gICAgZXh0cmFTbWFsbEhlaWdodDogYm9vbGVhbjtcbiAgICBzbWFsbEhlaWdodDogYm9vbGVhbjtcbiAgICBtZWRpdW1IZWlnaHQ6IGJvb2xlYW47XG4gICAgbGFyZ2VIZWlnaHQ6IGJvb2xlYW47XG4gICAgZXh0cmFMYXJnZUhlaWdodDogYm9vbGVhbjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlOiBNZWRpYUNvbnRleHRUeXBlID0ge1xuICAgIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gICAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICAgIC4uLmdldFNpemVzKGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCwgQlJFQUtQT0lOVFMpLFxufTtcblxuLyoqXG4gKiBVc2UgdXNlTWVkaWEgaG9vayBmcm9tICdsaWIvaG9va3MvdXNlTWVkaWEnIGRpcmVjdGx5IGluIHlvdXIgcmVhY3QgY29tcG9uZW50c1xuICpcbiAqIFVzYWdlIGFuZCB0ZWNoIGRvYzogaHR0cHM6Ly9jb25mbHVlbmNlLndhcmdhbWluZy5uZXQvcGFnZXMvdmlld3BhZ2UuYWN0aW9uP3BhZ2VJZD0xNTgzMjU1NTQ0XG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IE1lZGlhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFZhbHVlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUNhbGxPbmNlIGZyb20gJ2xpYi9ob29rcy91c2VDYWxsT25jZSc7XG5cbmltcG9ydCB7IE1lZGlhQ29udGV4dCB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IHsgZ2V0U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gdXNlQ2FsbGJhY2soKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXBhcmVkV2lkdGggPSBlbnYudmlldy5weFRvUmVtKHdpZHRoKTtcbiAgICAgICAgY29uc3QgcHJlcGFyZWRIZWlnaHQgPSBlbnYudmlldy5weFRvUmVtKGhlaWdodCk7XG5cbiAgICAgICAgc2V0VmFsdWUoe1xuICAgICAgICAgICAgd2lkdGg6IHByZXBhcmVkV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHByZXBhcmVkSGVpZ2h0LFxuICAgICAgICAgICAgLi4uZ2V0U2l6ZXMocHJlcGFyZWRXaWR0aCwgcHJlcGFyZWRIZWlnaHQsIEJSRUFLUE9JTlRTKSxcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlQ2FsbE9uY2UoKCkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ2NsaWVudFJlc2l6ZWQnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IGVuZ2luZS5vZmYoJ2NsaWVudFJlc2l6ZWQnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtoYW5kbGVSZXNpemVdKTtcblxuICAgIGNvbnN0IHZhbHVlQXNQcm9wID0gdXNlTWVtbygoKSA9PiAoeyAuLi52YWx1ZSB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gPE1lZGlhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVBc1Byb3B9PntjaGlsZHJlbn08L01lZGlhQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5jb25zdCBNZWRpYVByb3ZpZGVyID0gbWVtbyhQcm92aWRlcik7XG5cbmV4cG9ydCB7IE1lZGlhUHJvdmlkZXIgfTtcbiIsImltcG9ydCB7IG1lbW8sIHVzZUNvbnRleHQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QnlIZWlnaHQgfSBmcm9tICcuL2dldEJ5SGVpZ2h0JztcbmltcG9ydCB7IE1lZGlhQ29udGV4dCB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGV4dHJhTGFyZ2U6IGZhbHNlLFxuICAgIGxhcmdlOiBmYWxzZSxcbiAgICBtZWRpdW06IGZhbHNlLFxuICAgIHNtYWxsOiBmYWxzZSxcbiAgICBleHRyYVNtYWxsOiBmYWxzZSxcbiAgICBleHRyYUxhcmdlV2lkdGg6IGZhbHNlLFxuICAgIGxhcmdlV2lkdGg6IGZhbHNlLFxuICAgIG1lZGl1bVdpZHRoOiBmYWxzZSxcbiAgICBzbWFsbFdpZHRoOiBmYWxzZSxcbiAgICBleHRyYVNtYWxsV2lkdGg6IGZhbHNlLFxuICAgIGV4dHJhTGFyZ2VIZWlnaHQ6IGZhbHNlLFxuICAgIGxhcmdlSGVpZ2h0OiBmYWxzZSxcbiAgICBtZWRpdW1IZWlnaHQ6IGZhbHNlLFxuICAgIHNtYWxsSGVpZ2h0OiBmYWxzZSxcbiAgICBleHRyYVNtYWxsSGVpZ2h0OiBmYWxzZSxcbn07XG5cbmV4cG9ydCB0eXBlIERlZmF1bHRQcm9wcyA9IHR5cGVvZiBkZWZhdWx0UHJvcHM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz47XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnRQcm9wcyA9IFJlYWRvbmx5PFBpY2s8UHJvcHMsICdleHRyYUxhcmdlJyB8ICdsYXJnZScgfCAnbWVkaXVtJyB8ICdzbWFsbCcgfCAnZXh0cmFTbWFsbCc+PlxuXG5jb25zdCBNZWRpYSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBleHRyYUxhcmdlLCBsYXJnZSwgbWVkaXVtLCBzbWFsbCwgZXh0cmFTbWFsbCxcbiAgICAgICAgZXh0cmFMYXJnZVdpZHRoLCBsYXJnZVdpZHRoLCBtZWRpdW1XaWR0aCwgc21hbGxXaWR0aCwgZXh0cmFTbWFsbFdpZHRoLFxuICAgICAgICBleHRyYUxhcmdlSGVpZ2h0LCBsYXJnZUhlaWdodCwgbWVkaXVtSGVpZ2h0LCBzbWFsbEhlaWdodCwgZXh0cmFTbWFsbEhlaWdodCxcbiAgICB9ID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xuXG4gICAgY29uc3QgYnJlYWtwb2ludFByb3BzOiBCcmVha3BvaW50UHJvcHMgPSB7XG4gICAgICAgIGV4dHJhTGFyZ2U6IGV4dHJhTGFyZ2VIZWlnaHQsXG4gICAgICAgIGxhcmdlOiBsYXJnZUhlaWdodCxcbiAgICAgICAgbWVkaXVtOiBtZWRpdW1IZWlnaHQsXG4gICAgICAgIHNtYWxsOiBzbWFsbEhlaWdodCxcbiAgICAgICAgZXh0cmFTbWFsbDogZXh0cmFTbWFsbEhlaWdodCxcbiAgICB9O1xuXG4gICAgaWYgKHJlc3QuZXh0cmFMYXJnZSB8fCByZXN0LmxhcmdlIHx8IHJlc3QubWVkaXVtIHx8IHJlc3Quc21hbGwgfHwgcmVzdC5leHRyYVNtYWxsKSB7XG4gICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2UgJiYgZXh0cmFMYXJnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubGFyZ2UgJiYgbGFyZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0Lm1lZGl1bSAmJiBtZWRpdW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LnNtYWxsICYmIHNtYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsICYmIGV4dHJhU21hbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VXaWR0aCAmJiBleHRyYUxhcmdlV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmxhcmdlV2lkdGggJiYgbGFyZ2VXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubWVkaXVtV2lkdGggJiYgbWVkaXVtV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LnNtYWxsV2lkdGggJiYgc21hbGxXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QuZXh0cmFTbWFsbFdpZHRoICYmIGV4dHJhU21hbGxXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN0LmV4dHJhTGFyZ2VXaWR0aCAmJiAhcmVzdC5sYXJnZVdpZHRoICYmICFyZXN0Lm1lZGl1bVdpZHRoICYmICFyZXN0LnNtYWxsV2lkdGggJiYgIXJlc3QuZXh0cmFTbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICBpZiAocmVzdC5leHRyYUxhcmdlSGVpZ2h0ICYmIGV4dHJhTGFyZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0LmxhcmdlSGVpZ2h0ICYmIGxhcmdlSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5tZWRpdW1IZWlnaHQgJiYgbWVkaXVtSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5zbWFsbEhlaWdodCAmJiBzbWFsbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3QuZXh0cmFTbWFsbEhlaWdodCAmJiBleHRyYVNtYWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5NZWRpYS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmNvbnN0IE1lZGlhUXVlcnkgPSBtZW1vKE1lZGlhKTtcblxuZXhwb3J0IHsgTWVkaWFRdWVyeSB9O1xuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBCcmVha3BvaW50UHJvcHMgfSBmcm9tICcuL01lZGlhUXVlcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJ5SGVpZ2h0ID0gKGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQsIHJlc3Q6IFBhcnRpYWw8RGVmYXVsdFByb3BzPiwgYnJlYWtwb2ludFByb3BzOiBCcmVha3BvaW50UHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcclxuICAgIGlmICghcmVzdC5leHRyYUxhcmdlSGVpZ2h0ICYmICFyZXN0LmxhcmdlSGVpZ2h0ICYmICFyZXN0Lm1lZGl1bUhlaWdodCAmJiAhcmVzdC5zbWFsbEhlaWdodCAmJiAhcmVzdC5leHRyYVNtYWxsSGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmV4dHJhTGFyZ2UpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QubGFyZ2VIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmxhcmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0Lm1lZGl1bUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMubWVkaXVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LnNtYWxsSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5zbWFsbCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5leHRyYVNtYWxsSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5leHRyYVNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBNZWRpYUNvbnRleHRUeXBlIH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuXG5leHBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9NZWRpYVF1ZXJ5JztcbmV4cG9ydCB7IE1lZGlhUHJvdmlkZXIgfSBmcm9tICcuL01lZGlhUHJvdmlkZXInO1xuZXhwb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuZXhwb3J0IHR5cGUgeyBNZWRpYUNvbnRleHRUeXBlIH07XG4iLCJleHBvcnQgY29uc3QgQlJFQUtQT0lOVFMgPSB7XG4gICAgZXh0cmFMYXJnZToge1xuICAgICAgICB3ZWlnaHQ6IDQsXG4gICAgICAgIHdpZHRoOiAyNTYwLFxuICAgICAgICBoZWlnaHQ6IDE0NDAsXG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgIHdpZHRoOiAxOTIwLFxuICAgICAgICBoZWlnaHQ6IDEwODAsXG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICB3aWR0aDogMTYwMCxcbiAgICAgICAgaGVpZ2h0OiA5MDAsXG4gICAgfSxcbiAgICBzbWFsbDoge1xuICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxMzY2LFxuICAgICAgICBoZWlnaHQ6IDc2OCxcbiAgICB9LFxuICAgIGV4dHJhU21hbGw6IHtcbiAgICAgICAgd2VpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMTAyNCxcbiAgICAgICAgaGVpZ2h0OiA3NjgsXG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4vc3RhdGljJztcclxuXHJcbmZ1bmN0aW9uIGdldFdpZHRoQlBXZWlnaHQod2lkdGg6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLmxhcmdlLndpZHRoKSAmJiAod2lkdGggPCBicmVha3BvaW50cy5leHRyYUxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5tZWRpdW0ud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLmxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMuc21hbGwud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLm1lZGl1bS53aWR0aCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHRCUFdlaWdodChoZWlnaHQ6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLmxhcmdlLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2UuaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMubWVkaXVtLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLmxhcmdlLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5zbWFsbC5oZWlnaHQpICYmIChoZWlnaHQgPCBicmVha3BvaW50cy5tZWRpdW0uaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmVudW0gU2l6ZXMge1xyXG4gICAgZXh0cmFMYXJnZSA9ICdleHRyYUxhcmdlJyxcclxuICAgIGxhcmdlID0gJ2xhcmdlJyxcclxuICAgIG1lZGl1bSA9ICdtZWRpdW0nLFxyXG4gICAgc21hbGwgPSAnc21hbGwnLFxyXG4gICAgZXh0cmFTbWFsbCA9ICdleHRyYVNtYWxsJyxcclxuICAgIGV4dHJhTGFyZ2VXaWR0aCA9ICdleHRyYUxhcmdlV2lkdGgnLFxyXG4gICAgbGFyZ2VXaWR0aCA9ICdsYXJnZVdpZHRoJyxcclxuICAgIG1lZGl1bVdpZHRoID0gJ21lZGl1bVdpZHRoJyxcclxuICAgIHNtYWxsV2lkdGggPSAnc21hbGxXaWR0aCcsXHJcbiAgICBleHRyYVNtYWxsV2lkdGggPSAnZXh0cmFTbWFsbFdpZHRoJyxcclxuICAgIGV4dHJhTGFyZ2VIZWlnaHQgPSAnZXh0cmFMYXJnZUhlaWdodCcsXHJcbiAgICBsYXJnZUhlaWdodCA9ICdsYXJnZUhlaWdodCcsXHJcbiAgICBtZWRpdW1IZWlnaHQgPSAnbWVkaXVtSGVpZ2h0JyxcclxuICAgIHNtYWxsSGVpZ2h0ID0gJ3NtYWxsSGVpZ2h0JyxcclxuICAgIGV4dHJhU21hbGxIZWlnaHQgPSAnZXh0cmFTbWFsbEhlaWdodCdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2l6ZXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJyZWFrcG9pbnRzOiB0eXBlb2YgQlJFQUtQT0lOVFMpOiB7W2tleSBpbiBTaXplc106IGJvb2xlYW59IHtcclxuICAgIGNvbnN0IHdpZHRoQlBXZWlnaHQ6IG51bWJlciA9IGdldFdpZHRoQlBXZWlnaHQod2lkdGgsIGJyZWFrcG9pbnRzKTtcclxuICAgIGNvbnN0IGhlaWdodEJQV2VpZ2h0OiBudW1iZXIgPSBnZXRIZWlnaHRCUFdlaWdodChoZWlnaHQsIGJyZWFrcG9pbnRzKTtcclxuICAgIGNvbnN0IHdlaWdodDogbnVtYmVyID0gTWF0aC5taW4od2lkdGhCUFdlaWdodCwgaGVpZ2h0QlBXZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXh0cmFMYXJnZTogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bTogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodCksXHJcbiAgICAgICAgc21hbGw6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbDogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhTGFyZ2VXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBsYXJnZVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBtZWRpdW1XaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQpLFxyXG4gICAgICAgIHNtYWxsV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhU21hbGxXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYUxhcmdlSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBsYXJnZUhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bUhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0KSxcclxuICAgICAgICBzbWFsbEhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhU21hbGxIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgU2l6ZXMsIGdldFNpemVzIH07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCwgeyBCb3hTdGF0aWNQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvQm94L0JveCc7XG5pbXBvcnQgeyBGb3JtYXRUZXh0IH0gZnJvbSAnY29tcG9uZW50cy9Gb3JtYXRUZXh0L0Zvcm1hdFRleHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1hdFRleHQvdHlwZXMnO1xuaW1wb3J0IGhlYWRpbmdTdHlsZXMgZnJvbSAnZ2xvYmFsLXN0eWxlcy9taXhpbnMvaGVhZGluZyc7XG5pbXBvcnQgcGFyYWdyYXBoU3R5bGVzIGZyb20gJ2dsb2JhbC1zdHlsZXMvbWl4aW5zL3BhcmFncmFwaCc7XG5pbXBvcnQgY29sb3JzIGZyb20gJ2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5pbXBvcnQgc3BhY2luZyBmcm9tICdnbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nJztcbmltcG9ydCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIsIHsgQWRhcHRpdmVQcm9wcyB9IGZyb20gJ2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlJztcbmltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dC5jc3MnO1xuXG5leHBvcnQgdHlwZSBTdGFuZGFyZFNwYWNpbmdUeXBlID0ga2V5b2YgdHlwZW9mIHNwYWNpbmc7XG5leHBvcnQgdHlwZSBTcGFjaW5nVHlwZSA9IFN0YW5kYXJkU3BhY2luZ1R5cGUgfCBib29sZWFuIHwgbnVtYmVyO1xuZXhwb3J0IGNvbnN0IHN0YW5kYXJkTWFyZ2lucyA9IE9iamVjdC5rZXlzKHNwYWNpbmcpIGFzIFN0YW5kYXJkU3BhY2luZ1R5cGVbXTtcblxuZXhwb3J0IHR5cGUgU3RhbmRhcmRDb2xvclR5cGUgPSBrZXlvZiB0eXBlb2YgY29sb3JzO1xuZXhwb3J0IGNvbnN0IHN0YW5kYXJkQ29sb3JzID0gT2JqZWN0LmtleXMoY29sb3JzKSBhcyBTdGFuZGFyZENvbG9yVHlwZVtdO1xuXG5jb25zdCB4bFN0eWxlTWFyZ2lucyA9IHsgbXQ6ICdYTCcsIG1yOiAnTEcnLCBtYjogJ0xHJywgbWw6ICdMRycgfSBhcyBjb25zdDtcbmNvbnN0IGxnU3R5bGVNYXJnaW5zID0geyBtdDogJ0xHJywgbXI6ICdNRCcsIG1iOiAnTUQnLCBtbDogJ01EJyB9IGFzIGNvbnN0O1xuY29uc3QgbWRTdHlsZU1hcmdpbnMgPSB7IG10OiAnTUQnLCBtcjogJ1NNJywgbWI6ICdTTScsIG1sOiAnU00nIH0gYXMgY29uc3Q7XG5jb25zdCBzbVN0eWxlTWFyZ2lucyA9IHsgbXQ6ICdTTScsIG1yOiAnWFMnLCBtYjogJ1hTJywgbWw6ICdYUycgfSBhcyBjb25zdDtcbmNvbnN0IHhzU3R5bGVNYXJnaW5zID0geyBtdDogJ1hTJywgbXI6ICdYUycsIG1iOiAnWFMnLCBtbDogJ1hTJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdFhsTWFyZ2lucyA9IHsgbXQ6ICdYTCcsIG1yOiAnWEwnLCBtYjogJ1hMJywgbWw6ICdYTCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRMZ01hcmdpbnMgPSB7IG10OiAnTEcnLCBtcjogJ0xHJywgbWI6ICdMRycsIG1sOiAnTEcnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0TWRwTWFyZ2lucyA9IHsgbXQ6ICdNRHAnLCBtcjogJ01EcCcsIG1iOiAnTURwJywgbWw6ICdNRHAnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0TWRNYXJnaW5zID0geyBtdDogJ01EJywgbXI6ICdNRCcsIG1iOiAnTUQnLCBtbDogJ01EJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdFNtcE1hcmdpbnMgPSB7IG10OiAnU01wJywgbXI6ICdTTXAnLCBtYjogJ1NNcCcsIG1sOiAnU01wJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdFNtTWFyZ2lucyA9IHsgbXQ6ICdTTScsIG1yOiAnU00nLCBtYjogJ1NNJywgbWw6ICdTTScgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRYc01hcmdpbnMgPSB7IG10OiAnWFMnLCBtcjogJ1hTJywgbWI6ICdYUycsIG1sOiAnWFMnIH0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmdpbk1hcCA9IHtcbiAgICBYTDogZGVmYXVsdFhsTWFyZ2lucyxcbiAgICBMRzogZGVmYXVsdExnTWFyZ2lucyxcbiAgICBNRHA6IGRlZmF1bHRNZHBNYXJnaW5zLFxuICAgIE1EOiBkZWZhdWx0TWRNYXJnaW5zLFxuICAgIFNNcDogZGVmYXVsdFNtcE1hcmdpbnMsXG4gICAgU006IGRlZmF1bHRTbU1hcmdpbnMsXG4gICAgWFM6IGRlZmF1bHRYc01hcmdpbnMsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmdpbnMgPSBPYmplY3Qua2V5cyhkZWZhdWx0TWFyZ2luTWFwKSBhcyAoa2V5b2YgdHlwZW9mIGRlZmF1bHRNYXJnaW5NYXApW107XG5cbmV4cG9ydCBjb25zdCB2YXJpYW50TWFyZ2luU2l6ZU1hcDoge1xuICAgIFtrZXkgaW4gVmFyaWFudFR5cGVdOiB7IFtrZXkgaW4gJ210JyB8ICdtcicgfCAnbWInIHwgJ21sJ106IFNwYWNpbmdUeXBlIH07XG59ID0ge1xuICAgICdoZWFkaW5nLUgxNDQnOiB4bFN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1INzMnOiBsZ1N0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1INTYnOiBtZFN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMzYnOiBtZFN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjgnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjQnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjRSJzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDIyJzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDIwUic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgxOCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgxNSc6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgxNCc6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDI0Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTgnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxNic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDE0JzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTInOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxMCc6IHhzU3R5bGVNYXJnaW5zLFxufTtcblxuZXhwb3J0IGNvbnN0IHZhcmlhbnRzID0gT2JqZWN0LmtleXModmFyaWFudE1hcmdpblNpemVNYXApIGFzIChrZXlvZiB0eXBlb2YgdmFyaWFudE1hcmdpblNpemVNYXApW107XG5cbnR5cGUgVmFyaWFudFR5cGUgPSBrZXlvZiB0eXBlb2YgaGVhZGluZ1N0eWxlcyB8IGtleW9mIHR5cGVvZiBwYXJhZ3JhcGhTdHlsZXM7XG5cbnR5cGUgQmFzZVRleHRQcm9wcyA9IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFZhcmlhbnRUeXBlO1xuICAgIGNvbG9yPzogU3RhbmRhcmRDb2xvclR5cGUgfCBDU1NQcm9wZXJ0aWVzWydjb2xvciddO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBtPzogU3BhY2luZ1R5cGU7XG4gICAgbXQ/OiBTcGFjaW5nVHlwZTtcbiAgICBtcj86IFNwYWNpbmdUeXBlO1xuICAgIG1iPzogU3BhY2luZ1R5cGU7XG4gICAgbWw/OiBTcGFjaW5nVHlwZTtcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gICAgZm9ybWF0PzogT21pdDxQcm9wcywgJ3RleHQnPjtcbn07XG5cbmNvbnN0IGlzRGVmYXVsdENvbG9yID0gKGNvbG9yOiBzdHJpbmcpOiBjb2xvciBpcyBTdGFuZGFyZENvbG9yVHlwZSA9PiAoc3RhbmRhcmRDb2xvcnMgYXMgc3RyaW5nW10pLmluY2x1ZGVzKGNvbG9yKTtcblxuY29uc3QgZ2V0Q29sb3JTdHlsZU9yQ2xhc3NOYW1lID0gKGNvbG9yPzogU3RhbmRhcmRDb2xvclR5cGUgfCBDU1NQcm9wZXJ0aWVzWydjb2xvciddKSA9PiB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChpc0RlZmF1bHRDb2xvcihjb2xvcikpIHtcbiAgICAgICAgcmV0dXJuIHsgY29sb3JDbGFzc05hbWU6IHN0eWxlc1tjb2xvcl0gfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY29sb3JTdHlsZTogeyBjb2xvciB9IH07XG59O1xuXG5leHBvcnQgdHlwZSBUZXh0U3RhdGljUHJvcHMgPSBSZWFkb25seTxCYXNlVGV4dFByb3BzICYgT21pdDxCb3hTdGF0aWNQcm9wcywgJ2NoaWxkcmVuJz4+O1xuZXhwb3J0IHR5cGUgVGV4dFByb3BzID0gVGV4dFN0YXRpY1Byb3BzICYgQWRhcHRpdmVQcm9wczxUZXh0U3RhdGljUHJvcHMsIFRleHRBZGFwdGl2ZVByb3BOYW1lc1R5cGU+O1xuZXhwb3J0IHR5cGUgVGV4dEFkYXB0aXZlUHJvcE5hbWVzVHlwZSA9ICd2YXJpYW50JyB8ICdjb2xvcicgfCAnbScgfCAnbXQnIHwgJ21yJyB8ICdtYicgfCAnbWwnO1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHRleHQgcGFzc2VkIGluIGFzIGEgcHJvcCB3aXRoIHN0eWxpbmcgYW5kIGZvcm1hdHRpbmcgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgLSBUaGUgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmc6XG4gKiAgIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gYmUgcmVuZGVyZWQuXG4gKiAgIEBwYXJhbSB7VmFyaWFudFR5cGUgfCBzdHJpbmd9IHZhcmlhbnQgLSBUaGUgdmFyaWFudCBvZiB0aGUgdGV4dCBzdHlsaW5nLlxuICogICBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWUocykgdG8gYmUgYXBwbGllZCB0byB0aGUgdGV4dCBjb21wb25lbnQuXG4gKiAgIEBwYXJhbSB7Q29sb3JUeXBlfSBjb2xvciAtIFRoZSBjb2xvciBvZiB0aGUgdGV4dCwgZS5nLiBcIldISVRFX1NQQU5JU0hcIiBvciBcIiNmMDBcIi5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbSAtIFRoZSBtYXJnaW4gYXBwbGllZCB0byBhbGwgc2lkZXMsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbXQgLSBUaGUgYXBwbGllZCBtYXJnaW4tdG9wLCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG1yIC0gVGhlIGFwcGxpZWQgbWFyZ2luLXJpZ2h0LCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG1iIC0gVGhlIGFwcGxpZWQgbWFyZ2luLWJvdHRvbSwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtbCAtIFRoZSBhcHBsaWVkIG1hcmdpbi1sZWZ0LCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc30gc3R5bGUgLSBUaGUgc3R5bGUgb2JqZWN0IHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRleHQgY29tcG9uZW50LlxuICogICBAcGFyYW0ge0Zvcm1hdFRleHRQcm9wc30gZm9ybWF0IC0gVGhlIGZvcm1hdHRpbmcgcHJvcHMgb2YgRm9ybWF0VGV4dC5cbiAqICAgQHBhcmFtIHtCb3hQcm9wc30gcmVzdFByb3BzIC0gb3RoZXIgcHJvcHMgb2YgaW50ZXJuYWwgQm94IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBUaGUgVGV4dCBlbGVtZW50LlxuICovXG5jb25zdCBUZXh0ID0gKHtcbiAgICB0ZXh0LFxuICAgIHZhcmlhbnQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbG9yLFxuICAgIG0sXG4gICAgbXQgPSBtLFxuICAgIG1yID0gbSxcbiAgICBtYiA9IG0sXG4gICAgbWwgPSBtLFxuICAgIHN0eWxlLFxuICAgIGZvcm1hdCxcbiAgICAuLi5yZXN0UHJvcHNcbn06IFRleHRTdGF0aWNQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY29tcHV0ZWRTdHlsZSwgY29sb3JDbGFzc05hbWUgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbG9yQ2xhc3NOYW1lLCBjb2xvclN0eWxlID0ge30gfSA9IGdldENvbG9yU3R5bGVPckNsYXNzTmFtZShjb2xvcik7XG4gICAgICAgIHJldHVybiB7IGNvbXB1dGVkU3R5bGU6IHsgLi4uc3R5bGUsIC4uLmNvbG9yU3R5bGUgfSwgY29sb3JDbGFzc05hbWUgfTtcbiAgICB9LCBbc3R5bGUsIGNvbG9yXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJhc2UsIHZhcmlhbnQgJiYgc3R5bGVzW3ZhcmlhbnRdLCBjb2xvckNsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXtjb21wdXRlZFN0eWxlfVxuICAgICAgICAgICAgbXQ9e210ID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm10IDogbXR9XG4gICAgICAgICAgICBtcj17bXIgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubXIgOiBtcn1cbiAgICAgICAgICAgIG1iPXttYiA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tYiA6IG1ifVxuICAgICAgICAgICAgbWw9e21sID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm1sIDogbWx9XG4gICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Zm9ybWF0ICE9PSB1bmRlZmluZWQgPyA8Rm9ybWF0VGV4dCB7Li4uZm9ybWF0fSB0ZXh0PXt0ZXh0fSAvPiA6IHRleHR9XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8VGV4dFN0YXRpY1Byb3BzLCBUZXh0QWRhcHRpdmVQcm9wTmFtZXNUeXBlPihUZXh0KTtcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XHJcbmltcG9ydCB7IHVzZU1vdW50IH0gZnJvbSAnbGliL2hvb2tzL3VzZU1vdW50VW5tb3VudCc7XHJcbmltcG9ydCB7IHVzZVNraXBGcmFtZSB9IGZyb20gJ2xpYi9ob29rcy91c2VTa2lwRnJhbWUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rvb2x0aXBEZWNvcmF0b3IuY3NzJztcclxuXHJcbmV4cG9ydCB0eXBlIFByb3BzID0gUmVhY3QuQ29tcG9uZW50UHJvcHM8J2Rpdic+ICYge1xyXG4gICAgdGhlbWU/OiAnbm9uZScgfCAnZGVmYXVsdCc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVG9vbHRpcERlY29yYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFByb3BzPihmdW5jdGlvbiBUb29sdGlwRGVjb3JhdG9yKFxyXG4gICAgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCB0aGVtZSA9ICdkZWZhdWx0JywgLi4ucmVzdFByb3BzIH0sXHJcbiAgICByZWYsXHJcbikge1xyXG4gICAgY29uc3Qgc2tpcEZyYW1lID0gdXNlU2tpcEZyYW1lKCk7XHJcbiAgICBjb25zdCBiYXNlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHNraXBGcmFtZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gYmFzZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICBpZiAoIWJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSBiYXNlLnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gYmFzZS5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBlbnYudmlldy5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmFzZSk7XHJcbiAgICAgICAgICAgIGVudi52aWV3LnNldFNpZGVQYWRkaW5nc1JlbSh7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSwgMTApLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpLCAxMCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLCAxMCksXHJcbiAgICAgICAgICAgICAgICBib3R0b206IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJyksIDEwKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRSZWZzKG5vZGU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAgICAgYmFzZVJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgKHJlZiBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PikuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiB7Li4ucmVzdFByb3BzfSBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYXNlLCBzdHlsZXNbYGJhc2VfX3RoZW1lLSR7dGhlbWV9YF0sIGNsYXNzTmFtZSl9IHJlZj17c2V0UmVmc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVjb3JhdG9yfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAnQkxBQ0tfUkVBTCc6ICcjMDAwMDAwJyxcclxuICAgICdXSElURV9SRUFMJzogJyNGRkZGRkYnLFxyXG4gICAgJ1dISVRFJzogJyNGMkYyRjcnLFxyXG4gICAgJ1dISVRFX09SQU5HRSc6ICcjRkVGRUVDJyxcclxuICAgICdXSElURV9TUEFOSVNIJzogJyNFOUUyQkYnLFxyXG4gICAgJ1BBUic6ICcjOEM4QzdFJyxcclxuICAgICdQQVJfU0VDT05EQVJZJzogJyM1OTU5NTAnLFxyXG4gICAgJ1BBUl9URVJUSUFSWSc6ICcjMzczNjJFJyxcclxuICAgICdJTkZPX1JFRCc6ICcjRkYwMDAwJyxcclxuICAgICdSRUQnOiAnI0ZGMjcxNycsXHJcbiAgICAnUkVEX0RBUksnOiAnI0I3MDAwMCcsXHJcbiAgICAnWUVMTE9XJzogJyNGRUFCMzQnLFxyXG4gICAgJ09SQU5HRSc6ICcjRUU3MDAwJyxcclxuICAgICdDUkVBTSc6ICcjRkZERDk5JyxcclxuICAgICdCUk9XTic6ICcjQ0JBQzc3JyxcclxuICAgICdHUkVFTl9CUklHSFQnOiAnIzgwRDQzQScsXHJcbiAgICAnR1JFRU4nOiAnIzdBQjMwMCcsXHJcbiAgICAnR1JFRU5fREFSSyc6ICcjNDk3MjEyJyxcclxuICAgICdCTFVFX0JPT1NURVInOiAnI0NDRkZGRicsXHJcbiAgICAnQkxVRV9URUFNS0lMTEVSJzogJyMwOUUyRkYnLFxyXG4gICAgJ0NSRUQnOiAnI0NFRDlEOScsXHJcbiAgICAnR09MRCc6ICcjRkZDMzYzJyxcclxuICAgICdCT05EJzogJyNDOUM5QjYnLFxyXG4gICAgJ1BST00nOiAnI0EyOUI3MCcsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgJ1hTJzogJzRyZW0nLFxyXG4gICAgJ1NNJzogJzhyZW0nLFxyXG4gICAgJ1NNcCc6ICcxMHJlbScsXHJcbiAgICAnTUQnOiAnMTZyZW0nLFxyXG4gICAgJ01EcCc6ICcyMHJlbScsXHJcbiAgICAnTEcnOiAnMzJyZW0nLFxyXG4gICAgJ1hMJzogJzY0cmVtJyxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XG5pbXBvcnQgeyBUeXBlQnlTdHJpbmdQYXRoIH0gZnJvbSAnbGliL3R5cGUtaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIE1vZGVsU3Vic2NyaWJlcjxUPiA9IChtb2RlbDogVCkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyA9IHtcbiAgICBpbml0aWFsaXplcj86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgY29udGV4dD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICByb290SWQ/OiBudW1iZXI7XG4gICAgZ2V0Um9vdD86IChyb290SWQ6IG51bWJlcikgPT4gdW5rbm93bjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUxheWVyPFQgZXh0ZW5kcyB7fT4ge1xuICAgIHN1YnNjcmliZTxQIGV4dGVuZHMgc3RyaW5nPihzdWJzY3JpYmVyOiBNb2RlbFN1YnNjcmliZXI8VHlwZUJ5U3RyaW5nUGF0aDxULCBQPj4sIHBhdGg/OiBQKTogbnVtYmVyO1xuICAgIHJlYWRCeVBhdGg8UCBleHRlbmRzIHN0cmluZz4ocGF0aD86IFApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+O1xuICAgIGNyZWF0ZUNhbGxiYWNrPEFyZ3NNYXAgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IEV4dGVybkFyZ3MsIEV4dGVybkFyZ3MgZXh0ZW5kcyB7fSwgUCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIGFyZ3NNYXA6IEFyZ3NNYXAsXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICguLi5hcmdzOiBQYXJhbWV0ZXJzPEFyZ3NNYXA+KSA9PiB2b2lkIDogdW5rbm93bjtcbiAgICBjcmVhdGVDYWxsYmFja05vQXJnczxQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKCkgPT4gdm9pZCA6IHVua25vd247XG4gICAgZGlzcG9zZTogKCkgPT4gdm9pZDtcbiAgICB1bnN1YnNjcmliZTogKGlkOiBudW1iZXIsIHJlc0lkPzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBnZXRSb290RGVmYXVsdCA9IChyb290SWQ6IG51bWJlcikgPT4ge1xuICAgIGlmIChyb290SWQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5zdWJWaWV3cy5nZXQocm9vdElkKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGU8VCBleHRlbmRzIHt9Pih7XG4gICAgaW5pdGlhbGl6ZXIgPSB0cnVlLFxuICAgIHJvb3RJZCA9IDAsXG4gICAgZ2V0Um9vdCA9IGdldFJvb3REZWZhdWx0LFxuICAgIGNvbnRleHQgPSAnbW9kZWwnLFxufTogRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyA9IHt9KTogRGF0YUxheWVyPFQ+IHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBNYXA8bnVtYmVyLCBNb2RlbFN1YnNjcmliZXI8YW55Pj4oKTtcblxuICAgIGVuZ2luZS53aGVuUmVhZHkudGhlbigoKSA9PiB7XG4gICAgICAgIGVuZ2luZS5vbigndmlld0Vudi5vbkRhdGFDaGFuZ2VkJywgKGRhdGE6IGFueSwgXzogdW5rbm93biwgY2FsbGJhY2tJRHM6IG51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja0lEcy5mb3JFYWNoKChjYWxsYmFja0lEKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzdWJzY3JpYmVycy5nZXQoY2FsbGJhY2tJRCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShpZDogbnVtYmVyLCByZXNJZCA9IDApIHtcbiAgICAgICAgaWYgKHZpZXdFbnYucmVtb3ZlRGF0YUNoYW5nZWRDYWxsYmFjayhpZCwgcmVzSWQpKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IHJlbW92ZSBjYWxsYmFjayBieSBpZDpcIiwgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZEJ5UGF0aCA9IDxQIGV4dGVuZHMgc3RyaW5nPihwYXRoPzogUCk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gPT4ge1xuICAgICAgICBjb25zdCByb290ID0gZ2V0Um9vdChyb290SWQpO1xuICAgICAgICBjb25zdCBtb2RlbCA9IGNvbnRleHQuc3BsaXQoJy4nKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdCBhcyBhbnkpW2tleV07XG4gICAgICAgIH0sIHJvb3QgYXMgVCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsIGFzIHVua25vd24gYXMgVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IChyZXN1bHQgYXMgYW55KVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYmluZChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0sIG1vZGVsKSBhcyBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+O1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSA8UCBleHRlbmRzIHN0cmluZz4oc3Vic2NyaWJlcjogTW9kZWxTdWJzY3JpYmVyPFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4+LCBwYXRoPzogUCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVQYXRoID0gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnID8gYCR7Y29udGV4dH0uJHtwYXRofWAgOiBjb250ZXh0O1xuICAgICAgICBjb25zdCB0cmFja0luRGVwdGggPSB0cnVlO1xuICAgICAgICBjb25zdCBpZCA9IGVudi52aWV3LmFkZE1vZGVsT2JzZXJ2ZXIoc3Vic2NyaWJlUGF0aCwgcm9vdElkLCB0cmFja0luRGVwdGgpO1xuICAgICAgICBzdWJzY3JpYmVycy5zZXQoaWQsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIocmVhZEJ5UGF0aChwYXRoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVDYWxsYmFjayA9IDxBcmdzTWFwIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBFeHRlcm5BcmdzLCBFeHRlcm5BcmdzIGV4dGVuZHMge30sIFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBhcmdzTWFwOiBBcmdzTWFwLFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoLi4uYXJnczogUGFyYW1ldGVyczxBcmdzTWFwPikgPT4gdm9pZCA6IHVua25vd24gPT4ge1xuICAgICAgICBjb25zdCBmbiA9IHJlYWRCeVBhdGgocGF0aCkgYXMgKGFyZ3M/OiBFeHRlcm5BcmdzKSA9PiB2b2lkO1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBmbihhcmdzTWFwKC4uLmFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FsbGJhY2tOb0FyZ3MgPSA8UCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICgpID0+IHZvaWQgOiB1bmtub3duID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSByZWFkQnlQYXRoKHBhdGgpIGFzIChhcmdzPzogeyBhcmdzOiBhbnkgfSkgPT4gdm9pZDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlcklkIG9mIHN1YnNjcmliZXJzLmtleXMoKSkge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcklkLCByb290SWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3Vic2NyaWJlLCByZWFkQnlQYXRoLCBjcmVhdGVDYWxsYmFjaywgY3JlYXRlQ2FsbGJhY2tOb0FyZ3MsIGRpc3Bvc2UsIHVuc3Vic2NyaWJlIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbmltcG9ydCB7IGNvbnN0RmFsc2UgfSBmcm9tICdsaWIvZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyBUeXBlQnlTdHJpbmdQYXRoIH0gZnJvbSAnbGliL3R5cGUtaGVscGVycyc7XHJcbmltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB0eXBlIHsgRGF0YUxheWVyLCBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zIH0gZnJvbSAnLi9kYXRhLWxheWVyJztcclxuaW1wb3J0ICogYXMgZGF0YUxheWVyIGZyb20gJy4vZGF0YS1sYXllcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGVNb2RlbCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IHsgZGF0YUxheWVyIH07XHJcbmV4cG9ydCB0eXBlIHsgRGF0YUxheWVyQ3JlYXRlT3B0aW9ucywgRGF0YUxheWVyIH07XHJcbi8qKiBDdXJyZW50IGRhdGEgbW9kZSAobW9ja3Mgb3IgcmVhbCkgKi9cclxuZXhwb3J0IHR5cGUgTW9kZSA9ICdtb2NrcycgfCAncmVhbCc7XHJcblxyXG5leHBvcnQgdHlwZSBDb250ZXh0PE1vZGVsLCBDb250cm9scz4gPSB7XHJcbiAgICBtb2RlbDogTW9kZWw7XHJcbiAgICBjb250cm9sczogQ29udHJvbHM7XHJcbiAgICBtb2RlOiBNb2RlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdpbGwgYmUgY2FsbCBiZWZvcmUgTW9kZWxQcm92aWRlciB3aWxsIHVubW91bnRcclxuICogYGBgdHN4XHJcbiAqIGxldCB0aW1lb3V0SWQgPSAwXHJcbiAqIGNsZWFudXAoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCkpXHJcbiAqXHJcbiAqIC8vIC4uLlxyXG4gKlxyXG4gKiAoKSA9PiB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRvU29tZXRoaW5nLCA1MDApXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xlYW51cCA9IChjbGVhbnVwRm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIENvbnRleHRQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHtcclxuICAgIG1vZGU/OiBNb2RlO1xyXG4gICAgb3B0aW9ucz86IERhdGFMYXllckNyZWF0ZU9wdGlvbnM7XHJcbn0+O1xyXG5cclxuZXhwb3J0IHR5cGUgUmVhZEJ5UGF0aDxUIGV4dGVuZHMge30+ID0gPFAgZXh0ZW5kcyBzdHJpbmcgfCB1bmRlZmluZWQ+KFxyXG4gICAgcGF0aDogUCxcclxuKSA9PiBQIGV4dGVuZHMgc3RyaW5nID8gVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiA6IFQ7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RlbENyZWF0b3JBcmdzPFQgZXh0ZW5kcyB7fT4gPSB7XHJcbiAgICBtb2RlOiBNb2RlO1xyXG4gICAgLyoqIFRoaXMgaXMgQVBJIGZvciBKUyA8LT4gQysrLCByZWFkIG9mIGNyZWF0ZSBkb2MgaW4ge0BsaW5rIGRhdGFMYXllci5jcmVhdGV9ICovXHJcbiAgICBleHRlcm5hbE1vZGVsOiBEYXRhTGF5ZXI8VD47XHJcbiAgICAvKiogQHNlZSB7QGxpbmsgQ2xlYW51cH0gZm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24uICovXHJcbiAgICBjbGVhbnVwOiBDbGVhbnVwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyBvYnNlcnZhYmxlIGJveCBhYm92ZSBwYXJ0IG9mIG1vZGVsIGFuZCBzdWJzY3JpYmUgdG8gdXBkYXRlIGJ5IHR5cGVcclxuICAgICAqIEBwYXJhbSBwYXRoIG9wdGlvbmFsIHJlbGF0aXZlIHBhdGggb2YgbW9kZWxcclxuICAgICAqIEBwYXJhbSBpbml0IG9wdGlvbmFsIGluaXQgZGF0YSBvZiBwYXRoICh3aWxsIHJlYWQgZnJvbSBtb2RlbCBieSBkZWZhdWx0KVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZhYmxlTW9kZWw6IE9ic2VydmFibGVNb2RlbDxUPjtcclxuICAgIHJlYWRCeVBhdGg6IFJlYWRCeVBhdGg8VD47XHJcbn07XHJcbmV4cG9ydCB0eXBlIENvbnRyb2xzQ3JlYXRvckFyZ3M8TW9kZWwsIFQgZXh0ZW5kcyB7fT4gPSB7XHJcbiAgICBtb2RlOiBNb2RlO1xyXG4gICAgLyoqIE1vZGVsIHdoYXQgcmV0dXJuZWQgZnJvbSBmaXJzdCBmdW5jdGlvbiAtIHtAbGluayBNb2RlbENyZWF0b3JBcmdzPFQ+fSAqL1xyXG4gICAgbW9kZWw6IE1vZGVsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyBvYnNlcnZhYmxlIGJveCBhYm92ZSBwYXJ0IG9mIG1vZGVsIGFuZCBzdWJzY3JpYmUgdG8gdXBkYXRlIGJ5IHR5cGVcclxuICAgICAqIEBwYXJhbSBwYXRoIG9wdGlvbmFsIHJlbGF0aXZlIHBhdGggb2YgbW9kZWxcclxuICAgICAqIEBwYXJhbSBpbml0IG9wdGlvbmFsIGluaXQgZGF0YSBvZiBwYXRoICh3aWxsIHJlYWQgZnJvbSBtb2RlbCBieSBkZWZhdWx0KVxyXG4gICAgICovXHJcbiAgICBleHRlcm5hbE1vZGVsOiBEYXRhTGF5ZXI8VD47XHJcbiAgICAvKiogQHNlZSB7QGxpbmsgQ2xlYW51cH0gZm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24uICovXHJcbiAgICBjbGVhbnVwOiBDbGVhbnVwO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTW9ja3M8TW9kZWwsIENvbnRyb2xzPiA9IHtcclxuICAgIGdldHRlcjogKHBhdGg/OiBzdHJpbmcpID0+IGFueTtcclxuICAgIGNvbnRyb2xzOiAoYXJnczogeyBtb2RlOiBNb2RlOyBtb2RlbDogTW9kZWw7IGNsZWFudXA6IENsZWFudXAgfSkgPT4gQ29udHJvbHM7XHJcbn07XHJcblxyXG4vKipcclxuICogIyMjIyBNYWtlcyB0eXBlIGZvciBtYWtlIG1vY2tzIGVhc2llclxyXG4gKiBgYGB0c1xyXG4gKiAgY29uc3QgbW9ja3M6IE1vY2tzT2Y8dHlwZW9mIHVzZU1vZGVsPiA9IHtcclxuICogICAgICAvLyAuLi5cclxuICogIH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNb2Nrc09mPFVzZU1vZGVsIGV4dGVuZHMgKCkgPT4gYW55PiA9IFJldHVyblR5cGU8VXNlTW9kZWw+IGV4dGVuZHMgQ29udGV4dDxpbmZlciBNb2RlbCwgaW5mZXIgQ29udHJvbHM+XHJcbiAgICA/IE1vY2tzPE1vZGVsLCBDb250cm9scz5cclxuICAgIDogbmV2ZXI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIE1vZGVsUHJvdmlkZXIgYW5kIHVzZU1vZGVsIGZvciB5b3VyIGRhdGEtbGF5ZXI6XHJcbiAqIGBgYHRzXHJcbiAqIGV4cG9ydCBjb25zdCBbTW9kZWxQcm92aWRlciwgdXNlTW9kZWxdID0gaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQ8PE1PREVMX1RZUEU+PigpKFxyXG4gKiAgICAgKCkgPT4ge30sIC8vIGZvciBtb2RlbFxyXG4gKiAgICAgKCkgPT4ge30sIC8vIGZvciBjb250cm9scyAoZnVuY3Rpb25zKVxyXG4gKiApO1xyXG4gKiBgYGBcclxuICogV2hlcmUgYDxNT0RFTF9UWVBFPmAgaXMgeW91ciBtb2RlbCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0ID0gPFQgZXh0ZW5kcyB7fT4oKSA9PiB7XHJcbiAgICByZXR1cm4gPE1vZGVsLCBDb250cm9scz4oXHJcbiAgICAgICAgbW9kZWxDcmVhdG9yOiAoYXJnczogTW9kZWxDcmVhdG9yQXJnczxUPikgPT4gTW9kZWwsXHJcbiAgICAgICAgY29udHJvbHNDcmVhdG9yOiAoYXJnczogQ29udHJvbHNDcmVhdG9yQXJnczxNb2RlbCwgVD4pID0+IENvbnRyb2xzLFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dDxNb2RlbCwgQ29udHJvbHM+Pih7fSBhcyB1bmtub3duIGFzIENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPik7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIERhdGFMYXllclByb3ZpZGVyKHtcclxuICAgICAgICAgICAgICAgIG1vZGU6IGRhdGFNb2RlID0gJ3JlYWwnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgbW9ja3MsXHJcbiAgICAgICAgICAgIH06IENvbnRleHRQcm9wcyAmIHsgbW9ja3M/OiBNb2NrczxNb2RlbCwgQ29udHJvbHM+IH0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXBzUmVmID0gdXNlUmVmPCgoKSA9PiB2b2lkKVtdPihbXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVDb250ZXh0VmFsdWUgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtb2Nrcz86IE1vY2tzPE1vZGVsLCBDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhTGF5ZXJJbnN0YW5jZSA9IGRhdGFMYXllci5jcmVhdGU8VD4ob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxNb2RlbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPT09ICdyZWFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhTGF5ZXJJbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhTGF5ZXJJbnN0YW5jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRCeVBhdGg6IG1vY2tzPy5nZXR0ZXIgPz8gKCgpID0+IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgT2JzZXJ2YWJsZU1vZGVsTG9jYWwgPSBPYnNlcnZhYmxlTW9kZWw8VD47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRCeVBhdGg6IFJlYWRCeVBhdGg8VD4gPSAocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ21vY2tzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vY2tzPy5nZXR0ZXIocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZXJuYWxNb2RlbC5yZWFkQnlQYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5OiBPYnNlcnZhYmxlTW9kZWxMb2NhbFsnYXJyYXknXSA9IChwYXRoLCBpbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRPYnNlcnZhYmxlID0gKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0ID8/IHJlYWRCeVBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IG9ic2VydmFibGUuYm94PGFueT4oaW5pdE9ic2VydmFibGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiBtb2RlbC5zZXQoZGF0YSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlT2JqZWN0OiBPYnNlcnZhYmxlTW9kZWxMb2NhbFsnb2JqZWN0J10gPSAocGF0aCwgaW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCA/PyByZWFkQnlQYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBvYnNlcnZhYmxlLmJveChpbml0T2JzZXJ2YWJsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxzOiBjb25zdEZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IG1vZGVsLnNldChkYXRhKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsIGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlUHJpbWl0aXZlczogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ3ByaW1pdGl2ZXMnXSA9IChrZXlzOiB1bmtub3duLCBwYXRoPzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRPYnNlcnZhYmxlID0gcmVhZEJ5UGF0aChwYXRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1trZXldID0gb2JzZXJ2YWJsZS5ib3goKGluaXRPYnNlcnZhYmxlIGFzIFJlY29yZDxzdHJpbmcsIFQ+KVtrZXldLCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9IGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFtrZXldLnNldChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzUmVjb3JkID0ga2V5cyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5c0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhrZXlzUmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0ga2V5c0VudHJpZXMucmVkdWNlKChhY2MsIFtrZXlGcm9tLCBrZXlUb10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nba2V5VG9dID0gb2JzZXJ2YWJsZS5ib3goKGluaXRPYnNlcnZhYmxlIGFzIFJlY29yZDxzdHJpbmcsIFQ+KVtrZXlGcm9tXSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNFbnRyaWVzLmZvckVhY2goKFtrZXlGcm9tLCBrZXlUb10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFtrZXlUb10uc2V0KGRhdGFba2V5RnJvbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwOiBDbGVhbnVwID0gKGZuKSA9PiBjbGVhbnVwc1JlZi5jdXJyZW50LnB1c2goZm4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IG1vZGVsQ3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRCeVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVNb2RlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXk6IG9ic2VydmFibGVBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JzZXJ2YWJsZU9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZXM6IG9ic2VydmFibGVQcmltaXRpdmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sc0FyZ3MgPSB7IG1vZGUsIG1vZGVsLCBleHRlcm5hbE1vZGVsLCBjbGVhbnVwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAnbW9ja3MnICYmIG1vY2tzID8gbW9ja3MuY29udHJvbHMoY29udHJvbHNBcmdzKSA6IGNvbnRyb2xzQ3JlYXRvcihjb250cm9sc0FyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBtb2RlbCwgY29udHJvbHMsIGV4dGVybmFsTW9kZWwsIG1vZGUgfTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbW9kZSwgY2hhbmdlTW9kZV0gPSB1c2VTdGF0ZTxNb2RlPihkYXRhTW9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IGNyZWF0ZUNvbnRleHRWYWx1ZShkYXRhTW9kZSwgb3B0aW9ucywgbW9ja3MpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnRlZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoY3JlYXRlQ29udGV4dFZhbHVlKG1vZGUsIG9wdGlvbnMsIG1vY2tzKSk7XHJcbiAgICAgICAgICAgICAgICB9LCBbbW9ja3MsIG1vZGUsIG9wdGlvbnNdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vZGUoZGF0YU1vZGUpO1xyXG4gICAgICAgICAgICAgICAgfSwgW2RhdGFNb2RlXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZXh0ZXJuYWxNb2RlbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBzUmVmLmN1cnJlbnQuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCksXHJcbiAgICAgICAgXSBhcyBjb25zdDtcclxuICAgIH07XHJcbn07XHJcbiIsImltcG9ydCB7IG1ha2VFbmdpbmVFdmVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBzZXRUcmFja01vdXNlT3V0c2lkZSB9IGZyb20gJy4vaW50ZXJuYWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgR0ZNb3VzZUV2ZW50ID0ge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgYnV0dG9uOiBudW1iZXI7XHJcbiAgICBidXR0b25zOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBjbGllbnRYOiBudW1iZXI7XHJcbiAgICBjbGllbnRZOiBudW1iZXI7XHJcbiAgICBzY3JlZW5YOiBudW1iZXI7XHJcbiAgICBzY3JlZW5ZOiBudW1iZXI7XHJcbiAgICBhbHRLZXk6IGJvb2xlYW47XHJcbiAgICBjdHJsS2V5OiBib29sZWFuO1xyXG4gICAgc2hpZnRLZXk6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25SZXNpemUgPSBtYWtlRW5naW5lRXZlbnQ8KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB2b2lkPignY2xpZW50UmVzaXplZCcpO1xyXG5cclxuZXhwb3J0IHR5cGUgR0ZNb3VzZUhhbmRsZXIgPSAoZXZlbnQ6IEdGTW91c2VFdmVudCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgR0ZNb3VzZUV2ZW50TmFtZSA9ICdkb3duJyB8ICd1cCcgfCAnbW92ZSc7XHJcbmV4cG9ydCB0eXBlIEV4dE1vdXNlRXZlbnQgPSBbZXZlbnQ6IEdGTW91c2VFdmVudCwgdHlwZTogJ291dHNpZGUnXSB8IFtldmVudDogTW91c2VFdmVudCwgdHlwZTogJ2luc2lkZSddO1xyXG5cclxuZXhwb3J0IHR5cGUgTW91c2VMaXN0ZW5lciA9IChldmVudDogRXh0TW91c2VFdmVudCkgPT4gdm9pZDtcclxuXHJcbmNvbnN0IGludGVybmFsTW91c2UgPSB7XHJcbiAgICBkb3duOiBtYWtlRW5naW5lRXZlbnQ8R0ZNb3VzZUhhbmRsZXI+KCdtb3VzZWRvd24nKSxcclxuICAgIHVwOiBtYWtlRW5naW5lRXZlbnQ8R0ZNb3VzZUhhbmRsZXI+KCdtb3VzZXVwJyksXHJcbiAgICBtb3ZlOiBtYWtlRW5naW5lRXZlbnQ8R0ZNb3VzZUhhbmRsZXI+KCdtb3VzZW1vdmUnKSxcclxufTtcclxuXHJcbnR5cGUgTW91c2VFdmVudHNBUEkgPSBSZWNvcmQ8R0ZNb3VzZUV2ZW50TmFtZSwgKGxpc3RlbmVyOiBNb3VzZUxpc3RlbmVyKSA9PiAoKSA9PiB2b2lkPiAmIHtcclxuICAgIGRpc2FibGU6ICgpID0+IHZvaWQ7XHJcbiAgICBlbmFibGU6ICgpID0+IHZvaWQ7XHJcbiAgICBlbmFibGVPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG4gICAgZGlzYWJsZU91dHNpZGU6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIG1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB2aWV3IGlzIGV4cGVuc2l2ZSBvcGVyYXRpb24uXHJcbiAqIFRoaXMgZGVjb3JhdG9yIHNlcGFyYXRlIHRyYWNrIG1vdXNlIGV2ZW50cyBiZXR3ZWVuIGluc2lkZSBhbmQgb3V0c2lkZS5cclxuICogV2hlbiBjdXJzb3IgaXMgb3V0c2lkZSBvZiB0aGUgdmlldy5cclxuICogV2hlbiBtb3VzZSBjdXJzb3IgaXMgaW5zaWRlIG9mIHRoZSB2aWV3LCBpdCB3aWxsIGJlIHRyYWNrZWQgYnkgaW50ZXJuYWwgZGVmYXVsdCBldmVudHMuXHJcbiAqXHJcbiAqIEZ1bmN0aW9uIGVuY2Fwc3VsYXRlIGxvZ2ljIGFuZCBzdGF0ZSBpbnNpZGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0TW91c2VFdmVudHMoKTogTW91c2VFdmVudHNBUEkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgbGlzdGVuZXJzOiAwLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF6eVRyYWNrKCkge1xyXG4gICAgICAgIGlmICghc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5saXN0ZW5lcnMgPCAxKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUV2ZW50KG5hbWU6IEdGTW91c2VFdmVudE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gKGxpc3RlbmVyOiBNb3VzZUxpc3RlbmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycyArPSAxO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gdHJ1ZTsgLy8gcHJldmVudCBkb3VibGUgZGlzcG9zZSh1bnN1YnNjcmliZSlcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93RXZlbnQgPSBgbW91c2Uke25hbWV9YDtcclxuICAgICAgICAgICAgY29uc3QgZGlzcG9zZSA9IGludGVybmFsTW91c2VbbmFtZV0oKGV2ZW50KSA9PiBsaXN0ZW5lcihbZXZlbnQsICdvdXRzaWRlJ10pKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlV2luZG93RXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKFtldmVudCwgJ2luc2lkZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3dFdmVudCwgaGFuZGxlV2luZG93RXZlbnQpO1xyXG4gICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93RXZlbnQsIGhhbmRsZVdpbmRvd0V2ZW50KTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV2ZW50czogVHVwbGlmeTxHRk1vdXNlRXZlbnROYW1lPiA9IFsnZG93bicsICd1cCcsICdtb3ZlJ107XHJcblxyXG4gICAgY29uc3Qgc3Vic2NyaWJlQXBpID0gZXZlbnRzLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgYWNjW25hbWVdID0gbWFrZUV2ZW50KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCA8UGljazxNb3VzZUV2ZW50c0FQSSwgR0ZNb3VzZUV2ZW50TmFtZT4+e30pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3Vic2NyaWJlQXBpLFxyXG4gICAgICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZU91dHNpZGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZU91dHNpZGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vdXNlID0gaW5pdE1vdXNlRXZlbnRzKCk7XHJcbiIsImV4cG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LmdldENsaWVudFNpemVSZW0oKSA6IHZpZXdFbnYuZ2V0Q2xpZW50U2l6ZVB4KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3VzZUdsb2JhbFBvc2l0aW9uKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LmdldE1vdXNlR2xvYmFsUG9zaXRpb25SZW0oKSA6IHZpZXdFbnYuZ2V0TW91c2VHbG9iYWxQb3NpdGlvblB4KCk7XG59XG5cbmV4cG9ydCBjb25zdCBncmFwaGljc1F1YWxpdHkgPSB7XG4gICAgaXNMb3c6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCkgPT09IDEsXG4gICAgaXNIaWdoOiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpID09PSAwLFxuICAgIGdldDogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSxcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0VHJhY2tNb3VzZU91dHNpZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHZpZXdFbnYuc2V0VHJhY2tNb3VzZU9uU3RhZ2UodmFsdWUpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlRW5naW5lRXZlbnQ8VCBleHRlbmRzIEZ1bmN0aW9uPihldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChoYW5kbGVyOiBUKSA9PiB7XHJcbiAgICAgICAgZW5naW5lLm9uKGV2ZW50TmFtZSwgaGFuZGxlciBhcyBuZXZlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZW5naW5lLm9mZihldmVudE5hbWUsIGhhbmRsZXIgYXMgbmV2ZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGNsaWVudCBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBlbnYgPSB7XHJcbiAgICB2aWV3LFxyXG4gICAgY2xpZW50LFxyXG59O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLmVudiA9IGVudjtcclxufVxyXG4iLCJpbXBvcnQgeyBTaXplIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dHVyZVVybChjaGlsZElkOiBudW1iZXIsIHNpemU6IFNpemUsIHNjYWxlID0gMSkge1xuICAgIHJldHVybiB2aWV3RW52LmdldENoaWxkVGV4dHVyZVBhdGgoY2hpbGRJZCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJnVXJsKGNoaWxkSWQ6IG51bWJlciwgc2l6ZTogU2l6ZSwgc2NhbGU/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gYHVybCgke2dldFRleHR1cmVVcmwoY2hpbGRJZCwgc2l6ZSwgc2NhbGUpfSlgO1xufVxuIiwiZXhwb3J0IHR5cGUgU2l6ZSA9IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUG9pbnQgPSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5U3RhdHVzID0ge1xuICAgIHNob3dpbmc6IDAsXG4gICAgc2hvd246IDEsXG4gICAgaGlkaW5nOiAyLFxuICAgIGhpZGRlbjogMyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIERpc3BsYXlTdGF0dXMgPSBWYWx1ZU9mPHR5cGVvZiBkaXNwbGF5U3RhdHVzPjtcbiIsImltcG9ydCB7IG1ha2VFbmdpbmVFdmVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBEaXNwbGF5U3RhdHVzLCBQb2ludCB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIENoaWxkcmVuRXZlbnRIYW5kbGVyID0gKHZpZXdJZDogbnVtYmVyLCBpbnN0YW5jZUlkOiBudW1iZXIsIHJlc0lkOiBudW1iZXIpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIFJlcXVlc3RQb3NpdGlvbkhhbmRsZXIgPSAodmlld0lkOiBudW1iZXIsIHBvc2l0aW9uOiBQb2ludCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgQ2hhbmdlRGlzcGxheUhhbmRsZXIgPSAocHJldlN0YXR1czogRGlzcGxheVN0YXR1cywgY3VycmVudFN0YXR1czogRGlzcGxheVN0YXR1cykgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgRm9jdXNVcGRhdGVkSGFuZGxlciA9IChwcmV2U3RhdHVzOiBEaXNwbGF5U3RhdHVzLCBjdXJyZW50U3RhdHVzOiBEaXNwbGF5U3RhdHVzKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcclxuICAgIG9uVGV4dHVyZUZyb3plbjogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uVGV4dHVyZUZyb3plbicpLFxyXG4gICAgb25UZXh0dXJlUmVhZHk6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vblRleHR1cmVSZWFkeScpLFxyXG4gICAgb25Eb21CdWlsdDogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uRG9tQnVpbHQnKSxcclxuICAgIG9uTG9hZGVkOiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25Mb2FkZWQnKSxcclxuICAgIG9uRGlzcGxheUNoYW5nZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGFuZ2VEaXNwbGF5SGFuZGxlcj4oJ3NlbGYub25TaG93aW5nU3RhdHVzQ2hhbmdlZCcpLFxyXG4gICAgb25Gb2N1c1VwZGF0ZWQ6IG1ha2VFbmdpbmVFdmVudDxGb2N1c1VwZGF0ZWRIYW5kbGVyPignc2VsZi5vbkZvY3VzQ2hhbmdlZCcpLFxyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICBvbkFkZGVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vbkFkZGVkJyksXHJcbiAgICAgICAgb25Mb2FkZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uTG9hZGVkJyksXHJcbiAgICAgICAgb25SZW1vdmVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vblJlbW92ZWQnKSxcclxuICAgICAgICBvbkF0dGFjaGVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vbkF0dGFjaGVkJyksXHJcbiAgICAgICAgb25UZXh0dXJlUmVhZHk6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uVGV4dHVyZVJlYWR5JyksXHJcbiAgICAgICAgb25SZXF1ZXN0UG9zaXRpb246IG1ha2VFbmdpbmVFdmVudDxSZXF1ZXN0UG9zaXRpb25IYW5kbGVyPignY2hpbGRyZW4ucmVxdWVzdFBvc2l0aW9uJyksXHJcbiAgICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBjaGlsZHJlbiBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IERpc3BsYXlTdGF0dXMsIGRpc3BsYXlTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBzZW5kRXZlbnQgfSBmcm9tICcuL3NlbmRFdmVudCc7XG5cbmV4cG9ydCB0eXBlIHsgUG9pbnQsIFNpemUsIERpc3BsYXlTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCB7IGV2ZW50cywgc2VuZEV2ZW50LCBjaGlsZHJlbiwgZGlzcGxheVN0YXR1cyB9O1xuXG5leHBvcnQgdHlwZSBTaWRlcyA9IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IEFMTF9TSURFUyA9IDB4ZjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByZWxvYWRUZXh0dXJlKHBhdGg6IHN0cmluZykge1xuICAgIHZpZXdFbnYuYWRkUHJlbG9hZFRleHR1cmUocGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnB1dFBhZGRpbmdzUmVtKHBhZGRpbmdzOiBudW1iZXIpIHtcbiAgICB2aWV3RW52LnNldEhpdEFyZWFQYWRkaW5nc1JlbShwYWRkaW5ncywgcGFkZGluZ3MsIHBhZGRpbmdzLCBwYWRkaW5ncywgQUxMX1NJREVTKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJUZXh0dXJlUGF0aChpZDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NhbGUgPSAxKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0V2ViQnJvd3NlclRleHR1cmVQYXRoKGlkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2RlbE9ic2VydmVyKHBhdGg6IHN0cmluZywgcmVzSWQ6IG51bWJlciwgdHJhY2tTdWJJdGVtczogYm9vbGVhbikge1xuICAgIHJldHVybiB2aWV3RW52LmFkZERhdGFDaGFuZ2VkQ2FsbGJhY2socGF0aCwgcmVzSWQsIHRyYWNrU3ViSXRlbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2lkZVBhZGRpbmdzUmVtKHBhZGRpbmdzOiBTaWRlcykge1xuICAgIHZpZXdFbnYuc2V0SGl0QXJlYVBhZGRpbmdzUmVtKHBhZGRpbmdzLnRvcCwgcGFkZGluZ3MucmlnaHQsIHBhZGRpbmdzLmJvdHRvbSwgcGFkZGluZ3MubGVmdCwgQUxMX1NJREVTKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemUodW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYuZ2V0Vmlld1NpemVSZW0oKSA6IHZpZXdFbnYuZ2V0Vmlld1NpemVQeCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5yZXNpemVWaWV3UmVtKHdpZHRoLCBoZWlnaHQpIDogdmlld0Vudi5yZXNpemVWaWV3UHgod2lkdGgsIGhlaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3R2xvYmFsUG9zaXRpb24odW5pdDogJ3B4JyB8ICdyZW0nID0gJ3JlbScpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZpZXdFbnYuZ2V0Vmlld0dsb2JhbFBvc2l0aW9uUmVtKCk7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmFsdWUgOiB7IHg6IHJlbVRvUHgodmFsdWUueCksIHk6IHJlbVRvUHgodmFsdWUueSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZVRleHR1cmVCZWZvcmVSZXNpemUoKSB7XG4gICAgdmlld0Vudi5mcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZSgpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRTY2FsZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHhUb1JlbShweDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYucHhUb1JlbShweCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYucmVtVG9QeChyZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QW5pbWF0ZVdpbmRvdyhzaG93aW5nOiBib29sZWFuLCBoaWRpbmc6IGJvb2xlYW4pIHtcbiAgICB2aWV3RW52LnNldEFuaW1hdGVXaW5kb3coc2hvd2luZywgaGlkaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmlld0Vudi5pc0ZvY3VzZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEV2ZW50SGFuZGxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmlld0Vudi5zZXRFdmVudEhhbmRsZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbnRIYW5kbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aWV3RW52LmlzRXZlbnRIYW5kbGVkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JjZVRyaWdnZXJNb3VzZU1vdmUoKSB7XG4gICAgdmlld0Vudi5mb3JjZVRyaWdnZXJNb3VzZU1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0U2hvd2luZ1N0YXR1cygpIGFzIERpc3BsYXlTdGF0dXM7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5U3RhdHVzSXMgPSBPYmplY3Qua2V5cyhkaXNwbGF5U3RhdHVzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSAoKSA9PiB2aWV3RW52LmdldFNob3dpbmdTdGF0dXMoKSA9PT0gZGlzcGxheVN0YXR1c1trZXldO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSBhcyBSZWNvcmQ8a2V5b2YgdHlwZW9mIGRpc3BsYXlTdGF0dXMsICgpID0+IGJvb2xlYW4+KTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhU2l6ZSA9IHtcbiAgICAvKiogUmVtIHVuaXRzICovXG4gICAgc2V0OiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgdmlld0Vudi5zZXRFeHRyYVNpemVSZW0od2lkdGgsIGhlaWdodCk7XG4gICAgfSxcbiAgICAvKiogUmVtIHVuaXRzICovXG4gICAgZ2V0OiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgdmlld0Vudi5nZXRFeHRyYVNpemVSZW0od2lkdGgsIGhlaWdodCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB3aGVuVHV0b3JpYWxSZWFkeSA9IFByb21pc2UuYWxsPHZvaWQ+KFtcbiAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlzRG9tQnVpbHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50cy5vbkRvbUJ1aWx0KHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfSksXG4gICAgZW5naW5lLndoZW5SZWFkeSxcbl0pO1xuIiwiZXhwb3J0IHR5cGUgVmlld0V2ZW50QXJncyA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBWaWV3RXZlbnRPcHRpb25zID0gUGljazxcbiAgICBHRlZpZXdFdmVudFByb3h5LFxuICAgICdjb250ZW50SUQnIHwgJ2RlY29yYXRvcklEJyB8ICdpc01vdXNlRXZlbnQnIHwgJ29uJyB8ICdkaXJlY3Rpb24nIHwgJ2Jib3gnXG4+ICYgeyBhcmdzPzogVmlld0V2ZW50QXJncyB9O1xuXG5leHBvcnQgY29uc3Qgdmlld0V2ZW50VHlwZXMgPSB7XG4gICAgY2xvc2VQb3BvdmVyOiAyLFxuICAgIG1vdmU6IDE2LFxuICAgIGNsb3NlOiAzMixcbiAgICBtaW5pbWl6ZTogNjQsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWaWV3RXZlbnRUeXBlID0gVmFsdWVPZjx0eXBlb2Ygdmlld0V2ZW50VHlwZXM+O1xuXG5jb25zdCBjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMgPSAoZGF0YTogVmlld0V2ZW50QXJncyk6IEdGVmFsdWVQcm94eVtdID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fVHlwZSA9ICdHRlZhbHVlUHJveHknO1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYm9vbDogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiB2YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVmlld0V2ZW50ID0gKHR5cGU6IFZpZXdFdmVudFR5cGUsIG9wdGlvbnM/OiBWaWV3RXZlbnRPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgX19UeXBlID0gJ0dGVmlld0V2ZW50UHJveHknO1xuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgeyBhcmdzLCAuLi5yZXN0T3B0aW9ucyB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xuICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIC4uLnJlc3RPcHRpb25zLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzKGFyZ3MpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xuICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIC4uLnJlc3RPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xuICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRFdmVudCA9IHtcbiAgICBjbG9zZSh0eXBlPzogJ3BvcG92ZXInKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncG9wb3ZlcicpIHtcbiAgICAgICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMuY2xvc2VQb3BvdmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMuY2xvc2UpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtaW5pbWl6ZSgpIHtcbiAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5taW5pbWl6ZSk7XG4gICAgfSxcbiAgICBtb3ZlKHN0YXJ0OiBib29sZWFuKSB7XG4gICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMubW92ZSwge1xuICAgICAgICAgICAgaXNNb3VzZUV2ZW50OiB0cnVlLFxuICAgICAgICAgICAgb246IHN0YXJ0LFxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbiIsIi8qKiBFbXB0eSBmdW5jdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuXG4vKiogQWxpYXMgb2Ygbm9vcCAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5RnVuY3Rpb24gPSBub29wO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGZvciBjb3JuZXIgY2FzZVxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogT2JqZWN0LmtleXMob2JqKS5tYXAoaWRlbnRpdHkpIC8vIC0+IFsuLl1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk8QT4oYTogQSkge1xuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIENhbiBiZSB1c2VkIGxpa2UgdGhpczpcbiAqIGBgYFxuICogY29tcHV0ZWQoKCkgPT4gc29tZS52YWx1ZSwgeyBlcXVhbHM6IGNvbnN0RmFsc2UgfSlcbiAqIGBgYFxuICogTWVhbnMgdGhhdCB2YWx1ZSB3aWxsIHRyaWdnZXIgdXBkYXRlcyBieSBtdXRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0RmFsc2UoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENhbiBiZSB1c2VkIGxpa2UgdGhpczpcbiAqIGBgYFxuICogY29tcHV0ZWQoKCkgPT4gc29tZS52YWx1ZSwgeyBlcXVhbHM6IGNvbnN0VHJ1ZSB9KVxuICogYGBgXG4gKiBNZWFucyB0aGF0IHZhbHVlIHdpbGwgKipuZXZlcioqIHRyaWdnZXIgdXBkYXRlcyBieSBtdXRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0VHJ1ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBmb3IgbG9nZ2luZyBjYWxsYmFja3MgaW5zaWRlIERhdGEgTGF5ZXIgTW9ja3Mgd2l0aG91dCBsaW50ZXIgaXNzdWVzXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogICAgIGNvbnRyb2xzOiAoKSA9PiB7XG4gKiAgICAgICAgIHJldHVybiBtYWtlQWN0aW9ucyh7XG4gKiAgICAgICAgICAgICBnb1RvQnJhbmNoUmVzZXQ6ICgpID0+IGxvZygnb25Hb1RvQnJhbmNoUmVzZXQnKSxcbiAqICAgICAgICAgfSk7XG4gKiAgICAgfSxcbiAqIGBgYFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuZXhwb3J0IGNvbnN0IGxvZyA9IGNvbnNvbGUubG9nO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG5pbXBvcnQgeyBEcmFmdFByb3BzIH0gZnJvbSAnbGliL2RyYWZ0ZWQvdHlwZXMnO1xyXG5pbXBvcnQgeyBNZWRpYVNpemUsIHVzZU1lZGlhIH0gZnJvbSAnbGliL2hvb2tzL3VzZU1lZGlhJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFN0YXRpY0tleVR5cGU8QWRhcHRpdmVLZXkgZXh0ZW5kcyBzdHJpbmc+ID0gQWRhcHRpdmVLZXkgZXh0ZW5kcyBgJHtpbmZlciBCYXNlfV8ke0FkYXB0aXZlU3VmZml4VHlwZX1gXHJcbiAgICA/IEJhc2VcclxuICAgIDogbmV2ZXI7XHJcblxyXG50eXBlIEFkYXB0aXZlU3VmZml4VHlwZSA9ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xyXG50eXBlIEFkYXB0aXZlS2V5c1R5cGU8S2V5cyBleHRlbmRzIHN0cmluZz4gPSBgJHtLZXlzfV8ke0FkYXB0aXZlU3VmZml4VHlwZX1gO1xyXG50eXBlIEFkYXB0aXZlUHJvcHNPbmx5PFByb3BzIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIEFkYXB0aXZlUHJvcE5hbWVzIGV4dGVuZHMga2V5b2YgUHJvcHM+ID0ge1xyXG4gICAgW2tleSBpbiBBZGFwdGl2ZUtleXNUeXBlPEV4Y2x1ZGU8QWRhcHRpdmVQcm9wTmFtZXMsIG51bWJlciB8IHN5bWJvbD4+XT86IFByb3BzW1N0YXRpY0tleVR5cGU8a2V5Pl07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzIGV4dGVuZHMge30sIEFkYXB0aXZlS2V5cyBleHRlbmRzIGtleW9mIFN0YXRpY1Byb3BzPiA9IFN0YXRpY1Byb3BzICZcclxuICAgIEFkYXB0aXZlUHJvcHNPbmx5PFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkYXB0aXZlU3VmZml4U2VxdWVuY2UgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ10gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBpc0FkYXB0aXZlU3VmZml4ID0gKGtleT86IHN0cmluZyk6IGtleSBpcyBBZGFwdGl2ZVN1ZmZpeFR5cGUgPT4ge1xyXG4gICAgcmV0dXJuIGFkYXB0aXZlU3VmZml4U2VxdWVuY2UuaW5jbHVkZXMoa2V5IGFzIEFkYXB0aXZlU3VmZml4VHlwZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0FkYXB0aXZlUHJvcE5hbWUgPSAoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBrZXkuaW5jbHVkZXMoJ18nKSAmJiBpc0FkYXB0aXZlU3VmZml4KGtleS5zcGxpdCgnXycpLmF0KC0xKSk7XHJcbn07XHJcblxyXG5jb25zdCBtZWRpYVNpemVTZXF1ZW5jZSA9IFtcclxuICAgIE1lZGlhU2l6ZS5FeHRyYUxhcmdlLFxyXG4gICAgTWVkaWFTaXplLkxhcmdlLFxyXG4gICAgTWVkaWFTaXplLk1lZGl1bSxcclxuICAgIE1lZGlhU2l6ZS5TbWFsbCxcclxuICAgIE1lZGlhU2l6ZS5FeHRyYVNtYWxsLFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0RlZmluZWRBZGFwdGl2ZVByb3BzID0gKHByb3BOYW1lOiBzdHJpbmcsIHByb3BzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIGFkYXB0aXZlU3VmZml4U2VxdWVuY2Uuc29tZSgoc3VmZml4KSA9PiBwcm9wc1tgJHtwcm9wTmFtZX1fJHtzdWZmaXh9YF0gIT09IHVuZGVmaW5lZCk7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBhbGwgYWRhcHRpdmUgcHJvcGVydGllcyBieSBwaWNraW5nIHRoZSBsYXJnZXN0IHByb3BlcnR5IGZyb20gYSBsaXN0LCBmb3IgZXhhbXBsZSBgbV94bCwgbV9sZywgbV9tZCwgbV9zbSwgbV94c2AgdGhhdCBpcyBub3QgbGFyZ2VyIHRoYW4gTWVkaWFTaXplIGFuZCByZXR1cm5pbmcgaXQgYXMgYG1gIGluIGEgbmV3IG9iamVjdCB3aXRoIG9ubHkgdGhlIG5vcm1hbGl6ZWQgcHJvcHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEFuIG9iamVjdCB3aXRoIGFkYXB0aXZlIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7TWVkaWFTaXplfSBtZWRpYVNpemUgLSBBIG1lZGlhIHNpemUgdG8gbm9ybWFsaXplIGFkYXB0aXZlIHByb3BzIGZvci5cclxuICogQHJldHVybiB7T2JqZWN0fSAtIEEgbmV3IG9iamVjdCB3aXRoIG5vcm1hbGl6ZWQgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgbWVkaWFTaXplOiBNZWRpYVNpemUpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKChvdXRwdXQsIHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gSWYga2V5IGlzIGFscmVhZHkgaW4gb3V0cHV0LCBpdCBtZWFucyBpdCBpcyBhIGJhc2UgZm9yIGFuIGFkYXB0aXZlIHByb3Agd2hpY2ggd2FzIGFscmVhZHkgcHJvY2Vzc2VkIC0+IHNraXBcclxuICAgICAgICBpZiAocHJvcE5hbWUgaW4gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0FkYXB0aXZlUHJvcE5hbWUocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VQcm9wTmFtZSA9IHByb3BOYW1lLnNwbGl0KCdfJykuc2xpY2UoMCwgLTEpLmpvaW4oJ18nKTtcclxuICAgICAgICAgICAgLy8gaWYgYmFzZSBwcm9wIGlzIGFscmVhZHkgaW4gb3V0cHV0LCBpdCBtdXN0IGhhdmUgYmVlbiBhbHJlYWR5IHByb2Nlc3NlZCAtPiBza2lwXHJcbiAgICAgICAgICAgIGlmIChiYXNlUHJvcE5hbWUgaW4gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhU2l6ZUluZGV4ID0gbWVkaWFTaXplU2VxdWVuY2UuaW5kZXhPZihtZWRpYVNpemUpO1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGFkYXB0aXZlIHByb3BlcnRpZXMgdGhhdCBhcmUgbGFyZ2VyIHRoYW4gbWVkaWFTaXplXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50QWRhcHRpdmVTdWZmaXhlcyA9IG1lZGlhU2l6ZUluZGV4ICE9PSAtMSA/IGFkYXB0aXZlU3VmZml4U2VxdWVuY2Uuc2xpY2UobWVkaWFTaXplSW5kZXgpIDogW107XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbGV2YW50UHJvcGVydHlOYW1lcyA9IHJlbGV2YW50QWRhcHRpdmVTdWZmaXhlcy5tYXAoKHN1ZmZpeCkgPT4gYmFzZVByb3BOYW1lICsgJ18nICsgc3VmZml4KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9wTmFtZSA9IHJlbGV2YW50UHJvcGVydHlOYW1lcy5maW5kKChwcm9wTmFtZSkgPT4gcHJvcHNbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFByb3BWYWx1ZSA9IHJlc29sdmVkUHJvcE5hbWUgPyBwcm9wc1tyZXNvbHZlZFByb3BOYW1lXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gYXNzaWduIGJhc2VQcm9wIHdpdGggdmFsdWUgb2YgdGhlIGZpcnN0IHJlbGV2YW50IGFkYXB0aXZlIHByb3Agb3IgYmFzZSBwcm9wXHJcbiAgICAgICAgICAgIG91dHB1dFtiYXNlUHJvcE5hbWVdID0gcmVzb2x2ZWRQcm9wVmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlc29sdmVkUHJvcFZhbHVlIDogcHJvcHNbYmFzZVByb3BOYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XHJcbiAgICAgICAgLy8gc2tpcCBwcm9wcyB0aGF0IGFyZSB1bmRlZmluZWQgb3IgaGF2ZSBzb21lIGFkYXB0aXZlIHByb3BlcnRpZXMgc2V0XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaGFzRGVmaW5lZEFkYXB0aXZlUHJvcHMocHJvcE5hbWUsIHByb3BzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXRbcHJvcE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0sIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgY29tcG9uZW50IHRoYXQgbm9ybWFsaXplcyBhZGFwdGl2ZSBwcm9wZXJ0aWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IG1lZGlhIHNpemUgYW5kIHBhc3NlcyBpdCB0byB0aGUgQ29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+fSBDb21wb25lbnQgLSBSZWFjdCBjb21wb25lbnQgdGhhdCBoYW5kbGVzIHN0YXRpYyBwcm9wcy5cclxuICogQHBhcmFtIHt0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wc30gbm9ybWFsaXplUHJvcHMgLSBvcHRpb25hbCBjdXN0b20gZnVuY3Rpb24gdGhhdCBub3JtYWxpemVzIGFkYXB0aXZlIHByb3BzLCB1c2VmdWwgbWFpbmx5IGZvciB0ZXN0aW5nLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gdGhlIEJveCBjb21wb25lbnQgd2l0aCBub3JtYWxpemVkIGFkYXB0aXZlIHByb3BlcnRpZXNcclxuICovXHJcbmNvbnN0IGdldEFkYXB0aXZlQ29tcG9uZW50ID1cclxuICAgIDxTdGF0aWNQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcz4oXHJcbiAgICAgICAgQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPixcclxuICAgICAgICBub3JtYWxpemVQcm9wczogdHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMgPSBub3JtYWxpemVBZGFwdGl2ZVByb3BzLFxyXG4gICAgKSA9PlxyXG4gICAgKHByb3BzOiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBtZWRpYVNpemUgfSA9IHVzZU1lZGlhKCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb3BzID0gdXNlTWVtbygoKSA9PiBub3JtYWxpemVQcm9wcyhwcm9wcywgbWVkaWFTaXplKSwgW3Byb3BzLCBtZWRpYVNpemVdKTtcclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uKG5vcm1hbGl6ZWRQcm9wcyBhcyBTdGF0aWNQcm9wcyl9IC8+O1xyXG4gICAgfTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGVpdGhlciBhbiBBZGFwdGl2ZUNvbXBvbmVudCBvciBhIENvbXBvbmVudCBkZXBlbmRpbmcgb24gd2hldGhlciBhZGFwdGl2ZSBwcm9wcyBhcmUgcHJlc2VudCBpbiB0aGUgcHJvcHMgb2JqZWN0LlxyXG4gKiBHZW5lcmljIHR5cGVzIFN0YXRpY1Byb3BzIChlLmcuIENvbXBQcm9wcykgYW5kIEFkYXB0aXZlS2V5cyAoZS5nLiBDb21wQWRhcHRpdmVQcm9wTmFtZXMpIGFyZSBvcHRpb25hbC4gQWRhcHRpdmUgbG9naWMgd291bGQgd29ya1xyXG4gKiBvbiBhbnkgcHJvcHMgaW4gcnVudGltZSwgYnV0IGFkZGluZyB0aGUgdHlwZXMgd2lsbCBmaWx0ZXIgd2hpY2gga2V5cyBhcmUgdmFsaWRhdGVkIGJ5IFR5cGVzY3JpcHQgc28gdGhhdCBhZGFwdGl2ZSBwcm9wc1xyXG4gKiB0aGF0IGRvIG5vdCBtYWtlIHNlbnNlIGFyZSBub3Qgc3VnZ2VzdGVkIGJ5IGludGVsbGlzZW5zZS5cclxuICogQHVzYWdlIChpbiByb290IHNjb3BlKSBjb25zdCBBZGFwdGl2ZUNvbXAgPSBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8Q29tcFByb3BzLCBDb21wQWRhcHRpdmVQcm9wTmFtZXM+KENvbXApO1xyXG4gKiAgZXhwb3J0IHR5cGUgQ29tcEFkYXB0aXZlUHJvcE5hbWVzID0gJ3NpemUnIHwgJ2NsYXNzTmFtZSc7XHJcbiAqICBleHBvcnQgdHlwZSBDb21wUHJvcHMgPSBDb21wU3RhdGljUHJvcHMgJiBBZGFwdGl2ZVByb3BzPENvbXBTdGF0aWNQcm9wcywgQ29tcEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XHJcbiAqICBleHBvcnQgZGVmYXVsdCBBZGFwdGl2ZUNvbXA7XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz59IENvbXBvbmVudCAtIFJlYWN0IGNvbXBvbmVudCB0aGF0IGhhbmRsZXMgc3RhdGljIHByb3BzLlxyXG4gKiBAcGFyYW0ge3R5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzfSBub3JtYWxpemVQcm9wcyAtIG9wdGlvbmFsIGN1c3RvbSBmdW5jdGlvbiB0aGF0IG5vcm1hbGl6ZXMgYWRhcHRpdmUgcHJvcHMsIHVzZWZ1bCBtYWlubHkgZm9yIHRlc3RpbmcuXHJcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBFaXRoZXIgYW4gQWRhcHRpdmVCb3ggb3IgYSBCb3ggY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEFkYXB0aXZlQ29udHJvbGxlciA9IDxcclxuICAgIFN0YXRpY1Byb3BzIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgICBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcyxcclxuPihcclxuICAgIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz4sXHJcbiAgICBub3JtYWxpemVQcm9wczogdHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMgPSBub3JtYWxpemVBZGFwdGl2ZVByb3BzLFxyXG4pID0+IHtcclxuICAgIGNvbnN0IEFkYXB0aXZlQ29tcG9uZW50ID0gZ2V0QWRhcHRpdmVDb21wb25lbnQoQ29tcG9uZW50LCBub3JtYWxpemVQcm9wcykgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgICAgICBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+XHJcbiAgICA+O1xyXG4gICAgcmV0dXJuIFJlYWN0Lm1lbW8oKHByb3BzOiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQWRhcHRpdmVQcm9wcyA9IE9iamVjdC5rZXlzKHByb3BzKS5zb21lKFxyXG4gICAgICAgICAgICAoa2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgaXNBZGFwdGl2ZVByb3BOYW1lKGtleSkgJiYgcHJvcHNba2V5IGFzIGtleW9mIEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz5dICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaGFzQWRhcHRpdmVQcm9wcyA/IDxBZGFwdGl2ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+IDogPENvbXBvbmVudCB7Li4uKHByb3BzIGFzIFN0YXRpY1Byb3BzKX0gLz47XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjtcclxuXHJcbnR5cGUgRHJhZnRQcm9wTWFwID0geyBba2V5OiBzdHJpbmddOiBEcmFmdFByb3BzIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHJhZnRlZEFkYXB0aXZlUHJvcHMgPSAocHJvcE5hbWU6IHN0cmluZywgZHJhZnRQcm9wczogRHJhZnRQcm9wcykgPT5cclxuICAgIGFkYXB0aXZlU3VmZml4U2VxdWVuY2UucmVkdWNlKChwcm9wcywgc3VmZml4KSA9PiB7XHJcbiAgICAgICAgcHJvcHNbcHJvcE5hbWUgKyAnXycgKyBzdWZmaXhdID0gZHJhZnRQcm9wcztcclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICB9LCB7fSBhcyBEcmFmdFByb3BNYXApO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VDYWxsT25jZSA9IChmOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgY2FsbGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIWNhbGxlZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZigpO1xyXG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNhbGxPbmNlO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZWRpYUNvbnRleHQsIE1lZGlhQ29udGV4dFR5cGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnknO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljJztcblxuZXhwb3J0IGVudW0gTWVkaWFTaXplIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVdpZHRoIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYUhlaWdodCB7XG4gICAgRXh0cmFTbWFsbCA9IEJSRUFLUE9JTlRTLmV4dHJhU21hbGwuaGVpZ2h0LFxuICAgIFNtYWxsID0gQlJFQUtQT0lOVFMuc21hbGwuaGVpZ2h0LFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS5oZWlnaHQsXG4gICAgTGFyZ2UgPSBCUkVBS1BPSU5UUy5sYXJnZS5oZWlnaHQsXG4gICAgRXh0cmFMYXJnZSA9IEJSRUFLUE9JTlRTLmV4dHJhTGFyZ2UuaGVpZ2h0LFxufVxuXG5jb25zdCBjb252ZXJ0VG9NZWRpYVNpemUgPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2U6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5FeHRyYVNtYWxsO1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUb01lZGlhV2lkdGggPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2VXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbFdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICB9XG59O1xuXG5jb25zdCBjb252ZXJ0VG9NZWRpYUhlaWdodCA9IChtZWRpYUNvbnRleHQ6IE1lZGlhQ29udGV4dFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFMYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5FeHRyYUxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5sYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0Lk1lZGl1bTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuc21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuU21hbGw7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhU21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkV4dHJhU21hbGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZU1lZGlhID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lZGlhQ29udGV4dCA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lZGlhQ29udGV4dDtcbiAgICBjb25zdCBtZWRpYVNpemUgPSBjb252ZXJ0VG9NZWRpYVNpemUobWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBtZWRpYVdpZHRoID0gY29udmVydFRvTWVkaWFXaWR0aChtZWRpYUNvbnRleHQpO1xuICAgIGNvbnN0IG1lZGlhSGVpZ2h0ID0gY29udmVydFRvTWVkaWFIZWlnaHQobWVkaWFDb250ZXh0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhU2l6ZSxcbiAgICAgICAgbWVkaWFXaWR0aCxcbiAgICAgICAgbWVkaWFIZWlnaHQsXG4gICAgICAgIHJlbVNjcmVlbldpZHRoOiB3aWR0aCxcbiAgICAgICAgcmVtU2NyZWVuSGVpZ2h0OiBoZWlnaHQsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBFZmZlY3RDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1vdW50ID0gKGZuOiBFZmZlY3RDYWxsYmFjaykgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgdXNlRWZmZWN0KGZuLCBbXSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVW5tb3VudCA9IChmbjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IGZuLCBbXSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVVubW91bnQgfSBmcm9tICcuL3VzZU1vdW50VW5tb3VudCc7XHJcblxyXG5jb25zdCBOT19SQUZfSUQgPSAwIGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaG9vayB3aWxsIGNvcnJlY3RseSB3b3JrIHdpdGggYXN5bmMgc2tpcCBmcmFtZS5cclxuICogSXQgd2lsbCBiZSBjbGVhcmVkIHdoZW4geW91ciBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSB1bm1vdW50ZWQuXHJcbiAqIEVhY2ggdGltZSBmdW5jdGlvbiBzdGFydHMsIGl0IHdpbGwgY2xlYXIgdGhlIHByZXZpb3VzIHJ1bi5cclxuICpcclxuICogRXhhbXBsZXMgdG8gdXNhZ2U6XHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IHNraXBGcmFtZSA9IHVzZVNraXBGcmFtZSgpXHJcbiAqXHJcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAqICAgaWYgKHN0YXRlID09PSAnYW5pbWF0aW5nJykge1xyXG4gKiAgICAgc2tpcEZyYW1lLnJ1bigoKSA9PiBzZXRTdGF0ZSguLi4pKVxyXG4gKiAgIH1cclxuICogfSwgW3N0YXRlLCBza2lwRnJhbWVdKVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTa2lwRnJhbWUoKSB7XHJcbiAgICBjb25zdCByYWZJZFJlZiA9IHVzZVJlZjxudW1iZXI+KE5PX1JBRl9JRCk7XHJcblxyXG4gICAgdXNlVW5tb3VudCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkUmVmLmN1cnJlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgcnVuOiAoaGFuZGxlcjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhZklkUmVmLmN1cnJlbnQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWZJZFJlZi5jdXJyZW50ID0gTk9fUkFGX0lEO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICByYWZJZFJlZi5jdXJyZW50ID0gTk9fUkFGX0lEO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgaXNSdW5uaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhZklkUmVmLmN1cnJlbnQgIT09IE5PX1JBRl9JRDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBNYXBwaW5nID0ge1xuICAgIFtrZXk6IHN0cmluZ106XG4gICAgICAgIHwgc3RyaW5nXG4gICAgICAgIHwgbnVtYmVyXG4gICAgICAgIHwgYm9vbGVhblxuICAgICAgICB8IFJlYWN0Tm9kZVxuICAgICAgICB8IEhUTUxFbGVtZW50XG4gICAgICAgIHwgbnVtYmVyW11cbiAgICAgICAgfCBzdHJpbmdbXVxuICAgICAgICB8IFJlYWN0Tm9kZVtdXG4gICAgICAgIHwgSFRNTEVsZW1lbnRbXTtcbn07XG5cbmV4cG9ydCBlbnVtIEFsaWdubWVudCB7XG4gICAgbGVmdCxcbiAgICByaWdodCxcbn1cblxuZXhwb3J0IHR5cGUgQmluZGluZyA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgaW4gc3RyaW5nIG5hbWVkIHBhcmFtcyBzZXQgaW4gcHl0aG9uIHN0eWxlIHRocm91Z2ggYnJhY2VzOiAnYmxhbGJsYSB7cGFyYW0xfSBibGFsYmxhIHtwYXJhbTF9IC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xcdytcXH0vZywgKG1hdGNoKSA9PiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZSgxLCAtMSldKSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBpbiBzdHJpbmcgbmFtZWQgcGFyYW1zIHNldCBpbiBwcmludGYtc3R5bGUgc3R5bGU6ICdibGFsYmxhICUocGFyYW0xKXMgYmxhbGJsYSAlKHBhcmFtMSlzIC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmludGYoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHt8JVxcKClcXHcrKFxcfXxcXClzKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3QgcGFkID0gbWF0Y2guaW5kZXhPZignJScpID09PSAwID8gMiA6IDE7XG4gICAgICAgIHJldHVybiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZShwYWQsIC1wYWQpXSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBzbmFrZV9jYXNlIHN0cmluZyB0byBjYW1lbENhc2UnXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9fXFx3L2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGZpbGUgbmFtZSB0byBSIGNsYXNzIG5hbWUnXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmVzb3VyY2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgJ18nKTtcbn1cblxuLyoqXG4gKiBjb252ZXJ0IGZpcnN0IGNoYXIgdG8gdXBwZXIgY2FzZVxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwQ2FzZUZpcnN0Q2hhcihzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiByZXBsYWNlICZuYnNwOyB0byBcXHhhMFxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnROYnNwID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mbmJzcDsvZywgJ1xceGEwJyk7XG59O1xuXG4vKipcbiAqIHJlcGxhY2UgJnp3bmJzcDsgdG8gXFx1ZmVmZlxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRad25ic3AgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyZ6d25ic3A7L2csICdcXHVmZWZmJyk7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYzogc3RyaW5nW10sIGl0ZW06IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nW107XG5cbmNvbnN0IGFkZFNlcGFyYXRvclRvUmlnaHQ6IEFkZFNlcGFyYXRvckZ1bmMgPSAoYWNjLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmICghKGluZGV4ICUgMikpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuY29uc3QgYWRkU2VwYXJhdG9yVG9MZWZ0OiBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtpdGVtXTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ICUgMikge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgaXRlbSA9PT0gJyAnID8gJ1xceGEwJyA6IGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBTcGxpdCB0ZXh0IHN0cmluZyB3aXRoIFJlZ0V4cCBzZXBhcmF0b3IgYW5kIHRoZW4gYWRkIHNlcGFyYXRvciB0byB0aGUgcHJvcGVyIHNpZGVcbiAqL1xuY29uc3Qgc3BsaXRBbmRGb3JtYXQgPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBzZXBhcmF0b3I6IFJlZ0V4cCwgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpOiBzdHJpbmdbXSA9PlxuICAgIHN0cmluZ1RvU3BsaXQuc3BsaXQoc2VwYXJhdG9yKS5yZWR1Y2UoYWxpZ25tZW50ID09PSBBbGlnbm1lbnQubGVmdCA/IGFkZFNlcGFyYXRvclRvUmlnaHQgOiBhZGRTZXBhcmF0b3JUb0xlZnQsIFtdKTtcblxuZXhwb3J0IGNvbnN0IHNwbGl0RXVyb3BlYW4gPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCk6IHN0cmluZ1tdID0+IHtcbiAgICBsZXQgc3BsaXRSZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBzcGxpdFJlZ2V4ID0gLyg/PD1cXHB7TGx9KSgtKSg/PVxccHtMbH0pL2d1OyAvLyBleGNsdWRlIHNwZWNpYWwgd29yZHMgbGlrZSB2ZWhpY2xlIG5hbWVzIEtWLTIgZXRjXG4gICAgY29uc3Qgc3RyaW5nV2l0aE5ic3AgPSBjb252ZXJ0TmJzcChzdHJpbmdUb1NwbGl0KTtcbiAgICBzcGxpdEFuZEZvcm1hdChzdHJpbmdXaXRoTmJzcCwgLyggKS8sIGFsaWdubWVudCkuZm9yRWFjaChcbiAgICAgICAgKHdvcmQpID0+IChzcGxpdFJlc3VsdCA9IHNwbGl0UmVzdWx0LmNvbmNhdChzcGxpdEFuZEZvcm1hdCh3b3JkLCBzcGxpdFJlZ2V4LCBBbGlnbm1lbnQubGVmdCkpKSxcbiAgICApO1xuICAgIHJldHVybiBzcGxpdFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGxpdENoaW5lc2UgPSAoKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovIC8vIEVzY2FwaW5nIGlzIG5lY2Vzc2FyeSBmb3IgdW5pY29kZSBSZWdFeHAuXG4gICAgLy8gU3ltYm9scyB1c2VkIGZvciBsYXRpbiB2ZWhpY2xlIG5hbWVzLCByYW5nZXMgZXRjLiBleHBlY3RlZCBub3QgYmUgd3JhcHBlZCBmcm9tIGVhY2ggb3RoZXIgb3IgZm9sbG93aW5nIHB1bmN0dWF0aW9uIG1hcmsuXG4gICAgLy8gWW91IGNhbiBhZGQgbmV3IG9uZXMgdG8gdGhlIHRoaXJkIHBhaXIgb2YgW10gKGN1cnJlbnRseSB0aGUgbGlzdCBpcyBbYS16QS1aMC05LeKAk+KAlCAl4oCmLlxcezNcXH0vXSlcbiAgICBjb25zdCBsYXRpbkluamVjdGlvbnMgPVxuICAgICAgICAvW1xccHtzYz1IYW5pfShdP1vjgILvvIzvvJrvvJvvvIHvvJ9dP1thLXpBLVrDgC3ItzAtOS3igJPigJQgXFx4YTAl4oCmLitcXHszXFx9L10rW1xccHtzYz1IYW5pfeOAgu+8jO+8mu+8m++8ge+8nyldP1vjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gVGhpcyBydWxlIHByZXZlbnRzIHdyYXBwaW5nIG9mIHNvbWUgc3ltYm9scyBuZWlnaGJvcmluZyB0byB0aGUgYnJhY2tldHMvcXVvdGVzLlxuICAgIC8vIFBhaXJzIG9mIG9wZW5pbmcgKGxlZnQpIGFuZCBjbG9zaW5nIChyaWdodCkgc3ltYm9scyBhcmUgZGVzY3JpYmVkLlxuICAgIC8vIE9ubHkgdXNlIHNlcGFyYXRlIHVuaWNvZGUgc3ltYm9scyBmb3IgbGVmdCBhbmQgcmlnaHQgcGFydCjCq8K7KSwgYnV0IE5PVCB1bml2ZXJzYWwgb25lcyAoXCIpLlxuICAgIC8vIEluIGNhc2UgaWYgdW5pdmVyc2FsIHN5bWJvbCBpcyB1c2VkIGluIHRoZSB0cmFuc2xhdGlvbiwgdGhlIHRyYW5zbGF0aW9uIG11c3QgYmUgZml4ZWQsIG5vdCB0aGUgcnVsZS5cbiAgICBjb25zdCBicmFja2V0c0FuZFF1b3RlcyA9XG4gICAgICAgIC9bXFwo4p2d4oCcwqtdXFxwe3NjPUhhbml9XFxQe3NjPUhhbml9P3xcXHB7c2M9SGFuaX1cXFB7c2M9SGFuaX0/W+OAgu+8jO+8mu+8m++8ge+8n10/W1xcKeKdnuKAncK7XVvjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gUnVsZSBkZXNjcmliZXMgdGhhdCBwcmV2aW91cyBoaWVyb2dseXBoIHNob3VsZCBub3QgYmUgd3JhcHBlZC5cbiAgICAvLyBPbmx5IHVuaWNvZGUgcHVuY3R1YXRpb24gbWFya3MgYXJlIHVzZWQgZm9yIGFzaWFuIGxhbmd1YWdlcy5cbiAgICAvLyBPdGhlcndpc2Ugc3RyaW5nIHNob3VsZCBiZSBmaXhlZCB0byB1c2UgdW5pY29kZSBwdW5jdHVhdGlvbiBtYXJrcywgbm90IHRoZSBydWxlLlxuICAgIGNvbnN0IHB1bmN0dWF0aW9uTWFya3MgPSAvXFxwe0x9P1vjgILvvIw6IDsg77ya77yb77yB77yf44CK44CL44CM44CN4oCiKeOAgV18WyhcXHB7TH17MSx9XS9nbXU7ICAgIFxuICAgIC8vIFRoaXMgcnVsZSBtYWtlcyBpdCBwb3NzaWJsZSB0byB3cmFwIGFueSBuZWlnaGJvcmluZyBwYWlyIG9mIGhpZXJvZ2x5cGhzLlxuICAgIGNvbnN0IG5laWdoYm9yaW5nSGllcm9nbHlwaHMgPSAvXFxwe3NjPUhhbml9L2dtdTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvLyBPcmRlciBpcyBpbXBvcnRhbnQuXG4gICAgY29uc3QgbWFpblJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgbGF0aW5JbmplY3Rpb25zLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgYnJhY2tldHNBbmRRdW90ZXMuc291cmNlICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICBwdW5jdHVhdGlvbk1hcmtzLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdIaWVyb2dseXBocy5zb3VyY2UsXG4gICAgICAgICdndW0nLFxuICAgICk7XG4gICAgcmV0dXJuIChzdHJpbmdzVG9TcGxpdDogc3RyaW5nKSA9PlxuICAgICAgICBzdHJpbmdzVG9TcGxpdFxuICAgICAgICAgICAgLnJlcGxhY2UoLyZuYnNwOy9nLCAnXFx4YTAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyAvZywgJ1xceGEwJylcbiAgICAgICAgICAgIC5tYXRjaChtYWluUmVnZXgpO1xufSkoKTtcblxuY29uc3QgQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyA9IFsnemhfY24nLCAnemhfc2cnLCAnemhfdHcnXTtcblxuLyoqXG4gKiBTcGxpdCBvbmUgbGluZSBvZiBsb2NhbGl6ZWQgdGV4dCB0byBhcnJheSBvZiB3b3JkcyB3aGljaCB0aGVuIGNhbiBiZSBsaW5lLXdyYXBwZWQgYnkgZ2FtZWZhY2UuXG4gKiBAcGFyYW0gc3RyaW5nVG9TcGxpdCBzdXBwb3J0cyAmbmJzcCwgaHlwaGVucyBhbmQgZGFzaGVzIGZvciBhc2lhbiBsYW5ndWFnZXMuXG4gKiBAcGFyYW0gYWxpZ25tZW50IHNldCB0byBgcmlnaHRgIGZvciByaWdodC1hbGlnbmVkIHRleHRcbiAqIFNlZSB0ZXN0cyBmb3IgZXhhbXBsZVxuICovXG5cbmV4cG9ydCBjb25zdCBzcGxpdFdvcmRzID0gKHN0cmluZ1RvU3BsaXQ6IHN0cmluZywgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IFIuc3RyaW5ncy5zZXR0aW5ncy5MQU5HVUFHRV9DT0RFKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChDSElORVNFX0xBTkdVQUdFX0NPREVTLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuICAgICAgICByZXR1cm4gc3BsaXRDaGluZXNlKHN0cmluZ1RvU3BsaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdEV1cm9wZWFuKHN0cmluZ1RvU3BsaXQsIGFsaWdubWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0U3RyaW5nID0gKHRleHQ6IHN0cmluZywgYWxpZ25tZW50OiBBbGlnbm1lbnQsIGJpbmRpbmc/OiBCaW5kaW5nKTogQXJyYXk8c3RyaW5nIHwgUmVhY3ROb2RlPiA9PlxuICAgIHRleHQuc3BsaXQoLyVcXCgoLio/KVxcKSg/OltzZF0pPy9nKS5tYXAoKHN1YlN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghYmluZGluZykgeyByZXR1cm4gc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7IH1cbiAgICAgICAgcmV0dXJuIHN1YlN0cmluZyBpbiBiaW5kaW5nID8gYmluZGluZ1tzdWJTdHJpbmddIDogc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7XG4gICAgfSk7XG5cbiIsImltcG9ydCB7IFRvb2x0aXBEZWNvcmF0b3IgfSBmcm9tICdjb21wb25lbnRzL1Rvb2x0aXBEZWNvcmF0b3IvVG9vbHRpcERlY29yYXRvcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCB7IE1vZGVsUHJvdmlkZXIgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmVuZ2luZS53aGVuUmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPE1vZGVsUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxUb29sdGlwRGVjb3JhdG9yPlxyXG4gICAgICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBEZWNvcmF0b3I+XHJcbiAgICAgICAgPC9Nb2RlbFByb3ZpZGVyPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHAuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBSZWFjdC5tZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhbH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXJuaW5nSWNvbn0gLz5cclxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gdGV4dD17Ui5zdHJpbmdzLmFybW9yeV9zaG9wLnNob3BCdXlWaWV3LnRvb2x0aXAuYnV5Tm90QXZhaWxhYmxlKCl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCB7IEFybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlld01vZGVsIH0gZnJvbSAnZ3VpL2ltcGwvZ2VuL3ZpZXdfbW9kZWxzL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvdG9vbHRpcHMvYXJtb3J5X3lhcmRfd2FsbGV0X25vdF9hdmFpbGFibGVfdG9vbHRpcF92aWV3X21vZGVsJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQgfSBmcm9tICdsaWIvZGF0YS1sYXllcic7XHJcbmltcG9ydCB7IENhc3RBbGxBcnJheXMgfSBmcm9tICdsaWIvbGlrZUFycmF5JztcclxuXHJcbmV4cG9ydCBjb25zdCBbTW9kZWxQcm92aWRlciwgdXNlTW9kZWxdID0gaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQ8XHJcbiAgICBDYXN0QWxsQXJyYXlzPEFybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlld01vZGVsPlxyXG4+KCkoXHJcbiAgICAoeyBvYnNlcnZhYmxlTW9kZWwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0ge1xyXG4gICAgICAgICAgICByb290OiBvYnNlcnZhYmxlTW9kZWwub2JqZWN0KCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ubW9kZWwsXHJcbiAgICAgICAgICAgIGNvbXB1dGVzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgICh7IGV4dGVybmFsTW9kZWwgfSkgPT4gKHt9KSxcclxuKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJtdF9fWFNcIjpcIkJveF9tdF9fWFNfMGNcIixcIm10X19TTVwiOlwiQm94X210X19TTV9lYlwiLFwibXRfX1NNcFwiOlwiQm94X210X19TTXBfY2ZcIixcIm10X19NRFwiOlwiQm94X210X19NRF8yNVwiLFwibXRfX01EcFwiOlwiQm94X210X19NRHBfNDlcIixcIm10X19MR1wiOlwiQm94X210X19MR19lOFwiLFwibXRfX1hMXCI6XCJCb3hfbXRfX1hMXzgzXCIsXCJtcl9fWFNcIjpcIkJveF9tcl9fWFNfN2NcIixcIm1yX19TTVwiOlwiQm94X21yX19TTV8wOFwiLFwibXJfX1NNcFwiOlwiQm94X21yX19TTXBfMDZcIixcIm1yX19NRFwiOlwiQm94X21yX19NRF80YVwiLFwibXJfX01EcFwiOlwiQm94X21yX19NRHBfYjZcIixcIm1yX19MR1wiOlwiQm94X21yX19MR19kMFwiLFwibXJfX1hMXCI6XCJCb3hfbXJfX1hMX2RiXCIsXCJtYl9fWFNcIjpcIkJveF9tYl9fWFNfYmJcIixcIm1iX19TTVwiOlwiQm94X21iX19TTV84M1wiLFwibWJfX1NNcFwiOlwiQm94X21iX19TTXBfMDRcIixcIm1iX19NRFwiOlwiQm94X21iX19NRF9lZFwiLFwibWJfX01EcFwiOlwiQm94X21iX19NRHBfNjVcIixcIm1iX19MR1wiOlwiQm94X21iX19MR19jOFwiLFwibWJfX1hMXCI6XCJCb3hfbWJfX1hMX2Y4XCIsXCJtbF9fWFNcIjpcIkJveF9tbF9fWFNfOGFcIixcIm1sX19TTVwiOlwiQm94X21sX19TTV9lNlwiLFwibWxfX1NNcFwiOlwiQm94X21sX19TTXBfZmJcIixcIm1sX19NRFwiOlwiQm94X21sX19NRF8yYlwiLFwibWxfX01EcFwiOlwiQm94X21sX19NRHBfYzdcIixcIm1sX19MR1wiOlwiQm94X21sX19MR18zOVwiLFwibWxfX1hMXCI6XCJCb3hfbWxfX1hMXzRhXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiRm9ybWF0VGV4dF9iYXNlX2QwXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFyYWdyYXBoLVAxMFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDEwXzJjXCIsXCJwYXJhZ3JhcGgtUDEyXCI6XCJUZXh0X3BhcmFncmFwaC1QMTJfMjJcIixcInBhcmFncmFwaC1QMTRcIjpcIlRleHRfcGFyYWdyYXBoLVAxNF9hN1wiLFwicGFyYWdyYXBoLVAxNlwiOlwiVGV4dF9wYXJhZ3JhcGgtUDE2XzkwXCIsXCJwYXJhZ3JhcGgtUDE4XCI6XCJUZXh0X3BhcmFncmFwaC1QMThfNTBcIixcInBhcmFncmFwaC1QMjRcIjpcIlRleHRfcGFyYWdyYXBoLVAyNF8zM1wiLFwiaGVhZGluZy1IMTRcIjpcIlRleHRfaGVhZGluZy1IMTRfOGJcIixcImhlYWRpbmctSDE1XCI6XCJUZXh0X2hlYWRpbmctSDE1XzllXCIsXCJoZWFkaW5nLUgxOFwiOlwiVGV4dF9oZWFkaW5nLUgxOF9iN1wiLFwiaGVhZGluZy1IMjBSXCI6XCJUZXh0X2hlYWRpbmctSDIwUl9mNlwiLFwiaGVhZGluZy1IMjJcIjpcIlRleHRfaGVhZGluZy1IMjJfMjdcIixcImhlYWRpbmctSDI0UlwiOlwiVGV4dF9oZWFkaW5nLUgyNFJfYmVcIixcImhlYWRpbmctSDI0XCI6XCJUZXh0X2hlYWRpbmctSDI0XzBjXCIsXCJoZWFkaW5nLUgyOFwiOlwiVGV4dF9oZWFkaW5nLUgyOF83OFwiLFwiaGVhZGluZy1IMzZcIjpcIlRleHRfaGVhZGluZy1IMzZfMzJcIixcImhlYWRpbmctSDU2XCI6XCJUZXh0X2hlYWRpbmctSDU2X2MzXCIsXCJoZWFkaW5nLUg3M1wiOlwiVGV4dF9oZWFkaW5nLUg3M184ZlwiLFwiaGVhZGluZy1IMTQ0XCI6XCJUZXh0X2hlYWRpbmctSDE0NF9hOVwiLFwiQkxBQ0tfUkVBTFwiOlwiVGV4dF9CTEFDS19SRUFMXzMwXCIsXCJXSElURV9SRUFMXCI6XCJUZXh0X1dISVRFX1JFQUxfYmNcIixcIldISVRFXCI6XCJUZXh0X1dISVRFXzYyXCIsXCJXSElURV9PUkFOR0VcIjpcIlRleHRfV0hJVEVfT1JBTkdFXzU0XCIsXCJXSElURV9TUEFOSVNIXCI6XCJUZXh0X1dISVRFX1NQQU5JU0hfZGZcIixcIlBBUlwiOlwiVGV4dF9QQVJfMTVcIixcIlBBUl9TRUNPTkRBUllcIjpcIlRleHRfUEFSX1NFQ09OREFSWV81ZFwiLFwiUEFSX1RFUlRJQVJZXCI6XCJUZXh0X1BBUl9URVJUSUFSWV9jOVwiLFwiSU5GT19SRURcIjpcIlRleHRfSU5GT19SRURfMzBcIixcIlJFRFwiOlwiVGV4dF9SRURfNjZcIixcIlJFRF9EQVJLXCI6XCJUZXh0X1JFRF9EQVJLX2Q4XCIsXCJZRUxMT1dcIjpcIlRleHRfWUVMTE9XX2VkXCIsXCJPUkFOR0VcIjpcIlRleHRfT1JBTkdFX2JlXCIsXCJDUkVBTVwiOlwiVGV4dF9DUkVBTV81N1wiLFwiQlJPV05cIjpcIlRleHRfQlJPV05fMThcIixcIkdSRUVOX0JSSUdIVFwiOlwiVGV4dF9HUkVFTl9CUklHSFRfM2ZcIixcIkdSRUVOXCI6XCJUZXh0X0dSRUVOX2UzXCIsXCJHUkVFTl9EQVJLXCI6XCJUZXh0X0dSRUVOX0RBUktfZjFcIixcIkJMVUVfQk9PU1RFUlwiOlwiVGV4dF9CTFVFX0JPT1NURVJfMjFcIixcIkJMVUVfVEVBTUtJTExFUlwiOlwiVGV4dF9CTFVFX1RFQU1LSUxMRVJfYWJcIixcIkNSRURcIjpcIlRleHRfQ1JFRF9mN1wiLFwiR09MRFwiOlwiVGV4dF9HT0xEXzI4XCIsXCJCT05EXCI6XCJUZXh0X0JPTkRfYmVcIixcIlBST01cIjpcIlRleHRfUFJPTV82NVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIlRvb2x0aXBEZWNvcmF0b3JfYmFzZV9jOVwiLFwiYmFzZV9fdGhlbWUtZGVmYXVsdFwiOlwiVG9vbHRpcERlY29yYXRvcl9iYXNlX190aGVtZS1kZWZhdWx0XzZkXCIsXCJkZWNvcmF0b3JcIjpcIlRvb2x0aXBEZWNvcmF0b3JfZGVjb3JhdG9yXzNkXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiQXBwX2Jhc2VfOGFcIixcImJnXCI6XCJBcHBfYmdfYTZcIixcIm1ldGFsXCI6XCJBcHBfbWV0YWxfMzNcIixcIndhcm5pbmdJY29uXCI6XCJBcHBfd2FybmluZ0ljb25fOTNcIixcImJvZHlcIjpcIkFwcF9ib2R5X2IwXCJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2JieS9mZWF0dXJlL3Rvb2x0aXBzL0FybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXdcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZ2FtZWZhY2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2FtZWZhY2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImxpYi92ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL3Rvb2x0aXBzL0FybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInNwYWNpbmciLCJnZXRBZGFwdGl2ZUNvbnRyb2xsZXIiLCJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZXMiLCJzdGFuZGFyZE1hcmdpbnMiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdFhsTWFyZ2lucyIsIm10IiwibXRfX1hMIiwibXIiLCJtcl9fWEwiLCJtYiIsIm1iX19YTCIsIm1sIiwibWxfX1hMIiwiZGVmYXVsdExnTWFyZ2lucyIsIm10X19MRyIsIm1yX19MRyIsIm1iX19MRyIsIm1sX19MRyIsImRlZmF1bHRNZHBNYXJnaW5zIiwibXRfX01EcCIsIm1yX19NRHAiLCJtYl9fTURwIiwibWxfX01EcCIsImRlZmF1bHRNZE1hcmdpbnMiLCJtdF9fTUQiLCJtcl9fTUQiLCJtYl9fTUQiLCJtbF9fTUQiLCJkZWZhdWx0U21wTWFyZ2lucyIsIm10X19TTXAiLCJtcl9fU01wIiwibWJfX1NNcCIsIm1sX19TTXAiLCJkZWZhdWx0U21NYXJnaW5zIiwibXRfX1NNIiwibXJfX1NNIiwibWJfX1NNIiwibWxfX1NNIiwiZGVmYXVsdFhzTWFyZ2lucyIsIm10X19YUyIsIm1yX19YUyIsIm1iX19YUyIsIm1sX19YUyIsImRlZmF1bHRNYXJnaW5NYXAiLCJYTCIsIkxHIiwiTURwIiwiTUQiLCJTTXAiLCJTTSIsIlhTIiwiZGVmYXVsdE1hcmdpbnMiLCJtYXJnaW5LZXlMaXN0IiwiZ2V0TWFyZ2luQ2xhc3NOYW1lcyIsIm1hcmdpbk1hcCIsInJlZHVjZSIsImtleSIsInZhbHVlIiwiY29uY2F0IiwibWFyZ2luS2V5UHJvcGVydHlNYXAiLCJnZXRNYXJnaW5TdHlsZSIsInN0eWxlIiwicHJvcGVydHkiLCJCb3giLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm0iLCJjb2x1bW4iLCJyb3ciLCJmbGV4RGlyZWN0aW9uIiwidW5kZWZpbmVkIiwiZmxleFN0YXJ0IiwiY2VudGVyIiwiZmxleEVuZCIsInNwYWNlQmV0d2VlbiIsInNwYWNlQXJvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25TZWxmIiwid3JhcCIsImZsZXhXcmFwIiwiZ3JvdyIsInNocmluayIsImZsZXgiLCJjaGlsZHJlbiIsInJlc3RQcm9wcyIsImNvbXB1dGVkQ2xhc3NOYW1lcyIsIm1hcmdpblN0eWxlIiwiY29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJiYXNlIiwiRnJhZ21lbnQiLCJjeCIsImZvcm1hdFN0cmluZyIsIkFsaWdubWVudCIsIkZvcm1hdFRleHQiLCJiaW5kaW5nIiwidGV4dCIsImNsYXNzTWl4IiwiYWxpZ25tZW50IiwibGVmdCIsImNvbnNvbGUiLCJlcnJvciIsInNwbGl0IiwibWFwIiwidGV4dExpbmUiLCJsaW5lSWQiLCJ3b3JkSWQiLCJlbnYiLCJjcmVhdGVDb250ZXh0IiwiQlJFQUtQT0lOVFMiLCJnZXRTaXplcyIsImNsaWVudCIsImdldFNpemUiLCJpbml0aWFsV2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwiaW5pdGlhbFZhbHVlIiwiTWVkaWFDb250ZXh0IiwibWVtbyIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlQ2FsbE9uY2UiLCJQcm92aWRlciIsImNvbnRleHQiLCJzZXRWYWx1ZSIsImhhbmRsZVJlc2l6ZSIsInByZXBhcmVkV2lkdGgiLCJ2aWV3IiwicHhUb1JlbSIsInByZXBhcmVkSGVpZ2h0IiwiZW5naW5lIiwib24iLCJvZmYiLCJ2YWx1ZUFzUHJvcCIsIk1lZGlhUHJvdmlkZXIiLCJnZXRCeUhlaWdodCIsImRlZmF1bHRQcm9wcyIsImV4dHJhTGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwiZXh0cmFTbWFsbCIsImV4dHJhTGFyZ2VXaWR0aCIsImxhcmdlV2lkdGgiLCJtZWRpdW1XaWR0aCIsInNtYWxsV2lkdGgiLCJleHRyYVNtYWxsV2lkdGgiLCJleHRyYUxhcmdlSGVpZ2h0IiwibGFyZ2VIZWlnaHQiLCJtZWRpdW1IZWlnaHQiLCJzbWFsbEhlaWdodCIsImV4dHJhU21hbGxIZWlnaHQiLCJNZWRpYSIsInJlc3QiLCJicmVha3BvaW50UHJvcHMiLCJNZWRpYVF1ZXJ5Iiwid2VpZ2h0IiwiZ2V0V2lkdGhCUFdlaWdodCIsImJyZWFrcG9pbnRzIiwiZ2V0SGVpZ2h0QlBXZWlnaHQiLCJTaXplcyIsIndpZHRoQlBXZWlnaHQiLCJoZWlnaHRCUFdlaWdodCIsIk1hdGgiLCJtaW4iLCJjb2xvcnMiLCJzdGFuZGFyZENvbG9ycyIsInhsU3R5bGVNYXJnaW5zIiwibGdTdHlsZU1hcmdpbnMiLCJtZFN0eWxlTWFyZ2lucyIsInNtU3R5bGVNYXJnaW5zIiwieHNTdHlsZU1hcmdpbnMiLCJ2YXJpYW50TWFyZ2luU2l6ZU1hcCIsInZhcmlhbnRzIiwiaXNEZWZhdWx0Q29sb3IiLCJjb2xvciIsImluY2x1ZGVzIiwiZ2V0Q29sb3JTdHlsZU9yQ2xhc3NOYW1lIiwiY29sb3JDbGFzc05hbWUiLCJjb2xvclN0eWxlIiwiVGV4dCIsInZhcmlhbnQiLCJmb3JtYXQiLCJ1c2VNb3VudCIsInVzZVNraXBGcmFtZSIsIlRvb2x0aXBEZWNvcmF0b3IiLCJmb3J3YXJkUmVmIiwicmVmIiwidGhlbWUiLCJza2lwRnJhbWUiLCJiYXNlUmVmIiwidXNlUmVmIiwicnVuIiwiY3VycmVudCIsImNvbnRlbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY29udGVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlc2l6ZSIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRTaWRlUGFkZGluZ3NSZW0iLCJwYXJzZUludCIsImdldFByb3BlcnR5VmFsdWUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsInNldFJlZnMiLCJub2RlIiwiZGVjb3JhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFJvb3REZWZhdWx0Iiwicm9vdElkIiwic3ViVmlld3MiLCJnZXQiLCJjcmVhdGUiLCJpbml0aWFsaXplciIsImdldFJvb3QiLCJzdWJzY3JpYmVycyIsIk1hcCIsIndoZW5SZWFkeSIsInRoZW4iLCJkYXRhIiwiXyIsImNhbGxiYWNrSURzIiwiZm9yRWFjaCIsImNhbGxiYWNrSUQiLCJjYWxsYmFjayIsInVuc3Vic2NyaWJlIiwiaWQiLCJyZXNJZCIsInZpZXdFbnYiLCJyZW1vdmVEYXRhQ2hhbmdlZENhbGxiYWNrIiwiZGVsZXRlIiwicmVhZEJ5UGF0aCIsInBhdGgiLCJyb290IiwibW9kZWwiLCJyZXN1bHQiLCJsZW5ndGgiLCJlbGVtZW50IiwiYmluZCIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmVQYXRoIiwidHJhY2tJbkRlcHRoIiwiYWRkTW9kZWxPYnNlcnZlciIsInNldCIsImNyZWF0ZUNhbGxiYWNrIiwiYXJnc01hcCIsImZuIiwiYXJncyIsImNyZWF0ZUNhbGxiYWNrTm9BcmdzIiwiZGlzcG9zZSIsInN1YnNjcmliZXJJZCIsImNvbnN0RmFsc2UiLCJhY3Rpb24iLCJvYnNlcnZhYmxlIiwiZGF0YUxheWVyIiwiaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQiLCJtb2RlbENyZWF0b3IiLCJjb250cm9sc0NyZWF0b3IiLCJDb250ZXh0IiwiRGF0YUxheWVyUHJvdmlkZXIiLCJtb2RlIiwiZGF0YU1vZGUiLCJvcHRpb25zIiwibW9ja3MiLCJjbGVhbnVwc1JlZiIsImNyZWF0ZUNvbnRleHRWYWx1ZSIsImRhdGFMYXllckluc3RhbmNlIiwiZXh0ZXJuYWxNb2RlbCIsImdldHRlciIsIm9ic2VydmFibGVBcnJheSIsImluaXQiLCJpbml0T2JzZXJ2YWJsZSIsImJveCIsImVxdWFscyIsIm9ic2VydmFibGVPYmplY3QiLCJvYnNlcnZhYmxlUHJpbWl0aXZlcyIsIkFycmF5IiwiaXNBcnJheSIsImFjYyIsImtleXNSZWNvcmQiLCJrZXlzRW50cmllcyIsImVudHJpZXMiLCJrZXlGcm9tIiwia2V5VG8iLCJjbGVhbnVwIiwicHVzaCIsIm9ic2VydmFibGVNb2RlbCIsImFycmF5Iiwib2JqZWN0IiwicHJpbWl0aXZlcyIsImNvbnRyb2xzQXJncyIsImNvbnRyb2xzIiwic3RhcnRlZFJlZiIsImNoYW5nZU1vZGUiLCJtYWtlRW5naW5lRXZlbnQiLCJzZXRUcmFja01vdXNlT3V0c2lkZSIsIm9uUmVzaXplIiwiaW50ZXJuYWxNb3VzZSIsImRvd24iLCJ1cCIsIm1vdmUiLCJpbml0TW91c2VFdmVudHMiLCJzdGF0ZSIsImxpc3RlbmVycyIsImVuYWJsZWQiLCJpbml0aWFsaXplZCIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidXBkYXRlTGF6eVRyYWNrIiwiZG9jdW1lbnQiLCJib2R5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlRXZlbnQiLCJuYW1lIiwibGlzdGVuZXIiLCJhY3RpdmUiLCJ3aW5kb3dFdmVudCIsImV2ZW50IiwiaGFuZGxlV2luZG93RXZlbnQiLCJldmVudHMiLCJzdWJzY3JpYmVBcGkiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlT3V0c2lkZSIsImRpc2FibGVPdXRzaWRlIiwibW91c2UiLCJ1bml0IiwiZ2V0Q2xpZW50U2l6ZVJlbSIsImdldENsaWVudFNpemVQeCIsImdldE1vdXNlR2xvYmFsUG9zaXRpb24iLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uUmVtIiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvblB4IiwiZ3JhcGhpY3NRdWFsaXR5IiwiaXNMb3ciLCJnZXRHcmFwaGljc1F1YWxpdHkiLCJpc0hpZ2giLCJzZXRUcmFja01vdXNlT25TdGFnZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJnZXRUZXh0dXJlVXJsIiwiY2hpbGRJZCIsInNpemUiLCJzY2FsZSIsImdldENoaWxkVGV4dHVyZVBhdGgiLCJnZXRCZ1VybCIsImRpc3BsYXlTdGF0dXMiLCJzaG93aW5nIiwic2hvd24iLCJoaWRpbmciLCJoaWRkZW4iLCJvblRleHR1cmVGcm96ZW4iLCJvblRleHR1cmVSZWFkeSIsIm9uRG9tQnVpbHQiLCJvbkxvYWRlZCIsIm9uRGlzcGxheUNoYW5nZWQiLCJvbkZvY3VzVXBkYXRlZCIsIm9uQWRkZWQiLCJvblJlbW92ZWQiLCJvbkF0dGFjaGVkIiwib25SZXF1ZXN0UG9zaXRpb24iLCJzZW5kRXZlbnQiLCJBTExfU0lERVMiLCJhZGRQcmVsb2FkVGV4dHVyZSIsInNldElucHV0UGFkZGluZ3NSZW0iLCJwYWRkaW5ncyIsInNldEhpdEFyZWFQYWRkaW5nc1JlbSIsImdldEJyb3dzZXJUZXh0dXJlUGF0aCIsImdldFdlYkJyb3dzZXJUZXh0dXJlUGF0aCIsInRyYWNrU3ViSXRlbXMiLCJhZGREYXRhQ2hhbmdlZENhbGxiYWNrIiwiZ2V0Vmlld1NpemVSZW0iLCJnZXRWaWV3U2l6ZVB4IiwicmVzaXplVmlld1JlbSIsInJlc2l6ZVZpZXdQeCIsImdldFZpZXdHbG9iYWxQb3NpdGlvbiIsImdldFZpZXdHbG9iYWxQb3NpdGlvblJlbSIsIngiLCJyZW1Ub1B4IiwieSIsImZyZWV6ZVRleHR1cmVCZWZvcmVSZXNpemUiLCJnZXRTY2FsZSIsInB4IiwicmVtIiwic2V0QW5pbWF0ZVdpbmRvdyIsImlzRm9jdXNlZCIsInNldEV2ZW50SGFuZGxlZCIsImlzRXZlbnRIYW5kbGVkIiwiZm9yY2VUcmlnZ2VyTW91c2VNb3ZlIiwiZ2V0RGlzcGxheVN0YXR1cyIsImdldFNob3dpbmdTdGF0dXMiLCJkaXNwbGF5U3RhdHVzSXMiLCJleHRyYVNpemUiLCJzZXRFeHRyYVNpemVSZW0iLCJnZXRFeHRyYVNpemVSZW0iLCJ3aGVuVHV0b3JpYWxSZWFkeSIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwiaXNEb21CdWlsdCIsInZpZXdFdmVudFR5cGVzIiwiY2xvc2VQb3BvdmVyIiwiY2xvc2UiLCJtaW5pbWl6ZSIsImNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyIsIl9fVHlwZSIsIm51bWJlciIsImJvb2wiLCJzdHJpbmciLCJ0b1N0cmluZyIsInNlbmRWaWV3RXZlbnQiLCJ0eXBlIiwicmVzdE9wdGlvbnMiLCJoYW5kbGVWaWV3RXZlbnQiLCJhcmd1bWVudHMiLCJzdGFydCIsImlzTW91c2VFdmVudCIsIm5vb3AiLCJlbXB0eUZ1bmN0aW9uIiwiaWRlbnRpdHkiLCJhIiwiY29uc3RUcnVlIiwibG9nIiwiTWVkaWFTaXplIiwidXNlTWVkaWEiLCJhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlIiwiaXNBZGFwdGl2ZVN1ZmZpeCIsImlzQWRhcHRpdmVQcm9wTmFtZSIsImF0IiwibWVkaWFTaXplU2VxdWVuY2UiLCJFeHRyYUxhcmdlIiwiTGFyZ2UiLCJNZWRpdW0iLCJTbWFsbCIsIkV4dHJhU21hbGwiLCJoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyIsInByb3BOYW1lIiwicHJvcHMiLCJzb21lIiwic3VmZml4Iiwibm9ybWFsaXplQWRhcHRpdmVQcm9wcyIsIm1lZGlhU2l6ZSIsIm91dHB1dCIsImJhc2VQcm9wTmFtZSIsInNsaWNlIiwiam9pbiIsIm1lZGlhU2l6ZUluZGV4IiwiaW5kZXhPZiIsInJlbGV2YW50QWRhcHRpdmVTdWZmaXhlcyIsInJlbGV2YW50UHJvcGVydHlOYW1lcyIsInJlc29sdmVkUHJvcE5hbWUiLCJmaW5kIiwicmVzb2x2ZWRQcm9wVmFsdWUiLCJnZXRBZGFwdGl2ZUNvbXBvbmVudCIsIkNvbXBvbmVudCIsIm5vcm1hbGl6ZVByb3BzIiwibm9ybWFsaXplZFByb3BzIiwiQWRhcHRpdmVDb21wb25lbnQiLCJoYXNBZGFwdGl2ZVByb3BzIiwiZ2V0RHJhZnRlZEFkYXB0aXZlUHJvcHMiLCJkcmFmdFByb3BzIiwiZiIsImNhbGxlZFJlZiIsIk1lZGlhV2lkdGgiLCJNZWRpYUhlaWdodCIsImNvbnZlcnRUb01lZGlhU2l6ZSIsIm1lZGlhQ29udGV4dCIsImNvbnZlcnRUb01lZGlhV2lkdGgiLCJjb252ZXJ0VG9NZWRpYUhlaWdodCIsIm1lZGlhV2lkdGgiLCJtZWRpYUhlaWdodCIsInJlbVNjcmVlbldpZHRoIiwicmVtU2NyZWVuSGVpZ2h0IiwidXNlVW5tb3VudCIsIk5PX1JBRl9JRCIsInJhZklkUmVmIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhciIsImlzUnVubmluZyIsInN0ciIsIm1hcHBpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJTdHJpbmciLCJmb3JtYXRQcmludGYiLCJwYWQiLCJzbmFrZVRvQ2FtZWwiLCJ0b1VwcGVyQ2FzZSIsIm5vcm1hbGl6ZVJlc291cmNlIiwidXBDYXNlRmlyc3RDaGFyIiwiY29udmVydE5ic3AiLCJjb252ZXJ0WnduYnNwIiwiYWRkU2VwYXJhdG9yVG9SaWdodCIsIml0ZW0iLCJpbmRleCIsImxhc3QiLCJwb3AiLCJhZGRTZXBhcmF0b3JUb0xlZnQiLCJzcGxpdEFuZEZvcm1hdCIsInN0cmluZ1RvU3BsaXQiLCJzZXBhcmF0b3IiLCJzcGxpdEV1cm9wZWFuIiwic3BsaXRSZXN1bHQiLCJzcGxpdFJlZ2V4Iiwic3RyaW5nV2l0aE5ic3AiLCJ3b3JkIiwic3BsaXRDaGluZXNlIiwibGF0aW5JbmplY3Rpb25zIiwiYnJhY2tldHNBbmRRdW90ZXMiLCJwdW5jdHVhdGlvbk1hcmtzIiwibmVpZ2hib3JpbmdIaWVyb2dseXBocyIsIm1haW5SZWdleCIsIlJlZ0V4cCIsInNvdXJjZSIsInN0cmluZ3NUb1NwbGl0IiwiQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyIsInNwbGl0V29yZHMiLCJsYW5ndWFnZSIsIlIiLCJzdHJpbmdzIiwic2V0dGluZ3MiLCJMQU5HVUFHRV9DT0RFIiwidG9Mb3dlckNhc2UiLCJzdWJTdHJpbmciLCJSZWFjdERPTSIsIkFwcCIsIk1vZGVsUHJvdmlkZXIiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImJnIiwibWV0YWwiLCJ3YXJuaW5nSWNvbiIsImFybW9yeV9zaG9wIiwic2hvcEJ1eVZpZXciLCJ0b29sdGlwIiwiYnV5Tm90QXZhaWxhYmxlIiwiY29tcHV0ZXMiLCJ1c2VNb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=
