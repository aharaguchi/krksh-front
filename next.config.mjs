/** @type {import('next').NextConfig} */

export default {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            oneOf: [
                {
                    resourceQuery: /url/,
                    type: 'asset/resource',
                },
                {
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                svgo: true
                            }
                        }
                    ]
                }
            ]
        });

        return config;
    }
};
