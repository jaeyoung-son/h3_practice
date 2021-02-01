import axios from 'axios';
import { FREEGEO_URL, IP_ADDRESS } from '../../config/config';

export const getLocation = () => axios.get(`${FREEGEO_URL}${IP_ADDRESS}`);
