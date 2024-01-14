<script lang="ts">
    import { myString } from "./stores";

    let converted = "";
    let base = 2;
    let addSpace = true;
    let addPrefix = true;
    const getPrefix = () => {
        switch (base) {
            case 2:
                return "0b";
            case 8:
                return "0o";
            case 10:
                return "";
            case 16:
                return "0x";
        }
    };
    const convert = (toConvert: string) => {
        let newValue = "";
        const padding = base === 2 ? 8 : base === 8 ? 3 : base === 10 ? 3 : 2;
        const prefix = addPrefix ? getPrefix() : "";
        const spacing = addSpace ? " " : "";
        for (var i = 0; i < toConvert.length; i++) {
            const codePoint = toConvert[i].codePointAt(0);
            if (codePoint) {
                let tempNum = codePoint;
                // TODO loop through codePoint and convert to base
                if (codePoint < 128) {
                    newValue += prefix + codePoint.toString(base).padStart(padding, "0");
                } else if (codePoint < 2048) {
                    const code = codePoint.toString(base).padStart(padding * 2, "0");
                    const byte1 = code.substring(0, 8);
                    const byte2 = code.substring(8, 16);
                    newValue += `${prefix}${byte1}${spacing}${prefix}${byte2}`;
                } else if (codePoint < 2048) {
                } else {
                    const code = codePoint.toString(base).padStart(padding * 4, "0");
                    const byte1 = code.substring(0, 8);
                    const byte2 = code.substring(8, 16);
                    const byte3 = code.substring(16, 24);
                    const byte4 = code.substring(24, 32);
                    newValue += `${byte1}${spacing}${byte2}${spacing}${byte3}${spacing}${byte4}`;
                }
            }
            newValue += `${spacing}`;
        }
        converted = newValue;
    };

    myString.subscribe((currentStr) => {
        convert(currentStr);
    });
</script>

<textarea bind:value={converted} />

<br />

<select
    bind:value={base}
    on:change={() => {
        convert($myString);
    }}
>
    <option value={2}>Binary</option>
    <option value={8}>Octal</option>
    <option value={10}>Decimal</option>
    <option value={16}>Hexadecimal</option>
</select>

<label for="addSpace">Add space</label>
<input
    type="checkbox"
    bind:checked={addSpace}
    on:change={() => {
        convert($myString);
    }}
/>
<label for="addPrefix">Prefix</label>
<input
    type="checkbox"
    bind:checked={addPrefix}
    on:change={() => {
        convert($myString);
    }}
/>
