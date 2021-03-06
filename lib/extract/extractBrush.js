import Color from 'color';
import patternReg from './patternReg';

export default function (colorOrBrush) {
    if (colorOrBrush === 'none' || !colorOrBrush) {
        return null;
    }

    try {
        let matched = colorOrBrush.match(patternReg);
        // brush
        if (matched) {
            return [1, matched[1]];
            //todo:
        } else { // solid color
            let c = Color(colorOrBrush).rgb().array();
            return [0, c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
        }
    } catch (err) {
        console.warn(`"${colorOrBrush}" is not a valid color or brush`);
        return null;
    }
}
