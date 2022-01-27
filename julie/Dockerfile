FROM fusuf/whatsasena:latest

RUN git clone https://github.com/I-AM-MUHAMMED/Taurus-x /root/WhatsAsenaDuplicated
RUN mv /root/bottus/* /root/whatsAsena/
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/I-AM-MUHAMMED/media

CMD ["node", "bot.js"]
