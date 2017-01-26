
function franceDom() {
	var ε = 1e-6;

	function france(coordinates) {
		var x = coordinates[0], y = coordinates[1];

		point = null;

		france.areasValues.some(function(d) {
			if (x > d.clip[0][0] && x < d.clip[1][0]
			 && y < d.clip[0][1] && y > d.clip[1][1]) {
				point = d.projection(coordinates);
				return point;
			}
		});

		if (point === null) {
			return france.areas.metropole.projection(coordinates);
		}

		return point;
	}

	france.paris = function(coordinates) {
		var projection = d3.geoConicConformal()
			.rotate([-2.3, 0])
			.center([0, 48.5])
			.parallels([44, 49])
			.scale(france.areas.metropole.projection.scale() * 3)
			.translate(france.areas.metropole.projection([6.40, 49.70]));

		return projection(coordinates);
	};


	france.areas = {};
	france.areasMap = d3.map();
	france.areasValues = [];

	france.defineAreas = function(showPolynesie) {
		france.areas = {
			metropole: {
				clip: [
					[- 6.50, 51.50],
					[+11.00, 40.70]
				],

				scale: 1.0,
				projection: d3.geoConicConformal()
					.center([0, 46.5])
					.rotate([-3, 0])
					.parallels([44, 49])
			},
			guadeloupe: {
				center: [-5.55, 46.45],
				clip: [
					[-61.95,  16.60],
					[-60.86,  15.77]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([61.5, 0])
					.center([0, 16.25])
					.parallels([8, 18])
			},
			martinique: {
				center: [-5.10, 44.80],
				clip: [
					[-61.40,  15.00],
					[-60.70,  14.30]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([61, 0])
					.center([0, 14.45])
					.parallels([8, 18])
			},
			guyane: {
				center: [-4.65, 43.38],
				clip: [
					[-55.20,   6.10],
					[-51.00,   1.90]
				],

				scale: 0.5,
				projection: d3.geoConicEqualArea()
					.rotate([53, 0])
					.center([0, 4])
					.parallels([0, 8])
			},
			reunion: {
				center: [-2.40, 41.50],
				clip: [
					[55.00, -20.60],
					[56.20, -21.60]
				],

				scale: 1.0,
				projection: d3.geoConicEqualArea()
					.rotate([-55.5, 0])
					.center([0, -21])
					.parallels([-25, -35])
			},
			mayotte: {
				center: [-4.60, 41.50],
				clip: [
					[44.90, -12.50],
					[45.40, -13.10]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-45, 0])
					.center([0, -12.7])
					.parallels([-8, -18])
			},
			nouvelleCaledonie: {
				center: [2.30, 41.50],
				clip: [
					[162.60, -19.00],
					[168.80, -23.00]
				],

				scale: 0.5,
				projection: d3.geoConicEqualArea()
					.rotate([-166.45, 0])
					.center([0, -21.25])
					.parallels([-20, -30])
			},
			wallis: {
				center: [5.05, 41.60],
				clip: [
					[-176.40, -13.10],
					[-176.00, -13.50]
				],

				scale: 2.0,
				projection: d3.geoConicEqualArea()
					.rotate([+176.15, 0])
					.center([0, -13.27])
					.parallels([-10, -20])
			},
			futuna: {
				center: [4.43, 41.33],
				clip: [
					[-178.30, -14.20],
					[-177.80, -14.40]
				],

				scale: 2.0,
				projection: d3.geoConicEqualArea()
					.rotate([+178.10, 0])
					.center([0, -14.27])
					.parallels([-10, -20])
			},
			saintPierreEtMiquelon: {
				center: [-6.00, 48.50],
				clip: [
					[-56.48, 47.15],
					[-56.00, 46.70]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([+56.33, 0])
					.center([0, +46.9])
					.parallels([40, 50])
			},
			saintMartinSaintBarth: {
				center: [-6.00, 47.30],
				clip: [
					[-63.17, 18.1480],
					[-62.75, 17.8515]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([+62.94, 0])
					.center([0, +18.01])
					.parallels([+10, +20])
			},
			crozet: {
				center: [-6.77, 50.10],
				clip: [
					[51.60, -46.30],
					[52.00, -46.60]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-51.5, 0])
					.center([0, -46.4])
					.parallels([-40, -50])
			},
			kerguelen: {
				center: [-3.45, 50.00],
				clip: [
					[68.40, -48.50],
					[70.80, -49.80]
				],

				scale: 1.0,
				projection: d3.geoConicEqualArea()
					.rotate([-69.3, 0])
					.center([0, -49.3])
					.parallels([-40, -50])
			},
			amsterdam: {
				center: [-0.35, 50.80],
				clip: [
					[77.45, -37.70],
					[77.67, -37.91]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-77.55, 0])
					.center([0, -37.8])
					.parallels([-30, -40])
			},
			saintPaul: {
				center: [-0.44, 50.35],
				clip: [
					[77.47, -38.68],
					[77.57, -38.75]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-77.5, 0])
					.center([0, -38.7])
					.parallels([-30, -40])
			},
			clipperton: {
				center: [6.40, 50.40],
				clip: [
					[-109.28, 10.33],
					[-109.18, 10.27]
				],

				scale: 2.0,
				projection: d3.geoConicEqualArea()
					.rotate([+109.25, 0])
					.center([0, +10.3])
					.parallels([8, 18])
			},
			europa: {
				center: [-3.60, 41.90],
				clip: [
					[40.299, -22.287],
					[40.425, -22.410]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-40.35, 0])
					.center([0, -22.3])
					.parallels([-15, -25])
			},
			bassasDaIndia: {
				center: [-3.70, 42.00],
				clip: [
					[39.603, -21.410],
					[39.805, -21.572]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-39.7, 0])
					.center([0, -21.5])
					.parallels([-15, -25])
			},
			juanDeNova: {
				center: [-3.50, 42.50],
				clip: [
					[42.645, -16.983],
					[42.808, -17.103]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-42.7, 0])
					.center([0, -17.0])
					.parallels([-15, -25])
			},
			glorioso: {
				center: [-3.10, 42.90],
				clip: [
					[47.232, -11.455],
					[47.485, -11.646]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-47.3, 0])
					.center([0, -11.5])
					.parallels([-5, -15])
			},
			tromelin: {
				center: [-2.60, 42.50],
				clip: [
					[54.509, -15.878],
					[54.544, -15.908]
				],

				scale: 1.5,
				projection: d3.geoConicEqualArea()
					.rotate([-54.5, 0])
					.center([0, -15.9])
					.parallels([-10, -20])
			}
		};

		if (showPolynesie) {
			france.areas.societe = {
				center: [ 9.70, 46.00],
				clip: [
					[-154.90, -15.50],
					[-149.01, -18.00]
				],

				scale: 0.5,
				projection: d3.geoConicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.tuamotu = {
				center: [ 8.00, 46.50],
				clip: [
					[-149.00, -13.50],
					[-133.70, -23.47]
				],

				scale: 0.4,
				projection: d3.geoConicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.marquises = {
				center: [ 8.00, 46.00],
				clip: [
					[-141.50, - 7.60],
					[-137.50, -11.00]
				],

				scale: 0.4,
				projection: d3.geoConicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.australes = {
				center: [10.00, 47.00],
				clip: [
					[-155.00, -21.60],
					[-142.80, -28.10]
				],

				scale: 0.4,
				projection: d3.geoConicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
		} else {
			france.areas.tahitiMoorea = {
				center: [6.60, 41.60],
				clip: [
					[-150.00, -16.90],
					[-147.50, -18.50]
				],

				scale: 1.0,
				projection: d3.geoConicEqualArea()
					.rotate([+149.50, 0])
					.center([0, -17.5])
					.parallels([-10, -20])
					.clipAngle(1)
			};
		}

		france.areasMap = d3.map(france.areas);
		france.areasValues = france.areasMap.values();
		console.log(france.areasMap);
	};

	france.defineAreas(false);


	france.showPolynesie = function(showPolynesie) {
		var scale = france.scale();
		france.defineAreas(showPolynesie);
		france.scale(scale);

		return france;
	};

	france.invert = function(coordinates) {
		return france.areas.metropole.projection.invert(coordinates);
	};

	france.precision = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.precision();

		Array.from(france.areasMap).forEach(function(i, d) {
			d.projection.precision(_);
		});

		return france;
	};

	france.scale = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.scale();

		Array.from(france.areasMap).forEach(function(i, d) {
			d.projection.scale(_ * d.scale);
		});

		return france.translate(france.areas.metropole.projection.translate());
	};

	france.translate = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.translate();
		var coordinates = _;
		france.areas.metropole.projection.translate(coordinates);

		Array.from(france.areasMap).forEach(function(i, d) {
			if (d.center) {
				d.projection.translate(france.areas.metropole.projection(d.center));
			}
		});

		return france;
	};

	return france.scale(3000);
}
import * as d3 from 'd3'
d3.geoFranceDom = franceDom;
