// Initialize Mermaid JS with dark mode theme and custom color palette
document.addEventListener("DOMContentLoaded", function() {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        darkMode: true,
        background: '#1a1c23',
        mainBkg: '#1e293b',
        primaryColor: '#3f51b5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#6366f1',
        lineColor: '#94a3b8',
        secondaryColor: '#1e293b',
        tertiaryColor: '#2d3748',
        nodeBkg: '#2d3748',
        nodeTextColor: '#ffffff',
        nodeBorder: '#6366f1',
        clusterBkg: '#13151c',
        clusterBorder: '#4338ca',
        defaultLinkColor: '#94a3b8',
        titleColor: '#ffffff',
        edgeLabelBackground: '#1a1c23',
        actorBkg: '#1e293b',
        actorBorder: '#6366f1',
        actorTextColor: '#ffffff',
        actorLineColor: '#94a3b8',
        signalColor: '#ffffff',
        signalTextColor: '#ffffff',
        labelBoxBkgColor: '#1e293b',
        labelBoxBorderColor: '#6366f1',
        labelTextColor: '#ffffff',
        loopTextColor: '#ffffff',
        noteBkgColor: '#334155',
        noteTextColor: '#ffffff',
        noteBorderColor: '#475569'
      }
    });
  }
});
