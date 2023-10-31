export const berekenMaximaleHypotheek = (jaarinkomen, partnerInkomen, rentevastePeriode, heeftStudieschuld) => {
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
  