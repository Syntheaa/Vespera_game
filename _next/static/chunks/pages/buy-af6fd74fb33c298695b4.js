(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [228], {
        4941: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = a(5893);

            function s(e) {
                e.preview;
                var t = e.children,
                    a = e.className;
                return (0, n.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(a && a),
                    children: t
                })
            }
        },
        2743: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = a(5893);

            function s(e) {
                var t = e.size,
                    a = e.children.replace(/ /g, "&nbsp;"),
                    s = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    l = void 0 !== s[t] ? s[t] : t;
                return (0, n.jsx)("div", {
                    className: " ".concat(l, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            }
        },
        363: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a(4941),
                s = a(2743),
                l = (a(5675), a(9008)),
                i = a(8098),
                r = a(5893),
                c = [{
                    text: "PINKSALE",
                    url: "https://www.pinksale.finance/",
                    image: "https://www.pinkswap.finance/pinksale.png"
                }, {
                    text: "DEXVIEW",
                    url: "https://t.me/dexview",
                    image: "https://i.ibb.co/JBRrPCy/Ki01d3av-R7-I200x200.jpg"
                }],
                o = [{
                    text: "Crypto signal-24",
                    url: "https://t.me/+KtNCXWJHtvFjZjE1",
                    image: "https://i.ibb.co/XkhMfj4/Whats-App-Image-20230402-at-44911-AM150x150.jpg"
                }, {
                    text: "CRYPTOLAB",
                    url: "https://t.me/+Pf9hADB3kCgxMDc8",
                    image: "https://i.ibb.co/2y9hh3P/Whats-App-Image20230402at53626-AM150x150200x200.jpg"
                }
                 
               
                ],
                d = function() {
                    return (0, r.jsxs)("div", {
                        className: "flex mt-10 mb-20",
                        children: [(0, r.jsx)(l.default, {
                            children: (0, r.jsxs)("title", {
                                children: ["Buy Now | ", i.yf]
                            })
                        }), (0, r.jsx)("div", {
                            className: "mr-5 md:mr-10 w-1/4 md:w-auto",
                            children: (0, r.jsx)("div", {
                                className: " bg-black border border-hellblade-grey inline-block",
                                children: (0, r.jsx)("img", {
                                    src: "https://i.ibb.co/2ccRRT2/Screenshot-441.png",
                                    className: "block",
                                    width: "200",
                                    height: "300"
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex items-center",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h2", {
                                    className: " leading-none uppercase font-proxima-nova-extra-condensed font-bold text-3xl md:text-4xl lg:text-6xl",
                                    children: "VESPERA: GAME'S SECRET"
                                }), (0, r.jsxs)("h3", {
                                    className: "text-2xl md:text-4xl font-bold uppercase font-proxima-nova-extra-condensed",
                                    children: ["Now optimised for", " ", (0, r.jsx)("span", {
                                        className: " block md:inline-block text-xbox-green",
                                        children: " A novel gaming experience set in the future"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "lg:text-2xl font-bold uppercase font-proxima-nova-extra-condensed",
                                    children: "(Included in Cryto trandin market)"
                                }), (0, r.jsx)("a", {
                                    className: " hover:opacity-50 block mt-6 md:mt-16 text-xl md:text-3xl  text-hellblade-orange font-bold uppercase font-proxima-nova-extra-condensed",
                                    href: "https://t.me/VESPERABSC",
                                    children: "JOIN NOW"
                                })]
                            })
                        })]
                    })
                },
                x = function(e) {
                    var t = e.children;
                    return (0, r.jsx)("div", {
                        className: "grid sm:grid-cols-2 gap-8 lg:gap-12",
                        children: t
                    })
                },
                m = function(e) {
                    var t = e.item;
                    return (0, r.jsxs)("a", {
                        href: t.url,
                        className: "flex hover:opacity-50",
                        children: [(0, r.jsx)("div", {
                            className: "w-1/4 sm:max-w-240-px sm:w-full sm:flex-1 mr-3",
                            children: (0, r.jsx)("div", {
                                className: "bg-black relative aspect-w-48 aspect-h-25 flex rounded-xl",
                                children: (0, r.jsx)("div", {
                                    className: "absolute inset-0",
                                    children: (0, r.jsx)("img", {
                                        src: t.image,
                                        width: "240",
                                        height: "125"
                                    })
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex items-center flex-1 ",
                            children: (0, r.jsx)("p", {
                                className: "uppercase font-proxima-nova-extra-condensed lg:text-2xl font-bold leading-none",
                                children: (0, r.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: t.text.split(",").join('</span><span class="block leading-none">')
                                    }
                                })
                            })
                        })]
                    })
                };

            function u(e) {
                return (0, r.jsx)(n.Z, {
                    preview: e,
                    className: "bg-black bg-opacity-50 md:bg-opacity-0",
                    children: (0, r.jsxs)("div", {
                        className: "wrapper relative z-20",
                        children: [(0, r.jsx)("h1", {
                            className: "-ml-2",
                            children: (0, r.jsx)(s.Z, {
                                size: "large",
                                children: "PARTNER"
                            })
                        }), (0, r.jsx)(d, {}), (0, r.jsxs)("div", {
                            className: "max-w-5xl bg-green-500-",
                            children: [(0, r.jsx)("h4", {
                                className: " mb-8 font-bold uppercase font-proxima-nova-extra-condensed text-2xl",
                                children: "Select your platform"
                            }), (0, r.jsx)(x, {
                                children: c.map((function(e) {
                                    return (0, r.jsx)(m, {
                                        item: e
                                    }, e.text)
                                }))
                            }), (0, r.jsx)("div", {
                                className: "md:grid md:grid-cols-retail",
                                children: (0, r.jsx)("h4", {
                                    className: " bundle-header mt-8 col-span-3 my-10 md:my-20 text-center font-bold uppercase font-proxima-nova-extra-condensed text-2xl",
                                    children: ""
                                })
                            }), (0, r.jsx)(x, {
                                children: o.map((function(e) {
                                    return (0, r.jsx)(m, {
                                        item: e
                                    }, e.text)
                                }))
                            })]
                        })]
                    })
                })
            }
        },
        3795: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/buy", function() {
                return a(363)
            }])
        }
    },
    function(e) {
        e.O(0, [5675, 9774, 2888, 179], (function() {
            return t = 3795, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);