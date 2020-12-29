//Function to create the aplha value on javascript style values, as rgba per se, does not get recognized.
HTMLElement.prototype.alpha = function(a) {
    current_color = getComputedStyle(this).getPropertyValue("background-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color)
    a = a > 1 ? (a / 100) : a;
    this.style.backgroundColor = "rgba(" + [match[1],match[2],match[3],a].join(',') +")";
  }