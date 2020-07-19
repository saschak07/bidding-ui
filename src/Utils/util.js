export const findByAttribute = (component, attr) => {
    const wrapper = component.find(`[data-testid='${attr}']`);
    return wrapper;
}