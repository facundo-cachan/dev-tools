const demo = `width: Hug (320px)px;
height: Hug (364px)px;
gap: 24px;
opacity: 0px;
`;
const figmaToCss = (name: string, text: string) => `.${name}{${Object.entries(text.split(";").reduce((acc: any, curr: string) => {
  const l = curr.split(" ").map((i) => i.trim());
  const i = l.filter((i) => i !== 'Fill' && i !== 'Hug' && i !== 'px');
  const n = i.map((i) => i.replace(/\(/g, '').replace(/\)/g, '').replace('pxpx', 'px'));
  if (n[0] != '') {
    acc[n[0]] = n[1];
    return acc;
  }
  return acc;
}, {})).map(([k, v]) => `${k}${v}`).join(';')}}`;

console.log(figmaToCss('frame1', demo))