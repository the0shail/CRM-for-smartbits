import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faHatWizard, 
    faRightFromBracket, 
    faUserGroup,
    faUserLarge
} from '@fortawesome/free-solid-svg-icons'


const NeededIcons: Array<any> = [
    faHatWizard,
    faUserGroup,
    faUserLarge,
    faRightFromBracket
]

const Library: void = library.add(...NeededIcons)

export default Library


