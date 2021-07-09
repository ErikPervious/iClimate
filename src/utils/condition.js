export function condition(condition) {
    switch(condition) {
        case 'storm':
            return icon = {
                name: 'rainy-outline',
                color: '#1EC9FF'
            };
            break;
        case 'clear-day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#FFB300'
            };
            break;
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#1EC9FF'
            };
            break;
        default:
            return icon = {
                name: 'cloud-outline',
                color: '#1EC9FF'
            }
    }
}