import {NetworkStatus} from './network-status.js';
import {BarIndicator} from './bar-indicator.js';
import {DotIndicator} from './dot-indicator.js';

const status = new NetworkStatus();

const dot = new DotIndicator();
const bar = new BarIndicator();

status.addSubscriber(dot.update.bind(dot));
status.addSubscriber(bar.update.bind(bar));