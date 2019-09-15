import { Command } from 'discord-harmony'
import ScrimBot from '../scrimbot'

export class CancelCommand extends Command {
  execute() {
    if(!this.validateArgs()) {
      return
    }
    var scrim = ScrimBot.scrimManager.objects.getById(Number(this.args[0]))
    if(scrim === undefined) {
      this.message.reply('Invalid scrim ID')
    } else if (scrim.author != this.message.author ) {
      this.message.author.sendMessage("You can only cancel your own scrims")
    } else {
      scrim.delete()
      scrim.author.sendMessage('Scrim successfully cancelled!')
    }
  }

  validateArgs() {
    var error: string
    if(this.args.length < 1) {
      error = 'Not enough arguments'
    }
    let id = Number(this.args[0])
    if(!Number.isSafeInteger(id)) {
      error = `Submission is not a number: ${id}`
    }

    if(error) {
      this.message.reply(error)
      return false
    }
    return true
  }
}
