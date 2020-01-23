const calcFukaku = function(distance, height) {
    //直線距離
    var r = Math.sqrt(distance ** 2 + height ** 2);
    var sinTheta = height / r;
    //俯角
    var theta = Math.asin(sinTheta);
    theta = theta * (180 / Math.PI);
    //小数点第二位までにする(四捨五入)
    r = Math.round(r * 100) / 100;
    theta = Math.round(theta * 100) / 100;

    return {length: r, angle: theta};
}

export default({}, inject) => {
    inject('calcFukaku', calcFukaku);
}
