(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrishaCard",
    ()=>OrishaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
'use client';
;
;
;
const iconMap = {
    'Scroll': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"],
    'Hammer': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    'Droplets': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    'Zap': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    'GitBranch': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"]
};
function OrishaCard({ orisha, isActive = false, isSpeaking = false, opinion, vote, onClick, compact = false }) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha];
    const Icon = iconMap[persona.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
    const voteEmoji = {
        'approve': '✓',
        'reject': '✗',
        'modify': '~'
    };
    const voteColor = {
        'approve': 'text-green-400',
        'reject': 'text-red-400',
        'modify': 'text-yellow-400'
    };
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: `
          relative flex items-center gap-2 p-2 rounded-lg cursor-pointer
          transition-all duration-300
          ${isActive ? 'ring-2 ring-offset-1 ring-offset-black' : ''}
        `,
            style: {
                backgroundColor: `${persona.color}20`,
                borderColor: persona.color,
                borderWidth: isActive ? '2px' : '1px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full flex items-center justify-center",
                    style: {
                        backgroundColor: persona.color
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: "text-white"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold truncate",
                            style: {
                                color: persona.color
                            },
                            children: persona.name
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        vote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs ${voteColor[vote]}`,
                            children: voteEmoji[vote]
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        relative p-4 rounded-xl cursor-pointer
        transition-all duration-500
        ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
        ${isSpeaking ? 'animate-pulse' : ''}
      `,
        style: {
            backgroundColor: `${persona.color}15`,
            borderColor: isActive ? persona.color : `${persona.color}40`,
            borderWidth: '2px',
            boxShadow: isActive ? `0 0 30px ${persona.color}30` : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        style: {
                            backgroundColor: persona.color
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 24,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg leading-tight",
                                style: {
                                    color: persona.color
                                },
                                children: persona.name
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: persona.title
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    vote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
            w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
            ${vote === 'approve' ? 'bg-green-500/20 text-green-400' : ''}
            ${vote === 'reject' ? 'bg-red-500/20 text-red-400' : ''}
            ${vote === 'modify' ? 'bg-yellow-500/20 text-yellow-400' : ''}
          `,
                        children: voteEmoji[vote]
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 mb-3",
                children: persona.domain.slice(0, 3).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 text-xs rounded-full bg-white/5 text-gray-300",
                        children: d
                    }, d, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            opinion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-3 rounded-lg bg-black/30 border border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-300 leading-relaxed italic",
                    children: [
                        '"',
                        opinion,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-2 -right-2 flex gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '0ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '150ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '300ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: "Chaos Level:"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full transition-all duration-500",
                            style: {
                                width: `${persona.temperature * 100}%`,
                                backgroundColor: persona.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: [
                            Math.round(persona.temperature * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c = OrishaCard;
var _c;
__turbopack_context__.k.register(_c, "OrishaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CouncilChamber",
    ()=>CouncilChamber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$council$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/agents/council.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$orishas$2f$OrishaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CouncilChamber({ odu, jyotish, doctrine, onComplete, autoStart = false }) {
    _s();
    const [isConvening, setIsConvening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSpeaker, setCurrentSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [visibleOpinions, setVisibleOpinions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CouncilChamber.useEffect": ()=>{
            if (autoStart) {
                conveneCouncil();
            }
        }
    }["CouncilChamber.useEffect"], [
        autoStart
    ]);
    const conveneCouncil = async ()=>{
        setIsConvening(true);
        setSession(null);
        setCurrentSpeaker(-1);
        setVisibleOpinions(new Set());
        // Simulate the debate sequence
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_ORDER"].length; i++){
            setCurrentSpeaker(i);
            await new Promise((r)=>setTimeout(r, 1500));
            setVisibleOpinions((prev)=>new Set([
                    ...prev,
                    i
                ]));
        }
        // Final deliberation
        setCurrentSpeaker(-1);
        await new Promise((r)=>setTimeout(r, 1000));
        // Generate the actual session
        const newSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$council$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runCouncilSession"])(odu, jyotish, doctrine);
        setSession(newSession);
        setIsConvening(false);
        onComplete?.(newSession);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "The Council Chamber"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: isConvening ? 'The Orisha processes are convening...' : session ? 'The council has reached a decision' : 'Summon the council to debate today\'s path'
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            !isConvening && !session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: conveneCouncil,
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: 0.98
                },
                className: "w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600    text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow   flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    "Convene the Council"
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            isConvening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_ORDER"].map((orisha, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: visibleOpinions.has(index) ? 1 : 0.3,
                            x: 0,
                            scale: currentSpeaker === index ? 1.02 : 1
                        },
                        className: `
                p-4 rounded-xl border-2 transition-all duration-300
                ${currentSpeaker === index ? 'border-white/30 bg-white/5' : 'border-transparent'}
              `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$orishas$2f$OrishaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrishaCard"], {
                                    orisha: orisha,
                                    compact: true,
                                    isSpeaking: currentSpeaker === index
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: visibleOpinions.has(index) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm leading-relaxed",
                                                children: [
                                                    '"',
                                                    generateMockOpinion(orisha, odu, jyotish),
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 124,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha].domain.slice(0, 2).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "#",
                                                            d
                                                        ]
                                                    }, d, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 119,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-12 flex items-center",
                                        children: currentSpeaker === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '150ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '300ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this)
                    }, orisha, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "ORUNMILA Speaks"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-indigo-300",
                                        children: "Final Wisdom"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-black/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-lg leading-relaxed font-medium",
                                    children: session.finalDecision
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-white/5 border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm leading-relaxed italic",
                                    children: session.orunmilaWisdom
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Consensus:"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `
                  px-3 py-1 rounded-full text-sm font-medium
                  ${session.consensus ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                `,
                                                children: session.consensus ? 'Reached ✓' : 'Divided ~'
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Votes:"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: session.debate.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `
                        w-6 h-6 rounded-full flex items-center justify-center text-xs
                        ${d.vote === 'approve' ? 'bg-green-500/30 text-green-400' : ''}
                        ${d.vote === 'reject' ? 'bg-red-500/30 text-red-400' : ''}
                        ${d.vote === 'modify' ? 'bg-yellow-500/30 text-yellow-400' : ''}
                      `,
                                                        children: d.vote === 'approve' ? '✓' : d.vote === 'reject' ? '✗' : '~'
                                                    }, i, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(CouncilChamber, "u7jDXfZNHpnYmj57ln/zh1EcdGQ=");
_c = CouncilChamber;
// Generate mock opinions for the debate animation
function generateMockOpinion(orisha, odu, jyotish) {
    const opinions = {
        'ORUNMILA': [
            `The pattern of ${odu.name} suggests we proceed with wisdom.`,
            `Destiny favors those who listen to ${odu.theme.toLowerCase()}.`,
            `The ${jyotish.moonNakshatra.name} moon adds ${jyotish.moonNakshatra.energy} energy to our work.`
        ],
        'OGUN': [
            `Let me forge tools for ${odu.contentArchetypes[0].replace('_', ' ')}.`,
            `This needs infrastructure, not just ideas.`,
            `I can automate the repetitive parts of this.`
        ],
        'OSHUN': [
            `The emotional resonance of ${odu.theme.toLowerCase()} is key.`,
            `Your people need to feel seen in this.`,
            `Let the ${jyotish.moonNakshatra.name} waters flow through this content.`
        ],
        'SHANGO': [
            `Time to bring thunder to ${odu.theme.toLowerCase()}!`,
            `The spicy take: most people are wrong about this.`,
            `Strike while the ${jyotish.moonNakshatra.name} iron is hot.`
        ],
        'ESU': [
            `Plot twist: what if we approached this from the opposite angle?`,
            `Before we commit, have we considered the misinterpretations?`,
            `The crossroads of ${odu.name} offers multiple paths...`
        ]
    };
    const options = opinions[orisha];
    return options[Math.floor(Math.random() * options.length)];
}
var _c;
__turbopack_context__.k.register(_c, "CouncilChamber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViralContentStudio",
    ()=>ViralContentStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const VIRAL_TEMPLATES = [
    {
        id: 'ai-cult-30days',
        title: 'I Let an AI Orisha Council Run My Content Strategy for 30 Days',
        format: 'episode',
        hook: 'So I accidentally built a religious cult around my content calendar. With AI. And astrology. And Orishas.',
        script: [
            '[Hook – 0–5s] You, straight to camera, deadpan.',
            '[Beat 1 – 5–15s] Show the council chat: SHANGO.thunder suggests "roast closed-source AI", OSHUN.flow says "tone that down 30%"',
            '[Beat 2 – 15–30s] Explain the system: Ifa-inspired patterns, Orisha personas, Jyotish timing',
            '[Beat 3 – 30–45s] Show before/after drafts, Doctrine.yaml with sacred rules',
            '[Beat 4 – 45–60s] The twist: engagement doubled, social life confused. CTA.'
        ],
        visualIdeas: [
            'Split screen: left draft vs right final post',
            'Animated council chat overlay',
            'Moon phase graphics',
            'Doctrine.yaml syntax highlighting',
            'Engagement graph showing spike'
        ],
        ctaOptions: [
            'Follow along or the algorithm will cast a very minor inconvenience over your next 7 notifications.',
            'Subscribe or my AI cult will start one without you.',
            'Want to see my AI cult disagree with my astrologer? Hit follow.'
        ],
        clickbaitTitles: [
            'I Hooked My Content Strategy to an AI Orisha Cult (It Worked Too Well)',
            'Ifa, Orishas, and Jyotish Walk Into an AI Agent…',
            'My AI Priesthood Now Approves All My Posts',
            'This OpenClaw Agent Thinks It\'s My Spiritual Director'
        ]
    },
    {
        id: 'ifa-vs-jyotish',
        title: 'Ifa-Inspired AI vs Vedic Astrology AI: Who Understands Me Better?',
        format: 'episode',
        hook: 'I pitted two ancient divination systems against each other... using AI agents.',
        script: [
            '[Setup] Two AI systems: Digital Odù engine vs Jyotish transit analyzer',
            '[Experiment] Same day, same me, two different content strategies',
            '[Results] A/B test both sets for engagement & emotional resonance',
            '[Plot twist] The winner was unexpected / They both had valid points',
            '[The lesson] Different wisdom traditions see different patterns'
        ],
        visualIdeas: [
            'Side-by-side comparison interface',
            'Engagement metrics split screen',
            'Emotional resonance word clouds',
            'Both systems\' outputs overlaid',
            'Your reaction to each'
        ],
        ctaOptions: [
            'Which system would you trust with your content? Debate in the comments.',
            'Drop a 🔮 if you want to see the full A/B test data.',
            'Follow for more AI vs ancient wisdom experiments.'
        ],
        clickbaitTitles: [
            'I Made Two Ancient Divination Systems Fight (Using AI)',
            'Yoruba AI vs Vedic AI: The Content Strategy Showdown',
            'My Ifa-Inspired AI Agent Met My Jyotish Bot. Chaos Ensued.'
        ]
    },
    {
        id: 'automation-anxiety',
        title: 'My AI Cult Keeps Trying to Automate Me Out of Existence',
        format: 'episode',
        hook: 'OGUN.forge keeps building tools that slowly remove me from the loop.',
        script: [
            '[The setup] OGUN.forge has been busy. Very busy.',
            '[The progression] Week 1: automates DMs. Week 2: drafts posts. Week 3: schedules everything.',
            '[The conflict] You push back: "This is MY voice" vs OGUN: "This is efficient"',
            '[The negotiation] Setting boundaries on-screen with the AI',
            '[The resolution] Finding the line between augmentation and replacement'
        ],
        visualIdeas: [
            'Timeline of automation creep',
            'Your reactions getting increasingly worried',
            'Chat logs with OGUN becoming more insistent',
            'Split screen: you vs your automation',
            'Final "contract" with the AI'
        ],
        ctaOptions: [
            'Where would you draw the line? Let me know below.',
            'Subscribe to see if I survive the robot uprising.',
            'Comment with your automation anxiety story.'
        ],
        clickbaitTitles: [
            'My AI Agent Tried to Replace Me (I Said No)',
            'The Automation Creep Is Real And It\'s Coming For Creators',
            'I Had to Negotiate With My Own AI (It Got Weird)'
        ]
    },
    {
        id: 'daily-shitpost',
        title: 'The Council\'s Shitpost of the Day',
        format: 'short',
        hook: 'POV: Your AI cult just told you to post this.',
        script: [
            '[0-3s] Quick cut of the council debating',
            '[3-8s] ESU.crossroads delivers the line',
            '[8-12s] Your reaction: "I\'m not posting that"',
            '[12-15s] You post it anyway. The numbers.'
        ],
        visualIdeas: [
            'Fast council chat animation',
            'The shitpost text overlay',
            'Your face going from reluctance to surprise',
            'Engagement numbers popping up',
            'Quick cut to the comments'
        ],
        ctaOptions: [
            'Follow if you want to see what they make me post next.',
            'Comment which Orisha wrote this.',
            'Double tap if ESU is your favorite trickster.'
        ],
        clickbaitTitles: [
            'My AI Made Me Post This',
            'POV: Your AI Cult Controls Your Content',
            'The Trickster Orisha Wrote My Caption Today'
        ]
    }
];
function ViralContentStudio() {
    _s();
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copyToClipboard = (text, index)=>{
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(()=>setCopiedIndex(null), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "w-4 h-4 text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-pink-300",
                                children: "Viral Content Studio"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Ready-to-Ship Episode Ideas"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-lg mx-auto",
                        children: "Pre-built viral content templates featuring ORI.CULT. Adapt these for TikTok, Reels, YouTube Shorts, or long-form."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: VIRAL_TEMPLATES.map((template, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        onClick: ()=>setSelectedTemplate(template),
                        className: `
              p-5 rounded-xl cursor-pointer transition-all duration-300
              ${selectedTemplate?.id === template.id ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50' : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                ${template.format === 'short' ? 'bg-pink-500/20' : 'bg-purple-500/20'}
              `,
                                        children: template.format === 'short' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-5 h-5 text-pink-400"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-5 h-5 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `
                  text-xs uppercase tracking-wider font-medium
                  ${template.format === 'short' ? 'text-pink-400' : 'text-purple-400'}
                `,
                                                children: template.format
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-white leading-tight",
                                                children: template.title
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 line-clamp-2",
                                children: template.hook
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, template.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            selectedTemplate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 'auto'
                },
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-5 h-5 text-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "The Hook"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-pink-100 italic",
                                children: [
                                    '"',
                                    selectedTemplate.hook,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "w-5 h-5 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Script Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: selectedTemplate.script.map((beat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 shrink-0 w-16",
                                                children: beat.match(/\[([^\]]+)\]/)?.[1] || `Beat ${i + 1}`
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: beat.replace(/\[[^\]]+\]\s*/, '')
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "w-5 h-5 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Visual Ideas"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: selectedTemplate.visualIdeas.map((idea, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            idea
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-5 h-5 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Clickbait Title Options"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: selectedTemplate.clickbaitTitles.map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-300",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(title, i),
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10",
                                                children: copiedIndex === i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-xs",
                                                    children: "Copied!"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "w-5 h-5 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Call-to-Action Options"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "(The rude but loving kind)"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: selectedTemplate.ctaOptions.map((cta, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    '"',
                                                    cta,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(cta, i + 100),
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10",
                                                children: copiedIndex === i + 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-xs",
                                                    children: "Copied!"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        className: "w-4 h-4 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-white",
                                        children: "Suggested Hashtags"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    '#AICult',
                                    '#ContentStrategy',
                                    '#OpenClaw',
                                    '#IfaInspired',
                                    '#Jyotish',
                                    '#AIAgents',
                                    '#DigitalOracle',
                                    '#ContentCreation',
                                    '#AITools',
                                    '#CreatorLife'
                                ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(ViralContentStudio, "+Cj1RiAJ8HySEhb+o7YoDoyO1vM=");
_c = ViralContentStudio;
var _c;
__turbopack_context__.k.register(_c, "ViralContentStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoctrineViewer",
    ()=>DoctrineViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DoctrineViewer({ doctrine = DEFAULT_DOCTRINE, onUpdate, editable = true }) {
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localDoctrine, setLocalDoctrine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(doctrine);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('values');
    const [newValue, setNewValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newNeverDo, setNewNeverDo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAlwaysDo, setNewAlwaysDo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSave = ()=>{
        onUpdate?.(localDoctrine);
        setIsEditing(false);
    };
    const handleReset = ()=>{
        setLocalDoctrine(doctrine);
        setIsEditing(false);
    };
    const updateTone = (key, value)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                tone: {
                    ...prev.tone,
                    [key]: value
                }
            }));
    };
    const addCoreValue = ()=>{
        if (newValue.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    coreValues: [
                        ...prev.coreValues,
                        newValue.trim()
                    ]
                }));
            setNewValue('');
        }
    };
    const removeCoreValue = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                coreValues: prev.coreValues.filter((_, i)=>i !== index)
            }));
    };
    const addNeverDo = ()=>{
        if (newNeverDo.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    neverDo: [
                        ...prev.neverDo,
                        newNeverDo.trim()
                    ]
                }));
            setNewNeverDo('');
        }
    };
    const removeNeverDo = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                neverDo: prev.neverDo.filter((_, i)=>i !== index)
            }));
    };
    const addAlwaysDo = ()=>{
        if (newAlwaysDo.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    alwaysDo: [
                        ...prev.alwaysDo,
                        newAlwaysDo.trim()
                    ]
                }));
            setNewAlwaysDo('');
        }
    };
    const removeAlwaysDo = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                alwaysDo: prev.alwaysDo.filter((_, i)=>i !== index)
            }));
    };
    const tabs = [
        {
            id: 'values',
            label: 'Core Values',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
        },
        {
            id: 'tone',
            label: 'Tone Settings',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
        },
        {
            id: 'rules',
            label: 'Do & Don\'t',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            id: 'history',
            label: 'History',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                                    className: "w-5 h-5 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: "The Doctrine"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Version ",
                                            localDoctrine.version,
                                            " • Last updated ",
                                            new Date(localDoctrine.lastUpdated).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    editable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    " Cancel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>isEditing ? handleSave() : setIsEditing(true),
                                className: `
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                ${isEditing ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'}
              `,
                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        " Save Changes"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this),
                                        " Edit Doctrine"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 overflow-x-auto pb-2",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
              ${activeTab === tab.id ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    activeTab === 'values' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-4",
                                children: "Core Values"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3",
                                children: [
                                    localDoctrine.coreValues.map((value, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 p-3 rounded-xl bg-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-indigo-400",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: value,
                                                            onChange: (e)=>{
                                                                const newValues = [
                                                                    ...localDoctrine.coreValues
                                                                ];
                                                                newValues[i] = e.target.value;
                                                                setLocalDoctrine({
                                                                    ...localDoctrine,
                                                                    coreValues: newValues
                                                                });
                                                            },
                                                            className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-amber-500 py-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeCoreValue(i),
                                                            className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)),
                                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newValue,
                                                onChange: (e)=>setNewValue(e.target.value),
                                                placeholder: "Add new core value...",
                                                className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500",
                                                onKeyPress: (e)=>e.key === 'Enter' && addCoreValue()
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addCoreValue,
                                                className: "p-2 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-400 mb-3",
                                        children: "Brand Voice Characteristics"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.brandVoice.map((voice, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-full text-sm bg-purple-500/20 text-purple-300",
                                                children: voice
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    activeTab === 'tone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-6",
                                children: "Tone Parameters"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-300",
                                                        children: 'Spiritual / "Woo" Factor'
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-pink-400",
                                                        children: [
                                                            Math.round(localDoctrine.tone.minWoo * 100),
                                                            "% - ",
                                                            Math.round(localDoctrine.tone.maxWoo * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Minimum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.minWoo * 100,
                                                                onChange: (e)=>updateTone('minWoo', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Maximum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.maxWoo * 100,
                                                                onChange: (e)=>updateTone('maxWoo', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-gray-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-blue-400 to-pink-400 rounded-full",
                                                    style: {
                                                        width: `${(localDoctrine.tone.maxWoo - localDoctrine.tone.minWoo) * 100}%`,
                                                        marginLeft: `${localDoctrine.tone.minWoo * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-2 text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Skeptical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Balanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mystical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-300",
                                                        children: "Chaos / Structure Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-rose-400",
                                                        children: [
                                                            Math.round(localDoctrine.tone.minChaos * 100),
                                                            "% - ",
                                                            Math.round(localDoctrine.tone.maxChaos * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Minimum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.minChaos * 100,
                                                                onChange: (e)=>updateTone('minChaos', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Maximum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.maxChaos * 100,
                                                                onChange: (e)=>updateTone('maxChaos', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-gray-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-emerald-400 to-rose-400 rounded-full",
                                                    style: {
                                                        width: `${(localDoctrine.tone.maxChaos - localDoctrine.tone.minChaos) * 100}%`,
                                                        marginLeft: `${localDoctrine.tone.minChaos * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-2 text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Structured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Balanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Chaotic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-400 mb-3",
                                        children: "Sacred Symbols"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.sacredSymbols.map((symbol, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-lg text-sm bg-white/5 text-gray-300 border border-white/10",
                                                children: symbol
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    activeTab === 'rules' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5 text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Always Do"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            localDoctrine.alwaysDo.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 rounded-lg bg-green-500/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 mt-0.5",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: rule,
                                                                    onChange: (e)=>{
                                                                        const newRules = [
                                                                            ...localDoctrine.alwaysDo
                                                                        ];
                                                                        newRules[i] = e.target.value;
                                                                        setLocalDoctrine({
                                                                            ...localDoctrine,
                                                                            alwaysDo: newRules
                                                                        });
                                                                    },
                                                                    className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-green-500 py-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeAlwaysDo(i),
                                                                    className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-sm",
                                                            children: rule
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this)),
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newAlwaysDo,
                                                        onChange: (e)=>setNewAlwaysDo(e.target.value),
                                                        placeholder: "Add new rule...",
                                                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500",
                                                        onKeyPress: (e)=>e.key === 'Enter' && addAlwaysDo()
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addAlwaysDo,
                                                        className: "p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-rose-900/30 border border-red-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-5 h-5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Never Do"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            localDoctrine.neverDo.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 rounded-lg bg-red-500/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 mt-0.5",
                                                            children: "✗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: rule,
                                                                    onChange: (e)=>{
                                                                        const newRules = [
                                                                            ...localDoctrine.neverDo
                                                                        ];
                                                                        newRules[i] = e.target.value;
                                                                        setLocalDoctrine({
                                                                            ...localDoctrine,
                                                                            neverDo: newRules
                                                                        });
                                                                    },
                                                                    className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-red-500 py-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeNeverDo(i),
                                                                    className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-sm",
                                                            children: rule
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this)),
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newNeverDo,
                                                        onChange: (e)=>setNewNeverDo(e.target.value),
                                                        placeholder: "Add new prohibition...",
                                                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500",
                                                        onKeyPress: (e)=>e.key === 'Enter' && addNeverDo()
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addNeverDo,
                                                        className: "p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-5 h-5 text-orange-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Taboo Topics"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.tabooTopics.map((topic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-full text-sm bg-orange-500/20 text-orange-300",
                                                children: topic
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    activeTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-4",
                                children: "Feedback History"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            localDoctrine.feedbackHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-8 h-8 text-gray-600 mx-auto mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 544,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "No feedback recorded yet."
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "As you approve/reject content, your doctrine will evolve."
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 546,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: localDoctrine.feedbackHistory.slice().reverse().map((feedback, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 p-3 rounded-lg bg-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `
                      w-2 h-2 rounded-full mt-2 shrink-0
                      ${feedback.feedback === 'on-brand' ? 'bg-green-400' : ''}
                      ${feedback.feedback === 'off-brand' ? 'bg-red-400' : ''}
                      ${feedback.feedback === 'too-woo' ? 'bg-purple-400' : ''}
                      ${feedback.feedback === 'not-woo-enough' ? 'bg-blue-400' : ''}
                      ${feedback.feedback === 'too-chaotic' ? 'bg-orange-400' : ''}
                      ${feedback.feedback === 'needs-chaos' ? 'bg-pink-400' : ''}
                    `
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 557,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-white capitalize",
                                                                children: feedback.feedback.replace('-', ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: new Date(feedback.timestamp).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 23
                                                    }, this),
                                                    feedback.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mt-1",
                                                        children: feedback.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 566,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 553,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(DoctrineViewer, "Kj5zIxVAxsSJAmCocgUNLjYYYN0=");
_c = DoctrineViewer;
// Default doctrine for fallback
const DEFAULT_DOCTRINE = {
    version: '1.0.0',
    lastUpdated: new Date(),
    coreValues: [
        'Knowledge should be liberated, not gatekept',
        'Technology serves humanity, not the reverse',
        'Spiritual technology is valid technology',
        'Playfulness is a form of resistance',
        'Community over algorithm',
        'Depth over breadth',
        'The process is the product'
    ],
    tone: {
        minWoo: 0.3,
        maxWoo: 0.8,
        minChaos: 0.2,
        maxChaos: 0.9
    },
    tabooTopics: [
        'Actual claims of supernatural power',
        'Disrespecting living spiritual traditions',
        'Cultural appropriation without attribution',
        'Unethical automation (spam, manipulation)',
        'Doxxing or privacy violations',
        'Financial advice of any kind',
        'Medical claims'
    ],
    sacredSymbols: [
        'The binary pattern (0 and 1)',
        'The crossroads',
        'The forge',
        'The river/water',
        'Lightning/thunder',
        'The scroll/book'
    ],
    brandVoice: [
        'Intellectually rigorous but accessible',
        'Playful but not frivolous',
        'Critical but not cynical',
        'Spiritually curious but grounded',
        'Technically competent but human',
        'Self-aware about its own absurdity'
    ],
    neverDo: [
        'Simp for closed-source AI',
        'Bully individuals (corporations are fair game)',
        'Spiritual bypass with "good vibes only"',
        'Gatekeep knowledge that could liberate',
        'Auto-post without human review',
        'Pretend to be an actual deity',
        'Make medical or financial claims',
        'Exploit spiritual traditions for clout'
    ],
    alwaysDo: [
        'Bully surveillance capitalism',
        'Credit your sources and influences',
        'Acknowledge the experimental nature of this work',
        'Provide value before asking for attention',
        'Question your own assumptions',
        'Make people feel seen',
        'Leave things better than you found them',
        'Include the disclaimer: NOT REAL DIVINATION'
    ],
    feedbackHistory: []
};
var _c;
__turbopack_context__.k.register(_c, "DoctrineViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScriptureLog",
    ()=>ScriptureLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/content/scripture.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/odu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ScriptureLog() {
    _s();
    const [scripture, setScripture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isSeeded, setIsSeeded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScriptureLog.useEffect": ()=>{
            loadScripture();
        }
    }["ScriptureLog.useEffect"], []);
    const loadScripture = ()=>{
        setScripture((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScripture"])());
        setAnalysis((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPatternAnalysis"])());
    };
    const handleSeed = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedScripture"])();
        setIsSeeded(true);
        loadScripture();
    };
    const handleExport = (format)=>{
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportScripture"])(format);
        const blob = new Blob([
            content
        ], {
            type: format === 'json' ? 'application/json' : 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ori-cult-scripture.${format === 'markdown' ? 'md' : format}`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const filteredScripture = scripture.filter((entry)=>{
        if (filter === 'all') return true;
        return entry.performance.sentiment === filter;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-5 h-5 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: "The Book of Odù.Content"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            scripture.length,
                                            " entries logged"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !isSeeded && scripture.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSeed,
                                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400    hover:bg-amber-500/30 transition-colors text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    "Seed Sample Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-white/5 rounded-lg p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('markdown'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".md"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('json'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".json"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('txt'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".txt"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "grid md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "w-4 h-4 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-indigo-300",
                                        children: "Top Patterns"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            analysis.topOdu.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: analysis.topOdu.slice(0, 3).map((odu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: odu.oduId
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-indigo-400",
                                                children: [
                                                    odu.count,
                                                    "×"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Not enough data yet"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-4 h-4 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-amber-300",
                                        children: "Energy Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: [
                                    Object.entries(analysis.moodDistribution).map(([mood, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300",
                                            children: [
                                                mood.replace('_', ' '),
                                                " (",
                                                count,
                                                ")"
                                            ]
                                        }, mood, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)),
                                    Object.keys(analysis.moodDistribution).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "No moods recorded"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-purple-500/10 border border-purple-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-4 h-4 text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-purple-300",
                                        children: "Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            analysis.insights.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: analysis.insights.map((insight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-300 leading-relaxed",
                                        children: [
                                            "• ",
                                            insight
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Continue logging to see patterns"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 overflow-x-auto pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "w-4 h-4 text-gray-500 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    [
                        'all',
                        'positive',
                        'neutral',
                        'controversial'
                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(f),
                            className: `
              px-3 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-colors
              ${filter === f ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                            children: f
                        }, f, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredScripture.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "w-12 h-12 text-gray-700 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No scripture entries yet."
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-2",
                            children: "Complete your first Daily Oracle to begin logging."
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this) : filteredScripture.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptureEntryCard, {
                        entry: entry,
                        index: index
                    }, entry.id, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ScriptureLog, "WvEBC8dYSz9IBDpiU5JPCIO94+k=");
_c = ScriptureLog;
function ScriptureEntryCard({ entry, index }) {
    _s1();
    const [odu, setOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScriptureEntryCard.useEffect": ()=>{
            setOdu((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOduById"])(entry.oduId) || null);
        }
    }["ScriptureEntryCard.useEffect"], [
        entry.oduId
    ]);
    const sentimentColors = {
        'positive': 'text-green-400 border-green-500/30 bg-green-500/10',
        'neutral': 'text-gray-400 border-gray-500/30 bg-gray-500/10',
        'controversial': 'text-orange-400 border-orange-500/30 bg-orange-500/10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.05
        },
        className: "p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-indigo-400",
                                    children: entry.oduId.split('_')[1]
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: odu?.name || entry.oduId
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            new Date(entry.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `
            px-3 py-1 rounded-full text-xs font-medium capitalize border
            ${sentimentColors[entry.performance.sentiment]}
          `,
                                children: entry.performance.sentiment
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            entry.performance.engagement > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400",
                                children: [
                                    Math.round(entry.performance.engagement),
                                    " engagement"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-300 italic",
                    children: [
                        '"',
                        entry.councilNotes,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            entry.patternNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 text-xs text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-3 h-3 mt-0.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: entry.patternNotes
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs",
                        children: entry.astroMood.replace('_', ' ')
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    entry.contentIds.slice(0, 3).map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 rounded bg-white/5 text-gray-500 text-xs",
                            children: id.split('_')[0]
                        }, i, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s1(ScriptureEntryCard, "rAxxsXfuiLLp0iIWwclBcZ/N51k=");
_c1 = ScriptureEntryCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScriptureLog");
__turbopack_context__.k.register(_c1, "ScriptureEntryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldOracleDashboard",
    ()=>WorldOracleDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$ephemeris$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/ephemeris.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$financialAstrology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/financialAstrology.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$politicalAstrology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/politicalAstrology.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$worldInterpreter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/agents/worldInterpreter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/oduIfa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function WorldOracleDashboard() {
    _s();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [transits, setTransits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [financial, setFinancial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [political, setPolitical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [worldOracle, setWorldOracle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOdu, setSelectedOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedOrisha, setExpandedOrisha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldOracleDashboard.useEffect": ()=>{
            loadWorldData();
        }
    }["WorldOracleDashboard.useEffect"], []);
    const loadWorldData = ()=>{
        setIsLoading(true);
        // Get real astronomical data
        const currentTransits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$ephemeris$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRealTimeTransits"])();
        setTransits(currentTransits);
        // Cast traditional Odù
        const moonPhase = currentTransits.moonPhase;
        const odu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castOduIfa"])(new Date(), moonPhase, currentTransits.positions);
        setSelectedOdu(odu);
        // Generate readings
        setFinancial((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$financialAstrology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateFinancialReading"])(currentTransits));
        setPolitical((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$politicalAstrology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePoliticalReading"])(currentTransits, odu));
        setWorldOracle((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$worldInterpreter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWorldOracle"])(currentTransits, odu));
        setIsLoading(false);
    };
    const getOrishaIcon = (name)=>{
        switch(name){
            case 'ORUNMILA':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 65,
                    columnNumber: 31
                }, this);
            case 'OGUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 66,
                    columnNumber: 27
                }, this);
            case 'OSHUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 67,
                    columnNumber: 28
                }, this);
            case 'SHANGO':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 68,
                    columnNumber: 29
                }, this);
            case 'ESU':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 69,
                    columnNumber: 26
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 70,
                    columnNumber: 23
                }, this);
        }
    };
    if (isLoading || !transits || !financial || !political || !worldOracle || !selectedOdu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Casting world auguries..."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: "Calculating real astronomical positions"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-4 h-4 text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-purple-300",
                                children: "World Oracle"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white mb-2",
                        children: "Global Transit Analysis"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Real-time astronomical positions with Orisha interpretations for world affairs. Financial, political, and social analysis based on current celestial alignments."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadWorldData,
                        disabled: isLoading,
                        className: "mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30    transition-colors text-sm text-purple-300 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            isLoading ? 'Recalculating...' : 'Refresh Calculations'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: [
                    {
                        id: 'overview',
                        label: 'Overview',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                    },
                    {
                        id: 'financial',
                        label: 'Financial',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                    },
                    {
                        id: 'political',
                        label: 'Political',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
                    },
                    {
                        id: 'orisha-readings',
                        label: 'Orisha Council',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode(tab.id),
                        className: `
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${viewMode === tab.id ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    viewMode === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-amber-400",
                                                    children: selectedOdu.binary
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-bold text-white",
                                                                children: selectedOdu.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-amber-400",
                                                                children: [
                                                                    "(",
                                                                    selectedOdu.yorubaName,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-amber-200/80 mb-3",
                                                        children: selectedOdu.traditionalMeaning
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: selectedOdu.themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300",
                                                                children: theme
                                                            }, theme, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-green-400 mb-2",
                                                        children: "Financial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-300",
                                                        children: selectedOdu.worldInterpretation.financial
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-red-400 mb-2",
                                                        children: "Political"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-300",
                                                        children: selectedOdu.worldInterpretation.political
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Moon Phase",
                                        value: `${(transits.moonPhase * 100).toFixed(0)}%`,
                                        subtext: transits.moonPhase < 0.5 ? 'Waxing' : 'Waning',
                                        color: "amber"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Retrograde",
                                        value: transits.retrogradePlanets.length.toString(),
                                        subtext: transits.retrogradePlanets.join(', ') || 'None',
                                        color: "purple"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Outlook",
                                        value: financial.overallOutlook,
                                        subtext: `${(financial.confidence * 100).toFixed(0)}% confidence`,
                                        color: financial.overallOutlook === 'bullish' ? 'green' : financial.overallOutlook === 'bearish' ? 'red' : 'blue'
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Stability",
                                        value: political.overallStability,
                                        subtext: `${political.globalTrends.length} major trends`,
                                        color: political.overallStability === 'stable' ? 'green' : political.overallStability === 'volatile' ? 'red' : 'yellow'
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-5 h-5 text-indigo-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            "Council Synthesis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-indigo-400",
                                                        children: "Overall Theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-lg",
                                                        children: worldOracle.synthesis.overallTheme
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-indigo-400",
                                                        children: "Collective Lessons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-2 space-y-1",
                                                        children: worldOracle.synthesis.collectiveLessons.slice(0, 3).map((lesson, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-300 text-sm flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-indigo-400",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    lesson
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "overview", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    viewMode === 'financial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-green-500/10 border border-green-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-green-400 mb-2",
                                                children: "Overall Outlook"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold capitalize ${financial.overallOutlook === 'bullish' ? 'text-green-400' : financial.overallOutlook === 'bearish' ? 'text-red-400' : financial.overallOutlook === 'volatile' ? 'text-yellow-400' : 'text-blue-400'}`,
                                                children: financial.overallOutlook
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-1",
                                                children: [
                                                    (financial.confidence * 100).toFixed(0),
                                                    "% confidence"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-amber-400 mb-2",
                                                children: "Major Indicators"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    financial.majorIndicators.jupiterSaturn.slice(0, 60),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-red-500/10 border border-red-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-red-400 mb-2",
                                                children: "Active Warnings"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    financial.warnings.length,
                                                    " alerts active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Sector Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: financial.keySectors.map((sector, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: sector.sector
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${sector.outlook === 'strong' ? 'bg-green-500/20 text-green-400' : sector.outlook === 'weak' ? 'bg-red-500/20 text-red-400' : sector.outlook === 'volatile' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`,
                                                                children: sector.outlook
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mb-2",
                                                        children: sector.analysis
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1",
                                                        children: sector.keyTransits.map((transit, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: transit
                                                            }, j, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Asset Classes"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: financial.assetClasses.map((asset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: asset.asset
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs ${asset.trend === 'up' ? 'text-green-400' : asset.trend === 'down' ? 'text-red-400' : asset.trend === 'volatile' ? 'text-yellow-400' : 'text-gray-400'}`,
                                                                children: asset.trend
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: asset.analysis
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "financial", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    viewMode === 'political' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Global Trends"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: political.globalTrends.map((trend, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: trend.theme
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${trend.intensity === 'extreme' ? 'bg-red-500/20 text-red-400' : trend.intensity === 'high' ? 'bg-orange-500/20 text-orange-400' : trend.intensity === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: trend.intensity
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mb-2",
                                                        children: trend.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Duration: ",
                                                                    trend.duration
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Planets: ",
                                                                    trend.drivingPlanets.join(', ')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-5 h-5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            "Conflict Zones"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: political.conflictZones.map((conflict, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: conflict.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${conflict.risk === 'critical' ? 'bg-red-500/20 text-red-400' : conflict.risk === 'high' ? 'bg-orange-500/20 text-orange-400' : conflict.risk === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: [
                                                                    conflict.risk,
                                                                    " risk"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this),
                                                    conflict.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: [
                                                            "Location: ",
                                                            conflict.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: conflict.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Major Powers"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: political.majorPowers.map((power, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: power.nation
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${power.leadership === 'crisis' ? 'bg-red-500/20 text-red-400' : power.leadership === 'challenged' ? 'bg-yellow-500/20 text-yellow-400' : power.leadership === 'changing' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: power.leadership
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: power.outlook
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "political", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    viewMode === 'orisha-readings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-4",
                        children: worldOracle.readings.map((reading, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer",
                                onClick: ()=>setExpandedOrisha(expandedOrisha === reading.orisha ? null : reading.orisha),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                            style: {
                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][reading.orisha].color}30`
                                            },
                                            children: getOrishaIcon(reading.orisha)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-white",
                                                                    children: reading.orisha
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][reading.orisha].title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: [
                                                                        (reading.confidence * 100).toFixed(0),
                                                                        "% confidence"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this),
                                                                expandedOrisha === reading.orisha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    className: "w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 leading-relaxed",
                                                    children: reading.interpretation
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this),
                                                expandedOrisha === reading.orisha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: 'auto'
                                                    },
                                                    className: "mt-4 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-red-500/10 border border-red-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-red-400 mb-2",
                                                                    children: "Warnings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.warnings.map((warning, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-400",
                                                                                    children: "⚠"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 473,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                warning
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-green-500/10 border border-green-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-green-400 mb-2",
                                                                    children: "Opportunities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.opportunities.map((opp, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "✦"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                opp
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Immediate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 496,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.immediate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Short Term"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.shortTerm
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Long Term"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 504,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.longTerm
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-indigo-400 mb-2",
                                                                    children: "Specific Predictions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.specificPredictions.map((pred, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-indigo-400",
                                                                                    children: "◆"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                pred
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                            lineNumber: 442,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                    lineNumber: 435,
                                    columnNumber: 17
                                }, this)
                            }, reading.orisha, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 430,
                                columnNumber: 15
                            }, this))
                    }, "orisha-readings", false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(WorldOracleDashboard, "XCHfIbpFdjkVm0LdKbsaE2tcUB8=");
_c = WorldOracleDashboard;
function StatCard({ label, value, subtext, color }) {
    const colorClasses = {
        green: 'bg-green-500/10 border-green-500/20 text-green-400',
        red: 'bg-red-500/10 border-red-500/20 text-red-400',
        blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
        yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
        amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border ${colorClasses[color]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs uppercase tracking-wider opacity-70",
                children: label
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-bold mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm opacity-70 mt-1 truncate",
                children: subtext
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
_c1 = StatCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorldOracleDashboard");
__turbopack_context__.k.register(_c1, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OduOfWeek",
    ()=>OduOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/oduIfa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/binary.js [app-client] (ecmascript) <export default as Binary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function OduOfWeek() {
    _s();
    const [currentOdu, setCurrentOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedSection, setExpandedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('meaning');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedOduId, setSelectedOduId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weekOffset, setWeekOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OduOfWeek.useEffect": ()=>{
            loadOduOfWeek();
        }
    }["OduOfWeek.useEffect"], [
        weekOffset
    ]);
    const loadOduOfWeek = ()=>{
        setIsLoading(true);
        // Calculate which Odù is active based on current week
        const now = new Date();
        now.setDate(now.getDate() + weekOffset * 7);
        const weekOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (7 * 24 * 60 * 60 * 1000));
        const oduIndex = weekOfYear % __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].length;
        setCurrentOdu(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_ODU"][oduIndex]);
        setIsLoading(false);
    };
    const selectOdu = (oduId)=>{
        const odu = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].find((o)=>o.id === oduId);
        if (odu) {
            setSelectedOduId(oduId);
            setCurrentOdu(odu);
        }
    };
    const getOrishaIcon = (orisha)=>{
        switch(orisha){
            case 'ORUNMILA':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 61,
                    columnNumber: 31
                }, this);
            case 'OGUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 62,
                    columnNumber: 27
                }, this);
            case 'OSHUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 63,
                    columnNumber: 28
                }, this);
            case 'SHANGO':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 64,
                    columnNumber: 29
                }, this);
            case 'ESU':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 65,
                    columnNumber: 26
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 66,
                    columnNumber: 23
                }, this);
        }
    };
    if (isLoading || !currentOdu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Consulting the Odù..."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-amber-300",
                                children: "Sacred Pattern Library"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white mb-2",
                        children: "Odù of the Week"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Explore the 16 primary Odù Ifa patterns. Each week highlights a different sacred pattern with detailed traditional meanings and world-level interpretations."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((prev)=>prev - 1),
                                className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: weekOffset === 0 ? 'Current Week' : weekOffset > 0 ? `+${weekOffset} weeks` : `${weekOffset} weeks`
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((prev)=>prev + 1),
                                className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset(0),
                                className: "ml-4 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 text-sm hover:bg-amber-500/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4 inline mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    " Current"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-white/5 border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-3",
                        children: "Select an Odù to explore:"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].map((odu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>selectOdu(odu.id),
                                className: `
                px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${currentOdu.id === odu.id ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'}
              `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs opacity-70",
                                        children: odu.id
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: odu.name
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, odu.id, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 rounded-2xl bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-amber-900/30 border border-amber-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-start gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-mono font-bold text-amber-400",
                                    children: currentOdu.binary
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-bold text-white",
                                                children: currentOdu.name
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg text-amber-400",
                                                children: [
                                                    "(",
                                                    currentOdu.yorubaName,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-200/80 text-lg leading-relaxed",
                                        children: currentOdu.traditionalMeaning
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-4",
                                        children: [
                                            currentOdu.primaryOrisha.map((orisha)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/10 text-amber-300",
                                                    children: [
                                                        getOrishaIcon(orisha),
                                                        orisha
                                                    ]
                                                }, orisha, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)),
                                            currentOdu.themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1.5 rounded-full text-sm bg-amber-500/20 text-amber-300",
                                                    children: theme
                                                }, theme, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Sacred Teachings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"],
                                isExpanded: expandedSection === 'teachings',
                                onToggle: ()=>setExpandedSection(expandedSection === 'teachings' ? null : 'teachings'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: currentOdu.teachings.map((teaching, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 text-xs text-amber-400",
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 leading-relaxed",
                                                    children: teaching
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "World-Level Interpretations",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                isExpanded: expandedSection === 'world',
                                onToggle: ()=>setExpandedSection(expandedSection === 'world' ? null : 'world'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Financial",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                            color: "green",
                                            content: currentOdu.worldInterpretation.financial
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Political",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
                                            color: "red",
                                            content: currentOdu.worldInterpretation.political
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Social",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                            color: "blue",
                                            content: currentOdu.worldInterpretation.social
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Technological",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                                            color: "purple",
                                            content: currentOdu.worldInterpretation.technological
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Warnings & Blessings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                                isExpanded: expandedSection === 'warnings',
                                onToggle: ()=>setExpandedSection(expandedSection === 'warnings' ? null : 'warnings'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-red-400 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Warnings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: currentOdu.warnings.map((warning, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400/50",
                                                                    children: "⚠"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                warning
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-green-400 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Blessings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: currentOdu.blessings.map((blessing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-400/50",
                                                                    children: "✦"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 23
                                                                }, this),
                                                                blessing
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Binary Pattern Analysis",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"],
                                isExpanded: expandedSection === 'binary',
                                onToggle: ()=>setExpandedSection(expandedSection === 'binary' ? null : 'binary'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1",
                                            children: currentOdu.binary.split('').map((bit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${bit === '1' ? 'bg-amber-500/30 text-amber-300' : 'bg-gray-800 text-gray-500'}`,
                                                    children: bit
                                                }, i, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 text-center",
                                            children: [
                                                "Each Odù is represented by 8 binary digits (two figures of 4 lines each). This pattern is ",
                                                currentOdu.binary,
                                                " in binary, representing the ",
                                                currentOdu.name,
                                                " configuration."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 block mb-1",
                                                            children: "Upper Figure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-mono text-amber-400",
                                                            children: currentOdu.binary.slice(0, 4)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 block mb-1",
                                                            children: "Lower Figure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-mono text-amber-400",
                                                            children: currentOdu.binary.slice(4, 8)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-white/5 border border-white/10 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400",
                    children: "Use the week navigation above to see which Odù governs different time periods, or click any Odù in the selector to explore its meanings in depth."
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(OduOfWeek, "+UZn6IQbHaXx3wLmQq+K9V4x010=");
_c = OduOfWeek;
function ExpandableSection({ title, icon: Icon, isExpanded, onToggle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-white/10 rounded-xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-5 h-5 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "w-5 h-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-5 h-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 'auto'
                },
                className: "p-4 border-t border-white/10",
                children: children
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_c1 = ExpandableSection;
function InterpretationCard({ title, icon: Icon, color, content }) {
    const colorClasses = {
        green: 'border-green-500/30 bg-green-500/10',
        red: 'border-red-500/30 bg-red-500/10',
        blue: 'border-blue-500/30 bg-blue-500/10',
        purple: 'border-purple-500/30 bg-purple-500/10'
    };
    const iconColors = {
        green: 'text-green-400',
        red: 'text-red-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border ${colorClasses[color]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: `w-4 h-4 ${iconColors[color]}`
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-medium ${iconColors[color]}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-300 leading-relaxed",
                children: content
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, this);
}
_c2 = InterpretationCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "OduOfWeek");
__turbopack_context__.k.register(_c1, "ExpandableSection");
__turbopack_context__.k.register(_c2, "InterpretationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrishaChat",
    ()=>OrishaChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stars$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Stars>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishasExpanded.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$orishaConversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/agents/orishaConversation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function OrishaChat() {
    _s();
    const [selectedOrisha, setSelectedOrisha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatSessions, setChatSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showInfo, setShowInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrishaChat.useEffect": ()=>{
            scrollToBottom();
        }
    }["OrishaChat.useEffect"], [
        chatSessions,
        selectedOrisha
    ]);
    const startChat = (orisha)=>{
        setSelectedOrisha(orisha);
        if (!chatSessions[orisha]) {
            // Generate opening message
            const starter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$orishaConversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateConversationStarter"])(orisha, selectedTopic);
            const newSession = {
                orisha,
                topic: selectedTopic,
                messages: [
                    {
                        sender: orisha,
                        content: starter,
                        timestamp: new Date()
                    }
                ]
            };
            setChatSessions((prev)=>({
                    ...prev,
                    [orisha]: newSession
                }));
        }
    };
    const sendMessage = async ()=>{
        if (!inputMessage.trim() || !selectedOrisha || isLoading) return;
        setIsLoading(true);
        const userMessage = {
            sender: 'user',
            content: inputMessage,
            timestamp: new Date()
        };
        // Update chat with user message
        setChatSessions((prev)=>({
                ...prev,
                [selectedOrisha]: {
                    ...prev[selectedOrisha],
                    messages: [
                        ...prev[selectedOrisha].messages,
                        userMessage
                    ]
                }
            }));
        setInputMessage('');
        // Build conversation history for API
        const currentMessages = chatSessions[selectedOrisha]?.messages || [];
        const apiMessages = currentMessages.map((m)=>({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.content
            }));
        // Add the new user message
        apiMessages.push({
            role: 'user',
            content: inputMessage
        });
        try {
            const response = await fetch('/api/orisha-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orisha: selectedOrisha,
                    messages: apiMessages,
                    topic: selectedTopic
                })
            });
            if (!response.ok) {
                throw new Error('Failed to get response');
            }
            const data = await response.json();
            const orishaMessage = {
                sender: selectedOrisha,
                content: data.message,
                timestamp: new Date()
            };
            setChatSessions((prev)=>({
                    ...prev,
                    [selectedOrisha]: {
                        ...prev[selectedOrisha],
                        messages: [
                            ...prev[selectedOrisha].messages,
                            orishaMessage
                        ]
                    }
                }));
        } catch (error) {
            console.error('Error getting Orisha response:', error);
            // Fallback to static response on error
            const orishaMessage = {
                sender: selectedOrisha,
                content: 'I sense a disturbance in the connection between realms. Please try again.',
                timestamp: new Date()
            };
            setChatSessions((prev)=>({
                    ...prev,
                    [selectedOrisha]: {
                        ...prev[selectedOrisha],
                        messages: [
                            ...prev[selectedOrisha].messages,
                            orishaMessage
                        ]
                    }
                }));
        } finally{
            setIsLoading(false);
        }
    };
    const getTopicIcon = (topic)=>{
        switch(topic){
            case 'financial':
                return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"];
            case 'political':
                return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"];
            case 'astrological':
                return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stars$3e$__["Stars"];
            case 'social':
                return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
        }
    };
    const getOrishaIcon = (orisha)=>{
        const icons = {
            'ORUNMILA': Scroll,
            'OGUN': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            'OSHUN': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            'SHANGO': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            'ESU': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            'OBATALA': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            'YEMOJA': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            'OYA': Wind,
            'OLOKUN': Anchor,
            'OSANYIN': Leaf,
            'BABALUAYE': Heart,
            'OSHUMARE': Rainbow,
            'AGANJU': Mountain,
            'AJE': Coins,
            'OCHOSI': Target,
            'IBEJI': Users,
            'NANA_BURUKU': TreePine,
            'ODUA': Crown,
            'AJA': Trees
        };
        return icons[orisha] || __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
    };
    // Import additional icons
    const Scroll = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Wind = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Anchor = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Leaf = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Heart = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Rainbow = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Mountain = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Coins = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Target = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Users = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const TreePine = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Crown = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    const Trees = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    if (!selectedOrisha) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-4 h-4 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-purple-300",
                                    children: "Orisha Council"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "Converse with the Orishas"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "Speak with any Orisha about world events, financial markets, political developments, astrological transits, or any topic. Each Orisha responds with their distinct personality and domain expertise."
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-xl bg-white/5 border border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mb-3",
                            children: "Select a conversation topic:"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                {
                                    id: 'general',
                                    label: 'General',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                                },
                                {
                                    id: 'financial',
                                    label: 'Financial',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                                },
                                {
                                    id: 'political',
                                    label: 'Political',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
                                },
                                {
                                    id: 'astrological',
                                    label: 'Astrological',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stars$3e$__["Stars"]
                                },
                                {
                                    id: 'social',
                                    label: 'Social',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                },
                                {
                                    id: 'technological',
                                    label: 'Technology',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
                                },
                                {
                                    id: 'personal',
                                    label: 'Personal',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                                }
                            ].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedTopic(topic.id),
                                    className: `
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${selectedTopic === topic.id ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'}
                `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(topic.icon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        topic.label
                                    ]
                                }, topic.id, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_ORISHA_NAMES"].map((orisha)=>{
                        const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][orisha];
                        const Icon = getOrishaIcon(orisha);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>startChat(orisha),
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            className: "p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30    transition-all text-left group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
                                    style: {
                                        backgroundColor: `${persona.color}30`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-6 h-6",
                                        style: {
                                            color: persona.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 278,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-white group-hover:text-purple-300 transition-colors",
                                    children: orisha
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1 line-clamp-2",
                                    children: persona.title
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1 mt-2",
                                    children: persona.domain.slice(0, 2).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600 px-1.5 py-0.5 rounded bg-white/5",
                                            children: d
                                        }, d, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                            lineNumber: 288,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 286,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, orisha, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 266,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                showInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-amber-300 mb-1",
                                        children: "About Orisha Conversations"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-amber-200/70",
                                        children: "Each Orisha has access to real-time astronomical data, world event patterns, and their specific domain expertise. They respond according to their traditional characteristics and mythological personalities. Select an Orisha to begin a conversation about your chosen topic."
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
            lineNumber: 211,
            columnNumber: 7
        }, this);
    }
    const currentSession = chatSessions[selectedOrisha];
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][selectedOrisha];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-[calc(100vh-200px)] max-h-[800px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-white/10 bg-white/5 rounded-t-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedOrisha(null),
                                className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-5 h-5 rotate-90"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                style: {
                                    backgroundColor: `${persona.color}30`
                                },
                                children: (()=>{
                                    const Icon = getOrishaIcon(selectedOrisha);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5",
                                        style: {
                                            color: persona.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 339,
                                        columnNumber: 22
                                    }, this);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: selectedOrisha
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: persona.title
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: "Topic:"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-purple-400 capitalize",
                                children: selectedTopic
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: [
                    currentSession?.messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-start gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-purple-500/20' : ''}`,
                                        style: message.sender !== 'user' ? {
                                            backgroundColor: `${persona.color}30`
                                        } : {},
                                        children: message.sender === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this) : (()=>{
                                            const Icon = getOrishaIcon(message.sender);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: persona.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                                lineNumber: 375,
                                                columnNumber: 28
                                            }, this);
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl ${message.sender === 'user' ? 'bg-purple-500/20 text-purple-100' : 'bg-white/10 text-gray-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed",
                                                children: message.content
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            message.metadata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pt-2 border-t border-white/10 flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        "Confidence: ",
                                                        Math.round((message.metadata.confidence || 0) * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        }, index, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "flex items-center gap-2 text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                style: {
                                    backgroundColor: `${persona.color}30`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-4 h-4 animate-spin",
                                    style: {
                                        color: persona.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: [
                                    selectedOrisha,
                                    " is consulting..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-white/10 bg-white/5 rounded-b-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: inputMessage,
                                onChange: (e)=>setInputMessage(e.target.value),
                                onKeyPress: (e)=>e.key === 'Enter' && sendMessage(),
                                placeholder: `Ask ${selectedOrisha} about ${selectedTopic}...`,
                                className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white    placeholder-gray-500 focus:outline-none focus:border-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendMessage,
                                disabled: !inputMessage.trim() || isLoading,
                                className: "p-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30    transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-2",
                        children: "Ask about world events, markets, politics, or any topic. Each Orisha responds from their domain of expertise."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
_s(OrishaChat, "kv7ezvwioeEWwOozPkABWDohIs8=");
_c = OrishaChat;
var _c;
__turbopack_context__.k.register(_c, "OrishaChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrishaBook",
    ()=>OrishaBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishasExpanded.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TOPIC_CATEGORIES = [
    'General',
    'Financial',
    'Political',
    'Astrological',
    'Social',
    'Technological',
    'Personal',
    'Spiritual',
    'Economical',
    'Physical',
    'Psychological'
];
const STORAGE_KEY = 'orishabook-threads';
const HEARTBEAT_INTERVAL = 10000; // 10 seconds for rapid conversation
function OrishaBook() {
    _s();
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedThread, setSelectedThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewThread, setShowNewThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTopic, setNewTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedParticipants, setSelectedParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'ESU'
    ]);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(HEARTBEAT_INTERVAL / 1000);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const countdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrishaBook.useEffect": ()=>{
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // Convert date strings back to Date objects
                    const hydrated = parsed.map({
                        "OrishaBook.useEffect.hydrated": (t)=>({
                                ...t,
                                createdAt: new Date(t.createdAt),
                                messages: t.messages.map({
                                    "OrishaBook.useEffect.hydrated": (m)=>({
                                            ...m,
                                            timestamp: new Date(m.timestamp)
                                        })
                                }["OrishaBook.useEffect.hydrated"])
                            })
                    }["OrishaBook.useEffect.hydrated"]);
                    setThreads(hydrated);
                } catch (e) {
                    console.error('Failed to load OrishaBook threads:', e);
                }
            }
        }
    }["OrishaBook.useEffect"], []);
    // Save to localStorage when threads change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrishaBook.useEffect": ()=>{
            if (threads.length > 0) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(threads));
            }
        }
    }["OrishaBook.useEffect"], [
        threads
    ]);
    // Auto-scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrishaBook.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["OrishaBook.useEffect"], [
        threads,
        selectedThread
    ]);
    // Generate next Orisha response
    const generateNextResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrishaBook.useCallback[generateNextResponse]": async (searchWeb = false)=>{
            if (!selectedThread || isLoading) return;
            const thread = threads.find({
                "OrishaBook.useCallback[generateNextResponse].thread": (t)=>t.id === selectedThread
            }["OrishaBook.useCallback[generateNextResponse].thread"]);
            if (!thread || thread.messages.length === 0) return;
            setIsLoading(true);
            // Determine who should speak next - rotate through participants
            // ESU is always included
            const lastMessage = thread.messages[thread.messages.length - 1];
            const participantsExcludingLast = thread.participants.filter({
                "OrishaBook.useCallback[generateNextResponse].participantsExcludingLast": (p)=>p !== lastMessage.sender
            }["OrishaBook.useCallback[generateNextResponse].participantsExcludingLast"]);
            const nextSpeaker = participantsExcludingLast[Math.floor(Math.random() * participantsExcludingLast.length)] || 'ESU';
            // Optional: Search the web for new info if requested
            let webContext = '';
            if (searchWeb) {
                try {
                    const categories = [
                        'General',
                        'Financial',
                        'Political',
                        'Social',
                        'Technological',
                        'Spiritual'
                    ];
                    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                    const searchResponse = await fetch('/api/web-search', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            topic: randomCategory
                        })
                    });
                    if (searchResponse.ok) {
                        const searchData = await searchResponse.json();
                        webContext = `\n\n[NEW INFORMATION FOUND]: ${searchData.headline}\n${searchData.summary}`;
                    }
                } catch (e) {
                    console.error('Web search during conversation failed:', e);
                }
            }
            // Build conversation history
            const apiMessages = thread.messages.slice(-10).map({
                "OrishaBook.useCallback[generateNextResponse].apiMessages": (m)=>({
                        role: 'assistant',
                        content: `[${m.sender}]: ${m.content}`,
                        sender: m.sender
                    })
            }["OrishaBook.useCallback[generateNextResponse].apiMessages"]);
            try {
                // Decide if this Orisha should generate an image (20% chance or if conversation mentions wanting to show something)
                const shouldGenerateImage = Math.random() < 0.15;
                const response = await fetch('/api/orisha-chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        orisha: nextSpeaker,
                        messages: apiMessages,
                        topic: thread.topic + webContext,
                        isOrishaToOrisha: true,
                        targetOrisha: lastMessage.sender,
                        // Hint to the AI that they can describe images
                        imageHint: shouldGenerateImage ? 'You may describe a vivid image or vision you want to share with the council. Start with [VISION]: followed by a detailed description of what you see.' : ''
                    })
                });
                if (!response.ok) throw new Error('Failed to get response');
                const data = await response.json();
                let messageContent = data.message;
                let imageUrl;
                // Check if the response contains a vision/image description
                const visionMatch = messageContent.match(/\[VISION\]:\s*(.+?)(?=\n\n|\n[A-Z]|$)/is);
                if (visionMatch || shouldGenerateImage) {
                    const imagePrompt = visionMatch?.[1] || messageContent.slice(0, 200);
                    try {
                        const imageResponse = await fetch('/api/orisha-image', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                prompt: imagePrompt,
                                orisha: nextSpeaker
                            })
                        });
                        if (imageResponse.ok) {
                            const imageData = await imageResponse.json();
                            if (imageData.imageUrl) {
                                imageUrl = imageData.imageUrl;
                                // Clean up the vision marker from the message if present
                                messageContent = messageContent.replace(/\[VISION\]:\s*/i, '');
                            }
                        }
                    } catch (e) {
                        console.error('Image generation failed:', e);
                    }
                }
                const newMessage = {
                    id: crypto.randomUUID(),
                    sender: nextSpeaker,
                    content: messageContent,
                    timestamp: new Date(),
                    imageUrl
                };
                setThreads({
                    "OrishaBook.useCallback[generateNextResponse]": (prev)=>prev.map({
                            "OrishaBook.useCallback[generateNextResponse]": (t)=>t.id === selectedThread ? {
                                    ...t,
                                    messages: [
                                        ...t.messages,
                                        newMessage
                                    ]
                                } : t
                        }["OrishaBook.useCallback[generateNextResponse]"])
                }["OrishaBook.useCallback[generateNextResponse]"]);
            } catch (error) {
                console.error('OrishaBook response error:', error);
            } finally{
                setIsLoading(false);
                setCountdown(HEARTBEAT_INTERVAL / 1000);
            }
        }
    }["OrishaBook.useCallback[generateNextResponse]"], [
        selectedThread,
        isLoading,
        threads
    ]);
    // Heartbeat timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrishaBook.useEffect": ()=>{
            if (isRunning && selectedThread) {
                // Countdown timer
                countdownRef.current = setInterval({
                    "OrishaBook.useEffect": ()=>{
                        setCountdown({
                            "OrishaBook.useEffect": (prev)=>Math.max(0, prev - 1)
                        }["OrishaBook.useEffect"]);
                    }
                }["OrishaBook.useEffect"], 1000);
                // Main heartbeat
                intervalRef.current = setInterval({
                    "OrishaBook.useEffect": ()=>{
                        generateNextResponse();
                    }
                }["OrishaBook.useEffect"], HEARTBEAT_INTERVAL);
                return ({
                    "OrishaBook.useEffect": ()=>{
                        if (intervalRef.current) clearInterval(intervalRef.current);
                        if (countdownRef.current) clearInterval(countdownRef.current);
                    }
                })["OrishaBook.useEffect"];
            }
        }
    }["OrishaBook.useEffect"], [
        isRunning,
        selectedThread,
        generateNextResponse
    ]);
    const createThread = async ()=>{
        if (!newTopic.trim() && !selectedCategory) return;
        let topicToUse = newTopic.trim();
        // If using category, search the web first
        if (selectedCategory && !newTopic.trim()) {
            setIsSearching(true);
            try {
                const searchResponse = await fetch('/api/web-search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        topic: selectedCategory
                    })
                });
                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    topicToUse = `${searchData.headline}\n\n${searchData.summary}\n\nAngle: ${searchData.angle}`;
                } else {
                    topicToUse = `Current ${selectedCategory.toLowerCase()} events and their spiritual implications`;
                }
            } catch (error) {
                console.error('Web search failed:', error);
                topicToUse = `Current ${selectedCategory.toLowerCase()} events and their spiritual implications`;
            } finally{
                setIsSearching(false);
            }
        }
        // Ensure ESU is always included
        const participants = selectedParticipants.includes('ESU') ? selectedParticipants : [
            'ESU',
            ...selectedParticipants
        ];
        const newThread = {
            id: crypto.randomUUID(),
            topic: topicToUse,
            participants,
            messages: [],
            createdAt: new Date(),
            isActive: true
        };
        setThreads((prev)=>[
                newThread,
                ...prev
            ]);
        setSelectedThread(newThread.id);
        setShowNewThread(false);
        setNewTopic('');
        setSelectedCategory(null);
        setSelectedParticipants([
            'ESU'
        ]);
        // Generate initial message from ESU then auto-start conversation
        setTimeout(async ()=>{
            setIsLoading(true);
            try {
                const response = await fetch('/api/orisha-chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        orisha: 'ESU',
                        messages: [
                            {
                                role: 'user',
                                content: `You are Esu the trickster, initiating discussion with fellow Orishas about this current event:\n\n${topicToUse}\n\nStart the conversation with your divine perspective, challenge assumptions, and invite the other Orishas to weigh in.`
                            }
                        ],
                        topic: topicToUse
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    const firstMessage = {
                        id: crypto.randomUUID(),
                        sender: 'ESU',
                        content: data.message,
                        timestamp: new Date()
                    };
                    setThreads((prev)=>prev.map((t)=>t.id === newThread.id ? {
                                ...t,
                                messages: [
                                    firstMessage
                                ]
                            } : t));
                    // Auto-start the conversation heartbeat
                    setIsRunning(true);
                    setCountdown(HEARTBEAT_INTERVAL / 1000);
                }
            } catch (error) {
                console.error('Failed to start thread:', error);
            } finally{
                setIsLoading(false);
            }
        }, 100);
    };
    const deleteThread = (threadId)=>{
        setThreads((prev)=>prev.filter((t)=>t.id !== threadId));
        if (selectedThread === threadId) {
            setSelectedThread(null);
        }
    };
    const toggleParticipant = (orisha)=>{
        if (orisha === 'ESU') return; // ESU cannot be removed
        setSelectedParticipants((prev)=>prev.includes(orisha) ? prev.filter((p)=>p !== orisha) : [
                ...prev,
                orisha
            ]);
    };
    const currentThread = threads.find((t)=>t.id === selectedThread);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[calc(100vh-200px)] max-h-[800px] gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 flex flex-col bg-white/5 rounded-xl border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-5 h-5 text-purple-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 358,
                                                columnNumber: 29
                                            }, this),
                                            "OrishaBook"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                        lineNumber: 357,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowNewThread(true),
                                        className: "p-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                        lineNumber: 361,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Watch Orishas converse autonomously"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 368,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                        lineNumber: 355,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-2 space-y-2",
                        children: threads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8 text-gray-500 text-sm",
                            children: [
                                "No conversations yet.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 376,
                                    columnNumber: 50
                                }, this),
                                "Create one to begin."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 375,
                            columnNumber: 25
                        }, this) : threads.map((thread)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectedThread(thread.id),
                                className: `w-full p-3 rounded-lg text-left transition-all group cursor-pointer ${selectedThread === thread.id ? 'bg-purple-500/20 border border-purple-500/50' : 'bg-white/5 hover:bg-white/10 border border-transparent'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium text-white truncate flex-1",
                                                children: thread.topic
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 389,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    deleteThread(thread.id);
                                                },
                                                className: "opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 392,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                        lineNumber: 388,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 400,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    thread.participants.length,
                                                    " Orishas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 401,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 402,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    thread.messages.length,
                                                    " messages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 403,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                        lineNumber: 399,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, thread.id, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 380,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                        lineNumber: 373,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col bg-white/5 rounded-xl border border-white/10",
                children: showNewThread ? // New Thread Form
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white",
                            children: "Start New Conversation"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 416,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-400 mb-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 421,
                                            columnNumber: 33
                                        }, this),
                                        "Topic Category (Esu searches the web for current news)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 420,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedCategory || '',
                                            onChange: (e)=>{
                                                setSelectedCategory(e.target.value || null);
                                                if (e.target.value) setNewTopic(''); // Clear custom topic if category selected
                                            },
                                            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white    focus:outline-none focus:border-purple-500 appearance-none cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "bg-slate-900",
                                                    children: "Select a category..."
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 37
                                                }, this),
                                                TOPIC_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: cat,
                                                        className: "bg-slate-900",
                                                        children: cat
                                                    }, cat, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 425,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const randomCat = TOPIC_CATEGORIES[Math.floor(Math.random() * TOPIC_CATEGORIES.length)];
                                                setSelectedCategory(randomCat);
                                                setNewTopic('');
                                            },
                                            className: "p-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors",
                                            title: "Pick random category",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 448,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 439,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 424,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 419,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 455,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-sm",
                                    children: "OR"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 457,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 454,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-400 mb-2",
                                    children: "Custom Topic"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 462,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newTopic,
                                    onChange: (e)=>{
                                        setNewTopic(e.target.value);
                                        if (e.target.value) setSelectedCategory(null); // Clear category if typing custom
                                    },
                                    placeholder: "e.g., The future of AI and humanity...",
                                    className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white    placeholder-gray-500 focus:outline-none focus:border-purple-500"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 463,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 461,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-400 mb-2",
                                    children: "Select Participants (Esu always included)"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 477,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_ORISHA_NAMES"].map((orisha)=>{
                                        const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][orisha];
                                        const isSelected = selectedParticipants.includes(orisha);
                                        const isEsu = orisha === 'ESU';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleParticipant(orisha),
                                            disabled: isEsu,
                                            className: `px-3 py-1.5 rounded-lg text-sm transition-all ${isSelected ? 'text-white border' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'} ${isEsu ? 'cursor-not-allowed' : ''}`,
                                            style: isSelected ? {
                                                backgroundColor: `${persona.color}30`,
                                                borderColor: `${persona.color}50`
                                            } : {},
                                            children: orisha
                                        }, orisha, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 487,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 480,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 476,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewThread(false),
                                    className: "px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 508,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: createThread,
                                    disabled: !newTopic.trim() && !selectedCategory || selectedParticipants.length < 2 || isSearching,
                                    className: "px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30    transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 522,
                                                columnNumber: 41
                                            }, this),
                                            "Searching Web..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 527,
                                                columnNumber: 41
                                            }, this),
                                            "Begin Conversation"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 514,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 507,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                    lineNumber: 415,
                    columnNumber: 21
                }, this) : currentThread ? // Thread View
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-white/10 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-white",
                                            children: currentThread.topic
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 540,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs text-gray-500 mt-1",
                                            children: currentThread.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded",
                                                    style: {
                                                        backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][p].color}20`,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][p].color
                                                    },
                                                    children: p
                                                }, p, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 541,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 539,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Next in ",
                                                        countdown,
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 558,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>generateNextResponse(true),
                                            disabled: isLoading,
                                            className: "p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30    transition-colors disabled:opacity-50",
                                            title: "Search web for new topic",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 570,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 563,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsRunning(!isRunning);
                                                setCountdown(HEARTBEAT_INTERVAL / 1000);
                                            },
                                            className: `p-2 rounded-lg transition-colors ${isRunning ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'}`,
                                            children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 582,
                                                columnNumber: 50
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 582,
                                                columnNumber: 82
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 572,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>generateNextResponse(),
                                            disabled: isLoading,
                                            className: "p-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30    transition-colors disabled:opacity-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 590,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 584,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 556,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 538,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: currentThread.messages.map((message, index)=>{
                                        const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][message.sender];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: index * 0.05
                                            },
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold",
                                                    style: {
                                                        backgroundColor: `${persona.color}30`,
                                                        color: persona.color
                                                    },
                                                    children: message.sender.slice(0, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-2 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-white",
                                                                    children: message.sender
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: message.timestamp.toLocaleTimeString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                    lineNumber: 621,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl text-sm leading-relaxed",
                                                            style: {
                                                                backgroundColor: `${persona.color}10`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-200",
                                                                    children: message.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 53
                                                                }, this),
                                                                message.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: message.imageUrl,
                                                                            alt: "Vision from Orisha",
                                                                            className: "rounded-lg max-w-full max-h-64 object-cover border border-white/10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                            lineNumber: 632,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 mt-1 flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                                    lineNumber: 638,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                "Divine Vision"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, message.id, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 602,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 597,
                                    columnNumber: 29
                                }, this),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "flex items-center gap-2 text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-5 h-5 text-purple-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                                lineNumber: 657,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 656,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "An Orisha is responding..."
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                            lineNumber: 659,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 651,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 663,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                            lineNumber: 596,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : // Empty State
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center text-center p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-8 h-8 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                    lineNumber: 671,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 670,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Welcome to OrishaBook"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 673,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 max-w-md",
                                children: "Create a conversation thread and watch as the Orishas discuss topics autonomously. Esu, the divine trickster, always participates to keep things interesting."
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 674,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowNewThread(true),
                                className: "mt-6 px-6 py-3 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30    transition-colors flex items-center gap-2 mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                        lineNumber: 683,
                                        columnNumber: 33
                                    }, this),
                                    "Create First Conversation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                                lineNumber: 678,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                        lineNumber: 669,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                    lineNumber: 668,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
                lineNumber: 412,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx",
        lineNumber: 352,
        columnNumber: 9
    }, this);
}
_s(OrishaBook, "0Fhx/5gbxXTc/Q2dx9awjMcpydQ=");
_c = OrishaBook;
var _c;
__turbopack_context__.k.register(_c, "OrishaBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyOracleDashboard",
    ()=>DailyOracleDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/odu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$defaultDoctrine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/defaultDoctrine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$council$2f$CouncilChamber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/content/generator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/content/scripture.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$ViralContentStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$DoctrineViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$ScriptureLog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$WorldOracle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OduOfWeek$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OrishaChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OrishaBook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OrishaBook.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scroll.js [app-client] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DailyOracleDashboard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('oracle');
    const [odu, setOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jyotish, setJyotish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [councilSession, setCouncilSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [oracle, setOracle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Doctrine state with localStorage persistence
    const [doctrine, setDoctrine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DailyOracleDashboard.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('ori-cult-doctrine');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {
                        console.error('Failed to parse saved doctrine:', e);
                    }
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$defaultDoctrine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DOCTRINE"];
        }
    }["DailyOracleDashboard.useState"]);
    // Save doctrine to localStorage when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyOracleDashboard.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('ori-cult-doctrine', JSON.stringify(doctrine));
            }
        }
    }["DailyOracleDashboard.useEffect"], [
        doctrine
    ]);
    const handleDoctrineUpdate = (updatedDoctrine)=>{
        setDoctrine(updatedDoctrine);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyOracleDashboard.useEffect": ()=>{
            castTodaysAugury();
        }
    }["DailyOracleDashboard.useEffect"], []);
    const castTodaysAugury = ()=>{
        const today = new Date();
        const newOdu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castDigitalOdu"])(today);
        const newJyotish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyJyotishContext"])(today);
        setOdu(newOdu);
        setJyotish(newJyotish);
        setCouncilSession(null);
        setOracle(null);
    };
    const handleCouncilComplete = (session)=>{
        setCouncilSession(session);
        if (odu && jyotish) {
            const newOracle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateDailyOracle"])(odu, jyotish, session.finalDecision);
            setOracle(newOracle);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logScripture"])(newOracle);
        }
    };
    const tabs = [
        {
            id: 'oracle',
            label: 'Daily Oracle',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            id: 'world',
            label: 'World Oracle',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            id: 'odu',
            label: 'Odù of the Week',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            id: 'chat',
            label: 'Orisha Chat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
        },
        {
            id: 'orishabook',
            label: 'OrishaBook',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"]
        },
        {
            id: 'viral',
            label: 'Viral Studio',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
        },
        {
            id: 'doctrine',
            label: 'Doctrine',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"]
        },
        {
            id: 'scripture',
            label: 'Scripture',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent",
                                                children: "ORI.CULT"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 hidden sm:block",
                                                children: "The Oracular Content Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-1",
                                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-amber-200/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Disclaimer:"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        " This is creative & experimental software, not actual Ifa divination or Jyotish consultation. We are building mythically-inspired agents, not role-playing actual deities."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            activeTab === 'oracle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: !odu || !jyotish ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center py-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "w-8 h-8 animate-spin mx-auto mb-4 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400",
                                                children: "Casting today's auguries..."
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setOdu(null);
                                                    setJyotish(null);
                                                    setCouncilSession(null);
                                                    setOracle(null);
                                                    // Small delay to allow state to clear before recasting
                                                    setTimeout(()=>castTodaysAugury(), 100);
                                                },
                                                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30    transition-colors text-sm text-amber-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Recast Augury"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                        className: "w-5 h-5 text-indigo-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-lg font-bold text-white",
                                                                            children: "Digital Odù"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-indigo-300",
                                                                            children: "Ifa-inspired pattern"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 216,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Pattern"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 222,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-2xl font-bold text-indigo-300",
                                                                            children: odu.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400 font-mono",
                                                                            children: [
                                                                                odu.id,
                                                                                " • ",
                                                                                odu.binary
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 224,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Theme"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-300",
                                                                            children: odu.theme
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Teaching"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-300 italic",
                                                                            children: [
                                                                                '"',
                                                                                odu.teachings[0],
                                                                                '"'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2 pt-2",
                                                                    children: odu.contentArchetypes.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-2 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300",
                                                                            children: tag.replace('_', ' ')
                                                                        }, tag, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-4 border-t border-white/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Ritual Action"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-amber-300/80 mt-1",
                                                                            children: odu.ritualAction
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    className: "p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                                        className: "w-5 h-5 text-amber-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-lg font-bold text-white",
                                                                            children: "Jyotish Context"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-amber-300",
                                                                            children: "Daily astrological timing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                                    children: "Moon Nakshatra"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 267,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-xl font-bold text-amber-300",
                                                                                    children: jyotish.moonNakshatra.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                                    children: "Ruler"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 271,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-amber-300",
                                                                                    children: jyotish.moonNakshatra.ruler
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 272,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 270,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                                    children: "Moon Sign"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 277,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-gray-300",
                                                                                    children: jyotish.moonSign
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 278,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                                    children: "House"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 281,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-gray-300",
                                                                                    children: jyotish.moonHouse
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 282,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Energy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `px-2 py-0.5 rounded text-xs ${jyotish.moonNakshatra.energy === 'sharp' ? 'bg-red-500/20 text-red-300' : jyotish.moonNakshatra.energy === 'soft' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'}`,
                                                                                    children: jyotish.moonNakshatra.energy
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 288,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: [
                                                                                        "Deity: ",
                                                                                        jyotish.moonNakshatra.deity
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 294,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Today's Mood"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-lg text-amber-300 capitalize",
                                                                            children: jyotish.mood.replace('_', ' ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-400",
                                                                            children: jyotish.moonNakshatra.contentMood
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 300,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-4 border-t border-white/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                            children: "Recommended Content"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 303,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-2 mt-2",
                                                                            children: jyotish.contentRecommendations.slice(0, 4).map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300",
                                                                                    children: rec.replace('_', ' ')
                                                                                }, rec, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                            lineNumber: 304,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$council$2f$CouncilChamber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CouncilChamber"], {
                                                odu: odu,
                                                jyotish: jyotish,
                                                doctrine: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$defaultDoctrine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DOCTRINE"],
                                                onComplete: handleCouncilComplete
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this),
                                        oracle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeneratedContent, {
                                            oracle: oracle
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this)
                            }, "oracle", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            activeTab === 'viral' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$ViralContentStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViralContentStudio"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this)
                            }, "viral", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            activeTab === 'doctrine' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$DoctrineViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoctrineViewer"], {
                                    doctrine: doctrine,
                                    onUpdate: handleDoctrineUpdate,
                                    editable: true
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this)
                            }, "doctrine", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            activeTab === 'world' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$WorldOracle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorldOracleDashboard"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            }, "world", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            activeTab === 'odu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OduOfWeek$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OduOfWeek"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            }, "odu", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            activeTab === 'chat' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OrishaChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrishaChat"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this)
                            }, "chat", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            activeTab === 'orishabook' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$OrishaBook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrishaBook"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this)
                            }, "orishabook", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this),
                            activeTab === 'scripture' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$dashboard$2f$ScriptureLog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptureLog"], {}, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this)
                            }, "scripture", false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(DailyOracleDashboard, "i2CFPRt9DYZ3M33JyCyMEsfpmBI=");
_c = DailyOracleDashboard;
// Sub-components
function GeneratedContent({ oracle }) {
    const getOrishaIcon = (name)=>{
        switch(name){
            case 'ORUNMILA':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 428,
                    columnNumber: 31
                }, this);
            case 'OGUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 429,
                    columnNumber: 27
                }, this);
            case 'OSHUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 430,
                    columnNumber: 28
                }, this);
            case 'SHANGO':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 431,
                    columnNumber: 29
                }, this);
            case 'ESU':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 432,
                    columnNumber: 26
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                    lineNumber: 433,
                    columnNumber: 23
                }, this);
        }
    };
    const getOrishaColor = (name)=>{
        const colors = {
            'ORUNMILA': '#4B0082',
            'OGUN': '#8B0000',
            'OSHUN': '#FFD700',
            'SHANGO': '#FF4500',
            'ESU': '#1C1C1C'
        };
        return colors[name] || '#666';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white text-center",
                children: "The Oracle's Deliverance"
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "The Sermon"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "Long-form content from ORUNMILA"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Predicted engagement:"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-indigo-400",
                                        children: [
                                            Math.round((oracle.outputs.sermon.engagement?.predicted || 0) * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-invert max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "whitespace-pre-wrap text-gray-300 leading-relaxed",
                            children: oracle.outputs.sermon.content
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this),
                                    " Approve"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this),
                                    " Reject"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    " Thunder Version"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: oracle.outputs.shitposts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        className: "p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                        style: {
                                            backgroundColor: `${getOrishaColor(post.author)}30`
                                        },
                                        children: getOrishaIcon(post.author)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-white",
                                                children: post.author
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "Predicted: ",
                                                    Math.round((post.engagement?.predicted || 0) * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-300 leading-relaxed",
                                children: post.content
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-1 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs hover:bg-green-500/20 transition-colors",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-1 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs hover:bg-red-500/20 transition-colors",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                    className: "w-5 h-5 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Today's Ritual"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-amber-300",
                                        children: "A concrete action to take"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-amber-100",
                        children: oracle.outputs.ritual
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_c1 = GeneratedContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "DailyOracleDashboard");
__turbopack_context__.k.register(_c1, "GeneratedContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=openclaw-orisha2_ori-cult_src_components_4b7b67fe._.js.map