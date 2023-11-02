initState({
    img: null,
  });
  
  return (
    <div className="container row">
      <div>
        Image upload: <br />
        <IpfsImageUpload image={state.img} />
      </div>
      <div>
        Raw State:
        <pre>{JSON.stringify(state)}</pre>
      </div>
      <div className="mt-2">
        {state.img.cid && (
          <a href={`https://ipfs.near.social/ipfs/${state.img.cid}`}>{state.img.cid}</a>
        )}
      </div>
    </div>
  );
  