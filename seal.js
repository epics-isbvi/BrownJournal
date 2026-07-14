const sets = {
    left: [
        "WOLF","RAVEN","LONGSHIP","AXE","SHIELD","PINE",
        "MOUNTAIN","SUN","SERPENT","CROWN","BEAR","KNOT"
    ],
    middle: [
        "MOON","RAVEN","LONGSHIP","AXE","HELM","TREE",
        "SKULL","SHIELD","WOLF","TORCH","MOUNTAIN","CROWN"
    ],
    right: [
        "OCTOPUS","SHIP","RAVEN","WAVE","STORM","ANCHOR",
        "MOON","SHIELD","KNOT","WOLF","HELM","MOUNTAIN"
    ]
};

const pos = {
    left: 0,
    middle: 0,
    right: 0
};

function render(id) {
    const d = document.getElementById(id);
    const a = sets[id];

    d.innerHTML = "";

    for (let o = -1; o <= 1; o++) {
        const x = document.createElement("div");
        x.className = "item" + (o === 0 ? " active" : "");
        x.textContent = a[(pos[id] + o + a.length) % a.length];
        d.appendChild(x);
    }
}

function rot(id) {
    pos[id] = (pos[id] + 1) % sets[id].length;
    render(id);
}

["left", "middle", "right"].forEach(i => {
    render(i);
    document.getElementById(i).onclick = () => rot(i);
});

document.getElementById("unlock").onclick = () => {
    if (
        sets.left[pos.left] === "SERPENT" &&
        sets.middle[pos.middle] === "SKULL" &&
        sets.right[pos.right] === "OCTOPUS"
    ) {
        window.location.href = "journal.html";
    } else {
        document.getElementById("msg").textContent =
            "The seal does not yield.";
    }
};