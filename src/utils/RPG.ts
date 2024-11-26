import characters from '../../json/RPG/characters.json';
import economy from '../../json/RPG/economy.json';
import wilderness from '../../json/RPG/wilderness.json';

const RPG = {
    // JSON
    characters,
    economy,
    wilderness,

    // Get methods
    async getBiomeNames() {
        const biomeItems = Object.values(wilderness);
        const biomeDescriptions: string[] = []
        biomeItems.forEach(
            ({ subcategories }) =>
                subcategories.forEach(({ name }) =>
                    biomeDescriptions.push(name))
        );
        return biomeDescriptions;
    },
    async getItemNames() {
        const shopItems = Object.values(economy.shop);
        const itemDescriptions: string[] = []
        shopItems.forEach(category =>
            category.forEach(
                ({ name, price }) =>
                    itemDescriptions.push(`${name} (${price})`)
            )
        );
        return itemDescriptions;
    },
    async getCharacterNames() {
        return characters.map(
            ({ name, class: className }) => `${name} (${className})`
        );
    },
    async getPetNames() {
        return economy.shop.Pets.map(({ name, price }) => `${name} (${price})`);
    },
    async getWeaponNames() {
        return economy.shop.Weapons.map(({ name, price }) => `${name} (${price})`);
    }
}

export default RPG;