const COLORS = ["#f5f7ff", "#c084fc", "#7aa2ff"]

const generateSpaceLayer = (size, selector, duration) => {
    const layer = [];
    const totalStars = 20;
    for(let i=0; i < totalStars; i++){
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y - 100}vh 0 ${color} `);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
}
generateSpaceLayer("2px", ".space-1", "17s");
generateSpaceLayer("4px", ".space-2", "27s");
generateSpaceLayer("6px", ".space-3", "37s");