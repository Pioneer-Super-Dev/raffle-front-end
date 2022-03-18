import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

import {
  InputGroup,
  FormControl,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Spinner,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import koala_gif from "./../../assets/img/logo 03.png";
// For Live Server(ethereum) :  1
// For Test(rinkeby)         : 4
const Allowed_NETWORK_ID = "4";
const AlchemyWeb3URL =
  "https://eth-rinkeby.alchemyapi.io/v2/gdOvJjVNmQ6fAqIZ46sy7uTYW-Is7-Kl";

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);

  useEffect(() => {
    // getTotalSupply();
  });

  const [address, setAddress] = useState(null);
  const [mintPrice, setMintPrice] = useState(100000000000000000);
  const [mintedCount, setMintedCount] = useState(0);
  const [mintCount, setMintCount] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [hash, setHash] = useState("");

  // const connectWallet = async () => {
  //   const [userAddress] = await window.ethereum.enable();
  //   setAddress(userAddress);
  // };

  const walletConnect = (e) => {
    e.preventDefault();
    dispatch(connect());
    // getData();
  };

  const getData = () => {
    dispatch(fetchData(blockchain.account));
  };

  // const getTotalSupply = async () => {
  //   const web3 = createAlchemyWeb3(AlchemyWeb3URL);
  //   const token = new web3.eth.Contract(
  //     TokenArtifact.abi,
  //     contractAddress.Token
  //   );
  //   const totalSupply = await token.methods.totalSupply().call();
  //   setMintedCount(totalSupply);
  // };

  // const mint = async () => {
  //   setLoading(true);
  //   if (!checkNetwork()) {
  //     setLoading(false);
  //     return;
  //   }
  //   const web3 = createAlchemyWeb3(AlchemyWeb3URL);

  //   const token = new web3.eth.Contract(
  //     TokenArtifact.abi,
  //     contractAddress.Token
  //   );

  //   token.methods
  //     .mint(address, mintCount)
  //     .send({
  //       gasLimit: 285000 * mintCount,
  //       to: contractAddress.Token, // the address of your contract
  //       from: address,
  //       value: mintPrice * mintCount,
  //       // "value": 100000000 * mintCount,
  //     })
  //     .once("error", (err) => {
  //       setLoading(false);
  //       console.log(
  //         err,
  //         "EEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR"
  //       );
  //     })
  //     .then(async (receipt) => {
  //       setLoading(false);
  //       // const event = receipt.events;
  //       toast.success("Mint Success!", {
  //         position: "top-right",
  //         autoClose: 4000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });

  //       getTotalSupply();
  //     }); // Minting the token
  // };

  // This method checks if Metamask selected network is Localhost:8545
  // const checkNetwork = () => {
  //   if (window.ethereum.networkVersion === Allowed_NETWORK_ID) {
  //     return true;
  //   }
  //   toast.error("Please connect Metamask to RinkeBy!", {
  //     position: "top-right",
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  //   return false;
  // };

  const connectWalletBtn = (
    <button
      onClick={walletConnect}
      className="btn portofolio_connect_btn mt-3"
      data-bss-hover-animate="bounce"
      type="button"
      style={{
        borderRadius: "5px",
        width: "195.234px",
        height: "70px",
        backgroundColor: "#0ea0ff",
        borderBottom: "5px solid #0d6efd",
        fontWeight: "bold",
        color: "white",
        fontSize: "18px",
      }}
    >
      Connect Wallet
    </button>
  );

  const mint = (e) => {
    e.preventDefault();

    if (hash == "") {
      toast.error("Input Hash", { theme: "colored" });
      return;
    }

    const _amount = 1;
    setClaimingNft(true);

    blockchain.smartContract.methods
      .mintNewToken(mintCount, hash)
      // ********
      // You can change the line above to
      // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
      // users to be able to mint through your website!
      // And after you're done with whitelisted users buying from your website,
      // You can switch it back to .mint(blockchain.account, _amount).
      // ********
      .send({
        gasLimit: 285000,
        to: "0x2529ce9e2e17D68744D3245071F8D2e1aF145666", // the address of your contract
        from: blockchain.account,
      })
      .once("error", (err) => {
        console.log(err);
        toast.error(
          "Sorry, something went wrong. Check your transaction on Bscscan to find out what happened!",
          { theme: "colored" }
        );
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        toast.success("NFT has been successfully minted!", {
          theme: "colored",
        });
        setClaimingNft(false);
        // dispatch(fetchData(blockchain.account));
      });
  };

  const mintNFTBtn = (
    <div>
      <p style={{ color: "white" }}>Connected Address: {blockchain.account}</p>
      <button
        onClick={mint}
        className="btn btn-primary portofolio_mint_btn mt-1"
        data-bss-hover-animate="bounce"
        disabled={isLoading}
        type="button"
        style={{
          borderRadius: "5px",
          background: "#0ea0ff !important",
          borderBottom: "#0d6efd solid 5px",
          fontWeight: "bold",
          height: "70px",
          fontSize: "18px",
        }}
      >
        {claimingNft ? (
          <span>
            Minting...
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </span>
        ) : (
          "Mint NFT"
        )}
      </button>
    </div>
  );

  const onHashChange = (e) => {
    setHash(e.target.value);
  };

  return (
    <section className="portfolio-block block-intro portfolio-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white" style={{ textAlign: "center" }}>
            <img
              data-bss-hover-animate="pulse"
              className="portofolio_img rounded-circle"
              src={koala_gif}
              style={{ maxWidth: "800px", width: "80%" }}
              alt=""
            />

            <div className=" mint-control mt-3">
              {/* <p className="minted-number">
                Left NFTs <span>{9999 - mintedCount}/9999</span>
              </p>
              <p className="mint-price mt-1">
                {mintPrice / Math.pow(10, 18)} ETH + Gas Fee
              </p> */}
              <FormControl
                value={hash}
                onChange={onHashChange}
                placeholder="Input Pinata Hash please"
                className="me-2 mb-5 rounded-0 border-primary mint-counter-input"
              />
              <ButtonToolbar
                className="mb-2 text-center justify-content-center"
                aria-label="Toolbar with Button groups"
              >
                <InputGroup className="me-2 mt-1">
                  <InputGroup.Text
                    id="btnGroupAddon"
                    onClick={() => setMintCount(Math.max(1, mintCount - 1))}
                    className="mint-counter-minus rounded-0 border-primary"
                  >
                    -
                  </InputGroup.Text>
                  <FormControl
                    type="number"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                    value={mintCount}
                    onChange={(e) => {
                      if (e.target.value > 100000) {
                        setMintCount(100000);
                      } else if (e.target.value < 1) {
                        setMintCount(1);
                      } else {
                        setMintCount(e.target.value);
                      }
                    }}
                    min={1}
                    max={100000}
                    className="rounded-0 border-primary mint-counter-input"
                  />
                  <InputGroup.Text
                    id="btnGroupAddon"
                    onClick={() =>
                      setMintCount(Math.min(100000, mintCount + 1))
                    }
                    className="mint-counter-plus rounded-0 border-primary"
                  >
                    +
                  </InputGroup.Text>
                </InputGroup>
                <ButtonGroup
                  className="me-2 mt-1 gap-2 btn-counter-group"
                  aria-label="First group"
                >
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(1)}
                  >
                    1
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(10)}
                  >
                    10
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(100)}
                  >
                    100
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(1000)}
                  >
                    1000
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(10000)}
                  >
                    10000
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="border-primary rounded-0"
                    onClick={() => setMintCount(100000)}
                  >
                    100000
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
              {blockchain.account == null ? connectWalletBtn : mintNFTBtn}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Mint;
