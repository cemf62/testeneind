
const isForbiddenPostcode = (postcode) => {
  const verbodenPostcodes = ['9679', '9681', '9682'];
  return verbodenPostcodes.includes(postcode.slice(0, 4));
};

describe('PostcodeCheck', () => {
  it('Verboden postcodes', () => {
    const verbodenPostcodes = ['9679', '9681', '9682'];
    const results = verbodenPostcodes.map(isForbiddenPostcode);

    expect(results).to.deep.equal([true, true, true]);
  });

  it('Toegelaten postcodes', () => {
    const allowedPostcodes = ['1234', '5678', '9101'];
    const results = allowedPostcodes.map(isForbiddenPostcode);

    expect(results).to.deep.equal([false, false, false]);
  });
});

