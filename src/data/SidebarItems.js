import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesRounded';
import InboxOutlinedIcon from '@material-ui/icons/InboxRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';

export const SidebarItems = [
    {
        text: 'Thread',
        icon: <SpeakerNotesOutlinedIcon fontSize="small" />
    },
    {
        text: 'All DM\'s',
        icon: <InboxOutlinedIcon fontSize="small" />
    },
    {
        text: 'Mentions & reactions',
        icon: <AlternateEmailRoundedIcon fontSize="small" />
    },
    {
        text: 'People & groups',
        icon: <PeopleAltOutlinedIcon fontSize="small" />
    },
    {
        text: 'More',
        icon: <MoreVertOutlinedIcon fontSize="small" />
    },
]