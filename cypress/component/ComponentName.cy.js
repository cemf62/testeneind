const berekenMaximaleHypotheek = (jaarinkomen, partnerInkomen, rentevastePeriode, heeftStudieschuld) => {
  let gecombineerdInkomen = jaarinkomen + partnerInkomen;

  const rentepercentages = { 1: 2, 5: 3, 10: 3.5, 20: 4.5, 30: 5 };
  const rentepercentage = rentepercentages[rentevastePeriode];

  let maxTeLenenBedrag = gecombineerdInkomen * 4.25;

  if (heeftStudieschuld) {
    maxTeLenenBedrag = maxTeLenenBedrag * 0.75;
  }

  const maandelijkseRente = (maxTeLenenBedrag * (rentepercentage / 100)) / 12;
  const maandelijkseAflossing = maxTeLenenBedrag / (30 * 12);
  const totaleMaandbedrag = maandelijkseRente + maandelijkseAflossing;
  const totaalBetaaldNa30Jaar = totaleMaandbedrag * 30 * 12;

  return {
    maxTeLenenBedrag,
    maandelijkseRente,
    maandelijkseAflossing,
    totaleMaandbedrag,
    totaalBetaaldNa30Jaar,
    rentepercentage
  };
};

describe('berekenMaximaleHypotheek ', () => {
  it('Bereken lening zonder studischuld', () => {
    const result = berekenMaximaleHypotheek(100000, 50000, 5, false);
    expect(result.maxTeLenenBedrag).to.equal(637500);  
    expect(result.rentepercentage).to.equal(3);
    expect(result.maandelijkseRente).to.equal(1593.75);  
    expect(result.maandelijkseAflossing).to.equal(637500 / (30 * 12));  
    expect(result.totaalBetaaldNa30Jaar).to.equal((result.maandelijkseRente + result.maandelijkseAflossing) * 30 * 12);
  });

  it('Bereken lening met studischuld', () => {
    const result = berekenMaximaleHypotheek(100000, 50000, 5, true);
    expect(result.maxTeLenenBedrag).to.equal(478125); 
    expect(result.rentepercentage).to.equal(3);
    expect(result.maandelijkseRente).to.equal(1195.3125);  
    expect(result.maandelijkseAflossing).to.equal(478125 / (30 * 12));  
    expect(result.totaalBetaaldNa30Jaar).to.equal((result.maandelijkseRente + result.maandelijkseAflossing) * 30 * 12);
  });
});

