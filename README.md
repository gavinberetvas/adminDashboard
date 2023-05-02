# adminDashboard
Odin Project Administrator Dashboard using CSS Grid and Flexbox



cards {
    grid-template-rows: 2fr;
    padding: 3rem;
    background-color: aqua;
    grid-row: 1/2;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
}

.card {
    border-radius: 18px;
    background-color: aliceblue;
    padding: 3rem;
    width: fill; 
    height: fill;
    border-left: 10px gold solid;
}

