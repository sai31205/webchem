const subjects = [
  { number: '01', icon: 'e<sup>−</sup>', title: 'Chemistry foundations', text: 'Atoms, elements, bonding & the language of matter.', lessons: '38 lessons', className: 'foundation', tags: ['atoms', 'bonding', 'moles'], units: [['Matter & its properties', 'Classify and describe the world around you.'], ['Atomic structure', 'Meet protons, neutrons, electrons and isotopes.'], ['The periodic table', 'Read its patterns like a map.'], ['Chemical bonding', 'Ionic, covalent and metallic bonds.']] },
  { number: '02', icon: 'ΔG', title: 'Physical chemistry', text: 'Energy, equilibrium, kinetics & the rules of change.', lessons: '46 lessons', className: 'physical', tags: ['energy', 'equilibrium', 'kinetics'], units: [['Energy & enthalpy', 'Track energy in chemical change.'], ['Rates of reaction', 'Understand collision theory and catalysts.'], ['Chemical equilibrium', 'Explore dynamic balance and Le Châtelier’s principle.'], ['Entropy & spontaneity', 'Find out why reactions happen.']] },
  { number: '03', icon: 'Fe', title: 'Inorganic chemistry', text: 'Metals, salts, coordination & periodic patterns.', lessons: '41 lessons', className: 'inorganic', tags: ['metals', 'salts', 'periodic'], units: [['Periodic trends', 'Use electron structure to predict behaviour.'], ['Metals & reactivity', 'Compare metals, alloys and extraction.'], ['Salts & solubility', 'Recognise ions and precipitation.'], ['Coordination chemistry', 'Discover complex ions and their colours.']] },
  { number: '04', icon: 'C', title: 'Organic chemistry', text: 'Carbon, functional groups & reaction mechanisms.', lessons: '52 lessons', className: 'organic', tags: ['carbon', 'functional groups', 'mechanisms'], units: [['The carbon toolkit', 'Draw, name and isomerise carbon compounds.'], ['Functional groups', 'Recognise the reactive features of molecules.'], ['Reaction mechanisms', 'Follow electron pairs step by step.'], ['Synthesis strategies', 'Plan a route from molecule A to molecule B.']] },
  { number: '05', icon: 'DNA', title: 'Biochemistry', text: 'Molecules of life, metabolism & enzymes.', lessons: '32 lessons', className: 'foundation', tags: ['enzymes', 'proteins', 'metabolism'], units: [['Biomolecules', 'Carbohydrates, lipids, proteins and nucleic acids.'], ['Enzymes', 'See how catalysts power living cells.'], ['Cellular energy', 'Follow ATP and respiration.'], ['Genetic chemistry', 'Connect DNA structure to function.']] },
  { number: '06', icon: 'AAS', title: 'Analytical chemistry', text: 'Measure, identify & understand real samples.', lessons: '31 lessons', className: 'physical', tags: ['titration', 'spectroscopy', 'analysis'], units: [['Reliable measurement', 'Accuracy, precision and uncertainty.'], ['Titration', 'Find an unknown concentration.'], ['Spectroscopy', 'Read chemical fingerprints in light.'], ['Separation methods', 'Chromatography and purification.']] },
  { number: '07', icon: '⚗', title: 'Environmental chemistry', text: 'Air, water, climate & chemical systems.', lessons: '26 lessons', className: 'inorganic', tags: ['climate', 'water', 'pollution'], units: [['Atmospheric chemistry', 'Trace the chemistry of air and ozone.'], ['Water systems', 'Understand quality, hardness and treatment.'], ['Climate chemistry', 'Explore carbon cycles and greenhouse gases.'], ['Pollution solutions', 'Connect chemistry with cleaner choices.']] },
  { number: '08', icon: 'n', title: 'Stoichiometry', text: 'Ratios, moles & confident chemical calculations.', lessons: '24 lessons', className: 'organic', tags: ['moles', 'equations', 'calculations'], units: [['The mole concept', 'Count particles at a chemical scale.'], ['Balancing equations', 'Conserve atoms with confidence.'], ['Mass & concentration', 'Turn formulae into useful quantities.'], ['Limiting reactants', 'Find what runs out first.']] },
  { number: '09', icon: 'Zn', title: 'Materials chemistry', text: 'Polymers, alloys, ceramics & smart materials.', lessons: '29 lessons', className: 'physical', tags: ['polymers', 'alloys', 'materials'], units: [['Structure & properties', 'Link bonding to what materials can do.'], ['Polymers', 'Build long-chain materials.'], ['Metals & alloys', 'Tune strength, conductivity and form.'], ['Smart materials', 'Meet materials that respond to change.']] },
  { number: '10', icon: 'Rx', title: 'Medicinal chemistry', text: 'How molecules become useful medicines.', lessons: '28 lessons', className: 'organic', tags: ['drugs', 'molecules', 'medicine'], units: [['Drug discovery', 'From a target to a candidate molecule.'], ['Molecular interactions', 'Understand receptors and binding.'], ['Pharmacokinetics', 'Follow a drug through the body.'], ['Case studies', 'Explore aspirin, antibiotics and beyond.']] },
  { number: '11', icon: '∿', title: 'Nuclear chemistry', text: 'Radiation, isotopes & transformations of nuclei.', lessons: '22 lessons', className: 'foundation', tags: ['isotopes', 'radiation', 'nuclear'], units: [['Nuclear structure', 'Understand isotopes and stability.'], ['Radioactive decay', 'Meet alpha, beta and gamma radiation.'], ['Nuclear energy', 'Compare fission and fusion.'], ['Uses & safety', 'Explore medicine, dating and protection.']] },
  { number: '12', icon: 'hν', title: 'Quantum chemistry', text: 'Orbitals, light & the quantum shape of matter.', lessons: '25 lessons', className: 'inorganic', tags: ['orbitals', 'electrons', 'light'], units: [['Quantum ideas', 'The rules that replace classical certainty.'], ['Orbitals & configurations', 'Place electrons in atoms.'], ['Light & spectra', 'Relate energy jumps to colour.'], ['Molecular orbitals', 'Use quantum models to explain bonding.']] }
];

const reactions = [];

function addReactionSet(type, entries, defaultConditions, keywords) {
  entries.forEach(([name, formula, conditions, detail], index) => {
    reactions.push({
      id: reactions.length + 1,
      name,
      type,
      formula,
      conditions: conditions || defaultConditions,
      detail: detail || `A ${type.toLowerCase()} example that reinforces patterns in reactants, products and conservation of atoms.`,
      keywords: `${keywords} ${name} ${formula}`.toLowerCase()
    });
  });
}

// 17 redox examples
addReactionSet('Redox', [
  ['Calcium with hydrochloric acid', 'Ca + 2HCl <b class="arrow">→</b> CaCl<sub>2</sub> + H<sub>2</sub>', null, 'Calcium is oxidised while hydrogen ions are reduced to hydrogen gas.'],
  ['Magnesium with sulfuric acid', 'Mg + H<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> MgSO<sub>4</sub> + H<sub>2</sub>', null, 'Magnesium displaces hydrogen from dilute sulfuric acid.'],
  ['Aluminium with hydrochloric acid', '2Al + 6HCl <b class="arrow">→</b> 2AlCl<sub>3</sub> + 3H<sub>2</sub>', null, 'Aluminium reacts after its protective oxide layer is disrupted.'],
  ['Zinc with sulfuric acid', 'Zn + H<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> ZnSO<sub>4</sub> + H<sub>2</sub>', null, 'Zinc forms a sulfate salt and hydrogen gas.'],
  ['Iron with hydrochloric acid', 'Fe + 2HCl <b class="arrow">→</b> FeCl<sub>2</sub> + H<sub>2</sub>', null, 'Iron(II) chloride forms as iron atoms lose electrons.'],
  ['Nickel with hydrochloric acid', 'Ni + 2HCl <b class="arrow">→</b> NiCl<sub>2</sub> + H<sub>2</sub>', null, 'Nickel is above hydrogen in the reactivity series.'],
  ['Tin with hydrochloric acid', 'Sn + 2HCl <b class="arrow">→</b> SnCl<sub>2</sub> + H<sub>2</sub>', null, 'Tin reacts slowly to form tin(II) chloride.'],
  ['Manganese with hydrochloric acid', 'Mn + 2HCl <b class="arrow">→</b> MnCl<sub>2</sub> + H<sub>2</sub>', null, 'Manganese metal transfers electrons to hydrogen ions.'],
  ['Cobalt with hydrochloric acid', 'Co + 2HCl <b class="arrow">→</b> CoCl<sub>2</sub> + H<sub>2</sub>', null, 'Cobalt produces a soluble metal chloride and hydrogen.'],
  ['Lithium with hydrochloric acid', '2Li + 2HCl <b class="arrow">→</b> 2LiCl + H<sub>2</sub>', null, 'A very reactive Group 1 metal rapidly reduces hydrogen ions.'],
  ['Sodium with hydrochloric acid', '2Na + 2HCl <b class="arrow">→</b> 2NaCl + H<sub>2</sub>', null, 'Sodium reacts vigorously; this is a theoretical equation for careful study.'],
  ['Potassium with hydrochloric acid', '2K + 2HCl <b class="arrow">→</b> 2KCl + H<sub>2</sub>', null, 'Potassium is extremely reactive and requires strict safety controls.'],
  ['Magnesium displaces silver', 'Mg + 2AgNO<sub>3</sub> <b class="arrow">→</b> Mg(NO<sub>3</sub>)<sub>2</sub> + 2Ag', ['aqueous'], 'Magnesium reduces silver ions to metallic silver.'],
  ['Iron displaces copper', 'Fe + CuSO<sub>4</sub> <b class="arrow">→</b> FeSO<sub>4</sub> + Cu', ['aqueous'], 'Iron replaces copper from a blue copper sulfate solution.'],
  ['Aluminium reduces iron oxide', '2Al + Fe<sub>2</sub>O<sub>3</sub> <b class="arrow">→</b> Al<sub>2</sub>O<sub>3</sub> + 2Fe', ['high heat'], 'The thermite reaction is strongly exothermic.'],
  ['Copper oxide reduction', 'CuO + H<sub>2</sub> <b class="arrow">→</b> Cu + H<sub>2</sub>O', ['heat'], 'Hydrogen reduces black copper(II) oxide to copper metal.'],
  ['Iron oxide reduction', 'Fe<sub>2</sub>O<sub>3</sub> + 3CO <b class="arrow">→</b> 2Fe + 3CO<sub>2</sub>', ['blast furnace'], 'Carbon monoxide reduces iron oxide during iron extraction.']
], ['dilute acid'], 'metal acid displacement oxidation reduction reactivity');

// 17 neutralisation examples
addReactionSet('Acid–base', [
  ['Hydrochloric acid + potassium hydroxide', 'HCl + KOH <b class="arrow">→</b> KCl + H<sub>2</sub>O'],
  ['Hydrochloric acid + lithium hydroxide', 'HCl + LiOH <b class="arrow">→</b> LiCl + H<sub>2</sub>O'],
  ['Nitric acid + sodium hydroxide', 'HNO<sub>3</sub> + NaOH <b class="arrow">→</b> NaNO<sub>3</sub> + H<sub>2</sub>O'],
  ['Nitric acid + potassium hydroxide', 'HNO<sub>3</sub> + KOH <b class="arrow">→</b> KNO<sub>3</sub> + H<sub>2</sub>O'],
  ['Sulfuric acid + sodium hydroxide', 'H<sub>2</sub>SO<sub>4</sub> + 2NaOH <b class="arrow">→</b> Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O'],
  ['Sulfuric acid + potassium hydroxide', 'H<sub>2</sub>SO<sub>4</sub> + 2KOH <b class="arrow">→</b> K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O'],
  ['Ethanoic acid + sodium hydroxide', 'CH<sub>3</sub>COOH + NaOH <b class="arrow">→</b> CH<sub>3</sub>COONa + H<sub>2</sub>O'],
  ['Ethanoic acid + ammonia', 'CH<sub>3</sub>COOH + NH<sub>3</sub> <b class="arrow">→</b> CH<sub>3</sub>COONH<sub>4</sub>'],
  ['Phosphoric acid + sodium hydroxide', 'H<sub>3</sub>PO<sub>4</sub> + 3NaOH <b class="arrow">→</b> Na<sub>3</sub>PO<sub>4</sub> + 3H<sub>2</sub>O'],
  ['Carbonic acid + calcium hydroxide', 'H<sub>2</sub>CO<sub>3</sub> + Ca(OH)<sub>2</sub> <b class="arrow">→</b> CaCO<sub>3</sub> + 2H<sub>2</sub>O'],
  ['Hydrobromic acid + sodium hydroxide', 'HBr + NaOH <b class="arrow">→</b> NaBr + H<sub>2</sub>O'],
  ['Hydroiodic acid + potassium hydroxide', 'HI + KOH <b class="arrow">→</b> KI + H<sub>2</sub>O'],
  ['Hydrochloric acid + calcium hydroxide', '2HCl + Ca(OH)<sub>2</sub> <b class="arrow">→</b> CaCl<sub>2</sub> + 2H<sub>2</sub>O'],
  ['Nitric acid + magnesium hydroxide', '2HNO<sub>3</sub> + Mg(OH)<sub>2</sub> <b class="arrow">→</b> Mg(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O'],
  ['Sulfuric acid + barium hydroxide', 'H<sub>2</sub>SO<sub>4</sub> + Ba(OH)<sub>2</sub> <b class="arrow">→</b> BaSO<sub>4</sub> + 2H<sub>2</sub>O'],
  ['Hydrochloric acid + copper oxide', '2HCl + CuO <b class="arrow">→</b> CuCl<sub>2</sub> + H<sub>2</sub>O'],
  ['Sulfuric acid + copper oxide', 'H<sub>2</sub>SO<sub>4</sub> + CuO <b class="arrow">→</b> CuSO<sub>4</sub> + H<sub>2</sub>O']
], ['aqueous'], 'acid base neutralisation salt water ph');

// 17 carbonate–acid examples
addReactionSet('Acid–base', [
  ['Sodium carbonate + hydrochloric acid', 'Na<sub>2</sub>CO<sub>3</sub> + 2HCl <b class="arrow">→</b> 2NaCl + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Potassium carbonate + hydrochloric acid', 'K<sub>2</sub>CO<sub>3</sub> + 2HCl <b class="arrow">→</b> 2KCl + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Magnesium carbonate + hydrochloric acid', 'MgCO<sub>3</sub> + 2HCl <b class="arrow">→</b> MgCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Zinc carbonate + hydrochloric acid', 'ZnCO<sub>3</sub> + 2HCl <b class="arrow">→</b> ZnCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Copper carbonate + sulfuric acid', 'CuCO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> CuSO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Iron carbonate + hydrochloric acid', 'FeCO<sub>3</sub> + 2HCl <b class="arrow">→</b> FeCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Lead carbonate + nitric acid', 'PbCO<sub>3</sub> + 2HNO<sub>3</sub> <b class="arrow">→</b> Pb(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Calcium carbonate + nitric acid', 'CaCO<sub>3</sub> + 2HNO<sub>3</sub> <b class="arrow">→</b> Ca(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Sodium hydrogencarbonate + hydrochloric acid', 'NaHCO<sub>3</sub> + HCl <b class="arrow">→</b> NaCl + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Potassium hydrogencarbonate + nitric acid', 'KHCO<sub>3</sub> + HNO<sub>3</sub> <b class="arrow">→</b> KNO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Magnesium carbonate + sulfuric acid', 'MgCO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> MgSO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Zinc carbonate + sulfuric acid', 'ZnCO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> ZnSO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Copper carbonate + hydrochloric acid', 'CuCO<sub>3</sub> + 2HCl <b class="arrow">→</b> CuCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Lithium carbonate + hydrochloric acid', 'Li<sub>2</sub>CO<sub>3</sub> + 2HCl <b class="arrow">→</b> 2LiCl + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Barium carbonate + hydrochloric acid', 'BaCO<sub>3</sub> + 2HCl <b class="arrow">→</b> BaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Strontium carbonate + hydrochloric acid', 'SrCO<sub>3</sub> + 2HCl <b class="arrow">→</b> SrCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>'],
  ['Ammonium carbonate + hydrochloric acid', '(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> + 2HCl <b class="arrow">→</b> 2NH<sub>4</sub>Cl + H<sub>2</sub>O + CO<sub>2</sub>']
], ['dilute acid'], 'carbonate acid carbon dioxide salt fizz');

// 17 precipitation examples
addReactionSet('Ionic', [
  ['Barium sulfate precipitation', 'BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> BaSO<sub>4</sub>↓ + 2NaCl'],
  ['Lead chloride precipitation', 'Pb(NO<sub>3</sub>)<sub>2</sub> + 2NaCl <b class="arrow">→</b> PbCl<sub>2</sub>↓ + 2NaNO<sub>3</sub>'],
  ['Calcium carbonate precipitation', 'CaCl<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> <b class="arrow">→</b> CaCO<sub>3</sub>↓ + 2NaCl'],
  ['Copper hydroxide precipitation', 'CuSO<sub>4</sub> + 2NaOH <b class="arrow">→</b> Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>'],
  ['Iron(II) hydroxide precipitation', 'FeSO<sub>4</sub> + 2NaOH <b class="arrow">→</b> Fe(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>'],
  ['Iron(III) hydroxide precipitation', 'FeCl<sub>3</sub> + 3NaOH <b class="arrow">→</b> Fe(OH)<sub>3</sub>↓ + 3NaCl'],
  ['Aluminium hydroxide precipitation', 'AlCl<sub>3</sub> + 3NaOH <b class="arrow">→</b> Al(OH)<sub>3</sub>↓ + 3NaCl'],
  ['Magnesium hydroxide precipitation', 'MgCl<sub>2</sub> + 2NaOH <b class="arrow">→</b> Mg(OH)<sub>2</sub>↓ + 2NaCl'],
  ['Zinc hydroxide precipitation', 'ZnSO<sub>4</sub> + 2NaOH <b class="arrow">→</b> Zn(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>'],
  ['Silver bromide precipitation', 'AgNO<sub>3</sub> + KBr <b class="arrow">→</b> AgBr↓ + KNO<sub>3</sub>'],
  ['Silver iodide precipitation', 'AgNO<sub>3</sub> + KI <b class="arrow">→</b> AgI↓ + KNO<sub>3</sub>'],
  ['Barium carbonate precipitation', 'BaCl<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> <b class="arrow">→</b> BaCO<sub>3</sub>↓ + 2NaCl'],
  ['Lead sulfate precipitation', 'Pb(NO<sub>3</sub>)<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> <b class="arrow">→</b> PbSO<sub>4</sub>↓ + 2NaNO<sub>3</sub>'],
  ['Calcium phosphate precipitation', '3CaCl<sub>2</sub> + 2Na<sub>3</sub>PO<sub>4</sub> <b class="arrow">→</b> Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>↓ + 6NaCl'],
  ['Copper carbonate precipitation', 'CuSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> <b class="arrow">→</b> CuCO<sub>3</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>'],
  ['Nickel hydroxide precipitation', 'NiCl<sub>2</sub> + 2NaOH <b class="arrow">→</b> Ni(OH)<sub>2</sub>↓ + 2NaCl'],
  ['Cobalt hydroxide precipitation', 'CoCl<sub>2</sub> + 2NaOH <b class="arrow">→</b> Co(OH)<sub>2</sub>↓ + 2NaCl']
], ['aqueous'], 'ionic precipitation insoluble solubility');

// 17 combustion examples
addReactionSet('Combustion', [
  ['Combustion of ethane', '2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> <b class="arrow">→</b> 4CO<sub>2</sub> + 6H<sub>2</sub>O'],
  ['Combustion of propane', 'C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> <b class="arrow">→</b> 3CO<sub>2</sub> + 4H<sub>2</sub>O'],
  ['Combustion of butane', '2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> <b class="arrow">→</b> 8CO<sub>2</sub> + 10H<sub>2</sub>O'],
  ['Combustion of pentane', 'C<sub>5</sub>H<sub>12</sub> + 8O<sub>2</sub> <b class="arrow">→</b> 5CO<sub>2</sub> + 6H<sub>2</sub>O'],
  ['Combustion of hexane', '2C<sub>6</sub>H<sub>14</sub> + 19O<sub>2</sub> <b class="arrow">→</b> 12CO<sub>2</sub> + 14H<sub>2</sub>O'],
  ['Combustion of heptane', 'C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> <b class="arrow">→</b> 7CO<sub>2</sub> + 8H<sub>2</sub>O'],
  ['Combustion of octane', '2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> <b class="arrow">→</b> 16CO<sub>2</sub> + 18H<sub>2</sub>O'],
  ['Combustion of nonane', 'C<sub>9</sub>H<sub>20</sub> + 14O<sub>2</sub> <b class="arrow">→</b> 9CO<sub>2</sub> + 10H<sub>2</sub>O'],
  ['Combustion of decane', '2C<sub>10</sub>H<sub>22</sub> + 31O<sub>2</sub> <b class="arrow">→</b> 20CO<sub>2</sub> + 22H<sub>2</sub>O'],
  ['Combustion of methanol', '2CH<sub>3</sub>OH + 3O<sub>2</sub> <b class="arrow">→</b> 2CO<sub>2</sub> + 4H<sub>2</sub>O'],
  ['Combustion of ethanol', 'C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> <b class="arrow">→</b> 2CO<sub>2</sub> + 3H<sub>2</sub>O'],
  ['Combustion of propanol', '2C<sub>3</sub>H<sub>7</sub>OH + 9O<sub>2</sub> <b class="arrow">→</b> 6CO<sub>2</sub> + 8H<sub>2</sub>O'],
  ['Combustion of butanol', 'C<sub>4</sub>H<sub>9</sub>OH + 6O<sub>2</sub> <b class="arrow">→</b> 4CO<sub>2</sub> + 5H<sub>2</sub>O'],
  ['Combustion of ethene', 'C<sub>2</sub>H<sub>4</sub> + 3O<sub>2</sub> <b class="arrow">→</b> 2CO<sub>2</sub> + 2H<sub>2</sub>O'],
  ['Combustion of propene', '2C<sub>3</sub>H<sub>6</sub> + 9O<sub>2</sub> <b class="arrow">→</b> 6CO<sub>2</sub> + 6H<sub>2</sub>O'],
  ['Combustion of acetylene', '2C<sub>2</sub>H<sub>2</sub> + 5O<sub>2</sub> <b class="arrow">→</b> 4CO<sub>2</sub> + 2H<sub>2</sub>O'],
  ['Combustion of benzene', '2C<sub>6</sub>H<sub>6</sub> + 15O<sub>2</sub> <b class="arrow">→</b> 12CO<sub>2</sub> + 6H<sub>2</sub>O']
], ['oxygen', 'heat'], 'combustion hydrocarbon alcohol fuel energy');

// 17 organic examples
addReactionSet('Organic', [
  ['Hydration of ethene', 'C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O <b class="arrow">→</b> C<sub>2</sub>H<sub>5</sub>OH', ['steam', 'H<sub>3</sub>PO<sub>4</sub> catalyst']],
  ['Oxidation of ethanol', 'CH<sub>3</sub>CH<sub>2</sub>OH + [O] <b class="arrow">→</b> CH<sub>3</sub>CHO + H<sub>2</sub>O', ['warm', 'distil']],
  ['Full oxidation of ethanol', 'CH<sub>3</sub>CH<sub>2</sub>OH + 2[O] <b class="arrow">→</b> CH<sub>3</sub>COOH + H<sub>2</sub>O', ['reflux']],
  ['Oxidation of propan-2-ol', 'CH<sub>3</sub>CHOHCH<sub>3</sub> + [O] <b class="arrow">→</b> CH<sub>3</sub>COCH<sub>3</sub> + H<sub>2</sub>O', ['acidified oxidant']],
  ['Hydrolysis of ethyl ethanoate', 'CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O <b class="arrow">⇌</b> CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH', ['acid catalyst', 'heat']],
  ['Esterification of methanol', 'CH<sub>3</sub>COOH + CH<sub>3</sub>OH <b class="arrow">⇌</b> CH<sub>3</sub>COOCH<sub>3</sub> + H<sub>2</sub>O', ['H<sub>2</sub>SO<sub>4</sub>', 'heat']],
  ['Esterification of propanol', 'CH<sub>3</sub>COOH + C<sub>3</sub>H<sub>7</sub>OH <b class="arrow">⇌</b> CH<sub>3</sub>COOC<sub>3</sub>H<sub>7</sub> + H<sub>2</sub>O', ['H<sub>2</sub>SO<sub>4</sub>', 'heat']],
  ['Bromination of ethane', 'C<sub>2</sub>H<sub>6</sub> + Br<sub>2</sub> <b class="arrow">→</b> C<sub>2</sub>H<sub>5</sub>Br + HBr', ['UV light']],
  ['Chlorination of methane', 'CH<sub>4</sub> + Cl<sub>2</sub> <b class="arrow">→</b> CH<sub>3</sub>Cl + HCl', ['UV light']],
  ['Hydrolysis of chloroethane', 'C<sub>2</sub>H<sub>5</sub>Cl + OH<sup>−</sup> <b class="arrow">→</b> C<sub>2</sub>H<sub>5</sub>OH + Cl<sup>−</sup>', ['warm', 'aqueous OH<sup>−</sup>']],
  ['Dehydration of propan-1-ol', 'C<sub>3</sub>H<sub>7</sub>OH <b class="arrow">→</b> C<sub>3</sub>H<sub>6</sub> + H<sub>2</sub>O', ['conc. H<sub>2</sub>SO<sub>4</sub>', 'heat']],
  ['Hydrogenation of propene', 'C<sub>3</sub>H<sub>6</sub> + H<sub>2</sub> <b class="arrow">→</b> C<sub>3</sub>H<sub>8</sub>', ['nickel catalyst']],
  ['Polymerisation of propene', 'nCH<sub>2</sub>=CHCH<sub>3</sub> <b class="arrow">→</b> [–CH<sub>2</sub>–CH(CH<sub>3</sub>)–]<sub>n</sub>', ['catalyst']],
  ['Hydrogenation of vegetable oil', 'RCH=CHR + H<sub>2</sub> <b class="arrow">→</b> RCH<sub>2</sub>CH<sub>2</sub>R', ['nickel catalyst']],
  ['Aldehyde oxidation', 'RCHO + [O] <b class="arrow">→</b> RCOOH', ['acidified oxidant']],
  ['Ketone reduction', 'RCOR′ + H<sub>2</sub> <b class="arrow">→</b> RCHOHR′', ['reducing agent']],
  ['Amide formation', 'RCOOH + R′NH<sub>2</sub> <b class="arrow">→</b> RCONHR′ + H<sub>2</sub>O', ['heat']]
], ['controlled conditions'], 'organic functional group mechanism synthesis');

const lessonContent = {
  "Chemistry foundations": [
    { body: "Chemistry studies matter: anything that has mass and takes up space. Start by separating physical properties, such as melting point, from chemical properties, such as the ability to react with oxygen. A substance has a fixed composition; a mixture does not.", example: "Ice, liquid water and steam are the same substance in three physical states. No new substance is made when ice melts.", key: "A physical change changes form; a chemical change makes one or more new substances.", check: "Is dissolving sugar in water a physical or chemical change?", answer: "Physical. The sugar molecules are still sugar and can be recovered by evaporating the water." },
    { body: "Every atom has a dense nucleus containing protons and neutrons, with electrons occupying the space around it. The number of protons defines the element; the number of electrons controls how it bonds and reacts.", example: "All carbon atoms have 6 protons. Carbon-12 has 6 neutrons, while carbon-14 has 8—these are isotopes.", key: "Atomic number = protons. Mass number = protons + neutrons.", check: "How many neutrons are in sodium-23, with atomic number 11?", answer: "12 neutrons: 23 minus 11 protons." },
    { body: "The periodic table is arranged by atomic number, but its real power is the repeating pattern of electron arrangements. Elements in a group have similar outer electrons and often similar reactions.", example: "Lithium, sodium and potassium sit in Group 1. Each has one outer electron and reacts with water to make an alkaline solution and hydrogen.", key: "Across a period, proton number rises; down a group, atoms gain electron shells.", check: "Why do chlorine and bromine have related chemistry?", answer: "They are both Group 17 elements with seven outer electrons." },
    { body: "Atoms bond because a lower-energy electron arrangement is often more stable. Ionic bonding transfers electrons, covalent bonding shares them, and metallic bonding lets electrons move through a lattice of positive ions.", example: "Sodium transfers one electron to chlorine, forming Na+ and Cl−. Their opposite charges hold the ionic lattice together.", key: "Bonding type helps predict properties: ionic solids conduct when molten, while simple covalent molecules often have low melting points.", check: "Which bond type holds atoms together in a water molecule?", answer: "Covalent bonding: oxygen shares electrons with each hydrogen atom." },
    { body: "Chemical equations are recipes written in particles or moles. Once an equation is balanced, its coefficients give the exact reacting ratio; the mole then lets you connect those tiny particles to a measurable mass.", example: "For 2H2 + O2 → 2H2O, two moles of hydrogen react with one mole of oxygen to make two moles of water.", key: "Convert a given quantity to moles, use the equation ratio, then convert to the quantity asked for.", check: "Why must an equation be balanced before a mole calculation?", answer: "The coefficients provide the mole ratio, so an unbalanced equation gives the wrong relationship." },
    { body: "Acid–base reactions involve hydrogen ions and often form a salt and water. Redox reactions involve electron transfer: oxidation is electron loss and reduction is electron gain, so both always occur together.", example: "HCl and NaOH neutralise to form NaCl and H2O, while zinc displacing copper from solution is a redox change.", key: "Use ion charges, electron movement and oxidation states to explain a reaction rather than just naming it.", check: "In a redox reaction, can oxidation occur without reduction?", answer: "No. Electrons lost by one species must be gained by another." },
    { body: "Chemical reactions can release energy to the surroundings or absorb it. Some reactions are reversible; when forward and reverse rates become equal in a closed system, the reaction is at dynamic equilibrium.", example: "Combustion is exothermic, whereas thermal decomposition needs continual heat. The Haber process reaches equilibrium rather than going fully to products.", key: "Energy change describes heat flow; equilibrium describes the balance between opposite reaction rates.", check: "At equilibrium, have the reactants disappeared?", answer: "No. Both reactants and products remain, with their concentrations staying constant overall." },
    { body: "Reactions in solution often depend on which ions remain dissolved. If two ions form an insoluble compound, a precipitate appears; other reactions make characteristic gases that can be identified with simple tests.", example: "Silver ions and chloride ions make a white AgCl precipitate. Carbon dioxide turns limewater cloudy.", key: "Use observations together with ionic equations to identify the chemical change.", check: "What does a precipitate tell you about a product?", answer: "It is insoluble in the solution, so it separates as a solid." }
  ],
  "Physical chemistry": [
    { body: "Energy is conserved in a reaction, but it can move between a reacting system and its surroundings. Exothermic reactions release energy; endothermic reactions absorb it. Enthalpy change gives a practical way to track heat at constant pressure.", example: "Burning methane warms the surroundings, so its enthalpy change is negative.", key: "Breaking bonds needs energy; making bonds releases energy.", check: "Is the melting of ice endothermic or exothermic?", answer: "Endothermic. Ice absorbs energy from its surroundings to melt." },
    { body: "Reaction rate tells you how quickly reactants become products. Particles must collide with enough energy and the right orientation. Temperature, concentration, surface area and catalysts all alter how often successful collisions occur.", example: "Powdered calcium carbonate reacts faster with acid than a marble chip because more surface is exposed.", key: "A catalyst provides a lower-energy route; it is not used up overall.", check: "Why does heating a reaction often make it faster?", answer: "More particles have energy at or above the activation energy and collide successfully." },
    { body: "At equilibrium, forward and reverse reactions still happen, but at the same rate. Concentrations stay constant, not necessarily equal. Changing conditions shifts the position of equilibrium in a direction that partly opposes the change.", example: "In the Haber process, high pressure favours the side with fewer gas molecules: ammonia.", key: "Equilibrium is dynamic, so reactions have not stopped.", check: "What happens to an equilibrium if a product is removed?", answer: "It shifts toward products to replace some of what was removed." },
    { body: "Entropy is a measure of how spread out energy and particles are. Spontaneity depends on both enthalpy and entropy, not on speed: a reaction can be spontaneous yet extremely slow.", example: "A perfume spreading through a room is entropy in action—particles become more dispersed.", key: "Spontaneous means thermodynamically favourable, not instant.", check: "Can a spontaneous reaction need activation energy?", answer: "Yes. Rusting is favourable but slow because it still has an energy barrier." }
  ],
  "Inorganic chemistry": [
    { body: "Periodic trends come from two competing ideas: increasing nuclear charge pulls electrons inward, while added shells place outer electrons farther away. These trends help you predict size, reactivity and bonding without memorising every element.", example: "Atomic radius decreases across a period because more protons pull the same-shell electrons closer.", key: "Use electron shells and effective nuclear pull to explain a trend.", check: "Which is larger: sodium or chlorine atoms in Period 3?", answer: "Sodium, because chlorine’s stronger nuclear pull draws its electrons in more tightly." },
    { body: "Metals lose electrons to form positive ions. Their reactivity depends on how easily that outer electron is removed. Extraction methods reflect this: very reactive metals need electrolysis, while less reactive metals can be reduced with carbon.", example: "Zinc displaces copper from copper sulfate because zinc is higher in the reactivity series.", key: "A more reactive metal is more readily oxidised.", check: "Why is aluminium extracted by electrolysis?", answer: "It is too reactive for carbon reduction to work efficiently." },
    { body: "Salts are ionic compounds formed when acids react with bases, metals or carbonates. Solubility rules let you predict whether mixing two solutions will form a precipitate.", example: "Silver nitrate and sodium chloride form insoluble silver chloride, a white precipitate.", key: "A net ionic equation includes only particles that actually change.", check: "What is a precipitate?", answer: "An insoluble solid that forms from a reaction in solution." },
    { body: "Transition-metal ions can bind molecules or ions called ligands to form coordination complexes. Their variable oxidation states and d–electron energy changes explain many of their vivid colours and catalytic behaviours.", example: "Aqueous copper(II) ions are blue, while changing their ligands can shift the observed colour.", key: "Ligands donate a lone pair of electrons to the central metal ion.", check: "Why are many transition-metal compounds coloured?", answer: "Their d electrons can absorb specific energies of visible light." }
  ],
  "Organic chemistry": [
    { body: "Carbon forms four covalent bonds and readily joins to itself, giving chemistry an enormous variety of chains, rings and branches. Structural formulae show exactly how atoms are connected, which matters because isomers can have very different properties.", example: "Butane and 2-methylpropane both have formula C4H10 but different structures and boiling points.", key: "A homologous series has the same functional group and a predictable change in formula.", check: "What makes two molecules structural isomers?", answer: "They share a molecular formula but have different atom connections." },
    { body: "A functional group is the reactive part of an organic molecule. It gives a family of compounds its characteristic reactions, so spotting it is the fastest way to predict what a molecule can do.", example: "An alcohol contains –OH, while a carboxylic acid contains –COOH and is acidic in water.", key: "Learn a molecule’s functional group before learning its reaction set.", check: "Which functional group is found in an ester?", answer: "The ester linkage is –COO– between two carbon groups." },
    { body: "Mechanisms describe reactions at the electron level. Curly arrows track electron pairs from an electron-rich site to an electron-poor site, allowing you to explain rather than memorise products.", example: "In nucleophilic substitution, hydroxide donates an electron pair to the carbon bonded to a halogen.", key: "Nucleophiles donate electron pairs; electrophiles accept them.", check: "What does a full curly arrow represent?", answer: "The movement of a pair of electrons." },
    { body: "Synthesis is the art of planning chemical steps. Work backwards from the desired product, identify useful functional-group changes, and choose reagents that make each step selectively.", example: "To make an ester, combine an alcohol and carboxylic acid with an acid catalyst and heat.", key: "Retrosynthesis asks: which simpler molecules could make this target?", check: "Why does reaction order matter in a synthesis?", answer: "A later reagent might react with a group that you have not protected or transformed yet." }
  ],
  "Biochemistry": [
    { body: "Living systems rely on a few families of molecules. Carbohydrates store and provide energy, lipids form membranes, proteins perform varied jobs, and nucleic acids store instructions.", example: "Cellulose and starch are both glucose polymers, yet branching and bonding make one structural and the other a storage material.", key: "Structure controls biological function.", check: "Which biomolecule family includes enzymes?", answer: "Most enzymes are proteins." },
    { body: "Enzymes are biological catalysts. A substrate binds at an active site, where the enzyme stabilises a lower-energy route to the product. Temperature and pH affect the shape of that active site.", example: "Amylase speeds the breakdown of starch, but extreme pH can denature it and stop the reaction.", key: "Enzymes are specific because their active sites fit particular substrates.", check: "Why does very high temperature reduce enzyme activity?", answer: "It can disrupt the enzyme’s shape, so the active site no longer binds well." },
    { body: "Cells transfer usable energy through ATP. Respiration gradually releases energy from glucose, capturing some of it in ATP rather than losing all of it at once as heat.", example: "Aerobic respiration uses oxygen and produces carbon dioxide, water and ATP.", key: "ATP is a short-term energy currency, not a long-term store like fat.", check: "Where does most aerobic respiration occur in a cell?", answer: "In mitochondria." },
    { body: "DNA stores information in the order of its bases. Complementary base pairing helps it copy accurately, while genes provide instructions for assembling proteins.", example: "A pairs with T and C pairs with G in DNA’s double helix.", key: "A change in base sequence can alter a protein’s structure or amount.", check: "Why is base pairing useful during DNA replication?", answer: "Each original strand acts as a template for a complementary new strand." }
  ],
  "Analytical chemistry": [
    { body: "Good chemical data starts with careful measurement. Accuracy is closeness to the true value, precision is how closely repeated values agree, and uncertainty states the realistic range around a result.", example: "Three closely grouped results can be precise even if all are slightly offset from the true value.", key: "Repeat measurements help reveal random uncertainty.", check: "What is the difference between accuracy and precision?", answer: "Accuracy is closeness to the true value; precision is repeatability." },
    { body: "Titration finds an unknown concentration by reacting it with a known standard solution. The endpoint is signalled by an indicator colour change, chosen to match the reaction’s pH change.", example: "A known sodium hydroxide solution can determine the concentration of hydrochloric acid.", key: "Use the balanced equation to convert moles of one reactant into moles of the other.", check: "Why rinse a burette with the solution it will contain?", answer: "To avoid dilution by leftover water changing its concentration." },
    { body: "Spectroscopy studies the way matter absorbs or emits light. Different bonds and electron transitions interact with different wavelengths, giving a sample a recognisable fingerprint.", example: "Infrared spectroscopy can show a broad O–H absorption in an alcohol.", key: "A spectrum is evidence: combine it with other data before identifying an unknown.", check: "What can an infrared spectrum often reveal?", answer: "The presence of particular bond types or functional groups." },
    { body: "Separation techniques exploit different physical properties. Chromatography separates by attraction to moving and stationary phases; distillation separates by boiling point.", example: "Paper chromatography can separate the pigments in black ink into coloured components.", key: "No single technique is perfect—choose the property that differs most between components.", check: "What property does distillation mainly use?", answer: "Different boiling points." }
  ],
  "Environmental chemistry": [
    { body: "The atmosphere is a reactive chemical system, not just a blanket of gases. Small concentrations of species such as ozone, nitrogen oxides and radicals strongly affect air quality and ultraviolet protection.", example: "Stratospheric ozone absorbs high-energy ultraviolet light before it reaches the surface.", key: "Location matters: ozone high in the atmosphere protects us, while ground-level ozone is a pollutant.", check: "Why is stratospheric ozone important?", answer: "It absorbs much of the Sun’s harmful ultraviolet radiation." },
    { body: "Water chemistry includes dissolved ions, gases, organic matter and microbes. Treatment removes particles, adjusts chemistry and disinfects water so it is safe to use.", example: "Hard water contains calcium or magnesium ions, which reduce soap lather.", key: "Water quality is measured chemically, physically and biologically.", check: "What causes temporary hardness in water?", answer: "Dissolved hydrogencarbonates of calcium or magnesium." },
    { body: "Climate chemistry follows energy and carbon through the Earth system. Greenhouse gases absorb infrared radiation, and human activity changes their concentration faster than many natural systems can rebalance.", example: "Carbon dioxide moves among air, oceans, soil and living organisms in the carbon cycle.", key: "The greenhouse effect is natural; enhanced greenhouse warming comes from changing gas concentrations.", check: "Why can oceans become more acidic as carbon dioxide rises?", answer: "Dissolved carbon dioxide forms carbonic acid in seawater." },
    { body: "Pollution control uses chemistry from source to solution: prevent emissions where possible, capture contaminants, and redesign processes to use safer materials or less energy.", example: "Catalytic converters turn carbon monoxide and nitrogen oxides into less harmful gases.", key: "Green chemistry aims to prevent waste, not merely clean it up later.", check: "What is one green-chemistry strategy?", answer: "Use a catalyst to reduce energy use and unwanted by-products." }
  ],
  "Stoichiometry": [
    { body: "The mole connects invisible particles to measurable amounts. One mole contains Avogadro’s number of particles, allowing a balanced equation to act as a recipe in moles.", example: "One mole of water contains 6.022 × 10²³ water molecules and has a mass of about 18 g.", key: "Moles = mass ÷ molar mass.", check: "How many moles are in 36 g of water?", answer: "2 moles, because water’s molar mass is 18 g mol⁻¹." },
    { body: "A balanced equation has the same number of each atom on both sides. Coefficients change how many particles are present; subscripts are part of a substance’s identity and should never be changed to balance an equation.", example: "2H2 + O2 → 2H2O balances hydrogen and oxygen atoms.", key: "Balance whole formulae using coefficients, never by altering a formula’s subscripts.", check: "Why is H2 + O2 → H2O not balanced?", answer: "There are two oxygen atoms on the left but only one on the right." },
    { body: "Mass, volume and concentration calculations all begin with moles. Convert the measurement you are given to moles, use the equation ratio, then convert to the quantity you need.", example: "For solutions, moles = concentration × volume, with volume in dm³.", key: "Write units at every step—they catch many calculation mistakes.", check: "What volume unit should be used with mol dm⁻³?", answer: "dm³, so convert cm³ by dividing by 1000." },
    { body: "When reactants are not in exact equation proportions, one becomes the limiting reactant. It is used up first and fixes the maximum amount of product possible.", example: "If a reaction needs 2 moles of hydrogen per mole of oxygen, 1 mole of hydrogen can only react with 0.5 mole of oxygen.", key: "Compare each reactant after converting it to the same equation-based scale.", check: "What does the excess reactant do?", answer: "Some is left unreacted after the limiting reactant is consumed." }
  ],
  "Materials chemistry": [
    { body: "A material’s properties come from its structure and bonding. Chemists select or design materials by connecting arrangement at the atomic scale to strength, conductivity, flexibility and heat resistance.", example: "Diamond and graphite are both carbon, but their atom arrangements give them radically different properties.", key: "Same element does not always mean same material properties.", check: "Why does graphite conduct electricity while diamond does not?", answer: "Graphite has mobile electrons between its layers; diamond’s electrons are locked in bonds." },
    { body: "Polymers are long chains made from repeating units. Their branching, chain length and cross-links determine whether a polymer is flexible, tough, soluble or heat-resistant.", example: "Ethene monomers join by addition polymerisation to make poly(ethene).", key: "A polymer’s repeat unit comes directly from its monomer structure.", check: "What is a monomer?", answer: "A small molecule that can join repeatedly to build a polymer." },
    { body: "Alloys are mixtures designed to improve a metal’s properties. Different-sized atoms disrupt regular layers, making it harder for them to slide past each other and often increasing strength.", example: "Steel is iron with a controlled amount of carbon; brass is copper mixed with zinc.", key: "An alloy is not a compound with a fixed simple formula.", check: "Why are many alloys harder than pure metals?", answer: "Their mixed atom sizes hinder the movement of layers in the metal lattice." },
    { body: "Smart materials respond usefully to their environment. They can change colour, shape or conductivity when exposed to heat, light, pressure or electricity.", example: "Photochromic lenses darken in strong ultraviolet light and clear again indoors.", key: "A smart material changes in a predictable and useful way.", check: "What stimulus changes a photochromic lens?", answer: "Ultraviolet light." }
  ],
  "Medicinal chemistry": [
    { body: "Drug discovery starts with a biological target linked to disease. Scientists find or design molecules that interact with that target, then repeatedly test and improve safety, potency and selectivity.", example: "A candidate might be adjusted by changing one small group to improve its fit at a receptor.", key: "Finding a molecule is only the beginning; it must also reach the right place safely.", check: "What is a drug target?", answer: "A biological molecule or process that a medicine is designed to affect." },
    { body: "Molecular interactions determine whether a drug binds to a target. Shape, charge, hydrogen bonding and weak attractions all contribute to how well a molecule fits and how selectively it acts.", example: "A receptor may bind one mirror-image form of a molecule much more strongly than the other.", key: "A good fit is chemical as well as geometric.", check: "Why can two enantiomers have different biological effects?", answer: "Biological targets are chiral, so they can distinguish between mirror-image molecules." },
    { body: "Pharmacokinetics asks what the body does to a drug: absorption, distribution, metabolism and excretion. These processes decide how much drug reaches a target and for how long.", example: "A tablet may be metabolised by the liver before much of it reaches the bloodstream.", key: "Dose alone does not determine effect; concentration over time matters.", check: "What does metabolism often do to a drug?", answer: "It chemically changes the drug, often making it easier to remove from the body." },
    { body: "Case studies show how structure, synthesis and biology connect. Aspirin modifies an enzyme pathway, while antibiotics exploit chemical differences between microbes and human cells.", example: "Penicillin disrupts bacterial cell-wall construction, a process human cells do not use.", key: "Selectivity is central: useful medicines affect the target more than healthy tissue.", check: "Why are antibiotics not effective against viruses?", answer: "Viruses lack many of the cellular targets that antibiotics act on." }
  ],
  "Nuclear chemistry": [
    { body: "Nuclear chemistry focuses on the atom’s nucleus. Isotopes are atoms of the same element with different neutron counts, and some arrangements are unstable enough to decay.", example: "Carbon-12 and carbon-14 are both carbon because each has 6 protons.", key: "Changing protons changes the element; changing neutrons changes the isotope.", check: "What makes two atoms isotopes?", answer: "They have the same number of protons but different numbers of neutrons." },
    { body: "Radioactive decay is random for any one nucleus but predictable for a large sample. Alpha, beta and gamma radiation differ in mass, charge, penetration and ionising ability.", example: "Alpha particles are stopped by paper, while gamma rays need much denser shielding.", key: "Half-life is the time for half the unstable nuclei in a sample to decay.", check: "Which radiation is most penetrating: alpha, beta or gamma?", answer: "Gamma radiation." },
    { body: "Nuclear fission splits a heavy nucleus and releases energy; fusion combines light nuclei and powers stars. Both involve changes in nuclear binding energy, far larger than chemical reaction energies.", example: "A controlled chain reaction in a reactor uses control rods to manage neutron numbers.", key: "Mass can be converted into energy according to E = mc².", check: "Which nuclear process powers the Sun?", answer: "Fusion of light nuclei." },
    { body: "Radioisotopes have valuable uses in diagnosis, therapy, industry and dating, but radiation exposure must be controlled with time, distance and shielding.", example: "Carbon-14 dating estimates the age of once-living material by measuring remaining carbon-14.", key: "Risk depends on radiation type, dose, exposure time and where the source is located.", check: "Why are radioisotopes useful as tracers?", answer: "Their radiation can be detected even in very small amounts." }
  ],
  "Quantum chemistry": [
    { body: "At very small scales, particles show wave-like behaviour and energies come in discrete packets. Quantum chemistry uses this model to explain spectra, bonding and reactivity where classical ideas fail.", example: "An electron in an atom can occupy only particular energy levels, not any value in between.", key: "Quantum models give probabilities of where an electron may be found.", check: "What is quantised energy?", answer: "Energy that is limited to distinct allowed values." },
    { body: "An orbital is a region of high probability for finding an electron. Electron configurations fill orbitals in a particular order while obeying rules about spin and pairing.", example: "Oxygen has electron configuration 1s² 2s² 2p⁴.", key: "Orbitals are not fixed paths around the nucleus.", check: "How many electrons can one orbital hold?", answer: "Two electrons with opposite spins." },
    { body: "Atoms and molecules absorb or emit light when electrons change energy levels. Because only certain energy gaps are allowed, spectra show a distinctive pattern of lines or bands.", example: "Flame tests show different colours because excited electrons in each metal ion emit different wavelengths.", key: "Colour is evidence of energy-level transitions.", check: "Why does sodium give a yellow flame?", answer: "Excited sodium electrons release yellow light as they return to lower energy levels." },
    { body: "Molecular orbital theory treats electrons as belonging to the whole molecule. When atomic orbitals combine, they form bonding and antibonding orbitals that help explain bond strength and magnetism.", example: "Oxygen is paramagnetic because it has unpaired electrons in molecular orbitals.", key: "Bond order compares bonding and antibonding electrons to predict bond strength.", check: "Why is a higher bond order usually a stronger bond?", answer: "More electrons stabilise the space between the nuclei relative to antibonding electrons." }
  ]
};

const makeLesson = (title, description, module = 0) => ({ title, description, module });
const courseLibrary = {
  "Chemistry foundations": [
    makeLesson("What is chemistry?", "Meet chemistry as the science of matter, change and energy.", 0),
    makeLesson("Lab safety essentials", "Learn how chemists work safely with symbols, equipment and careful habits.", 0),
    makeLesson("States of matter", "Compare solids, liquids and gases through the particle model.", 0),
    makeLesson("Physical and chemical changes", "Decide whether a change makes a new substance.", 0),
    makeLesson("Elements, compounds and mixtures", "Classify matter by the way particles are combined.", 0),
    makeLesson("Methods of separation", "Use filtration, evaporation, distillation and chromatography.", 0),
    makeLesson("Atomic theory", "Follow the evidence that led to the modern atomic model.", 1),
    makeLesson("Protons, neutrons and electrons", "Locate each subatomic particle and compare its charge and mass.", 1),
    makeLesson("Atomic number and mass number", "Use nuclear notation to identify an atom.", 1),
    makeLesson("Isotopes", "Understand atoms with the same protons but different neutrons.", 1),
    makeLesson("Ions and electron loss", "See how atoms become charged by gaining or losing electrons.", 1),
    makeLesson("Electron shells", "Arrange electrons in simple atomic shell diagrams.", 1),
    makeLesson("The periodic table map", "Read periods, groups, metals and non-metals.", 2),
    makeLesson("Group 1: alkali metals", "Predict reactions using one outer electron.", 2),
    makeLesson("Group 7: halogens", "Explore the reactive non-metals with seven outer electrons.", 2),
    makeLesson("Group 0: noble gases", "Explain why full outer shells are especially stable.", 2),
    makeLesson("Transition metals", "Meet the coloured, useful and often catalytic middle block.", 2),
    makeLesson("Periodic trends", "Use patterns to compare atomic radius, reactivity and ion formation.", 2),
    makeLesson("Introduction to bonding", "Discover why atoms join and what stable means.", 3),
    makeLesson("Ionic bonding", "Build ionic compounds from electron transfer and electrostatic attraction.", 3),
    makeLesson("Covalent bonding", "Model shared electron pairs in molecules.", 3),
    makeLesson("Metallic bonding", "Explain conductors using a lattice and delocalised electrons.", 3),
    makeLesson("Writing chemical formulae", "Use ion charge to write balanced ionic formulas.", 3),
    makeLesson("Naming compounds", "Read and write the names of common chemical substances.", 3),
    makeLesson("Conservation of mass", "Track atoms through a chemical reaction.", 4),
    makeLesson("Balancing equations", "Use coefficients to balance atoms on both sides.", 4),
    makeLesson("Introduction to the mole", "Count chemical particles with a laboratory-sized unit.", 4),
    makeLesson("Relative formula mass", "Calculate the mass of one mole from the periodic table.", 4),
    makeLesson("Acids, alkalis and pH", "Connect hydrogen ions to the pH scale.", 5),
    makeLesson("Neutralisation", "Follow how acid and alkali form salt and water.", 5),
    makeLesson("Oxidation and reduction", "Recognise electron transfer and oxidation states.", 5),
    makeLesson("Rates of reaction", "See how conditions change the speed of chemical change.", 5),
    makeLesson("Energy changes", "Distinguish endothermic and exothermic reactions.", 6),
    makeLesson("Reversible reactions", "Understand reactions that can proceed in both directions.", 6),
    makeLesson("Simple equilibrium", "Learn why balanced rates do not mean equal amounts.", 6),
    makeLesson("Solubility and precipitation", "Predict when dissolved ions create a solid.", 7),
    makeLesson("Gas tests", "Identify hydrogen, oxygen, carbon dioxide and ammonia.", 7),
    makeLesson("Chemistry foundations review", "Bring atoms, bonding, equations and reactions together.", 7)
  ],
  "Physical chemistry": [
    makeLesson("Systems and surroundings", "Set the boundary for an energy change.", 0), makeLesson("Enthalpy changes", "Measure heat released or absorbed in reactions.", 0), makeLesson("Bond energies", "Estimate reaction energy from broken and formed bonds.", 0), makeLesson("Hess's law", "Build an energy change from linked reaction steps.", 0), makeLesson("Collision theory", "Use particle collisions to explain reaction rate.", 1), makeLesson("Catalysts and activation energy", "Compare energy pathways with and without a catalyst.", 1), makeLesson("Equilibrium constants", "Use Kc to describe an equilibrium mixture.", 2), makeLesson("Le Châtelier's principle", "Predict how systems respond to changing conditions.", 2)
  ],
  "Inorganic chemistry": [
    makeLesson("Electron configuration", "Connect electron arrangement to periodic position.", 0), makeLesson("Periodic trends", "Predict changes across periods and down groups.", 0), makeLesson("The reactivity series", "Compare metals by their tendency to oxidise.", 1), makeLesson("Extraction of metals", "Choose electrolysis or reduction methods from reactivity.", 1), makeLesson("Ions and ionic equations", "Write the particles that truly react in solution.", 2), makeLesson("Solubility rules", "Predict precipitates from dissolved salts.", 2), makeLesson("Complex ions", "Explore ligand bonding around transition metals.", 3), makeLesson("Industrial inorganic chemistry", "Meet processes that make ammonia, acids and useful materials.", 3)
  ],
  "Organic chemistry": [
    makeLesson("Drawing organic structures", "Use displayed, skeletal and condensed formulae.", 0), makeLesson("Naming alkanes", "Name carbon chains, branches and simple isomers.", 0), makeLesson("Alkenes and addition", "Use carbon–carbon double bonds as reaction sites.", 1), makeLesson("Functional groups", "Recognise alcohols, acids, esters and carbonyl compounds.", 1), makeLesson("Substitution mechanisms", "Track a nucleophile replacing a leaving group.", 2), makeLesson("Elimination mechanisms", "Create an alkene by removing a small molecule.", 2), makeLesson("Spectroscopy basics", "Use simple spectra to identify an organic structure.", 3), makeLesson("Organic synthesis planning", "Choose reagents to build a target molecule step by step.", 3)
  ],
  "Biochemistry": [
    makeLesson("Carbohydrates", "Compare monosaccharides, starch, glycogen and cellulose.", 0), makeLesson("Lipids and membranes", "Relate fatty-acid structure to membrane behaviour.", 0), makeLesson("Protein structure", "Connect amino-acid order to protein shape.", 1), makeLesson("Enzymes", "Learn how active sites control biological reactions.", 1), makeLesson("ATP and energy", "Follow cellular energy transfer.", 2), makeLesson("Respiration", "Trace glucose through energy-releasing pathways.", 2), makeLesson("DNA structure", "Read complementary bases and the double helix.", 3), makeLesson("Gene expression", "Follow information from DNA to protein.", 3)
  ],
  "Analytical chemistry": [
    makeLesson("Accuracy and precision", "Make trustworthy chemical measurements.", 0), makeLesson("Uncertainty and error", "Report a result with a realistic confidence range.", 0), makeLesson("Titration method", "Plan and perform a reliable acid–base titration.", 1), makeLesson("Titration calculations", "Use moles and ratios to find a concentration.", 1), makeLesson("Chromatography", "Separate mixtures by movement through two phases.", 2), makeLesson("Infrared spectroscopy", "Spot functional groups from characteristic absorption.", 2), makeLesson("Mass spectrometry", "Use mass-to-charge data to investigate molecules.", 3), makeLesson("Evidence from multiple tests", "Combine results before identifying an unknown.", 3)
  ],
  "Environmental chemistry": [
    makeLesson("Composition of air", "Examine the major and trace gases in the atmosphere.", 0), makeLesson("Ozone chemistry", "Separate protective stratospheric ozone from air pollution.", 0), makeLesson("Water quality", "Measure and interpret water chemistry.", 1), makeLesson("Water treatment", "Follow filtration, purification and disinfection.", 1), makeLesson("The carbon cycle", "Trace carbon through air, living systems and oceans.", 2), makeLesson("Climate forcing", "Connect greenhouse gases to infrared absorption.", 2), makeLesson("Air pollutants", "Study particulates, sulfur dioxide and nitrogen oxides.", 3), makeLesson("Green chemistry", "Design processes that avoid waste and hazards.", 3)
  ],
  "Stoichiometry": [
    makeLesson("Moles and Avogadro's constant", "Count particles using amount of substance.", 0), makeLesson("Molar mass", "Convert mass into moles and back.", 0), makeLesson("Balancing chemical equations", "Use atom conservation in every calculation.", 1), makeLesson("Equation ratios", "Read mole relationships from coefficients.", 1), makeLesson("Concentration", "Work with moles per cubic decimetre.", 2), makeLesson("Gas volumes", "Relate moles of gas to volume under stated conditions.", 2), makeLesson("Limiting reactants", "Find the reactant that fixes product yield.", 3), makeLesson("Percentage yield", "Compare actual output with a theoretical maximum.", 3)
  ],
  "Materials chemistry": [
    makeLesson("Structure and properties", "Use bonding to explain material behaviour.", 0), makeLesson("Carbon allotropes", "Compare diamond, graphite and graphene.", 0), makeLesson("Addition polymers", "Build polymers from alkene monomers.", 1), makeLesson("Condensation polymers", "Make chains while removing small molecules.", 1), makeLesson("Metals and alloys", "Tune metallic structure for useful properties.", 2), makeLesson("Ceramics and glasses", "Explore hard materials with high heat resistance.", 2), makeLesson("Nanomaterials", "See how tiny dimensions change properties.", 3), makeLesson("Smart materials", "Explore materials that respond to a stimulus.", 3)
  ],
  "Medicinal chemistry": [
    makeLesson("From target to treatment", "Understand the starting point of drug discovery.", 0), makeLesson("Lead compounds", "Find promising molecules and optimise them.", 0), makeLesson("Receptors and binding", "Study chemical recognition at a biological target.", 1), makeLesson("Chirality in medicines", "Understand why molecular handedness matters.", 1), makeLesson("Absorption and distribution", "Follow a medicine into the bloodstream and tissues.", 2), makeLesson("Metabolism and excretion", "Explore how the body changes and removes drugs.", 2), makeLesson("Aspirin case study", "Connect structure, synthesis and anti-inflammatory action.", 3), makeLesson("Antibiotics case study", "Learn how selective chemical targets fight bacteria.", 3)
  ],
  "Nuclear chemistry": [
    makeLesson("Nuclear notation", "Read proton and neutron counts from isotope symbols.", 0), makeLesson("Stable and unstable nuclei", "Connect neutron-to-proton ratio to nuclear stability.", 0), makeLesson("Alpha and beta decay", "Balance nuclear equations for particle emission.", 1), makeLesson("Gamma radiation", "Compare electromagnetic radiation with particle emissions.", 1), makeLesson("Half-life", "Model exponential radioactive decay.", 2), makeLesson("Fission and fusion", "Compare two ways nuclei release energy.", 2), makeLesson("Radiation safety", "Use time, distance and shielding to reduce risk.", 3), makeLesson("Nuclear applications", "Explore scanning, therapy, power and dating.", 3)
  ],
  "Quantum chemistry": [
    makeLesson("Quantised energy", "Understand why atoms have discrete allowed energies.", 0), makeLesson("Wave-particle duality", "Meet the two-sided behaviour of matter and light.", 0), makeLesson("Atomic orbitals", "Map probability regions around a nucleus.", 1), makeLesson("Electron configurations", "Fill orbitals using energy and spin rules.", 1), makeLesson("Emission spectra", "Relate electron jumps to observed light.", 2), makeLesson("Absorption spectra", "Use missing wavelengths as chemical evidence.", 2), makeLesson("Molecular orbitals", "Build bonding and antibonding orbitals from atomic ones.", 3), makeLesson("Quantum models of bonding", "Use orbital ideas to explain bond strength and magnetism.", 3)
  ]
};
subjects.forEach(subject => { subject.lessons = `${courseLibrary[subject.title].length} lessons`; });

const baseReactions = [
  { id: 1, name: 'Combustion of methane', type: 'Redox', formula: 'CH<sub>4</sub> + 2O<sub>2</sub> <b class="arrow">→</b> CO<sub>2</sub> + 2H<sub>2</sub>O', conditions: ['heat', 'oxygen'], detail: 'A classic complete combustion reaction. Methane is oxidised while oxygen is reduced, releasing energy as heat and light.', keywords: 'combustion methane oxygen redox burning fuel' },
  { id: 2, name: 'Esterification', type: 'Organic', formula: 'CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH <b class="arrow">⇌</b> CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O', conditions: ['H<sub>2</sub>SO<sub>4</sub>', 'heat'], detail: 'An acid and an alcohol join to form a sweet-smelling ester. This is a reversible condensation reaction.', keywords: 'esterification organic acid alcohol ester condensation' },
  { id: 3, name: 'Acid–base neutralisation', type: 'Acid–base', formula: 'HCl + NaOH <b class="arrow">→</b> NaCl + H<sub>2</sub>O', conditions: ['aqueous'], detail: 'Hydrogen ions and hydroxide ions combine to form water, leaving a salt behind. A beautifully clean ionic reaction.', keywords: 'acid base neutralisation hydrochloric sodium hydroxide salt ph' },
  { id: 4, name: 'Silver mirror test', type: 'Organic', formula: 'RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> <b class="arrow">→</b> RCOO<sup>−</sup> + 2Ag', conditions: ['warm', 'Tollens reagent'], detail: 'An aldehyde reduces silver ions to shiny metallic silver, producing the famous mirror on a test tube.', keywords: 'silver mirror tollens aldehyde organic oxidation test' },
  { id: 5, name: 'Thermal decomposition', type: 'Decomposition', formula: 'CaCO<sub>3</sub> <b class="arrow">→</b> CaO + CO<sub>2</sub>', conditions: ['strong heat'], detail: 'Limestone breaks down under heat to form quicklime and carbon dioxide. It is an industrially important reaction.', keywords: 'thermal decomposition calcium carbonate limestone quicklime' },
  { id: 6, name: 'Zinc displacement', type: 'Redox', formula: 'Zn + CuSO<sub>4</sub> <b class="arrow">→</b> ZnSO<sub>4</sub> + Cu', conditions: ['aqueous'], detail: 'A more reactive metal displaces a less reactive metal from solution. Watch copper metal plate out in a warm orange layer.', keywords: 'zinc copper displacement reactivity redox metal' },
  { id: 7, name: 'Haber process', type: 'Equilibrium', formula: 'N<sub>2</sub> + 3H<sub>2</sub> <b class="arrow">⇌</b> 2NH<sub>3</sub>', conditions: ['iron catalyst', '450°C', 'high pressure'], detail: 'Nitrogen and hydrogen form ammonia in a carefully balanced industrial equilibrium. It underpins modern fertiliser production.', keywords: 'haber ammonia equilibrium nitrogen hydrogen catalyst fertilizer' },
  { id: 8, name: 'Precipitation of silver chloride', type: 'Ionic', formula: 'AgNO<sub>3</sub> + NaCl <b class="arrow">→</b> AgCl↓ + NaNO<sub>3</sub>', conditions: ['aqueous'], detail: 'Two clear solutions meet and form a milky white insoluble salt: a simple visual introduction to solubility rules.', keywords: 'precipitation silver chloride ionic soluble insoluble' },
  { id: 9, name: 'Electrolysis of water', type: 'Electrolysis', formula: '2H<sub>2</sub>O <b class="arrow">→</b> 2H<sub>2</sub> + O<sub>2</sub>', conditions: ['electricity', 'electrolyte'], detail: 'Electric current breaks water into hydrogen and oxygen gases. It is the reverse of hydrogen combustion.', keywords: 'electrolysis water hydrogen oxygen electricity electrodes' },
  { id: 10, name: 'Photosynthesis', type: 'Redox', formula: '6CO<sub>2</sub> + 6H<sub>2</sub>O <b class="arrow">→</b> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>', conditions: ['light', 'chlorophyll'], detail: 'Plants use light energy to reduce carbon dioxide into glucose while water is oxidised to oxygen.', keywords: 'photosynthesis glucose carbon dioxide plants light redox' },
  { id: 11, name: 'Rusting of iron', type: 'Redox', formula: '4Fe + 3O<sub>2</sub> + 6H<sub>2</sub>O <b class="arrow">→</b> 4Fe(OH)<sub>3</sub>', conditions: ['water', 'oxygen'], detail: 'Iron slowly oxidises in the presence of water and oxygen. The hydrated products later form familiar rust.', keywords: 'rust iron corrosion oxygen water redox' },
  { id: 12, name: 'Bromination of ethene', type: 'Organic', formula: 'C<sub>2</sub>H<sub>4</sub> + Br<sub>2</sub> <b class="arrow">→</b> C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub>', conditions: ['room temp', 'bromine water'], detail: 'Bromine adds across ethene’s carbon–carbon double bond, quickly decolourising bromine water.', keywords: 'bromination ethene alkene bromine addition organic' },
  { id: 13, name: 'Hydrogenation of ethene', type: 'Organic', formula: 'C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> <b class="arrow">→</b> C<sub>2</sub>H<sub>6</sub>', conditions: ['nickel catalyst', '150°C'], detail: 'Hydrogen adds across a double bond to make a saturated alkane. This chemistry is also used to harden oils.', keywords: 'hydrogenation ethene alkene nickel catalyst addition' },
  { id: 14, name: 'Saponification', type: 'Organic', formula: 'CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + NaOH <b class="arrow">→</b> CH<sub>3</sub>COONa + C<sub>2</sub>H<sub>5</sub>OH', conditions: ['warm', 'aqueous NaOH'], detail: 'An ester reacts with alkali to give a carboxylate salt and an alcohol—the core reaction behind soap making.', keywords: 'saponification ester alkali soap hydrolysis organic' },
  { id: 15, name: 'Dehydration of ethanol', type: 'Organic', formula: 'C<sub>2</sub>H<sub>5</sub>OH <b class="arrow">→</b> C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O', conditions: ['conc. H<sub>2</sub>SO<sub>4</sub>', '170°C'], detail: 'Water is eliminated from ethanol to form ethene, giving a clean example of an elimination reaction.', keywords: 'dehydration ethanol ethene elimination organic sulfuric acid' },
  { id: 16, name: 'Hydrolysis of bromoethane', type: 'Organic', formula: 'C<sub>2</sub>H<sub>5</sub>Br + OH<sup>−</sup> <b class="arrow">→</b> C<sub>2</sub>H<sub>5</sub>OH + Br<sup>−</sup>', conditions: ['warm', 'aqueous OH<sup>−</sup>'], detail: 'A hydroxide ion replaces bromide in a nucleophilic substitution, turning a haloalkane into an alcohol.', keywords: 'hydrolysis bromoethane substitution haloalkane nucleophile organic' },
  { id: 17, name: 'Magnesium with acid', type: 'Acid–base', formula: 'Mg + 2HCl <b class="arrow">→</b> MgCl<sub>2</sub> + H<sub>2</sub>', conditions: ['dilute acid'], detail: 'A reactive metal and acid produce a salt plus hydrogen gas, heard as a satisfying fizz.', keywords: 'magnesium acid hydrochloric hydrogen salt metal' },
  { id: 18, name: 'Carbonate with acid', type: 'Acid–base', formula: 'CaCO<sub>3</sub> + 2HCl <b class="arrow">→</b> CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>', conditions: ['dilute acid'], detail: 'Carbonates react with acids to produce salt, water, and the unmistakable fizz of carbon dioxide.', keywords: 'carbonate acid calcium carbon dioxide fizz limestone' },
  { id: 19, name: 'Hydrogen peroxide breakdown', type: 'Decomposition', formula: '2H<sub>2</sub>O<sub>2</sub> <b class="arrow">→</b> 2H<sub>2</sub>O + O<sub>2</sub>', conditions: ['MnO<sub>2</sub> catalyst'], detail: 'A catalyst speeds up the decomposition of hydrogen peroxide without being used up itself.', keywords: 'hydrogen peroxide decomposition manganese dioxide catalyst oxygen' },
  { id: 20, name: 'Chlor-alkali process', type: 'Electrolysis', formula: '2NaCl + 2H<sub>2</sub>O <b class="arrow">→</b> Cl<sub>2</sub> + H<sub>2</sub> + 2NaOH', conditions: ['brine', 'electricity'], detail: 'Electrolysis of concentrated sodium chloride solution produces chlorine, hydrogen, and sodium hydroxide.', keywords: 'chlor alkali brine electrolysis chlorine sodium hydroxide industrial' },
  { id: 21, name: 'Lead iodide precipitation', type: 'Ionic', formula: 'Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI <b class="arrow">→</b> PbI<sub>2</sub>↓ + 2KNO<sub>3</sub>', conditions: ['aqueous'], detail: 'Mixing two colourless solutions creates a brilliant yellow solid, often called a golden rain experiment.', keywords: 'lead iodide precipitation ionic yellow solid soluble' },
  { id: 22, name: 'Polymerisation of ethene', type: 'Polymerisation', formula: 'nCH<sub>2</sub>=CH<sub>2</sub> <b class="arrow">→</b> [–CH<sub>2</sub>–CH<sub>2</sub>–]<sub>n</sub>', conditions: ['high pressure', 'catalyst'], detail: 'Thousands of ethene molecules link together to make poly(ethene), one of the world’s most-used plastics.', keywords: 'polymerisation ethene polyethylene plastic polymer materials' },
  { id: 23, name: 'Limewater test for CO₂', type: 'Ionic', formula: 'Ca(OH)<sub>2</sub> + CO<sub>2</sub> <b class="arrow">→</b> CaCO<sub>3</sub>↓ + H<sub>2</sub>O', conditions: ['aqueous'], detail: 'Carbon dioxide turns clear limewater cloudy as insoluble calcium carbonate appears.', keywords: 'limewater carbon dioxide test carbonate precipitation' },
  { id: 24, name: 'Contact process equilibrium', type: 'Equilibrium', formula: '2SO<sub>2</sub> + O<sub>2</sub> <b class="arrow">⇌</b> 2SO<sub>3</sub>', conditions: ['V<sub>2</sub>O<sub>5</sub>', '450°C'], detail: 'Sulfur dioxide and oxygen reach equilibrium over a vanadium(V) oxide catalyst, forming sulfur trioxide for sulfuric acid production.', keywords: 'contact process equilibrium sulfur dioxide sulfur trioxide industrial catalyst' }
];
baseReactions.forEach(reaction => reactions.push({ ...reaction, id: reactions.length + 1 }));

const pathGrid = document.querySelector('#pathGrid');
pathGrid.innerHTML = subjects.map(subject => `
  <article class="path-card ${subject.className}">
    <span class="card-number">${subject.number}</span>
    <div class="subject-icon">${subject.icon}</div>
    <h3>${subject.title}</h3><p>${subject.text}</p>
    <footer><span>${subject.lessons}</span><button class="open-subject" data-subject="${subject.title}" aria-label="Explore ${subject.title}">→</button></footer>
  </article>`).join('');

const filterNames = ['All', ...new Set(reactions.map(reaction => reaction.type))];
const filterEl = document.querySelector('#reactionFilters');
let activeFilter = 'All';
let query = '';
let activeReaction = reactions[0];
const featureEl = document.querySelector('#reactionFeature');
const listEl = document.querySelector('#reactionList');

function renderFeature(reaction) {
  featureEl.innerHTML = `
    <span class="reaction-category">${reaction.type.toUpperCase()} · FEATURED REACTION</span>
    <h3>${reaction.name}</h3>
    <p class="reaction-formula">${reaction.formula}</p>
    <p class="reaction-detail sr-only">${reaction.detail}</p>
    <div class="conditions">${reaction.conditions.map(condition => `<span>${condition}</span>`).join('')}</div>
    <div class="reaction-flask" aria-hidden="true"><div class="neck"></div><div class="body"></div></div>`;
}
function filteredReactions() {
  return reactions.filter(reaction => (activeFilter === 'All' || reaction.type === activeFilter) && `${reaction.name} ${reaction.type} ${reaction.keywords}`.toLowerCase().includes(query));
}
function renderReactions() {
  const filtered = filteredReactions();
  filterEl.innerHTML = filterNames.map(name => `<button class="filter ${name === activeFilter ? 'active' : ''}" data-filter="${name}">${name}</button>`).join('');
  if (!filtered.some(item => item.id === activeReaction.id)) activeReaction = filtered[0] || reactions[0];
  renderFeature(activeReaction);
  listEl.innerHTML = filtered.length ? filtered.map((reaction, index) => `<button class="reaction-item ${reaction.id === activeReaction.id ? 'active' : ''}" data-reaction="${reaction.id}"><span class="reaction-index">0${index + 1}</span><span><strong>${reaction.name}</strong><p>${reaction.type} · ${reaction.conditions[0]}</p></span></button>`).join('') : '<p class="reaction-empty">No reactions matched that search. Try a broader term.</p>';
}
renderReactions();

filterEl.addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; activeFilter = button.dataset.filter; renderReactions(); });
listEl.addEventListener('click', event => { const button = event.target.closest('[data-reaction]'); if (!button) return; activeReaction = reactions.find(reaction => reaction.id === Number(button.dataset.reaction)); renderReactions(); });
document.querySelector('#reactionSearch').addEventListener('input', event => { query = event.target.value.toLowerCase().trim(); renderReactions(); });
document.querySelector('#randomReaction').addEventListener('click', () => { const available = filteredReactions(); activeReaction = available[Math.floor(Math.random() * available.length)] || reactions[Math.floor(Math.random() * reactions.length)]; renderReactions(); showToast(`${activeReaction.name} selected`); });

const toast = document.querySelector('#toast'); let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400); }
document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.toast)));
const pathOverlay = document.querySelector('#pathOverlay');
const drawerTitle = document.querySelector('#drawerTitle');
const drawerSymbol = document.querySelector('#drawerSymbol');
const drawerNumber = document.querySelector('#drawerNumber');
const drawerIntro = document.querySelector('#drawerIntro');
const drawerLessonCount = document.querySelector('#drawerLessonCount');
const lessonList = document.querySelector('#lessonList');
let selectedSubject;
function getCourseLessons(subject) { return courseLibrary[subject.title]; }
function getLessonDetails(subject, lesson) {
  const foundation = lessonContent[subject.title][lesson.module];
  return {
    body: `${lesson.description} ${foundation.body}`,
    example: foundation.example,
    key: foundation.key,
    check: foundation.check,
    answer: foundation.answer
  };
}
function openSubjectPath(name) {
  selectedSubject = subjects.find(subject => subject.title === name);
  if (!selectedSubject) return;
  const courseLessons = getCourseLessons(selectedSubject);
  drawerTitle.textContent = selectedSubject.title;
  drawerSymbol.innerHTML = selectedSubject.icon;
  drawerNumber.textContent = `PATH ${selectedSubject.number}`;
  drawerIntro.textContent = selectedSubject.text;
  drawerLessonCount.textContent = `${courseLessons.length} lessons`;
  lessonList.innerHTML = courseLessons.map((lesson, index) => `<li><button class="lesson-row" data-unit="${index}">${lesson.title}<span>${lesson.description}</span></button></li>`).join('');
  pathOverlay.classList.add('open');
  pathOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('#drawerClose').focus();
}
function closeSubjectPath() { pathOverlay.classList.remove('open'); pathOverlay.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
document.querySelectorAll('.open-subject').forEach(button => button.addEventListener('click', () => openSubjectPath(button.dataset.subject)));
document.querySelector('#drawerClose').addEventListener('click', closeSubjectPath);
pathOverlay.addEventListener('click', event => { if (event.target === pathOverlay) closeSubjectPath(); });
const lessonOverlay = document.querySelector('#lessonOverlay');
const lessonTitle = document.querySelector('#lessonTitle');
const lessonPathLabel = document.querySelector('#lessonPathLabel');
const lessonStep = document.querySelector('#lessonStep');
const lessonDeck = document.querySelector('#lessonDeck');
const lessonBody = document.querySelector('#lessonBody');
const lessonDeepen = document.querySelector('#lessonDeepen');
const lessonExample = document.querySelector('#lessonExample');
const lessonKey = document.querySelector('#lessonKey');
const lessonCheck = document.querySelector('#lessonCheck');
const lessonAnswer = document.querySelector('#lessonAnswer');
const previousLesson = document.querySelector('#previousLesson');
const nextLesson = document.querySelector('#nextLesson');
let currentLesson = 0;
function openLesson(index) {
  if (!selectedSubject) return;
  currentLesson = index;
  const courseLessons = getCourseLessons(selectedSubject);
  const lesson = courseLessons[index];
  const content = getLessonDetails(selectedSubject, lesson);
  lessonPathLabel.textContent = `PATH ${selectedSubject.number} · ${selectedSubject.title}`;
  lessonStep.textContent = `LESSON ${String(index + 1).padStart(2, '0')} OF ${String(courseLessons.length).padStart(2, '0')}`;
  lessonTitle.textContent = lesson.title;
  lessonDeck.textContent = lesson.description;
  lessonBody.textContent = content.body;
  lessonDeepen.textContent = `Study it in three moves: define the idea in your own words, connect it to the particle-level model or equation behind it, then use the worked example to explain a fresh case. This is how ${lesson.title.toLowerCase()} becomes something you can use—not just remember.`;
  lessonExample.textContent = content.example;
  lessonKey.textContent = content.key;
  lessonCheck.textContent = content.check;
  lessonAnswer.textContent = content.answer;
  lessonAnswer.classList.remove('visible');
  previousLesson.disabled = index === 0;
  nextLesson.innerHTML = index === courseLessons.length - 1 ? 'Finish path <span>✓</span>' : 'Next lesson <span>→</span>';
  pathOverlay.classList.remove('open');
  pathOverlay.setAttribute('aria-hidden', 'true');
  lessonOverlay.classList.add('open');
  lessonOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('#lessonClose').focus();
}
function closeLesson() { lessonOverlay.classList.remove('open'); lessonOverlay.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
lessonList.addEventListener('click', event => { const button = event.target.closest('[data-unit]'); if (button) openLesson(Number(button.dataset.unit)); });
document.querySelector('#drawerStart').addEventListener('click', () => openLesson(0));
document.querySelectorAll('.launch-subject').forEach(button => button.addEventListener('click', () => openSubjectPath(button.dataset.subject)));
document.querySelector('#dailySpark').addEventListener('click', () => { openSubjectPath('Chemistry foundations'); openLesson(2); });
document.querySelector('#lessonClose').addEventListener('click', closeLesson);
lessonOverlay.addEventListener('click', event => { if (event.target === lessonOverlay) closeLesson(); });
document.querySelector('#lessonBack').addEventListener('click', () => { closeLesson(); openSubjectPath(selectedSubject.title); });
document.querySelector('#revealAnswer').addEventListener('click', () => lessonAnswer.classList.toggle('visible'));
previousLesson.addEventListener('click', () => { if (currentLesson > 0) openLesson(currentLesson - 1); });
nextLesson.addEventListener('click', () => { if (currentLesson < getCourseLessons(selectedSubject).length - 1) { openLesson(currentLesson + 1); } else { showToast(`${selectedSubject.title} path complete — brilliant work!`); closeLesson(); } });
document.querySelector('#quizButton').addEventListener('click', () => openSubjectPath('Chemistry foundations'));
document.querySelector('#surpriseMe').addEventListener('click', () => { document.querySelector('#reactions').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => document.querySelector('#randomReaction').click(), 500); });

document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-answer]').forEach(item => item.classList.remove('correct', 'incorrect')); const correct = button.dataset.answer === 'right'; button.classList.add(correct ? 'correct' : 'incorrect'); document.querySelector('#quizFeedback').textContent = correct ? 'Exactly. Pure water is neutral at 25°C.' : 'Almost—pure water is neutral, which is pH 7 at 25°C.'; }));
document.querySelector('#newsletterForm').addEventListener('submit', event => { event.preventDefault(); const email = document.querySelector('#email'); document.querySelector('#newsletterMessage').textContent = `You’re on the list, ${email.value}. See you next week.`; email.value = ''; });

// Internet chemistry search: local lessons plus live PubChem and Wikipedia results.
const internetSearchOverlay = document.querySelector('#internetSearchOverlay');
const internetSearch = document.querySelector('#internetSearch');
const internetSearchResults = document.querySelector('#internetSearchResults');
const profileOverlay = document.querySelector('#profileOverlay');
let internetSearchTimer;
let internetSearchRequest = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function webSearchURL(term) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${term} chemistry`)}`;
}

function openInternetSearch() {
  internetSearchOverlay.classList.add('open');
  internetSearchOverlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => internetSearch.focus(), 100);
}

function closeInternetSearch() {
  internetSearchOverlay.classList.remove('open');
  internetSearchOverlay.setAttribute('aria-hidden', 'true');
  internetSearch.value = '';
  internetSearchResults.innerHTML = '<p>Start typing to explore lessons, reactions and trusted web sources.</p>';
}

function openProfile() {
  profileOverlay.classList.add('open');
  profileOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.close-profile').focus();
}

function closeProfile() {
  profileOverlay.classList.remove('open');
  profileOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function localSearchMatches(term) {
  const subjectMatches = subjects
    .filter(subject => `${subject.title} ${subject.text} ${subject.tags.join(' ')}`.toLowerCase().includes(term))
    .map(subject => ({ name: subject.title, detail: subject.text, kind: 'Study path', action: 'subject', subject: subject.title }));
  const lessonMatches = subjects.flatMap(subject => getCourseLessons(subject)
    .filter(lesson => `${lesson.title} ${lesson.description}`.toLowerCase().includes(term))
    .map((lesson, index) => ({ name: lesson.title, detail: lesson.description, kind: `Lesson in ${subject.title}`, action: 'lesson', subject: subject.title, index })));
  const reactionMatches = reactions
    .filter(reaction => `${reaction.name} ${reaction.keywords} ${reaction.formula} ${reaction.explanation}`.toLowerCase().includes(term))
    .map(reaction => ({ name: reaction.name, detail: reaction.formula, kind: 'Reaction', action: 'reaction', id: reaction.id }));
  return [...subjectMatches, ...lessonMatches, ...reactionMatches].slice(0, 8);
}

function localResultMarkup(match) {
  const attributes = match.action === 'lesson'
    ? `data-library-action="lesson" data-subject="${escapeHTML(match.subject)}" data-index="${match.index}"`
    : match.action === 'subject'
      ? `data-library-action="subject" data-subject="${escapeHTML(match.subject)}"`
      : `data-library-action="reaction" data-reaction-id="${match.id}"`;
  return `<div class="result-row"><button type="button" ${attributes}><span><b>${escapeHTML(match.name)}</b><small>${escapeHTML(match.detail)}</small></span><em>${escapeHTML(match.kind)}</em></button></div>`;
}

function webResultMarkup(result) {
  return `<div class="result-row"><a href="${escapeHTML(result.url)}" target="_blank" rel="noopener noreferrer"><span><b>${escapeHTML(result.name)}</b><small>${escapeHTML(result.detail)}</small></span><em>${escapeHTML(result.kind)}</em></a></div>`;
}

function renderInternetSearch(term, webResults = null) {
  const localMatches = localSearchMatches(term);
  const localMarkup = localMatches.length
    ? `<p class="search-section-label">In Elemental</p>${localMatches.map(localResultMarkup).join('')}`
    : '<p class="search-section-label">In Elemental</p><p>No library match yet - try the web results below.</p>';
  let webMarkup = '<p class="search-section-label">Trusted web sources</p><p>Searching PubChem and Wikipedia...</p>';
  if (webResults) {
    webMarkup = webResults.length
      ? `<p class="search-section-label">Trusted web sources</p>${webResults.map(webResultMarkup).join('')}`
      : '<p class="search-section-label">Trusted web sources</p><p>No source result returned. Try the wider web search.</p>';
  }
  internetSearchResults.innerHTML = `${localMarkup}${webMarkup}<a class="web-search-link" href="${webSearchURL(term)}" target="_blank" rel="noopener noreferrer">Search the wider web for &ldquo;${escapeHTML(term)}&rdquo; <span>&rarr;</span></a>`;
}

async function searchChemistryWeb(term, requestNumber) {
  const wikipediaURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(`${term} chemistry`)}&srlimit=4&format=json&origin=*`;
  const pubChemURL = `https://pubchem.ncbi.nlm.nih.gov/rest/autocomplete/compound/${encodeURIComponent(term)}/json?limit=4`;
  const [wikipediaResponse, pubChemResponse] = await Promise.allSettled([
    fetch(wikipediaURL).then(response => response.ok ? response.json() : Promise.reject(new Error('Wikipedia unavailable'))),
    fetch(pubChemURL).then(response => response.ok ? response.json() : Promise.reject(new Error('PubChem unavailable')))
  ]);
  if (requestNumber !== internetSearchRequest || internetSearch.value.trim().toLowerCase() !== term) return;
  const wikipediaResults = wikipediaResponse.status === 'fulfilled'
    ? (wikipediaResponse.value.query?.search || []).map(result => ({
      name: result.title,
      detail: result.snippet.replace(/<[^>]*>/g, ''),
      kind: 'Wikipedia',
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title.replace(/ /g, '_'))}`
    }))
    : [];
  const pubChemResults = pubChemResponse.status === 'fulfilled'
    ? (pubChemResponse.value.dictionary_terms?.compound || []).map(name => ({
      name,
      detail: 'Compound and formula data',
      kind: 'PubChem',
      url: `https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(name)}`
    }))
    : [];
  renderInternetSearch(term, [...pubChemResults, ...wikipediaResults].slice(0, 8));
}

document.querySelector('.search-toggle').addEventListener('click', openInternetSearch);
document.querySelector('.close-internet-search').addEventListener('click', closeInternetSearch);
internetSearchOverlay.addEventListener('click', event => { if (event.target === internetSearchOverlay) closeInternetSearch(); });
document.querySelector('.profile-button').addEventListener('click', openProfile);
document.querySelector('.close-profile').addEventListener('click', closeProfile);
profileOverlay.addEventListener('click', event => { if (event.target === profileOverlay) closeProfile(); });
document.querySelector('#profileContinue').addEventListener('click', () => { closeProfile(); openSubjectPath('Chemistry foundations'); });
document.querySelector('#profileReaction').addEventListener('click', () => { closeProfile(); document.querySelector('#reactions').scrollIntoView({ behavior: 'smooth' }); document.querySelector('#randomReaction').click(); });
document.querySelector('#profileSearch').addEventListener('click', () => { closeProfile(); openInternetSearch(); });

internetSearch.addEventListener('input', event => {
  const term = event.target.value.trim().toLowerCase();
  clearTimeout(internetSearchTimer);
  if (!term) {
    internetSearchResults.innerHTML = '<p>Start typing to explore lessons, reactions and trusted web sources.</p>';
    return;
  }
  renderInternetSearch(term);
  const requestNumber = ++internetSearchRequest;
  internetSearchTimer = setTimeout(() => searchChemistryWeb(term, requestNumber), 350);
});

internetSearchResults.addEventListener('click', event => {
  const target = event.target.closest('[data-library-action]');
  if (!target) return;
  if (target.dataset.libraryAction === 'subject') {
    closeInternetSearch();
    openSubjectPath(target.dataset.subject);
  } else if (target.dataset.libraryAction === 'lesson') {
    closeInternetSearch();
    openSubjectPath(target.dataset.subject);
    openLesson(Number(target.dataset.index));
  } else if (target.dataset.libraryAction === 'reaction') {
    const reaction = reactions.find(item => item.id === Number(target.dataset.reactionId));
    if (reaction) {
      activeReaction = reaction;
      document.querySelector('#reactions').scrollIntoView({ behavior: 'smooth' });
      renderReactions();
    }
    closeInternetSearch();
  }
});

document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeInternetSearch(); closeProfile(); } });

const overlay = document.querySelector('#searchOverlay'); const globalSearch = document.querySelector('#globalSearch'); const results = document.querySelector('#searchResults');
function openSearch(){ overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); setTimeout(() => globalSearch.focus(), 100); }
function closeSearch(){ overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); globalSearch.value=''; results.innerHTML='<p>Start typing to explore lessons and reactions.</p>'; }
document.querySelector('.search-toggle').addEventListener('click', openSearch); document.querySelector('.close-search').addEventListener('click', closeSearch); overlay.addEventListener('click', event => { if(event.target === overlay) closeSearch(); }); document.addEventListener('keydown', event => { if(event.key === 'Escape') { closeSearch(); closeSubjectPath(); closeLesson(); } if((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'){ event.preventDefault(); openSearch(); } });
globalSearch.addEventListener('input', event => { const term = event.target.value.toLowerCase().trim(); if(!term){ results.innerHTML='<p>Start typing to explore lessons and reactions.</p>'; return; } const subjectMatches = subjects.filter(s => `${s.title} ${s.text} ${s.tags.join(' ')}`.toLowerCase().includes(term)).map(s => ({name:s.title, kind:'Study path'})); const reactionMatches = reactions.filter(r => `${r.name} ${r.keywords}`.toLowerCase().includes(term)).map(r => ({name:r.name, kind:'Reaction'})); const matches = [...subjectMatches,...reactionMatches]; results.innerHTML = matches.length ? matches.slice(0,7).map(match => `<div class="result-row"><b>${match.name}</b><span>${match.kind}</span></div>`).join('') : '<p>No exact match yet. Try “carbon”, “acid”, or “equilibrium”.</p>'; });
