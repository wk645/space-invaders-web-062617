class Spaceship {

	constructor(name, crew, phasers, shields) {

		this.name = name
		this.phasers = phasers
		this.crew = crew
		this.crew.forEach((member) => {member.currentShip = this})
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.phasersCharge = 'uncharged'
		this.docked = (this.crew.length > 0 ? false : true)
		
	}
}