import { AbilityLocalization, LocalizationData, ModifierLocalization, StandardLocalization } from "~generator/localizationInterfaces";
import { Language } from "../languages";

export function GenerateLocalizationData(): LocalizationData
{
	// This section can be safely ignored, as it is only logic.
	//#region Localization logic
	// Arrays
	const Abilities: Array<AbilityLocalization> = new Array<AbilityLocalization>();
	const Modifiers: Array<ModifierLocalization> = new Array<ModifierLocalization>();
	const StandardTooltips: Array<StandardLocalization> = new Array<StandardLocalization>();

	// Create object of arrays
	const localization_info: LocalizationData =
	{
		AbilityArray: Abilities,
		ModifierArray: Modifiers,
		StandardArray: StandardTooltips,
	};
	//#endregion

	// Enter localization data below!
	StandardTooltips.push({
		classname: "basic_fire_name",
		name: "Fireball"
	});
	StandardTooltips.push({
		classname: "basic_fire_description",
		name: "Fires a linear fireball that deals splash damage to the first unit hit."
	});

	StandardTooltips.push({
		classname: "basic_ice_name",
		name: "Ice Shards"
	});
	StandardTooltips.push({
		classname: "basic_ice_description",
		name: "Rapidly fires linear ice projectile that deal single target damage."
	});

	StandardTooltips.push({
		classname: "basic_electricity_name",
		name: "Spark"
	});
	StandardTooltips.push({
		classname: "basic_electricity_description",
		name: "Unleashes a powerful single target electric arc after a short preperation period."
	});

	StandardTooltips.push({
		classname: "basic_chaos_name",
		name: "Dark Laser"
	});
	StandardTooltips.push({
		classname: "basic_chaos_description",
		name: "Fires a constant laser that deals damage to all touching units."
	});

	StandardTooltips.push({
		classname: "basic_order_name",
		name: "Light Shards"
	});
	StandardTooltips.push({
		classname: "basic_order_description",
		name: "Fires multiple homing shards imbued with light energy."
	});

	StandardTooltips.push({
		classname: "basic_wind_name",
		name: "Wind Blast"
	});
	StandardTooltips.push({
		classname: "basic_wind_description",
		name: "Releases a blast of wind, that pushes nearby enemies away and deals minor damage."
	});

	StandardTooltips.push({
		classname: "basic_water_name",
		name: "Water Ball"
	});
	StandardTooltips.push({
		classname: "basic_water_description",
		name: "Fires a slow orb of water, that passes through all enemies and deals damage to them."
	});

	// Return data to compiler
	return localization_info;
}
