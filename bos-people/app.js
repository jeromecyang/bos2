'use es6';

const groups = [{
  "name": "Cape Verdean",
  "name_zh": "維德角",
  "category": "Portuguese",
  "boston_pop": 48264,
  "us_pop": 112571,
  "boston_to_us": 0.428742749,
  "prominence": 31.38850079
}, {
  "name": "Ugandan",
  "name_zh": "烏干達",
  "category": "British",
  "boston_pop": 2942,
  "us_pop": 16891,
  "boston_to_us": 0.1741755965,
  "prominence": 12.75149459
}, {
  "name": "Brazilian",
  "name_zh": "巴西",
  "category": "Portuguese",
  "boston_pop": 58569,
  "us_pop": 398084,
  "boston_to_us": 0.1471272395,
  "prominence": 10.77126898
}, {
  "name": "Cambodian",
  "name_zh": "柬埔寨",
  "category": "French",
  "boston_pop": 25443,
  "us_pop": 265576,
  "boston_to_us": 0.09580308462,
  "prominence": 7.013798376
}, {
  "name": "Portuguese",
  "name_zh": "葡萄牙",
  "category": "Portuguese",
  "boston_pop": 111872,
  "us_pop": 1363703,
  "boston_to_us": 0.08203545787,
  "prominence": 6.005862582
}, {
  "name": "Barbadian",
  "name_zh": "巴貝多",
  "category": "British",
  "boston_pop": 4940,
  "us_pop": 66062,
  "boston_to_us": 0.07477823862,
  "prominence": 5.474557429
}, {
  "name": "Haitian",
  "name_zh": "海地",
  "category": "French",
  "boston_pop": 73407,
  "us_pop": 1002251,
  "boston_to_us": 0.07324213196,
  "prominence": 5.362098186
}, {
  "name": "Dominican",
  "name_zh": "多明尼加共和國",
  "category": "Spanish",
  "boston_pop": 128766,
  "us_pop": 1879477,
  "boston_to_us": 0.06851161254,
  "prominence": 5.015774165
}, {
  "name": "Moroccan",
  "name_zh": "摩洛哥",
  "category": "French",
  "boston_pop": 6989,
  "us_pop": 108406,
  "boston_to_us": 0.06447060126,
  "prominence": 4.719929428
}, {
  "name": "Albanian",
  "name_zh": "阿爾巴尼亞",
  "category": "Other",
  "boston_pop": 12035,
  "us_pop": 191263,
  "boston_to_us": 0.0629238274,
  "prominence": 4.606689233
}, {
  "name": "French Canadian",
  "name_zh": "加拿大法語區",
  "category": "French",
  "boston_pop": 132710,
  "us_pop": 2109242,
  "boston_to_us": 0.06291833749,
  "prominence": 4.606287314
}, {
  "name": "Kenyan",
  "name_zh": "肯亞",
  "category": "British",
  "boston_pop": 3754,
  "us_pop": 71962,
  "boston_to_us": 0.05216642117,
  "prominence": 3.819133398
}, {
  "name": "Armenian",
  "name_zh": "亞美尼亞",
  "category": "Russian",
  "boston_pop": 23383,
  "us_pop": 465319,
  "boston_to_us": 0.05025154786,
  "prominence": 3.678944433
}, {
  "name": "Greek",
  "name_zh": "希臘",
  "category": "Other",
  "boston_pop": 61606,
  "us_pop": 1272806,
  "boston_to_us": 0.04840172029,
  "prominence": 3.543517503
}, {
  "name": "Canadian",
  "name_zh": "加拿大",
  "category": "British",
  "boston_pop": 31355,
  "us_pop": 671406,
  "boston_to_us": 0.0467005061,
  "prominence": 3.418970643
}, {
  "name": "Lithuanian",
  "name_zh": "立陶宛",
  "category": "Russian",
  "boston_pop": 27349,
  "us_pop": 638018,
  "boston_to_us": 0.04286556179,
  "prominence": 3.138212186
}, {
  "name": "Lebanese",
  "name_zh": "黎巴嫩",
  "category": "French",
  "boston_pop": 21079,
  "us_pop": 494907,
  "boston_to_us": 0.04259184049,
  "prominence": 3.118172894
}];

const colors = {
  Portuguese: '#F06292',
  French: '#64B5F6',
  Spanish: '#81C784',
  British: '#FFB74D',
  Russian: '#BA68C8',
  Other: 'gray'
};

class Group extends React.Component {
  render() {
    const { name, boston_to_us, boston_pop, us_pop, category, name_zh } = this.props.group;
    return (
      <div class="group">
        <div class="title"><span>{name_zh}</span>{name}</div>
        <div class="detail">
          <div class="first">{boston_pop.toLocaleString()}</div>
          <div class="second">{us_pop.toLocaleString()}</div>
        </div>
        <div class="bar" style={{ width: 1000*boston_to_us + 'px', 'background-color': colors[category] }}></div>
        <div class="percent" style={{ color: colors[category] }}>{Math.round(10000*boston_to_us)/100 + '%'}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <div class="main">
    <div class="top">Ethnicities/Ancestries that Gravitate toward Greater Boston<span>明顯集中於波士頓都會區的族群/祖裔</span></div>
    <div style={{ 'display': 'flex', 'margin-bottom': '8px', color: '#aaa' }}>
      <div class="title"><span>族群/祖裔</span>Ethnicity/Ancestry</div>
      <div class="detail">
        <div class="first">Boston</div>
        <div class="second">US Pop.</div>
      </div>
      <div style={{ 'font-size': '16px', 'font-family': '\'Roboto\', sans-serif' }}>
        <div>% of this ethnicity/ancestry's US population live in Boston</div>
        <div style={{ 'font-size': '12px' }}>該族群/祖裔的美國人口中，居住於波士頓的百分比</div>
      </div>
    </div>
    {groups.map(group => <Group group={group} />)}
    <div class="legend">
      <div style={{ 'font-size': '18px', 'text-align': 'right', color: '#aaa' }}>Former Colonial Empires</div>
      <div style={{ 'font-size': '12px', 'text-align': 'right', 'margin-bottom': '8px', color: '#aaa' }}>原殖民帝國</div>
      <div class="title"><span>葡萄牙</span>Portugal<div class="square" style={{ 'background-color': colors['Portuguese'] }}></div></div>
      <div class="title"><span>法國</span>France<div class="square" style={{ 'background-color': colors['French'] }}></div></div>
      <div class="title"><span>西班牙</span>Spain<div class="square" style={{ 'background-color': colors['Spanish'] }}></div></div>
      <div class="title"><span>英國</span>Britain<div class="square" style={{ 'background-color': colors['British'] }}></div></div>
      <div class="title"><span>俄羅斯</span>Russia<div class="square" style={{ 'background-color': colors['Russian'] }}></div></div>
      <div class="title"><span>其他</span>Other<div class="square" style={{ 'background-color': colors['Other'] }}></div></div>
    </div>
  </div>,
  document.getElementById('app')
);
