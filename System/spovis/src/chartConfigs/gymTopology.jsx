// Chart Config for Single Chart
export default function() {
  const option = {
    title: {
      text: 'Recommend Results and Exist Facilities(k=100)',
      textStyle: {
        fontWeight: 350,
        fontSize: 14,
      }
    },
    legend: {
      left: '5%',
      bottom: '4%',
      itemWidth: 10,
      itemHeight: 10,
      orient: 'vertical',
      data: [{
        name: 'Centroids',
        icon: 'circle',
      }, {
        name: 'Exist Facilities',
        icon: 'rect',
      }, {
        name: 'Recommend Results',
        icon: 'triangle',
      }]
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    tooltip: {},
    series: [
      {
        name: 'Centroids',
        roam: true,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: 5,
        type: 'graph',
        data: [{'name': 'centroid-1', 'x': 120.33640983299999, 'y': -31.570345083299998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-2', 'x': 120.373048857, 'y': -31.5425968571, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-3', 'x': 120.355492, 'y': -31.563396, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-4', 'x': 120.351514667, 'y': -31.5558633333, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-5', 'x': 120.37543899999999, 'y': -31.5468368, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-6', 'x': 120.37210766700001, 'y': -31.5480515, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-7', 'x': 120.370478, 'y': -31.5677256, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-8', 'x': 120.40232479999999, 'y': -31.565076, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-9', 'x': 120.36967525, 'y': -31.5459425, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-10', 'x': 120.3568885, 'y': -31.5490585, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-11', 'x': 120.40432949999999, 'y': -31.58005, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-12', 'x': 120.329452429, 'y': -31.5756614286, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-13', 'x': 120.411197, 'y': -31.512871, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-14', 'x': 120.39268799999999, 'y': -31.5618925, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-15', 'x': 120.370364, 'y': -31.553557, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-16', 'x': 120.32429325, 'y': -31.5699265, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-17', 'x': 120.39599828600001, 'y': -31.5123638571, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-18', 'x': 120.3477455, 'y': -31.5480005, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-19', 'x': 120.38209975, 'y': -31.53012325, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-20', 'x': 120.391958, 'y': -31.565640999999996, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-21', 'x': 120.31378966700001, 'y': -31.5780313333, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-22', 'x': 120.3644905, 'y': -31.549959499999996, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-23', 'x': 120.419072, 'y': -31.546068599999998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-24', 'x': 120.3618, 'y': -31.55685, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-25', 'x': 120.375006, 'y': -31.573921285700003, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-26', 'x': 120.388837667, 'y': -31.5053213333, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-27', 'x': 120.36857166700001, 'y': -31.5499526667, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-28', 'x': 120.38954, 'y': -31.5622395, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-29', 'x': 120.31836000000001, 'y': -31.563783500000003, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-30', 'x': 120.407913, 'y': -31.578898499999998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-31', 'x': 120.35847075, 'y': -31.54696525, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-32', 'x': 120.316522167, 'y': -31.5728115, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-33', 'x': 120.35390883299999, 'y': -31.5420431667, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-34', 'x': 120.349755, 'y': -31.539740000000002, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-35', 'x': 120.38153999999999, 'y': -31.5423686667, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-36', 'x': 120.39696950000001, 'y': -31.5663755, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-37', 'x': 120.3331742, 'y': -31.561073999999998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-38', 'x': 120.416142, 'y': -31.539265399999998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-39', 'x': 120.38864775, 'y': -31.55946825, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-40', 'x': 120.370426, 'y': -31.553303000000003, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-41', 'x': 120.37931, 'y': -31.564639, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-42', 'x': 120.406732429, 'y': -31.5692348571, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-43', 'x': 120.366998333, 'y': -31.552927, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-44', 'x': 120.34546741700001, 'y': -31.564188583299998, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-45', 'x': 120.3221692, 'y': -31.5765332, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-46', 'x': 120.38483166700001, 'y': -31.5544726667, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-47', 'x': 120.373208, 'y': -31.561914, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-48', 'x': 120.39175925, 'y': -31.5562045, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-49', 'x': 120.38345100000001, 'y': -31.572263, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-50', 'x': 120.367923333, 'y': -31.5196513333, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-51', 'x': 120.3263098, 'y': -31.560025800000002, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-52', 'x': 120.31691175, 'y': -31.5790485, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-53', 'x': 120.393301, 'y': -31.546390000000002, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-54', 'x': 120.37609099999999, 'y': -31.554948, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-55', 'x': 120.38211366700001, 'y': -31.568576, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-56', 'x': 120.368574, 'y': -31.55668675, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-57', 'x': 120.343497, 'y': -31.5536875, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-58', 'x': 120.36377425, 'y': -31.5658735, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'centroid-59', 'x': 120.38733500000001, 'y': -31.5675825, 'symbol': 'circle', 'itemStyle': {'color': 'red'}}, {'name': 'exist-1', 'x': 120.32784299999999, 'y': -31.57272, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-2', 'x': 120.37456100000001, 'y': -31.568543, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-3', 'x': 120.368113, 'y': -31.561332, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-4', 'x': 120.35099199999999, 'y': -31.538762, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-5', 'x': 120.382152, 'y': -31.546208, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-6', 'x': 120.40201200000001, 'y': -31.578638, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-7', 'x': 120.35026200000001, 'y': -31.552305, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-8', 'x': 120.353279, 'y': -31.547472999999997, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-9', 'x': 120.32860900000001, 'y': -31.573797999999996, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-10', 'x': 120.33711000000001, 'y': -31.567789, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-11', 'x': 120.34539699999999, 'y': -31.559317999999998, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-12', 'x': 120.38491299999998, 'y': -31.527539, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-13', 'x': 120.379033, 'y': -31.567201, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-14', 'x': 120.34591599999999, 'y': -31.570307, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-15', 'x': 120.35615200000001, 'y': -31.550614000000003, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-16', 'x': 120.34313200000001, 'y': -31.560202, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-17', 'x': 120.35189299999999, 'y': -31.538055, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-18', 'x': 120.32303, 'y': -31.561716999999998, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-19', 'x': 120.34695900000001, 'y': -31.556248999999998, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-20', 'x': 120.347447, 'y': -31.551127, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-21', 'x': 120.350148, 'y': -31.552031, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-22', 'x': 120.374955, 'y': -31.548508, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-23', 'x': 120.359344, 'y': -31.541864, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-24', 'x': 120.40173999999999, 'y': -31.578985999999997, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-25', 'x': 120.40798000000001, 'y': -31.566084000000004, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-26', 'x': 120.39086100000002, 'y': -31.557813, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-27', 'x': 120.36812900000001, 'y': -31.561443, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-28', 'x': 120.343359, 'y': -31.569390999999996, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-29', 'x': 120.345652, 'y': -31.561189000000002, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-30', 'x': 120.3865, 'y': -31.529209, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-31', 'x': 120.363, 'y': -31.537869, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-32', 'x': 120.347812, 'y': -31.551328, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-33', 'x': 120.36712, 'y': -31.548964, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-34', 'x': 120.388981, 'y': -31.558117, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-35', 'x': 120.35114399999999, 'y': -31.536863, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-36', 'x': 120.355833, 'y': -31.546187, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-37', 'x': 120.363634, 'y': -31.559757, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-38', 'x': 120.375968, 'y': -31.559208, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-39', 'x': 120.340599, 'y': -31.562626, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'exist-40', 'x': 120.326525, 'y': -31.573044, 'symbol': 'rect', 'itemStyle': {'color': 'black'}}, {'name': 'recommend-1', 'x': 120.3360648, 'y': -31.57028201, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-2', 'x': 120.37326909999999, 'y': -31.54285702, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-3', 'x': 120.3553284, 'y': -31.56422912, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-4', 'x': 120.3510514, 'y': -31.55586858, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-5', 'x': 120.37560959999999, 'y': -31.54697652, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-6', 'x': 120.37299990000001, 'y': -31.54736644, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-7', 'x': 120.37073090000001, 'y': -31.56695167, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-8', 'x': 120.40297240000001, 'y': -31.56546721, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-9', 'x': 120.3690244, 'y': -31.54568567, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-10', 'x': 120.35663729999999, 'y': -31.54969891, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-11', 'x': 120.40489609999999, 'y': -31.58088461, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-12', 'x': 120.32827490000001, 'y': -31.57609507, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-13', 'x': 120.4112585, 'y': -31.51287659, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-14', 'x': 120.3927709, 'y': -31.56258185, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-15', 'x': 120.3703231, 'y': -31.55411626, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-16', 'x': 120.32288090000002, 'y': -31.56984232, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-17', 'x': 120.39515520000002, 'y': -31.51158763, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-18', 'x': 120.347128, 'y': -31.54811044, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-19', 'x': 120.3822499, 'y': -31.53006257, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-20', 'x': 120.3931432, 'y': -31.56636689, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-21', 'x': 120.31344879999999, 'y': -31.57847938, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-22', 'x': 120.36484180000001, 'y': -31.5488858, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-23', 'x': 120.41937040000002, 'y': -31.54625755, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-24', 'x': 120.3617304, 'y': -31.556512100000003, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-25', 'x': 120.3740795, 'y': -31.57416631, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-26', 'x': 120.38930549999999, 'y': -31.50491187, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-27', 'x': 120.36864979999999, 'y': -31.55097758, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-28', 'x': 120.390107, 'y': -31.56259131, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-29', 'x': 120.31769129999999, 'y': -31.56299851, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-30', 'x': 120.40795049999998, 'y': -31.57962454, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-31', 'x': 120.3586791, 'y': -31.5467892, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-32', 'x': 120.31577340000001, 'y': -31.57260204, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-33', 'x': 120.35459109999998, 'y': -31.54205638, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-34', 'x': 120.34988799999999, 'y': -31.53965372, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-35', 'x': 120.38096599999999, 'y': -31.54154739, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-36', 'x': 120.3960732, 'y': -31.56713526, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-37', 'x': 120.3317038, 'y': -31.561051799999998, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-38', 'x': 120.41583179999999, 'y': -31.53904531, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-39', 'x': 120.387957, 'y': -31.55977485, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-40', 'x': 120.37033909999998, 'y': -31.55477796, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-41', 'x': 120.379502, 'y': -31.56463653, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-42', 'x': 120.4062983, 'y': -31.56925465, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-43', 'x': 120.3666095, 'y': -31.55356543, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-44', 'x': 120.34538219999999, 'y': -31.56404274, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-45', 'x': 120.3219334, 'y': -31.57701419, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-46', 'x': 120.38493970000002, 'y': -31.55489011, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-47', 'x': 120.3734513, 'y': -31.56231559, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-48', 'x': 120.39356000000001, 'y': -31.55603526, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-49', 'x': 120.3828313, 'y': -31.57209305, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-50', 'x': 120.36828159999999, 'y': -31.51942562, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-51', 'x': 120.3251203, 'y': -31.56083148, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-52', 'x': 120.3158287, 'y': -31.57968774, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-53', 'x': 120.3926926, 'y': -31.54589634, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-54', 'x': 120.37620840000001, 'y': -31.554917200000002, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-55', 'x': 120.38230990000001, 'y': -31.56912969, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-56', 'x': 120.3686566, 'y': -31.55729372, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-57', 'x': 120.3429607, 'y': -31.55356754, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-58', 'x': 120.3636645, 'y': -31.5665165, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}, {'name': 'recommend-59', 'x': 120.38804679999998, 'y': -31.5678738, 'symbol': 'triangle', 'itemStyle': {'color': 'blue'}}],
        links: [{'source': 'recommend-1', 'target': 'exist-10'}, {'source': 'recommend-4', 'target': 'exist-7'}, {'source': 'recommend-4', 'target': 'exist-21'}, {'source': 'recommend-5', 'target': 'exist-22'}, {'source': 'recommend-6', 'target': 'exist-22'}, {'source': 'recommend-9', 'target': 'exist-33'}, {'source': 'recommend-10', 'target': 'exist-15'}, {'source': 'recommend-10', 'target': 'exist-36'}, {'source': 'recommend-11', 'target': 'exist-6'}, {'source': 'recommend-11', 'target': 'exist-24'}, {'source': 'recommend-12', 'target': 'exist-1'}, {'source': 'recommend-12', 'target': 'exist-9'}, {'source': 'recommend-12', 'target': 'exist-40'}, {'source': 'recommend-18', 'target': 'exist-20'}, {'source': 'recommend-18', 'target': 'exist-32'}, {'source': 'recommend-19', 'target': 'exist-12'}, {'source': 'recommend-22', 'target': 'exist-33'}, {'source': 'recommend-24', 'target': 'exist-37'}, {'source': 'recommend-27', 'target': 'exist-33'}, {'source': 'recommend-31', 'target': 'exist-36'}, {'source': 'recommend-34', 'target': 'exist-4'}, {'source': 'recommend-34', 'target': 'exist-17'}, {'source': 'recommend-34', 'target': 'exist-35'}, {'source': 'recommend-39', 'target': 'exist-26'}, {'source': 'recommend-39', 'target': 'exist-34'}, {'source': 'recommend-41', 'target': 'exist-13'}, {'source': 'recommend-42', 'target': 'exist-25'}, {'source': 'recommend-44', 'target': 'exist-29'}, {'source': 'recommend-47', 'target': 'exist-38'}, {'source': 'recommend-48', 'target': 'exist-26'}, {'source': 'recommend-51', 'target': 'exist-18'}, {'source': 'recommend-55', 'target': 'exist-13'}],
        symbolSize: 4,
        lineStyle: {
          color: 'green',
          width: 2,
          curveness: 0.0001
        }
      }, {
        name: 'Exist Facilities',
        type: 'graph',
      }, {
          name: 'Recommend Results',
          type: 'graph',
      }
    ]
  };
  return option;
}