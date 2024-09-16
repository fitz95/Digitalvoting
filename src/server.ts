import express from 'express';
import { getPayloadClient } from './get-payload';
import { init } from 'next/dist/compiled/webpack/webpack';
import { nextHandler, nextApp } from './next-utils';
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc';

const app = express();
const PORT = Number(process.env.port) || 3000;

const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
})

const start = async () => {
    try {
      const payload = await getPayloadClient({
        initOptions: {
          express: app,
          onInit: async (cms) => {
            if (cms?.logger) {
              cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
            } else {
              console.log('CMS logger not available');
            }
          },
        },
      });

      app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
      }))
  
      app.use((req, res) => nextHandler(req, res));
  
      await nextApp.prepare();
      if (payload?.logger) {
        payload.logger.info('Next.js started');
      } else {
        console.log('Payload logger not available');
      }
  
      app.listen(PORT, async () => {
        if (payload?.logger) {
          payload.logger.info(
            `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
          );
        } else {
          console.log('Logger not available for Next.js App URL');
        }
      });
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  };
  
  start();
  