import English from "../constants/locales/en.json";

export function skillLevelPipe(level) {
    return English.skillLevel[level] ?? level;
}
